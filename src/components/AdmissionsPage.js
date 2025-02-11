import React from "react";

const AdmissionsPage = () => {
  return (
    <div className="relative w-full min-h-[60vh] md:min-h-screen flex flex-col md:flex-row items-center justify-between bg-gradient-to-r from-blue-50 to-blue-100 text-black px-6 md:px-36 pt-16 md:pt-16 overflow-hidden">
      {/* Left Section (Text) */}
      <div className="w-full md:w-1/2 text-center md:text-left px-4 md:px-12 space-y-4 md:space-y-6 relative z-10">
        <h1 className="text-4xl md:text-6xl font-extrabold mb-4 text-blue-900 leading-tight animate-fade-in">
          Admissions Open!
        </h1>
        <p className="text-base md:text-xl font-medium text-gray-700 mb-4 md:mb-6 animate-fade-in delay-100">
          Join{" "}
          <span className="text-blue-700 font-semibold">
            Spardha Sarathi Academy
          </span>{" "}
          and kickstart your government exam preparation with expert faculty &
          structured courses.
        </p>

        {/* Apply Button */}
        <a
          href="/apply"
          className="inline-block px-8 py-3 bg-blue-600 text-white text-lg md:text-xl font-semibold rounded-full shadow-lg hover:bg-blue-700 transition duration-300 transform hover:scale-105 animate-fade-in delay-200"
        >
          Apply Now
        </a>

        {/* Additional Info */}
        <p className="text-sm md:text-base text-gray-600 animate-fade-in delay-300">
          Limited seats available! Enroll now to secure your spot.
        </p>
      </div>

      {/* Right Section (Image) */}
      <div className="w-full md:w-1/2 flex justify-center md:justify-end mt-8 md:mt-0 relative z-10">
        <div className="relative w-56 md:w-[400px] lg:w-[450px]">
          <img
            src="/image.png" 
            alt="Admissions"
            className="w-full h-auto max-w-full"
          />
        </div>
      </div>

      {/* Floating Decorative Elements */}
      <div className="absolute top-10 left-0 w-20 h-20 bg-blue-300 rounded-full opacity-40 animate-float"></div>
      <div className="absolute bottom-10 right-0 w-28 h-28 bg-blue-400 rounded-full opacity-40 animate-float delay-300"></div>
      <div className="absolute top-1/3 right-1/3 w-16 h-16 bg-blue-500 rounded-full opacity-30 animate-float delay-600"></div>
      <div className="absolute bottom-1/3 left-1/4 w-20 h-20 bg-blue-600 rounded-full opacity-30 animate-float delay-900"></div>

      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-100 to-transparent z-0"></div>

      {/* Animated Background Shapes */}
      <div className="absolute top-0 left-0 w-32 h-32 bg-blue-200 rounded-full opacity-20 animate-move-x"></div>
      <div className="absolute bottom-0 right-0 w-40 h-40 bg-blue-300 rounded-full opacity-20 animate-move-y"></div>
    </div>
  );
};

export default AdmissionsPage;
