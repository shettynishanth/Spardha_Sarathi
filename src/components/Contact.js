import React from 'react';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaClock, FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

const ContactPage = () => {
  return (
    <div className="container mx-auto px-4 py-20 bg-gray-100">
      {/* Page Title */}
      <h2 className="text-5xl font-extrabold text-center text-gray-900 mb-12 tracking-wide">
        Contact Us
      </h2>

      {/* Contact Information Section */}
      <div className="flex flex-wrap justify-center items-center">
        <div className="w-full lg:w-1/2 bg-white p-10 rounded-lg shadow-lg">
          <h3 className="text-3xl font-bold mb-6 text-gray-900 border-b pb-3">
            Spardha Sarathi KAS Academy
          </h3>
          
          <div className="text-lg text-gray-700 space-y-6">
            <p className="flex items-center hover:text-blue-600 transition duration-300">
              <FaMapMarkerAlt className="mr-3 text-blue-600 text-xl" />
              <span>
                <strong>Address:</strong> <br/>
                196-5, 6th Ward, Kundapura Main Rd, Old Bus Stand,<br/>
                Near Municipal, Kundapura, Karnataka 576201
              </span>
            </p>
            <p className="flex items-center hover:text-green-600 transition duration-300">
              <FaPhoneAlt className="mr-3 text-green-600 text-xl" />
              <span>
                <strong>Phone:</strong> +91 7019130402 <br/> +91 9448302476 
              </span>
            </p>
            <p className="flex items-center hover:text-red-600 transition duration-300">
              <FaEnvelope className="mr-3 text-red-600 text-xl" />
              <span><strong>Email:</strong> spardhasarathiacademy@gmail.com</span>
            </p>
            <p className="flex items-center hover:text-yellow-600 transition duration-300">
              <FaClock className="mr-3 text-yellow-600 text-xl" />
              <span><strong>Working Hours:</strong> Monday - Sunday, 9 AM - 6 PM</span>
            </p>
          </div>

          {/* Social Media Links */}
          <div className="flex space-x-6 mt-6">
            <a href="#" className="text-blue-700 text-2xl hover:text-blue-900 transition duration-300">
              <FaFacebook />
            </a>
            <a href="#" className="text-blue-400 text-2xl hover:text-blue-600 transition duration-300">
              <FaTwitter />
            </a>
            <a href="#" className="text-pink-600 text-2xl hover:text-pink-800 transition duration-300">
              <FaInstagram />
            </a>
            <a href="#" className="text-blue-800 text-2xl hover:text-blue-900 transition duration-300">
              <FaLinkedin />
            </a>
          </div>
        </div>
      </div>

      {/* Google Map Section */}
      <div className="mt-12 px-4 sm:px-8 md:px-16 lg:px-36 xl:px-48">
        <h3 className="text-3xl font-bold mb-8 text-center text-gray-900">
          Our Location
        </h3>
        <div className="rounded-lg shadow-lg overflow-hidden border border-gray-300">
          <iframe
            className="w-full h-96"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d46231.81990080575!2d74.65994064280866!3d13.631636370379319!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bbc8f0048daefe5%3A0x5b9b0c7cc8071387!2sSpardha%20Sarathi%20KAS%20Academy%20Kundapura!5e0!3m2!1sen!2sin!4v1726911075283!5m2!1sen!2sin"
            allowFullScreen=""
            loading="lazy"
            title="Spardha Sarathi KAS Academy Location"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
