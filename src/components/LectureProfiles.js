import React, { useEffect, useState } from 'react';
import { db } from '../firebase';
import { collection, getDocs } from 'firebase/firestore';
import { FaLinkedin, FaEnvelope, FaGraduationCap, FaBriefcase, FaChalkboardTeacher, FaStar } from 'react-icons/fa';
import { motion } from 'framer-motion';

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
      <div className="flex justify-center items-center min-h-screen bg-gradient-to-b from-purple-50 to-blue-50">
        <div className="animate-pulse grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 p-6">
          {[...Array(3)].map((_, i) => (
            <div key={i} className="bg-white rounded-2xl shadow-lg p-6 h-80">
              <div className="bg-gradient-to-br from-purple-100 to-blue-100 w-32 h-32 rounded-full mx-auto" />
              <div className="h-5 bg-purple-100 rounded-lg mt-6 w-3/4 mx-auto" />
              <div className="h-4 bg-blue-100 rounded-lg mt-4 w-1/2 mx-auto" />
              <div className="h-3 bg-purple-100 rounded-lg mt-4 w-2/3 mx-auto" />
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="pt-28 p-8 min-h-screen bg-gradient-to-b from-purple-50 to-blue-50">
      {/* Header Section */}
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-16 max-w-4xl mx-auto"
      >
        <h1 className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent mb-6">
          Our Faculty Members
        </h1>
        <p className="text-lg text-gray-600">
          Meet our team of accomplished educators and industry experts
        </p>  
      </motion.div>

      {/* Lecture Profiles Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 max-w-7xl mx-auto">
        {lectures.map((lecture, index) => (
          <motion.div
            key={lecture.id}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.1, type: 'spring' }}
            whileHover={{ y: -10, boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1)' }}
            className="bg-white rounded-2xl shadow-lg overflow-hidden transform transition-all duration-300"
          >
            <div className="p-6 relative">
              {/* Profile Image */}
              <div className="relative w-40 h-40 mx-auto mb-8">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-400 to-blue-500 rounded-full blur-lg opacity-20" />
                <img
                  src={lecture.imageUrl}
                  alt={lecture.name}
                  className="w-full h-full object-cover rounded-full border-4 border-white shadow-xl relative z-10"
                />
              </div>

              {/* Profile Details */}
              <div className="text-center space-y-4">
                <h2 className="text-2xl font-bold text-gray-800">{lecture.name}</h2>
                <div className="flex items-center justify-center gap-2 text-blue-600">
                  <FaStar className="text-amber-400" />
                  <p className="text-lg font-medium">{lecture.role}</p>
                  <FaStar className="text-amber-400" />
                </div>

                {/* Expertise Tags */}
                <div className="flex flex-wrap justify-center gap-2">
                  {lecture.subjects?.map((subject) => (
                    <motion.span
                      whileHover={{ scale: 1.05 }}
                      key={subject}
                      className="px-3 py-1 bg-gradient-to-r from-purple-50 to-blue-50 text-purple-700 rounded-full text-sm font-medium shadow-inner"
                    >
                      {subject}
                    </motion.span>
                  ))}
                </div>
              </div>

              {/* Qualification & Experience */}
              <div className="mt-8 space-y-4 bg-gradient-to-b from-purple-50 to-blue-50 p-4 rounded-xl">
                <div className="flex items-center gap-3 text-purple-700">
                  <FaGraduationCap className="flex-shrink-0 text-xl" />
                  <span className="text-sm font-medium">{lecture.qualification}</span>
                </div>
                <div className="flex items-center gap-3 text-blue-700">
                  <FaBriefcase className="flex-shrink-0 text-xl" />
                  <span className="text-sm font-medium">{lecture.experience}+ Years Experience</span>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <motion.div 
              whileHover={{ scale: 1.02 }}
              className="border-t border-gray-100 p-4 bg-white flex justify-center space-x-6"
            >
              {lecture.linkedin && (
                <motion.a
                  whileHover={{ y: -3 }}
                  href={lecture.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-purple-600 hover:text-purple-800"
                >
                  <FaLinkedin size={24} />
                </motion.a>
              )}
              {lecture.email && (
                <motion.a
                  whileHover={{ y: -3 }}
                  href={`mailto:${lecture.email}`}
                  className="text-blue-600 hover:text-blue-800"
                >
                  <FaEnvelope size={24} />
                </motion.a>
              )}
            </motion.div>
          </motion.div>
        ))}
      </div>

      {/* Empty State */}
      {!lectures.length && (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center py-16"
        >
          <div className="inline-block p-8 bg-white rounded-2xl shadow-lg">
            <FaChalkboardTeacher className="text-6xl text-purple-600 mx-auto mb-6" />
            <h3 className="text-2xl font-bold text-gray-800 mb-2">
              Faculty Profiles Coming Soon
            </h3>
            <p className="text-gray-600 max-w-md mx-auto">
              Our team of experts is currently being onboarded. Stay tuned!
            </p>
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default LectureProfiles;
