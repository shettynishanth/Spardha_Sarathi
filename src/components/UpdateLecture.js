  import React, { useState, useEffect } from "react";
  import { storage, db } from "../firebase";
  import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
  import { collection, addDoc, getDocs, deleteDoc, doc, updateDoc } from "firebase/firestore";
  import { FaTrash, FaEdit, FaSave } from "react-icons/fa";
  import { useDropzone } from "react-dropzone";
  // import { useDropzone } from 'react-dropzone';


  const UpdateLecture = () => {
    const [image, setImage] = useState(null);
    const [name, setName] = useState("");
    const [role, setRole] = useState("");
    const [qualification, setQualification] = useState("");
    const [experience, setExperience] = useState("");
    const [lectures, setLectures] = useState([]);
    const [uploading, setUploading] = useState(false);
    const [editingId, setEditingId] = useState(null);
    const [searchQuery, setSearchQuery] = useState("");

    useEffect(() => {
      const fetchLectures = async () => {
        const lectureSnapshot = await getDocs(collection(db, "lectures"));
        const lectureList = lectureSnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
        setLectures(lectureList);
      };
      fetchLectures();
    }, []);

    const handleUpload = async () => {
      if (!image || !name || !role || !qualification || !experience) {
        alert("Please fill in all fields");
        return;
      }

      try {
        setUploading(true);
        const imageRef = ref(storage, `lectureImages/${image.name}`);
        await uploadBytes(imageRef, image);
        const imageUrl = await getDownloadURL(imageRef);
        const docRef = await addDoc(collection(db, "lectures"), { name, role, qualification, experience, imageUrl });
        setLectures([...lectures, { id: docRef.id, name, role, qualification, experience, imageUrl }]);
        setImage(null);
        setName("");
        setRole("");
        setQualification("");
        setExperience("");
      } catch (error) {
        alert("Failed to upload lecture");
      } finally {
        setUploading(false);
      }
    };

    const handleRemove = async (id) => {
      await deleteDoc(doc(db, "lectures", id));
      setLectures(lectures.filter((lecture) => lecture.id !== id));
    };

    const handleEdit = (lecture) => {
      setEditingId(lecture.id);
      setName(lecture.name);
      setRole(lecture.role);
      setQualification(lecture.qualification);
      setExperience(lecture.experience);
    };

    const handleUpdate = async (id) => {
      await updateDoc(doc(db, "lectures", id), { name, role, qualification, experience });
      setLectures(lectures.map((lecture) => (lecture.id === id ? { id, name, role, qualification, experience } : lecture)));
      setEditingId(null);
    };

    const { getRootProps, getInputProps } = useDropzone({
      accept: "image/*",
      onDrop: (acceptedFiles) => setImage(acceptedFiles[0]),
    });

    return (
      <div className="p-8 max-w-4xl mx-auto bg-gray-100 rounded-xl shadow-lg space-y-6">
        <h1 className="text-3xl font-semibold text-center text-gray-800">Manage Lectures</h1>
        <div {...getRootProps()} className="border-2 border-dashed p-6 rounded-lg cursor-pointer bg-white text-center">
          <input {...getInputProps()} />
          <p>Drag & Drop an image or click to select</p>
        </div>
        <input type="text" placeholder="Search Lectures" className="w-full p-2 border rounded" value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} />
        <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} className="w-full p-2 border rounded" />
        <input type="text" placeholder="Role" value={role} onChange={(e) => setRole(e.target.value)} className="w-full p-2 border rounded" />
        <input type="text" placeholder="Qualification" value={qualification} onChange={(e) => setQualification(e.target.value)} className="w-full p-2 border rounded" />
        <input type="text" placeholder="Experience" value={experience} onChange={(e) => setExperience(e.target.value)} className="w-full p-2 border rounded" />
        {editingId ? (
          <button onClick={() => handleUpdate(editingId)} className="w-full p-2 bg-green-600 text-white rounded">Save Changes</button>
        ) : (
          <button onClick={handleUpload} className="w-full p-2 bg-blue-600 text-white rounded">{uploading ? "Uploading..." : "Upload Lecture"}</button>
        )}
        <div className="mt-8">
          <h2 className="text-xl font-semibold text-gray-700 mb-4">Uploaded Lectures</h2>
          {lectures.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {lectures.filter(lecture => lecture.name.toLowerCase().includes(searchQuery.toLowerCase())).map((lecture) => (
                <div key={lecture.id} className="flex items-center space-x-4 p-4 bg-white rounded-lg shadow-sm">
                  <img src={lecture.imageUrl} alt={lecture.name} className="w-16 h-16 rounded-full object-cover" />
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-gray-800">{lecture.name}</h3>
                    <p className="text-gray-600">{lecture.role}</p>
                    <p className="text-gray-500">{lecture.qualification}</p>
                    <p className="text-gray-500">{lecture.experience} years of experience</p>
                  </div>
                  <button onClick={() => handleEdit(lecture)} className="text-yellow-500 text-lg"><FaEdit /></button>
                  <button onClick={() => handleRemove(lecture.id)} className="text-red-600 text-lg"><FaTrash /></button>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-gray-600">No lectures uploaded yet.</p>
          )}
        </div>
      </div>
    );
  };

  export default UpdateLecture;
