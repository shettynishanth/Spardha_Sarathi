// src/LectureUploader.js
import React, { useState, useEffect } from 'react';
import { storage } from '../firebase';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { db } from '../firebase';
import { collection, addDoc, getDocs, deleteDoc, doc } from 'firebase/firestore';

const UpdateLecture = () => {
  const [image, setImage] = useState(null);
  const [name, setName] = useState('');
  const [role, setRole] = useState('');
  const [lectures, setLectures] = useState([]);
  const [uploading, setUploading] = useState(false); 

 
  useEffect(() => {
    const fetchLectures = async () => {
      const lectureRef = collection(db, 'lectures');
      const lectureSnapshot = await getDocs(lectureRef);
      const lectureList = lectureSnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data(),
      }));
      setLectures(lectureList);
    };

    fetchLectures();
  }, []);

  const handleUpload = async (e) => {
    e.preventDefault();
    if (!image || !name || !role) {
      alert('Please fill in all fields');
      return;
    }

    try {
      setUploading(true); // Set the uploading state to true during upload
      const imageRef = ref(storage, `lectureImages/${image.name}`);
      await uploadBytes(imageRef, image);
      const imageUrl = await getDownloadURL(imageRef);

      // Add lecture details
      const newLecture = { name, role, imageUrl };
      await addDoc(collection(db, 'lectures'), newLecture);

      setLectures([...lectures, newLecture]); // Update the lecture list
      setImage(null); // Reset image file input
      setName(''); // Clear the name field
      setRole(''); // Clear the role field
    } catch (error) {
      console.error('Error uploading lecture:', error);
      alert('Failed to upload lecture. Please try again.');
    } finally {
      setUploading(false); // Reset uploading state after operation
    }
  };

  const handleRemove = async (id) => {
    try {
      // Remove lecture from Firestore
      const lectureRef = doc(db, 'lectures', id);
      await deleteDoc(lectureRef);

      // Update local state to remove the lecture
      setLectures(lectures.filter(lecture => lecture.id !== id));
    } catch (error) {
      console.error('Error removing lecture:', error);
      alert('Failed to remove lecture. Please try again.');
    }
  };

  return (
    <div className="p-16 m-16 max-w-lg mx-auto bg-gray-100 rounded-xl shadow-lg space-y-6">
      <h1 className="text-3xl font-semibold text-center text-gray-800">Upload Lecture Details</h1>
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
              <div key={lecture.id} className="flex items-center space-x-4 p-4 bg-white rounded-lg shadow-sm">
                <img
                  src={lecture.imageUrl}
                  alt={lecture.name}
                  className="w-16 h-16 rounded-full object-cover"
                />
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-gray-800">{lecture.name}</h3>
                  <p className="text-gray-600">{lecture.role}</p>
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
