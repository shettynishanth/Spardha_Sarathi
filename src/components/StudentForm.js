import React, { useState } from 'react';
import { db } from '../firebase';
import { collection, addDoc } from 'firebase/firestore';
import Swal from 'sweetalert2';

const StudentForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [course, setCourse] = useState('');
  const [phone, setPhone] = useState('');
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!name || !email || !course || !phone) {
      setError('All fields are required.');
      return;
    }

    try {
      await addDoc(collection(db, 'students'), { name, email, course, phone });
      setName('');
      setEmail('');
      setCourse('');
      setPhone('');
      setError(null);

      Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Student registered successfully!',
        showConfirmButton: false,
        timer: 1500
      });
    } catch (error) {
      console.error('Error adding student: ', error);
      setError('Failed to register student: ' + error.message);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-blue-200 to-blue-500 px-6 py-12">
      <div className="w-full max-w-lg bg-white shadow-lg rounded-xl p-6 md:p-8 relative">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-700 text-center mb-6">Student Registration</h2>

        {error && <p className="text-red-500 text-center mb-4">{error}</p>}

        <form onSubmit={handleSubmit} className="space-y-4">
          <input type="text" placeholder="Full Name" value={name} onChange={(e) => setName(e.target.value)} className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400" />
          <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400" />
          <input type="text" placeholder="Course" value={course} onChange={(e) => setCourse(e.target.value)} className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400" />
          <input type="tel" placeholder="Phone Number" value={phone} onChange={(e) => setPhone(e.target.value)} className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400" />
          <button type="submit" className="w-full bg-blue-500 text-white py-3 rounded-lg font-semibold hover:bg-blue-600 transition-all">Register</button>
        </form>
      </div>
    </div>
  );
};

export default StudentForm;
