// src/views/LectureProfiles.js
import React, { useEffect, useState } from 'react';
import { db } from '../firebase'; 
import { collection, getDocs } from 'firebase/firestore';

const LectureProfiles = () => {
  const [lectures, setLectures] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchLectures = async () => {
    try {
      const lecturesCollection = collection(db, 'lectures');
      const lecturesSnapshot = await getDocs(lecturesCollection);
      const lectureList = lecturesSnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setLectures(lectureList);
    } catch (error) {
      console.error('Error fetching lecture profiles: ', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchLectures();
  }, []);

  if (loading) {
    return <div className="text-center text-lg font-semibold">Loading lecture profiles...</div>;
  }

  return (
    <div className="max-w-6xl mx-auto p-8 bg-white shadow-lg rounded-lg">
      <h2 className="text-4xl font-semibold text-center mb-8">Our Faculties</h2>
      {lectures.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {lectures.map((lecture) => (
            <div key={lecture.id} className="bg-gray-100 p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105">
              <img
                src={lecture.profileImageUrl}
                alt={lecture.name}
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <h3 className="text-xl font-semibold text-gray-800">{lecture.name}</h3>
              <p className="text-gray-600 mt-2">{lecture.bio}</p>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-center text-gray-500">No lecture profiles available.</p>
      )}
    </div>
  );
};

export default LectureProfiles;
