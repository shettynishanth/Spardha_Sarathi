import React, { useState } from "react";
import { FaYoutube, FaInstagram, FaWhatsapp, FaBars, FaTimes, FaChevronDown } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isAboutOpen, setIsAboutOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    setIsAboutOpen(false);
  };

  const toggleAboutMenu = () => {
    setIsAboutOpen(!isAboutOpen);
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
          <div className="flex items-center space-x-8">
            <a href="/" className="nav-link">
              Home
            </a>
            
            {/* About Dropdown */}
            <div className="relative group">
              <button className="nav-link flex items-center">
                About
                <FaChevronDown className="ml-1 text-sm" />
              </button>
              <div className="absolute hidden group-hover:block bg-white shadow-lg rounded-lg py-2 w-48">
                <a href="/AboutUs" className="dropdown-link">
                  About Us
                </a>
                <a href="/FoundersVision" className="dropdown-link">
                  Founder Message
                </a>
                <a href="/LectureProfiles" className="dropdown-link">
                  Faculty
                </a>
              </div>
            </div>

            <a href="/ResultPage" className="nav-link">
              Results
            </a>
            <a href="/FacilitiesPage" className="nav-link">
              Facilities
            </a>
            <a href="/Contact" className="nav-link">
              Contact
            </a>
            <a href="/GalleryPage" className="nav-link">
              Gallery
            </a>
          </div>

          {/* Login Buttons and Social Icons */}
          <div className="flex items-center space-x-6 ml-4">
            <div className="flex space-x-3 border-l border-gray-200 pl-6">
              <a
                href="/StudentLogin"
                className="bg-gradient-to-br from-blue-600 to-blue-700 text-white px-4 py-2 rounded-lg 
                         hover:from-blue-700 hover:to-blue-800 transition-all duration-300 shadow-sm
                         hover:shadow-md hover:-translate-y-0.5 text-sm font-medium flex items-center"
              >
                Student Login
              </a>
              <a
                href="/StaffLogin"
                className="bg-gradient-to-br from-green-600 to-green-700 text-white px-4 py-2 rounded-lg 
                         hover:from-green-700 hover:to-green-800 transition-all duration-300 shadow-sm
                         hover:shadow-md hover:-translate-y-0.5 text-sm font-medium flex items-center"
              >
                Staff Login
              </a>
            </div>
            
            <div className="flex space-x-4 border-l border-gray-200 pl-6">
              <SocialIcon href="https://youtu.be/sde1vh0M0nw?si=fO4oVzK4eBU12Xzn" color="text-red-600">
                <FaYoutube size={22} />
              </SocialIcon>
              <SocialIcon href="https://www.instagram.com/spardha_sarathi_academy" color="text-pink-500">
                <FaInstagram size={22} />
              </SocialIcon>
              <SocialIcon href="https://wa.me/7019130402" color="text-green-500">
                <FaWhatsapp size={22} />
              </SocialIcon>
            </div>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center space-x-4">
          {/* <div className="flex space-x-2">
            <a
              href="/student-login"
              className="bg-blue-600 text-white px-3 py-1.5 rounded-md text-sm font-medium shadow-sm hover:bg-blue-700 transition-colors"
            >
              Student Login
            </a>
            <a
              href="/staff-login"
              className="bg-green-600 text-white px-3 py-1.5 rounded-md text-sm font-medium shadow-sm hover:bg-green-700 transition-colors"
            >
              Staff Login
            </a>
          </div> */}
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

        <div className="pt-16 flex flex-col space-y-4 px-4">
          <a href="/" className="mobile-nav-link">
            Home
          </a>
          
          {/* About Submenu */}
          <div className="flex flex-col">
            <button onClick={toggleAboutMenu} className="mobile-nav-link flex justify-between items-center">
              About
              <FaChevronDown className={`transform transition-transform ${isAboutOpen ? 'rotate-180' : ''}`} />
            </button>
            <div className={`pl-4 overflow-hidden ${isAboutOpen ? 'max-h-40' : 'max-h-0'} transition-all duration-300`}>
              <a href="/AboutUs" className="mobile-sub-link">
                About Us
              </a>
              <a href="/FoundersVision" className="mobile-sub-link">
                Founder Message
              </a>
              <a href="/LectureProfiles" className="mobile-sub-link">
                Faculty
              </a>
            </div>
          </div>

          <a href="/ResultPage" className="mobile-nav-link">
            Results
          </a>
          <a href="/FacilitiesPage" className="mobile-nav-link">
            Facilities
          </a>
          <a href="/Contact" className="mobile-nav-link">
            Contact
          </a>
          <a href="/GalleryPage" className="mobile-nav-link">
            Gallery
          </a>

          {/* Mobile Login Buttons */}
          <div className="flex flex-col space-y-3 mt-4">
            <a
              href="/StudentLogin"
              className="bg-blue-600 text-white text-center py-2.5 rounded-lg
                       hover:bg-blue-700 transition-colors font-medium shadow-sm"
            >
              Student Login
            </a>
            <a
              href="/StaffLogin"
              className="bg-green-600 text-white text-center py-2.5 rounded-lg
                       hover:bg-green-700 transition-colors font-medium shadow-sm"
            >
              Staff Login
            </a>
          </div>

          {/* Social Icons */}
          <div className="flex space-x-6 mt-8 justify-center">
            <SocialIcon href="https://youtu.be/sde1vh0M0nw?si=fO4oVzK4eBU12Xzn" color="text-red-600">
              <FaYoutube size={28} />
            </SocialIcon>
            <SocialIcon href="https://www.instagram.com/spardha_sarathi_academy" color="text-pink-500">
              <FaInstagram size={28} />
            </SocialIcon>
            <SocialIcon href="https://wa.me/7019130402" color="text-green-500">
              <FaWhatsapp size={28} />
            </SocialIcon>
          </div>
        </div>
      </div>
    </nav>
  );
};

// Reusable components
const SocialIcon = ({ href, color, children }) => (
  <a
    href={href}
    className={`${color} hover:opacity-75 transition duration-300`}
    target="_blank"
    rel="noopener noreferrer"
  >
    {children}
  </a>
);

const NavLink = ({ href, children }) => (
  <a
    href={href}
    className="text-gray-800 font-medium hover:text-blue-600 transition duration-300 px-3 py-2"
  >
    {children}
  </a>
);

export default Navbar;

