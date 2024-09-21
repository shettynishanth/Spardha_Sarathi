import React from 'react';


const AboutUs = () => {
  return (
    <>
      {/* Main About Us Section */}
      <div className="max-w-7xl mx-auto p-10 pt-28">
        {/* Heading Section */}
        <h1 className="text-3xl font-extrabold text-center text-gray-900 mb-6 tracking-tight uppercase">
          Our Introduction
        </h1>
        <h2 className="text-3xl font-semibold text-center text-blue-800 mb-4">
          Welcome to  Spardha Sarathi KAS Academy<br /> Kundapura
        </h2>

        {/* Introductory Text */}
        <p className="text-lg text-gray-600 mb-4 text-center leading-relaxed">
          At <span className="font-semibold text-blue-900"> Spardha Sarathi KAS Academy</span>, we are dedicated to shaping the future of aspiring civil servants through
          comprehensive training and mentorship. With a team of experienced educators and
          professionals, we offer a holistic approach to preparing candidates for the IAS exams.
        </p>
        <p className="text-lg text-gray-600 mb-8 text-center leading-relaxed">
          Our mission is to empower students with the knowledge and skills they need to succeed
          in their pursuit of a career in public service. We believe in fostering a supportive
          learning environment that encourages critical thinking, creativity, and personal growth.
        </p>
        
        <div className='justify-center lg:justify-between items-start mt-32' >
        {/* Founder Section */}
        <h2 className="text-3xl font-bold mb-4 text-gray-900 justify-center lg:text-center">
              Founder's Thoughts
            </h2>
        <div className="flex flex-wrap ">
       
          {/* Image Section */}
          <div className="w-full lg:w-1/3 mb-6">
            <div className="max-w-xs mx-auto">
              <img
                className="rounded-lg shadow-lg border-2 border-gray-200 transition-transform transform hover:scale-105"
                src="/Snapinsta.jpg"
                alt="Adarsh Kela"
                loading="lazy"
              />
              <h2 className="text-2xl font-bold mt-4 text-center text-gray-800">
                Adarsh Kela
              </h2>
            </div>
          </div>

          {/* Founder’s Thoughts */}
          <div className="w-full lg:w-2/3 lg:pl-8 mx-auto">
  <div className="text-lg text-gray-700 leading-relaxed text-center lg:text-left p-6 lg:p-10">
    <p className="mb-6">
      It is our privilege to introduce <span className="font-semibold">Spardha Sarathi KAS Academy Kundapura</span>, a distinguished leader in preparing thousands of students for esteemed government careers, including IAS, KAS, SSC, IBPS, RRB, and other competitive exams. Over the years, we have become the premier choice for young aspirants seeking to excel in these challenging examinations.
    </p>
    <p className="mb-6">
      We recognize that past exam papers offer invaluable insights into exam patterns. However, true success stems from a well-rounded approach—focused preparation under expert guidance, supplemented by comprehensive study materials and top-tier library resources. This combination simplifies the path to achievement.
    </p>
    <p className="mb-6">
      At <span className="font-semibold">Spardha Sarathi KAS Academy Kundapura</span>, we are dedicated to delivering excellence in every aspect of your journey, whether it be the learning environment, the caliber of instruction, the quality of study materials, the rigor of test series, or the depth of guidance and information provided. For over a decade, our institution has set an unwavering benchmark of success, and with our innovative methodologies and relentless dedication, we will continue to lead the way in delivering high-quality education.
    </p>
    <p>
      We believe the potential and drive within our students must be nurtured, guided, and channeled in the right direction. Together, we strive not only to help our students achieve their career aspirations but to also empower them to be impactful individuals in society. By investing in their success, we contribute to a brighter future for all.
    </p>
  </div>
</div>

        
          </div></div>
      </div>

    
      
    </>
  );
};

export default AboutUs;
