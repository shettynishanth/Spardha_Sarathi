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
    if (ref.current) {
      observer.observe(ref.current);
    }
    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [ref, options]);

  return [ref, isIntersecting];
};

const KeyFeaturesSection = () => {
  return (
    <section className="bg-gray-100 py-16">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-gray-800 text-center">
          Why Choose Spardha Sarathi?
        </h2>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <Feature
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              delay={index * 300} // Adding delay for staggered effect
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
      className={`text-center transform transition-transform duration-700 ease-out ${
        visible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <img src={icon} alt={title} className="mx-auto h-44 w-44 rounded-full" />
      <h3 className="mt-4 text-xl font-semibold text-gray-800">{title}</h3>
      <p className="mt-2 text-gray-600">{description}</p>
    </div>
  );
};

// Feature data
const features = [
  {
    icon: "/two-happy.jpg",
    title: "Personalized Coaching",
    description:
      "Tailored coaching that adapts to your learning needs, guiding you to overcome challenges and reach your academic goals.",
  },
  {
    icon: "/yoga.jpg",
    title: "Meditation with Learning",
    description:
      "Incorporate mindfulness and meditation practices into your learning journey to enhance focus, reduce stress, and improve overall academic performance.",
  },
  {
    icon: "/portrait-teacher.jpg",
    title: "Experienced Teaching Staff",
    description:
      "Learn from a distinguished team of IAS professionals from Bangalore and Dharwad, bringing a wealth of knowledge and real-world experience to guide your success.",
  },
  {
    icon: "/happy-partnershp.jpg",
    title: "Community Support",
    description:
      "Join a vibrant and supportive community where you can connect with peers, share insights, and receive encouragement throughout your learning journey.",
  },
];

export default KeyFeaturesSection;
