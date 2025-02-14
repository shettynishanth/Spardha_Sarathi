import React, { useEffect, useState } from 'react';
import { db } from '../firebase'; // Adjust the import path as needed
import { collection, getDocs } from 'firebase/firestore';
import { FaUserGraduate, FaEnvelope, FaPhone, FaBook } from 'react-icons/fa';

const RegisteredDetails = () => {
  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [search, setSearch] = useState('');

  const fetchStudents = async () => {
    setLoading(true);
    setError(null);
    try {
      const studentsCollection = collection(db, 'students');
      const studentSnapshot = await getDocs(studentsCollection);
      const studentList = studentSnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setStudents(studentList);
    } catch (error) {
      console.error('Error fetching students: ', error);
      setError('Error fetching students. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchStudents();
  }, []);

  const filteredStudents = students.filter((student) =>
    student.name.toLowerCase().includes(search.toLowerCase())
  );

  if (loading) {
    return <div className="text-center text-gray-600 text-lg">Loading...</div>;
  }

  if (error) {
    return <div className="text-center text-red-500 text-lg">{error}</div>;
  }

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-500 to-purple-600 p-10">
      <div className="max-w-7xl mx-auto bg-white shadow-xl rounded-xl p-8">
        <h2 className="text-4xl font-bold mb-6 text-center text-gray-800">Admin Dashboard</h2>
        
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-2xl font-semibold text-gray-700">Registered Students</h3>
          <input
            type="text"
            placeholder="Search by name..."
            className="border px-4 py-2 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
        
        {filteredStudents.length > 0 ? (
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filteredStudents.map((student) => (
              <div
                key={student.id}
                className="bg-white border rounded-lg shadow-lg p-6 hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
              >
                <div className="flex items-center mb-4">
                  <div className="w-14 h-14 rounded-full bg-blue-500 text-white flex justify-center items-center text-2xl shadow-md">
                    <FaUserGraduate />
                  </div>
                  <div className="ml-4">
                    <p className="font-semibold text-xl text-gray-800">{student.name}</p>
                    <p className="text-gray-500 text-sm">{student.course}</p>
                  </div>
                </div>
                <div className="text-gray-700">
                  <p className="mb-2 flex items-center"><FaEnvelope className="mr-2 text-blue-500" /> <span className="font-medium">Email:</span> {student.email}</p>
                  <p className="mb-2 flex items-center"><FaPhone className="mr-2 text-green-500" /> <span className="font-medium">Phone:</span> {student.phone || 'N/A'}</p>
                  <p className="mb-2 flex items-center"><FaBook className="mr-2 text-yellow-500" /> <span className="font-medium">Course:</span> {student.course}</p>
                  <p className="mb-2"><span className="font-medium">Enrollment Date:</span> {student.enrollmentDate || 'N/A'}</p>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-center text-gray-600 text-lg">No students found.</p>
        )}
      </div>
    </div>
  );
};

export default RegisteredDetails;
