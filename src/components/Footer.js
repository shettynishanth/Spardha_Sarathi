import React from "react";
import { FaEnvelope, FaInstagram, FaYoutube, FaArrowUp } from "react-icons/fa";
import { motion } from "framer-motion";
import {  FaGithub, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <footer className="relative bg-gradient-to-b from-gray-900 to-gray-800 text-gray-300 pt-20 pb-12 px-6 md:px-16">
      {/* Wave Shape Divider */}
      <div className="absolute top-0 left-0 w-full overflow-hidden transform -translate-y-1">
        <svg viewBox="0 0 1440 150" className="w-full h-24">
          <path fill="currentColor" 
                d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,122.7C672,117,768,139,864,149.3C960,160,1056,160,1152,138.7C1248,117,1344,75,1392,53.3L1440,32L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z" 
                className="text-gray-900"></path>
        </svg>
      </div>

      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* About Us Section */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center md:text-left"
          >
            <h3 className="text-xl font-bold text-white mb-4 flex items-center justify-center md:justify-start">
        <span className="text-white">About Us</span>
      </h3>
            <p className="text-sm leading-relaxed mb-4">
              Premier institute dedicated to coaching students for competitive exams at state and national levels.
            </p>
            <div className="flex space-x-4 justify-center md:justify-start">
              <img 
                src="/path-to-awards-badge.png" 
                alt="Award Badge" 
                className="h-12 w-auto opacity-80 hover:opacity-100 transition-opacity"
              />
              <img 
                src="/path-to-certification.png" 
                alt="Certification" 
                className="h-12 w-auto opacity-80 hover:opacity-100 transition-opacity"
              />
            </div>
          </motion.div>

          {/* Address Section */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-center"
          >
            <h3 className="text-xl font-bold text-white mb-4">
        <span className="text-white">Our Campus</span>
      </h3>
            <div className="relative group">
              <div className="text-sm leading-relaxed space-y-2">
                <p>196-5, 6th ward,</p>
                <p>Kundapura Main Rd,</p>
                <p>Old Bustand, near Municipality</p>
                <p>Kundapura, Karnataka 576201</p>
              </div>
              <a 
                href="https://maps.app.goo.gl/your-google-maps-link" 
                target="_blank" 
                rel="noopener noreferrer"
                className="mt-3 inline-flex items-center text-blue-400 hover:text-blue-300 text-sm"
              >
                View on Map →
              </a>
            </div>
          </motion.div>

          {/* Contact Section */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-center"
          >
            <h3 className="text-xl font-bold text-white mb-4">
        <span className="text-white">Connect</span>
      </h3>
            <div className="space-y-2 text-sm">
              <div className="hover:bg-gray-800 rounded-lg p-2 transition-colors">
                <a href="tel:+917019130402" className="flex items-center justify-center gap-2">
                  <span>+91 7019130402</span>
                </a>
              </div>
              <div className="hover:bg-gray-800 rounded-lg p-2 transition-colors">
                <a href="tel:+919448302476" className="flex items-center justify-center gap-2">
                  <span>+91 9448302476</span>
                </a>
              </div>
              <div className="hover:bg-gray-800 rounded-lg p-2 transition-colors">
                <a href="mailto:spardhasarathi@gmail.com" className="flex items-center justify-center gap-2">
                  <FaEnvelope className="flex-shrink-0" />
                  <span>spardhasarathi@gmail.com</span>
                </a>
              </div>
            </div>
          </motion.div>

          {/* Social Media Section */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="text-center"
          >
            <h3 className="text-xl font-bold text-white mb-4">
        <span className="text-white">Follow Us</span>
      </h3>
            <div className="flex justify-center space-x-6">
              <motion.a
                whileHover={{ scale: 1.1 }}
                href="https://youtu.be/sde1vh0M0nw?si=fO4oVzK4eBU12Xzn"
                className="text-red-600 hover:text-red-500 bg-white rounded-full p-2 shadow-lg"
              >
                <FaYoutube size={28} />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.1 }}
                href="https://www.instagram.com/spardha_sarathi_academy"
                className="text-pink-500 hover:text-pink-400 bg-white rounded-full p-2 shadow-lg"
              >
                <FaInstagram size={28} />
              </motion.a>
            </div>
          </motion.div>
        </div>

        {/* Copyright Section */}
        <div className="border-t border-gray-800 pt-8 text-center">
          <div className="mb-4">
            <p className="text-sm">
              © 2024 Spardha Sarathi KAS Academy. All rights reserved.
            </p>
          </div>

         {/* Developer Info */}
          <div className="flex flex-col items-center justify-center   space-y-4">
            <div className="flex items-center space-x-3 group">
              <span className="text-sm font-medium text-gray-400/80">
                Crafted with
              </span>
              <div className="animate-pulse text-red-400">❤️</div>
              <span className="text-sm font-medium text-gray-400/80">
                by Spardha Sarathi Team
              </span>
            </div>

            <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6">
              <div className="flex items-center space-x-4">
                <a
                  href="/AdminLogin"
                  className="relative font-medium text-blue-300 hover:text-blue-200 transition-colors duration-200"
                >
                  <span className="px-3 py-1.5 rounded-full bg-blue-500/20 backdrop-blur-sm border border-blue-400/30">
                    Admin Portal
                  </span>
                  <span className="absolute -right-3 -top-2 text-xs text-blue-400 opacity-0 group-hover:opacity-100 transition-opacity">
                    ↗
                  </span>
                </a>
              </div>

              <div className="hidden md:block w-px h-6 bg-white/10"></div>

              <div className="flex items-center space-x-4">
                <a
                  href="mailto:shettynishanth100@gmail.com"
                  className="text-sm font-medium text-gray-400 hover:text-cyan-300 transition-colors duration-200 underline-offset-4 hover:underline"
                >
                  Contact Support
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Back to Top Button */}
        <motion.button
          whileHover={{ scale: 1.1 }}
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 bg-gradient-to-br from-blue-400 to-green-400 text-white p-3 rounded-full shadow-xl z-50"
        >
          <FaArrowUp size={24} />
        </motion.button>
      </div>
    </footer>
  );
};

export default Footer;
