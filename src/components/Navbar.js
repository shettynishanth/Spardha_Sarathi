import React, { useState } from "react";
import { FaYoutube, FaInstagram, FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-white shadow-lg fixed w-full z-50">
      <div className="container mx-auto flex justify-between items-center py-3 px-6 lg:px-16">
        {/* Logo */}
        <div className="flex items-center">
          <img
            src="Spardha sarathi logo copy.png"
            alt="Spardha Sarathi Logo"
            className="h-12 w-auto"
          />
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          <a
            href="/"
            className="text-gray-800 font-medium hover:text-blue-600 transition duration-300"
          >
            Home
          </a>
          <a
            href="/AboutUs"
            className="text-gray-800 font-medium hover:text-blue-600 transition duration-300"
          >
            About
          </a>
          <a
            href="/Contact"
            className="text-gray-800 font-medium hover:text-blue-600 transition duration-300"
          >
            Contact
          </a>
          <a
            href="/GalleryPage"
            className="text-gray-800 font-medium hover:text-blue-600 transition duration-300"
          >
            Gallery
          </a>

          {/* Social Icons */}
          <div className="flex space-x-4">
            <a
              href="https://youtu.be/sde1vh0M0nw?si=fO4oVzK4eBU12Xzn"
              className="text-red-600 hover:text-red-500 transition duration-300"
            >
              <FaYoutube size={22} />
            </a>
            <a
              href="https://www.instagram.com/spardha_sarathi_academy?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
              className="text-pink-500 hover:text-pink-400 transition duration-300"
            >
              <FaInstagram size={22} />
            </a>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-gray-800 focus:outline-none">
            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden fixed top-0 right-0 h-full w-64 bg-white shadow-lg transform ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 ease-in-out`}
      >
        <button
          onClick={toggleMenu}
          className="text-gray-800 focus:outline-none p-4 absolute top-2 right-2"
        >
          <FaTimes size={24} />
        </button>

        <div className="pt-16 flex flex-col items-center space-y-6">
          <a
            href="/"
            className="text-gray-800 text-lg font-medium hover:text-blue-600 transition duration-300"
          >
            Home
          </a>
          <a
            href="/AboutUs"
            className="text-gray-800 text-lg font-medium hover:text-blue-600 transition duration-300"
          >
            About
          </a>
          <a
            href="/Contact"
            className="text-gray-800 text-lg font-medium hover:text-blue-600 transition duration-300"
          >
            Contact
          </a>
          <a
            href="/GalleryPage"
            className="text-gray-800 text-lg font-medium hover:text-blue-600 transition duration-300"
          >
            Gallery
          </a>

          {/* Social Icons */}
          <div className="flex space-x-6 mt-4">
            <a
              href="https://youtu.be/sde1vh0M0nw?si=fO4oVzK4eBU12Xzn"
              className="text-red-600 hover:text-red-500 transition duration-300"
            >
              <FaYoutube size={28} />
            </a>
            <a
              href="https://www.instagram.com/spardha_sarathi_academy?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
              className="text-pink-500 hover:text-pink-400 transition duration-300"
            >
              <FaInstagram size={28} />
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
