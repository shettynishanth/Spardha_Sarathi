"use client";
import React, { useRef, useEffect, useState } from "react";

// Custom Hook for Intersection Observer
const useOnScreen = (options) => {
  const ref = useRef();
  const [isIntersecting, setIntersecting] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIntersecting(entry.isIntersecting),
      options
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.unobserve(ref.current);
  }, [ref, options]);

  return [ref, isIntersecting];
};

const KeyFeaturesSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-6">
        {/* Title Section */}
        <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 text-center mb-12">
          Why Choose <span className="text-blue-600">Spardha Sarathi?</span>
          <br />
          <span className="text-gray-600 text-xl sm:text-2xl">
            ಸ್ಪರ್ಧಾ ಸರಥಿಯನ್ನು ಯಾಕೆ ಆಯ್ಕೆ ಮಾಡಬೇಕು ?
          </span>
        </h2>

        {/* Features Grid */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {features.map((feature, index) => (
            <Feature
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              delay={index * 200}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

const Feature = ({ icon, title, description, delay }) => {
  const [ref, visible] = useOnScreen({ threshold: 0.1 });

  return (
    <div
      ref={ref}
      className={`relative p-8 bg-white border border-gray-200 rounded-xl shadow-md text-center transform transition-all duration-700 ease-out ${
        visible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
      } hover:shadow-lg hover:-translate-y-2`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {/* Icon */}
      <div className="relative mx-auto w-24 h-24 overflow-hidden rounded-full border-4 border-blue-500 shadow-lg">
        <img src={icon} alt={title} className="w-full h-full object-cover" />
      </div>

      {/* Title */}
      <h3 className="mt-6 text-2xl font-semibold text-gray-800">{title}</h3>

      {/* Description */}
      <p className="mt-4 text-gray-600 text-lg leading-relaxed">{description}</p>

      {/* Hover Glow Effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-50 to-transparent opacity-0 hover:opacity-40 transition-opacity duration-500 rounded-xl"></div>
    </div>
  );
};

// Features Data
const features = [
  {
    icon: "/two-happy.jpg",
    title: "Personalized Coaching",
    description:
      "Tailored coaching adapts to your learning needs, guiding you to overcome challenges and achieve your academic goals.",
  },
  {
    icon: "/yoga.jpg",
    title: "Meditation with Learning",
    description:
      "Enhance focus, reduce stress, and improve academic performance by integrating mindfulness into your studies.",
  },
  {
    icon: "/portrait-teacher.jpg",
    title: "Experienced Teaching Staff",
    description:
      "Learn from IAS professionals from Bangalore and Dharwad, bringing real-world expertise to help you succeed.",
  },
  {
    icon: "/happy-partnershp.jpg",
    title: "Community Support",
    description:
      "Join a supportive learning community, connect with peers, share insights, and receive encouragement.",
  },
];

export default KeyFeaturesSection;
