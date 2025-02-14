import React from "react";

const AboutSection = () => {
  const aboutItems = [
    {
      img: "/college-mates.jpg",
      title: "Experienced Faculty",
      desc: "Learn from top educators and IAS professionals from Bangalore and Dharwad.",
    },
    {
      img: "/public-examination.jpg",
      title: "Comprehensive Study Material",
      desc: "Get well-structured resources, notes, and guidance to excel in KAS exams.",
    },
    {
      img: "/success.jpg",
      title: "Success Stories",
      desc: "Join our achievers who have successfully cleared KAS with top ranks.",
    },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-6">
        {/* Heading Section */}
        <div className="text-center">
          <h2 className="text-4xl font-extrabold text-gray-900">
            About Spardha Sarathi KAS Academy
          </h2>
          <p className="mt-4 text-lg text-gray-700 max-w-2xl mx-auto">
            We provide top-quality coaching, expert mentorship, and essential
            resources to help aspirants achieve their dreams.
          </p>
        </div>

        {/* Card Layout */}
        <div className="mt-12 flex flex-col md:flex-row gap-8 justify-center">
          {aboutItems.map((item, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-lg flex-1 transform transition duration-500 hover:scale-105"
            >
              <img
                src={item.img}
                alt={item.title}
                className="h-40 w-40 mx-auto rounded-full object-cover"
              />
              <h3 className="mt-4 text-xl font-semibold text-gray-900 text-center">
                {item.title}
              </h3>
              <p className="text-gray-600 mt-2 text-center">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
