import React from 'react';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaClock, FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';

const ContactPage = () => {
  return (
    <div className="container mx-auto px-4 py-20 bg-gray-100">
      {/* Page Title */}
      <h2 className="text-4xl font-extrabold text-center text-gray-900 mb-12">
        Get in Touch
      </h2>

      <div className="flex flex-wrap justify-center items-start gap-12">
        {/* Contact Information Section */}
        <div className="w-full lg:w-2/5 bg-white p-8 rounded-lg shadow-lg">
          <h3 className="text-2xl font-bold mb-6 text-gray-900 text-center">
            Contact Information
          </h3>
          <div className="text-lg text-gray-700 space-y-6">
            <p className="flex items-center">
              <FaMapMarkerAlt className="mr-3 text-blue-600 text-xl" />
              <span>
                <strong>Address:</strong> <br />
                Spardha Sarathi KAS Academy, <br />
                196-5, 6th ward, Kundapura Main Rd, <br />
                Old Bustand, near Municipal, <br />
                Kundapura, Karnataka 576201
              </span>
            </p>
            <p className="flex items-center">
              <FaPhoneAlt className="mr-3 text-green-600 text-xl" />
              <span>
                <strong>Phone:</strong> <br />
                +91 7019130402 <br />
                +91 9448302476
              </span>
            </p>
            <p className="flex items-center">
              <FaEnvelope className="mr-3 text-red-600 text-xl" />
              <span>
                <strong>Email:</strong> <br />
                spardhasarathiacademy@gmail.com
              </span>
            </p>
            <p className="flex items-center">
              <FaClock className="mr-3 text-yellow-600 text-xl" />
              <span>
                <strong>Working Hours:</strong> <br />
                Monday - Sunday, 9 AM - 6 PM
              </span>
            </p>
          </div>

          {/* Social Media Links */}
          <div className="mt-6 flex justify-center space-x-6 text-gray-600 text-2xl">
            <a href="#" className="hover:text-blue-600">
              <FaFacebook />
            </a>
            <a href="#" className="hover:text-pink-500">
              <FaInstagram />
            </a>
            <a href="#" className="hover:text-blue-400">
              <FaTwitter />
            </a>
          </div>
        </div>

        {/* Contact Form */}
        <div className="w-full lg:w-2/5 bg-white p-8 rounded-lg shadow-lg">
          <h3 className="text-2xl font-bold mb-6 text-gray-900 text-center">
            Send Us a Message
          </h3>
          <form className="space-y-4">
            <input type="text" placeholder="Your Name" className="w-full p-3 border rounded-lg" />
            <input type="email" placeholder="Your Email" className="w-full p-3 border rounded-lg" />
            <textarea placeholder="Your Message" rows="5" className="w-full p-3 border rounded-lg"></textarea>
            <button className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition">
              Send Message
            </button>
          </form>
        </div>
      </div>

      {/* Google Map Section */}
      <div className="mt-16 px-4 sm:px-8 md:px-16 lg:px-36 xl:px-48">
        <h3 className="text-2xl sm:text-3xl font-bold mb-8 text-center text-gray-900">
          Our Location
        </h3>
        <div className="aspect-w-16 aspect-h-10 rounded-lg shadow-lg overflow-hidden">
          <iframe
            className="w-full h-full"
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
