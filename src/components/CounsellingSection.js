import React from 'react';

const CounsellingSection = () => {
  return (
    <div className="h-auto flex flex-col md:flex-row items-center justify-center">
      <div className="max-w-4xl bg-white p-8 rounded-lg flex flex-col md:flex-row items-center md:justify-between">
        {/* Left side: Main text */}
        <div className="text-center md:text-left mb-8 md:mb-0">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            Got More Questions? <span className="text-blue-500">We've Got Answers!</span>
          </h1>
          <p className="text-2xl text-gray-600 mb-6">
            Book a Free Counselling Session today.
          </p>

          {/* Button */}
          <button
            onClick={() => window.location.href = 'tel:9448302476'}
            className="bg-blue-500 text-white font-semibold py-3 px-6 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-4 focus:ring-blue-300 transition-all"
          >
            Request to Call Back
          </button>
        </div>

        {/* Right side: Image */}
        <div className="md:hidden">
          {/* Image on small screens (placed at bottom) */}
          <img src="Tech Life.png" alt="Tech Life" className="w-48 h-48 object-contain mx-auto" />
        </div>
        <div className="hidden md:block">
          {/* Larger image on large screens */}
          <img src="Tech Life.png" alt="Tech Life" className="w-96 h-96 object-contain" />
        </div>
      </div>
    </div>
  );
};

export default CounsellingSection;
