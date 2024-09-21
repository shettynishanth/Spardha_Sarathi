import React, { useEffect, useState } from 'react';
import { db } from '../firebase'; // Adjust the import path as needed
import { collection, getDocs } from 'firebase/firestore';

const RegisteredDetails = () => {
  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null); // Error state

  const fetchStudents = async () => {
    setLoading(true); // Set loading before fetching
    setError(null); // Reset error state
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

  if (loading) {
    return <div className="text-center text-gray-600">Loading...</div>;
  }

  if (error) {
    return <div className="text-center text-red-500">{error}</div>; // Error message
  }

  return (
    <div className="max-w-6xl mx-auto p-6">
      <h2 className="text-3xl font-bold mb-8 text-center text-gray-800">Student Registration Dashboard</h2>
      {students.length > 0 ? (
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {students.map((student) => (
            <div key={student.id} className="bg-white border rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full bg-blue-500 text-white flex justify-center items-center font-bold text-xl mr-4">
                  {student.name.charAt(0)}
                </div>
                <div>
                  <p className="font-semibold text-xl text-gray-800">{student.name}</p>
                  <p className="text-gray-500 text-sm">{student.course}</p>
                </div>
              </div>
              <div className="text-gray-700">
                <p className="mb-2">
                  <span className="font-medium">Email:</span> {student.email}
                </p>
                <p className="mb-2">
                  <span className="font-medium">Phone:</span> {student.phone || 'N/A'}
                </p>
                <p className="mb-2">
                  <span className="font-medium">Course:</span> {student.course}
                </p>
                <p className="mb-2">
                  <span className="font-medium">Enrollment Date:</span> {student.enrollmentDate || 'N/A'}
                </p>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-center text-gray-600">No students registered yet.</p>
      )}
    </div>
  );
};

export default RegisteredDetails;
