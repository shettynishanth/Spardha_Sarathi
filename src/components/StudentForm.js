import React, { useState } from 'react';
import { db } from '../firebase';
import { collection, addDoc } from 'firebase/firestore';
import Swal from 'sweetalert2'; // Import SweetAlert2

const StudentForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [course, setCourse] = useState('');
  const [phone, setPhone] = useState(''); // New state for phone number
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!name || !email || !course || !phone) { // Check for phone number
      setError('All fields are required.');
      return;
    }

    try {
      
      await addDoc(collection(db, 'students'), { name, email, course, phone });

      // Clear form fields after submission
      setName('');
      setEmail('');
      setCourse('');
      setPhone(''); // Clear phone field
      setError(null);

      // Show SweetAlert2 success message
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
    <div className="relative flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-blue-100 to-blue-300">
      
      <div className="custom-shape-divider-top-1725608547">
        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".25" className="shape-fill"></path>
          <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" opacity=".5" className="shape-fill"></path>
          <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" className="shape-fill"></path>
        </svg>
      </div>

      {/* Form and Contact Info Layout */}
      <div className="relative z-10 w-full max-w-4xl rounded-lg p-8 md:p-10 flex flex-col md:flex-row from-transparent">
        {/* Form */}
        <div className="w-full md:w-3/3 md:pr-8">
          {error && (
            <div className="mb-4 text-red-500 text-sm text-center font-semibold">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit}>
            <div className="mb-6">
              <label className="block text-gray-700 text-sm font-semibold mb-2">Name</label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className="block w-full bg-gray-100 border border-gray-300 rounded-lg py-3 px-4 text-gray-700 focus:outline-none focus:border-blue-500 focus:bg-white"
              />
            </div>

            <div className="mb-6">
              <label className="block text-gray-700 text-sm font-semibold mb-2">Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="block w-full bg-gray-100 border border-gray-300 rounded-lg py-3 px-4 text-gray-700 focus:outline-none focus:border-blue-500 focus:bg-white"
              />
            </div>

            <div className="mb-6">
              <label className="block text-gray-700 text-sm font-semibold mb-2">Course</label>
              <input
                type="text"
                value={course}
                onChange={(e) => setCourse(e.target.value)}
                required
                className="block w-full bg-gray-100 border border-gray-300 rounded-lg py-3 px-4 text-gray-700 focus:outline-none focus:border-blue-500 focus:bg-white"
              />
            </div>

            {/* New phone number field */}
            <div className="mb-6">
              <label className="block text-gray-700 text-sm font-semibold mb-2">Phone Number</label>
              <input
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                required
                className="block w-full bg-gray-100 border border-gray-300 rounded-lg py-3 px-4 text-gray-700 focus:outline-none focus:border-blue-500 focus:bg-white"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-blue-500 text-white font-bold py-3 px-4 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-4 focus:ring-blue-300 transition-all"
            >
              Register
            </button>
          </form>
        </div>

        {/* Contact Info */}
        <div className="w-full md:w-2/3 mt-8 md:mt-6 md:pl-8 border-t-2 md:border-t-0 md:border-l-2 border-gray-200">
          <h3 className="text-4xl font-bold mb-4 text-gray-700">Get in touch with us</h3>
          <p className="text-gray-600 mb-4">Have a question or need assistance? Don't hesitate to get in touch! Contact us through the provided channels and we'll respond promptly.</p>
          <p className="text-gray-600">
            <strong>Call us:</strong> <br /> +91 7019130402 <br /> +91 9448302476
          </p>
          <p className="text-gray-600 mt-4">
            <strong>Email:</strong> <br /> spardhasarathi@gmail.com
          </p>
        </div>
      </div>
    </div>
  );
};

export default StudentForm;
