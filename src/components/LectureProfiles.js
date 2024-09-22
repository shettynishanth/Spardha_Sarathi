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
    <div className="max-w-6xl mx-auto p-10 rounded-lg">
      <h2 className="text-4xl font-semibold text-center mb-9">Meet Our Experienced Faculty</h2>
      {lectures.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {lectures.map((lecture) => (
            <div key={lecture.id} className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <img
                src={lecture.imageUrl} // Make sure this matches the field in Firestore
                alt={lecture.name}
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <h3 className="text-2xl font-bold text-gray-900 mb-2">{lecture.name}</h3>
              <p className="text-gray-600 mb-4">{lecture.designation}</p>
              <p className="text-gray-700 mb-4">{lecture.bio}</p>
              
              <div className="border-t border-gray-200 my-4"></div>

              <div className="text-gray-600 mb-4">
                <p><strong>Qualification:</strong> {lecture.qualification}</p>
                <p><strong>Subjects:</strong> {lecture.subjects}</p>
              </div>

              <div className="flex items-center justify-start space-x-4 mt-4">
                {lecture.linkedin && (
                  <a href={lecture.linkedin} target="_blank" rel="noopener noreferrer" className="text-blue-700 hover:text-blue-900">
                    <FaLinkedin size={20} />
                  </a>
                )}
                {lecture.email && (
                  <a href={`mailto:${lecture.email}`} className="text-gray-600 hover:text-gray-800">
                    <FaEnvelope size={20} />
                  </a>
                )}
                {lecture.phone && (
                  <a href={`tel:${lecture.phone}`} className="text-gray-600 hover:text-gray-800">
                    <FaPhone size={20} />
                  </a>
                )}
              </div>
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
