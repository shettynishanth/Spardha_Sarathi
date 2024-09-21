import React from 'react';

const CounsellingSection = () => {
  return (
    <div className="h-96 flex items-center justify-center">
      <div className="max-w-2xl bg-white p-8 rounded-lg  text-center">
        {/* Main text */}
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
    </div>
  );
};

export default CounsellingSection;
