import React, { useState, useEffect, useRef } from 'react';

const StudentOpinionCard = ({ student, bgColor }) => {
  return (
    <div
      className={`min-w-[280px] md:min-w-[300px] lg:min-w-[320px] ${bgColor} rounded-lg shadow-lg mx-4 transform transition-transform hover:scale-105`}
    >
      <div className="flex flex-col items-center p-6">
        {/* Rounded photo */}
        <img
          className="w-20 h-20 rounded-full mb-4 object-cover border-2 border-gray-300 shadow-md"
          src={student.photo}
          alt={`${student.name}'s photo`}
        />
        <h3 className="text-lg font-semibold mb-2 text-center">{student.name}</h3>
        {/* Adjust min height dynamically */}
        <p className={`text-gray-700 text-center min-h-[60px] text-sm`}>
          {student.opinion}
        </p>
      </div>
    </div>
  );
};

const StudentOpinions = () => {
  const students = [
    {
      name: 'John Doe',
      opinion: 'This program has changed my life! I have learned so much.',
      photo: '/images/john.jpg',
    },
    {
      name: 'Jane Smith',
      opinion: 'The instructors are fantastic, and the community is supportive. I really appreciate the way they teach.',
      photo: '/images/jane.jpg',
    },
    {
      name: 'Adarsh Kela',
      opinion: 'I love the interactive sessions and hands-on projects. These sessions provide great practical knowledge.',
      photo: '/images/adarsh.jpg',
    },
  ];

  const bgColors = ['bg-gradient-to-r from-blue-100 to-blue-300', 'bg-gradient-to-r from-green-100 to-green-300', 'bg-gradient-to-r from-purple-100 to-purple-300']; // Gradient backgrounds
  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % students.length);
    }, 3000); // Change every 3 seconds for better readability

    return () => clearInterval(interval);
  }, [students.length]);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTo({
        left: scrollRef.current.clientWidth * currentIndex,
        behavior: 'smooth',
      });
    }
  }, [currentIndex]);

  return (
    <div className="container mx-auto px-6 py-12">
      <h2 className="text-4xl font-bold mb-8 text-center text-gray-800">
        What Our Students Say
      </h2>
      <div className="relative overflow-hidden">
        <div
          ref={scrollRef}
          className="flex transition-transform duration-500 ease-in-out"
          style={{ width: '100%', overflowX: 'scroll' }}
        >
          {students.map((student, index) => (
            <StudentOpinionCard
              key={index}
              student={student}
              bgColor={bgColors[index % bgColors.length]}
            />
          ))}
        </div>
      </div>
      {/* Optional: Add dots or navigation */}
      <div className="flex justify-center mt-6">
        {students.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full mx-1 ${
              index === currentIndex ? 'bg-blue-500' : 'bg-gray-300'
            }`}
            onClick={() => setCurrentIndex(index)}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default StudentOpinions;
