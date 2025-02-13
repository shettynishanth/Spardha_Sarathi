"use client";

const HeroSection = () => {
  return (
    <section className="relative flex justify-center items-center text-center py-24 px-6 overflow-hidden bg-[#f9f9f9] shadow-xl">
      <div className="max-w-4xl mx-auto flex flex-col justify-center items-center">
        {/* Title */}
        <h1 className="text-5xl md:text-7xl font-extrabold text-gray-900 leading-tight drop-shadow-lg animate-fade-in font-yatra">
          Achieve Your <span className="text-blue-700">IAS Dreams</span> with Us!
        </h1>

        {/* Subtitle */}
        <p className="text-xl md:text-2xl text-gray-800 mt-4 font-light animate-fade-in delay-100">
          Elevate Your Preparation Journey with Expert Guidance.
        </p>

        {/* Description */}
        <p className="text-gray-700 text-lg md:text-xl mt-6 leading-relaxed max-w-3xl animate-fade-in delay-200">
          At <span className="font-semibold text-gray-900">Spardha Sarathi KAS Academy</span>, we are committed to shaping future civil servants with structured training and mentorship. Learn from <span className="font-semibold text-blue-700">top educators</span> and prepare efficiently for success.
        </p>

        {/* Call to Action Button */}
        <a href="/CounsellingSection">
          <button className="mt-8 px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-semibold text-lg rounded-full shadow-lg">
            Get Free Counseling
          </button>
        </a>
      </div>

      {/* Floating Decorative Elements */}
      {/* <div className="absolute top-10 left-10 w-16 h-16 bg-blue-300 rounded-full opacity-40 "></div> */}
      {/* <div className="absolute bottom-20 right-10 w-20 h-20 bg-blue-400 rounded-full opacity-50 animate-spin-slow"></div> */}
      {/* <div className="absolute top-1/3 right-1/4 w-12 h-12 bg-blue-500 rounded-full opacity-60 animate-ping"></div> */}
      {/* <div className="absolute top-1/3 right-1/4 w-36 h-36 bg-blue-500 rounded-full opacity-40 animate-ping"></div>  */}
      <div className="absolute bottom-1 right-5 w-52 h-52 bg-blue-500 rounded-full opacity-40 animate-ping"></div>


      {/* <div className="absolute top-1/3 right-1/4 w-24 h-24 border-4 border-black rounded-full opacity-60 animate-ping"></div> */}
      
      


      {/* <div className="absolute bottom-1/3 left-1/4 w-14 h-14 bg-blue-600 rounded-full opacity-50 animate-bounce delay-300"></div> */}

      {/* Custom Shape Divider */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none rotate-180">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="relative block w-full h-[150px] md:h-[200px]"
        >
          <path
            d="M0,0V27.35C69.78,43.44,146.26,51,216.31,32c79-22,157.89-62.38,236.35-83,83-22,168.79-22,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0Z"
            fill="currentColor"
            className="text-gray-200"
          ></path>
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;
