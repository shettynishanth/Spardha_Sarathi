import React from "react";
import {  FaEnvelope, FaInstagram, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 px-6 md:px-16 py-12 md:py-16">
      <div className="container mx-auto flex flex-wrap justify-between items-start space-y-8 md:space-y-0">
        {/* About Us Section */}
        <div className="w-full md:w-1/4 text-center md:text-left">
          <h3 className="text-lg font-semibold text-white mb-3">About Us</h3>
          <p className="text-sm leading-relaxed">
            We are a premier institute dedicated to coaching students for
            competitive exams at both state and national levels. Our focus is on
            nurturing success and excellence.
          </p>
        </div>

        {/* Address Section */}
        <div className="w-full md:w-1/4 text-center md:text-center">
          <h3 className="text-lg font-semibold text-white mb-3">Address</h3>
          <p className="text-sm leading-relaxed">
            Spardha Sarathi KAS Academy
            <br />
            196-5, 6th ward,
            <br />
            Kundapura Main Rd, Old Bustand,
            <br />
            near Municipality, Kundapura, Karnataka 576201
          </p>
        </div>

        {/* Contact Section */}
        <div className="w-full md:w-1/4 text-center md:text-center">
          <h3 className="text-lg font-semibold text-white mb-3">Contact</h3>
          <p className="text-sm leading-relaxed">
            <strong>Phone:</strong> +91 7019130402,<br/>  +91 9448302476
            <br />
            <strong>Email:</strong>{" "}
            <a
              href="mailto:spardhasarathiacademy@gmail.com"
              className="text-blue-400 hover:text-blue-300"
            >
              spardhasarathiacademy@gmail.com
            </a>
          </p>
        </div>

        {/* Social Media Links */}
        <div className="w-full md:w-1/4 text-center">
          <h3 className="text-lg font-semibold text-white mb-3">Follow Us</h3>
          <div className="flex justify-center space-x-6">
            <a
              href="https://youtu.be/sde1vh0M0nw?si=fO4oVzK4eBU12Xzn"
              className="text-red-600 hover:text-red-500"
              aria-label="YouTube"
            >
              <FaYoutube size={24} />
            </a>
            <a
              href="https://www.instagram.com/spardha_sarathi_academy?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
              className="text-pink-500 hover:text-pink-400"
              aria-label="Instagram"
            >
              <FaInstagram size={24} />
            </a>
          </div>
        </div>
      </div>

      <div className="text-center py-6 border-t border-gray-800 mt-12">
        <p className="text-sm">
          © 2024 Spardha Sarathi KAS Academy. All rights reserved.
        </p>

        {/* Developer Information */}
        <div className="mt-4">
          <p className="text-sm flex justify-center space-x-6">
            Developed By:
            <a
              href="/AdminLogin" target="_blank" rel="noopener noreferrer"
              className="text-blue-400 hover:text-blue-300"
            >Nishanth Shetty
            </a>
            <a
              href="https://www.instagram.com/shetty_nishanth08?igsh=ejZ6amExNm5lMm9z"
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
          </p>
        </div>

        {/* Admin Login Button */}
        {/* <div className="mt-6">
          <a href="/AdminLogin" target="_blank" rel="noopener noreferrer">
            <button className="flex items-center justify-center bg-blue-600 hover:bg-blue-500 text-white font-semibold py-2 px-4 rounded-md transition duration-300">
              <FaLock className="mr-2" />
              Admin Login
            </button>
          </a>
        </div> */}
      </div>
    </footer>
  );
};

export default Footer;
