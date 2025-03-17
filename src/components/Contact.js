import { motion } from 'framer-motion';
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock, FaFacebook, FaInstagram, FaYoutube } from 'react-icons/fa';

const ContactPage = () => {
  return (
    <div className=" pt-16 min-h-screen bg-blue-50">
      {/* Hero Section */}
      <div className="relative py-16 bg-gradient-to-r from-blue-600 to-blue-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            Get in Touch
          </motion.h1>
          <p className="text-lg max-w-2xl mx-auto">
            We're here to help you with any inquiries about our programs, admissions, or facilities.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="space-y-8"
          >
            {/* Contact Cards */}
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Contact Details</h2>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-blue-100 rounded-lg">
                    <FaMapMarkerAlt className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800">Visit Us</h3>
                    <p className="text-gray-600">
                      196-5, 6th Ward, Kundapura Main Road<br />
                      Old Bustand, Near Municipality<br />
                      Kundapura, Karnataka 576201
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-blue-100 rounded-lg">
                    <FaPhone className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800">Call Us</h3>
                    <p className="text-gray-600">
                      +91 7019130402<br />
                      +91 9448302476
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-blue-100 rounded-lg">
                    <FaEnvelope className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800">Email Us</h3>
                    <p className="text-gray-600">
                      <a href="mailto:spardhasarathi@gmail.com" className="hover:text-blue-600">
                        spardhasarathi@gmail.com
                      </a>
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-blue-100 rounded-lg">
                    <FaClock className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800">Office Hours</h3>
                    <p className="text-gray-600">
                      Monday - Saturday: 8 AM - 8 PM<br />
                      Sunday: 10 AM - 4 PM
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Media */}
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Connect With Us</h2>
              <div className="flex space-x-6 justify-center">
                <a href="#" className="text-blue-600 hover:text-blue-800">
                  <FaFacebook size={28} />
                </a>
                <a href="#" className="text-pink-600 hover:text-pink-800">
                  <FaInstagram size={28} />
                </a>
                <a href="#" className="text-red-600 hover:text-red-800">
                  <FaYoutube size={28} />
                </a>
              </div>
            </div>
          </motion.div>

      
        </div>

        {/* Map Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="mt-12 bg-white rounded-2xl shadow-lg overflow-hidden"
        >
          <iframe
            title="Academy Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d46231.81990080575!2d74.65994064280866!3d13.631636370379319!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bbc8f0048daefe5%3A0x5b9b0c7cc8071387!2sSpardha%20Sarathi%20KAS%20Academy%20Kundapura!5e0!3m2!1sen!2sin!4v1726911075283!5m2!1sen!2sin"
            width="100%"
            height="400"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            className="rounded-2xl"
          ></iframe>
        </motion.div>
      </div>
    </div>
  );
};

export default ContactPage;
