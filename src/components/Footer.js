import React from "react";
import { FaEnvelope, FaInstagram, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 px-6 py-10 md:px-16 md:py-12">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* About Us Section */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">About Us</h3>
          <p className="text-sm leading-relaxed">
            We are a premier institute dedicated to coaching students for
            competitive exams at both state and national levels, nurturing success and excellence.
          </p>
        </div>

        {/* Address Section */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Address</h3>
          <p className="text-sm leading-relaxed">
            Spardha Sarathi KAS Academy
            <br />
            196-5, 6th ward, Kundapura Main Rd, Old Bustand,
            <br />
            near Municipality, Kundapura, Karnataka 576201
          </p>
        </div>

        {/* Contact Section */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Contact</h3>
          <p className="text-sm leading-relaxed">
            <strong>Phone:</strong> +91 7019130402, +91 9448302476
            <br />
            <strong>Email:</strong>
            <a
              href="mailto:spardhasarathiacademy@gmail.com"
              className="text-blue-400 hover:text-blue-300 ml-1"
            >
              spardhasarathiacademy@gmail.com
            </a>
          </p>
        </div>

        {/* Social Media Links */}
        <div className="text-center md:text-left">
          <h3 className="text-lg font-semibold text-white mb-3">Follow Us</h3>
          <div className="flex justify-center md:justify-start space-x-6">
            <a
              href="https://youtu.be/sde1vh0M0nw?si=fO4oVzK4eBU12Xzn"
              className="text-red-600 hover:text-red-500"
              aria-label="YouTube"
            >
              <FaYoutube size={24} />
            </a>
            <a
              href="https://www.instagram.com/spardha_sarathi_academy"
              className="text-pink-500 hover:text-pink-400"
              aria-label="Instagram"
            >
              <FaInstagram size={24} />
            </a>
          </div>
        </div>
      </div>

      {/* Footer Bottom Section */}
      <div className="text-center py-6 border-t border-gray-800 mt-8">
        <p className="text-sm">© 2024 Spardha Sarathi KAS Academy. All rights reserved.</p>
        
        {/* Developer Information */}
        <div className="mt-4 flex justify-center items-center space-x-3">
          <span className="text-sm">Developed By:</span>
          <a
            href="/AdminLogin"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 hover:text-blue-300"
          >
            Nishanth Shetty
          </a>
          <a
            href="https://www.instagram.com/shetty_nishanth08"
            className="text-pink-500 hover:text-pink-400"
            aria-label="Instagram"
          >
            <FaInstagram size={20} />
          </a>
          <a
            href="mailto:shettynishanth100@gmail.com"
            className="text-blue-400 hover:text-blue-300"
            aria-label="Email"
          >
            <FaEnvelope size={20} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
