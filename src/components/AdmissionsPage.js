import React from "react";
import { motion } from "framer-motion";

const textVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const AdmissionsPage = () => {
  return (
    <div className="relative w-full min-h-[60vh] md:min-h-screen flex flex-col md:flex-row items-center justify-between bg-gradient-to-r from-blue-50 to-blue-100 text-black px-6 md:px-36 pt-24 md:pt-16 overflow-hidden">
      {/* Left Section (Text) */}
      <div className="w-full md:w-1/2 text-center md:text-left px-4 md:px-12 space-y-4 md:space-y-6 relative z-10">
        <motion.h1
          variants={textVariants}
          initial="hidden"
          animate="visible"
          className="text-4xl md:text-6xl font-extrabold mb-4 text-blue-900 leading-tight"
        >
          Admissions Open!
        </motion.h1>
        <motion.p
          variants={textVariants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.5 }}
          className="text-base md:text-xl font-medium text-gray-700 mb-4 md:mb-6"
        >
          Join <span className="text-blue-700 font-semibold">Spardha Sarathi Academy</span> and kickstart your government exam preparation with expert faculty & structured courses.
        </motion.p>

        {/* Apply Button */}
        <motion.a
          href="/StudentForm"
          variants={textVariants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.4 }}
          className="inline-block px-8 py-3 bg-blue-600 text-white text-lg md:text-xl font-semibold rounded-full shadow-lg hover:bg-blue-700 transition duration-300 transform hover:scale-105"
        >
          Apply Now
        </motion.a>

        {/* Additional Info */}
        <motion.p
          variants={textVariants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.6 }}
          className="text-sm md:text-base text-gray-600"
        >
          Limited seats available! Enroll now to secure your spot.
        </motion.p>
      </div>

      {/* Right Section (Image) */}
      <div
        className="w-full md:w-1/2 flex justify-center md:justify-end mt-8 md:mt-0 relative z-10"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.8 }}
      >
        <div className="relative w-56 md:w-[400px] lg:w-[450px]">
          <img
            src="/image.png"
            alt="Admissions"
            className="w-full h-auto max-w-full"
          />
        </div>
      </div>
    </div>
  );
};

export default AdmissionsPage;
