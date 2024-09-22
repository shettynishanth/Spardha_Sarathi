import React, { useState, useEffect } from 'react';
import { storage } from '../firebase';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { db } from '../firebase';
import { collection, addDoc, getDocs, deleteDoc, doc } from 'firebase/firestore';

const UpdateLecture = () => {
  const [image, setImage] = useState(null);
  const [name, setName] = useState('');
  const [role, setRole] = useState('');
  const [qualification, setQualification] = useState(''); 
  const [lectures, setLectures] = useState([]);
  const [uploading, setUploading] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');

  useEffect(() => {
    const fetchLectures = async () => {
      const lectureRef = collection(db, 'lectures');
      const lectureSnapshot = await getDocs(lectureRef);
      const lectureList = lectureSnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setLectures(lectureList);
    };

    fetchLectures();
  }, []);

  const handleUpload = async (e) => {
    e.preventDefault();
    if (!image || !name || !role || !qualification) {  // qualification in validation
      alert('Please fill in all fields');
      return;
    }

    try {
      setUploading(true);
      setSuccessMessage('');

      // Upload image to Firebase storage
      const imageRef = ref(storage, `lectureImages/${image.name}`);
      await uploadBytes(imageRef, image);
      const imageUrl = await getDownloadURL(imageRef);

      // Add lecture details to Firestore
      const newLecture = { name, role, qualification, imageUrl }; 
      await addDoc(collection(db, 'lectures'), newLecture);

      // Update local state with the new lecture
      setLectures([...lectures, { id: newLecture.id, ...newLecture }]);

      // Clear input fields and show success message
      setImage(null);
      setName('');
      setRole('');
      setQualification('');  // Reset qualification field
      setSuccessMessage('Lecture uploaded successfully!');
    } catch (error) {
      console.error('Error uploading lecture:', error);
      alert('Failed to upload lecture. Please try again.');
    } finally {
      setUploading(false);
    }
  };

  const handleRemove = async (id) => {
    try {
      // Remove lecture from Firestore
      const lectureRef = doc(db, 'lectures', id);
      await deleteDoc(lectureRef);

      // Update local state to remove the lecture
      setLectures(lectures.filter((lecture) => lecture.id !== id));
    } catch (error) {
      console.error('Error removing lecture:', error);
      alert('Failed to remove lecture. Please try again.');
    }
  };

  return (
    <div className="p-8 max-w-3xl mx-auto bg-gray-100 rounded-xl shadow-lg space-y-6">
      <h1 className="text-3xl font-semibold text-center text-gray-800">Upload Lecture Details</h1>
      {successMessage && (
        <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded">
          <p>{successMessage}</p>
        </div>
      )}
      <form onSubmit={handleUpload} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">Lecture Image</label>
          <input
            type="file"
            accept="image/*"
            onChange={(e) => setImage(e.target.files[0])}
            className="block w-full text-sm border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Lecturer's Name</label>
          <input
            type="text"
            placeholder="Enter name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="block w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Role</label>
          <input
            type="text"
            placeholder="Enter role"
            value={role}
            onChange={(e) => setRole(e.target.value)}
            className="block w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
          />
        </div>
        <div> {/* New input field for qualification */}
          <label className="block text-sm font-medium text-gray-700">Qualification</label>
          <input
            type="text"
            placeholder="Enter qualification"
            value={qualification}
            onChange={(e) => setQualification(e.target.value)}
            className="block w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
          />
        </div>
        <button
          type="submit"
          disabled={uploading}
          className={`w-full px-4 py-2 text-white font-semibold rounded-md ${
            uploading ? 'bg-gray-400' : 'bg-indigo-600 hover:bg-indigo-700'
          } transition ease-in-out`}
        >
          {uploading ? 'Uploading...' : 'Upload Lecture'}
        </button>
      </form>

      <div className="mt-8">
        <h2 className="text-xl font-semibold text-gray-700 mb-4">Uploaded Lectures</h2>
        {lectures.length > 0 ? (
          <div className="grid grid-cols-1 gap-6">
            {lectures.map((lecture) => (
              <div
                key={lecture.id}
                className="flex items-center space-x-4 p-4 bg-white rounded-lg shadow-sm transition-transform transform hover:scale-105"
              >
                <img
                  src={lecture.imageUrl}
                  alt={lecture.name}
                  className="w-16 h-16 rounded-full object-cover"
                />
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-gray-800">{lecture.name}</h3>
                  <p className="text-gray-600">{lecture.role}</p>
                  <p className="text-gray-500">{lecture.qualification}</p> {/* Display qualification */}
                </div>
                <button
                  onClick={() => handleRemove(lecture.id)}
                  className="text-red-600 hover:text-red-800 transition ease-in-out"
                >
                  Remove
                </button>
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
