import React, { useState } from 'react';
import { FaYoutube, FaInstagram } from 'react-icons/fa';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-gradient-to-r from-blue-600 to-indigo-700 p-4 fixed w-full z-50 lg:pl-24">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center">
          <img src="Spardha-1.jpg" alt="MyLogo" className="h-10 w-auto mr-2" /> {/* Replace with your logo image path */}
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6 mx-32">
          <a href="/" className="text-white hover:text-gray-300">Home</a>
          <a href="/AboutUs" className="text-white hover:text-gray-300">About</a>
          <a href="/Contact" className="text-white hover:text-gray-300">Contact</a>
          <a href="/GalleryPage" className="text-white hover:text-gray-300">Gallery</a>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-white focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}></path>
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden fixed top-0 right-0 h-full bg-gradient-to-r from-blue-600 to-indigo-700 w-64 transform ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        } transition-transform duration-300 ease-in-out`}
      >
        <button
          onClick={toggleMenu}
          className="text-white focus:outline-none p-4 absolute top-0 right-0"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
          </svg>
        </button>

        <div className="pt-20">
          <a href="/" className="block text-white py-2 px-4 hover:bg-blue-700">Home</a>
          <a href="/AboutUs" className="block text-white py-2 px-4 hover:bg-blue-700">About</a>
          <a href="/Contact" className="block text-white py-2 px-4 hover:bg-blue-700">Contact</a>
          <a href="/GalleryPage" className="block text-white py-2 px-4 hover:bg-blue-700">Gallery</a>
          
        </div>

        {/* Follow Us Section at the Bottom */}
        <div className="absolute bottom-0 w-full text-center pb-4">
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
    </nav>
  );
};

export default Navbar;
