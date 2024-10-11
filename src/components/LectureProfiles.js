import React, { useEffect, useState } from 'react';
import { db } from '../firebase';
import { collection, getDocs } from 'firebase/firestore';
import { FaLinkedin, FaEnvelope, FaPhone } from 'react-icons/fa';

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
    <div className="p-8 bg-gray-100 min-h-screen">
  <h1 className="text-5xl font-bold text-center text-gray-900 mb-12">Our Lecturers</h1>
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
    {lectures.map((lecture) => (
      <div
        key={lecture.id}
        className="bg-white rounded-lg shadow-xl overflow-hidden transition-transform transform hover:scale-105"
      >
        <div className="flex justify-center mt-6">
          <img
            src={lecture.imageUrl}
            alt={lecture.name}
            className="w-48 h-48 object-cover rounded-full border-4 border-gray-200"
          />
        </div>
        <div className="p-6 text-center">
          <h2 className="text-2xl font-semibold text-gray-800 mb-2">{lecture.name}</h2>
          <p className="text-gray-600 text-lg font-medium mb-1">{lecture.role}</p>
          <p className="text-gray-500 text-sm mb-2">{lecture.qualification}</p>
          <p className="text-gray-500 text-sm">{lecture.experience} years of experience</p> {/* Display experience */}
        </div>
      </div>
    ))}
  </div>
</div>

  );
};

export default LectureProfiles;
