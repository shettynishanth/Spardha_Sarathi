import React, { useEffect, useState } from 'react';
import { db } from '../firebase';
import { collection, getDocs } from 'firebase/firestore';
import { FaLinkedin, FaEnvelope, FaPhone, FaGraduationCap, FaBriefcase } from 'react-icons/fa';

const LectureProfiles = () => {
  const [lectures, setLectures] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
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
    fetchLectures();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen bg-gray-50">
        <div className="text-lg font-semibold text-gray-700">Loading lecture profiles...</div>
      </div>
    );
  }

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      {/* Heading Section */}
      <div className="text-center mb-12">
        <h1 className="text-3xl lg:text-4xl font-bold text-gray-900">
          Meet Our <span className="text-blue-600">Expert Lecturers</span>
        </h1>
        <p className="text-sm text-gray-600 max-w-lg mx-auto mt-2">
          Our highly qualified educators are dedicated to guiding your academic journey.
        </p>
      </div>

      {/* Lecture Profiles Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {lectures.map((lecture) => (
          <div
            key={lecture.id}
            className="bg-white rounded-xl shadow-md overflow-hidden transition-transform transform hover:scale-105 hover:shadow-lg p-5"
          >
            {/* Profile Image */}
            <div className="flex justify-center">
              <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-blue-100 shadow-md">
                <img
                  src={lecture.imageUrl}
                  alt={lecture.name}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Profile Details */}
            <div className="text-center mt-4 space-y-2">
              <h2 className="text-xl font-semibold text-gray-800">{lecture.name}</h2>
              <p className="text-sm text-blue-600 font-medium">{lecture.role}</p>
            </div>

            {/* Qualification & Experience */}
            <div className="flex justify-center gap-2 mt-3 text-xs text-gray-600">
              <div className="flex items-center space-x-1 bg-gray-100 px-3 py-1 rounded-lg">
                <FaGraduationCap className="text-blue-500" />
                <span>{lecture.qualification}</span>
              </div>
              <div className="flex items-center space-x-1 bg-gray-100 px-3 py-1 rounded-lg">
                <FaBriefcase className="text-purple-500" />
                <span>{lecture.experience} yrs</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LectureProfiles;
