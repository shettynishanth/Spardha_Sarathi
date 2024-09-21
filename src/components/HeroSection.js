"use client";

const HeroSection = () => {
  return (
    <section className="relative bg-gradient-to-r from-blue-600 to-indigo-700 flex justify-center items-center text-center pt-10 ">
      <div className="max-w-3xl mx-auto px-4 py-16 flex flex-col justify-center items-center">
        {/* Title */}
        <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-6 leading-tight transform transition duration-500 hover:scale-105 hover:text-gray-300">
          Spardha Sarathi KAS Academy<br /> Kundapura
        </h1>

        {/* Subtitle */}
        <p className="text-xl md:text-3xl text-white mb-8 font-light transform transition duration-500 hover:scale-105 hover:text-gray-300">
          Elevating Your Preparation Journey
        </p>

        {/* Description */}
        <p className="text-white text-lg md:text-xl mb-8 leading-relaxed transform transition duration-500 hover:scale-105 hover:text-gray-300">
        At Spardha Sarathi KAS Academy, we are dedicated to shaping the future of aspiring civil servants through comprehensive training and mentorship. With a team of experienced educators and professionals, we offer a holistic approach to preparing candidates for the IAS exams.        </p>

        {/* Call to Action Button */}
        <a href="/CounsellingSection">
          <button className="mt-6 px-8 py-3 bg-white text-blue-600 font-semibold text-lg rounded-full transform transition duration-300 hover:scale-105 hover:bg-gray-200">
            Contact
          </button>
        </a>
      </div>

      {/* Custom Shape Divider */}
      <div className="custom-shape-divider-bottom-1725514428 absolute bottom-0 left-0 w-full overflow-hidden leading-none rotate-180">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="relative block w-[200%] h-[100px] md:w-[140%] md:h-[200px]"
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            className="shape-fill"
          ></path>
        </svg>
      </div>

      {/* White Line at Bottom */}
      <div className="white-line"></div>
    </section>
  );
};

export default HeroSection;
