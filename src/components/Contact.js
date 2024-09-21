import React from 'react';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaClock } from 'react-icons/fa';

const ContactPage = () => {
  return (
    <div className="container mx-auto px-4 py-20">
      {/* Page Title */}
      <h2 className="text-4xl font-extrabold text-center text-gray-900 mb-12">
        Contact Us
      </h2>

      {/* Contact Information Section */}
      <div className="flex flex-wrap justify-center items-center">
        <div className="w-full lg:w-1/2 bg-gray-50 p-8 rounded-lg shadow-md mb-8 lg:mb-0">
          <h3 className="text-2xl font-bold mb-6 text-gray-900">
            Spardha Sarathi KAS Academy
          </h3>

          <div className="text-lg text-gray-700 space-y-4">
            <p className="flex items-center">
              <FaMapMarkerAlt className="mr-2 text-blue-600" />
              <span><strong>Address:</strong> <br/>Spardha Sarathi KAS Academy
            <br/> 196-5, 6th ward,
             <br/> Kundapura Main Rd, Old Bustand,
            <br/>near Municipality, Kundapura, Karnataka 576201</span>
            </p>
            <p className="flex items-center">
              <FaPhoneAlt className="mr-2 text-green-600" />
              <span><strong>Phone:</strong> +91 7019130402</span>
            </p>
            <p className="flex items-center">
              <FaEnvelope className="mr-2 text-red-600" />
              <span><strong>Email:</strong> spardhasarathi@gmail.com</span>
            </p>
            <p className="flex items-center">
              <FaClock className="mr-2 text-yellow-600" />
              <span><strong>Working Hours:</strong> Monday - Saturday, 9 AM - 6 PM</span>
            </p>
          </div>
        </div>

      
       
      </div>

      {/* Google Map Section */}
      <div className="mt-12 px-36">
        <h3 className="text-3xl font-bold mb-8 text-center text-gray-900">
          Our Location
        </h3>
        <div className="aspect-w-16 aspect-h-10 rounded-lg shadow-lg overflow-hidden">
          <iframe
            className="w-full h-full "
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
