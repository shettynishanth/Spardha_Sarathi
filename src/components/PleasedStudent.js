import React, { useEffect, useState } from 'react';
import { db } from '../firebase';
import { collection, getDocs, deleteDoc, doc, addDoc } from 'firebase/firestore';
import { getStorage, ref, uploadBytes, getDownloadURL } from 'firebase/storage';

const PleasedStudent = () => {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [file, setFile] = useState(null);
  const [text, setText] = useState(""); // State for holding text input
  const storage = getStorage();

  const fetchImages = async () => {
    try {
      const imagesCollection = collection(db, 'imageText');
      const imagesSnapshot = await getDocs(imagesCollection);
      const imageList = imagesSnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setImages(imageList);
    } catch (error) {
      console.error('Error fetching images: ', error);
    } finally {
      setLoading(false);
    }
  };

  const handleRemove = async (id) => {
    try {
      await deleteDoc(doc(db, 'imageText', id));
      setImages(images.filter((image) => image.id !== id));
    } catch (error) {
      console.error('Error removing image: ', error);
    }
  };

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleTextChange = (e) => {
    setText(e.target.value);
  };

  const handleUpload = async () => {
    if (!file) {
      console.log("No file selected");
      return;
    }

    const storageRef = ref(storage, `imageText/${file.name}`);
    try {
      await uploadBytes(storageRef, file);
      const url = await getDownloadURL(storageRef);
      await addDoc(collection(db, 'imageText'), { url, text });
      fetchImages();
      setFile(null);
      setText(""); // Clear the text input after upload
    } catch (error) {
      console.error('Error uploading image: ', error);
    }
  };

  useEffect(() => {
    fetchImages();
  }, []);

  if (loading) {
    return <div className="text-center text-lg font-semibold">Loading images...</div>;
  }

  return (
    <div className="max-w-4xl mx-auto p-8 bg-gray-50 shadow-md rounded-lg">
      <h2 className="text-4xl font-semibold text-center mb-8 text-gray-800">Pleased Student Information</h2>
      <div className="mb-8 bg-white p-6 rounded-lg shadow-md">
        <input
          type="file"
          accept="image/*"
          onChange={handleFileChange}
          className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <textarea
          value={text}
          onChange={handleTextChange}
          placeholder="Enter accompanying text"
          className="block w-full mt-4 text-sm text-gray-900 border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          onClick={handleUpload}
          className="mt-6 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-md transition w-full"
        >
          Upload Image
        </button>
      </div>
      {images.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {images.map((image) => (
            <div key={image.id} className="relative group bg-white rounded-lg shadow-lg overflow-hidden">
              <img
                src={image.url}
                alt="Uploaded"
                className="w-full h-48 object-cover rounded-t-lg"
              />
              {image.text && (
                <p className="mt-3 text-center text-gray-700 px-4">{image.text}</p>
              )}
              <button
                onClick={() => handleRemove(image.id)}
                className="absolute top-2 right-2 bg-red-600 hover:bg-red-700 text-white text-sm font-semibold py-1 px-2 rounded-full opacity-0 group-hover:opacity-100 transition"
              >
                Remove
              </button>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-center text-gray-500">No images uploaded yet.</p>
      )}
    </div>
  );
};

export default PleasedStudent;
