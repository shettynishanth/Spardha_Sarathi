import React from 'react';

const AboutUs = () => {
  return (
    <>
      {/* Main About Us Section */}
      <div className="max-w-7xl mx-auto px-6 py-16 md:py-24 bg-gray-50">
        {/* Heading Section */}
        <h1 className="text-3xl md:text-5xl font-extrabold text-center text-gray-900 mb-8 tracking-tight uppercase relative">
          Our Introduction
          <span className="block w-24 h-1 mx-auto bg-blue-800 mt-2"></span>
        </h1>

        {/* Welcome Section */}
        <h2 className="text-2xl md:text-4xl font-bold text-center text-blue-800 mb-6">
          Welcome to Spardha Sarathi KAS Academy, Kundapura
        </h2>

        {/* Introductory Text */}
        <p className="text-lg text-gray-700 text-center leading-relaxed max-w-3xl mx-auto">
          At <span className="font-semibold text-blue-900">Spardha Sarathi KAS Academy</span>, we are dedicated to shaping future civil servants through
          comprehensive training and mentorship. Our experienced educators and professionals provide a holistic approach to KAS exam preparation.
        </p>

        <p className="text-lg text-gray-700 text-center leading-relaxed max-w-3xl mx-auto mt-4">
          Our mission is to empower students with the knowledge and skills they need to excel in public service careers. We foster a supportive learning
          environment that encourages critical thinking, creativity, and personal growth.
        </p>

        {/* Founder's Section */}
        <div className="mt-16 lg:flex lg:items-center lg:space-x-12">
          {/* Founder Image */}
          <div className="flex justify-center lg:w-1/3">
            <img
              className="rounded-lg shadow-lg border-2 border-gray-200 transition-transform transform hover:scale-105 w-64 h-64 object-cover"
              src="/Snapinsta.jpg"
              alt="Adarsh Kela"
              loading="lazy"
            />
          </div>

          {/* Founder’s Thoughts */}
          <div className="lg:w-2/3 mt-6 lg:mt-0">
            <h2 className="text-3xl font-bold text-gray-900 text-center lg:text-left mb-6">
              Founder's Thoughts
            </h2>
            <div className="text-lg text-gray-700 leading-relaxed text-center lg:text-left">
              <p className="mb-4">
                <span className="font-semibold">Spardha Sarathi KAS Academy Kundapura</span> has been a guiding force for thousands of students pursuing careers
                in IAS, KAS, SSC, IBPS, RRB, and other competitive exams. We focus on expert guidance, top-tier study materials, and a well-rounded approach to success.
              </p>
              <p className="mb-4">
                Our institution is committed to delivering excellence in education, whether in learning environments, study materials, or test series. We strive to nurture
                the potential of our students and guide them towards their career aspirations.
              </p>
              <p className="font-semibold text-blue-900 text-center lg:text-left mt-6">
                "Empowering future leaders, one student at a time."
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutUs;
