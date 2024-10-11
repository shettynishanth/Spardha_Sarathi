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
      name: 'ಅನ್ವಿತಾ ಆಚಾರ್ KAS ಅಭ್ಯರ್ಥಿ',
      opinion:
        'ಪರೀಕ್ಷೆಗೆ ತಯಾರಾಗುವುದಕ್ಕೆ ಹೇಗೆ ಓದಬೇಕು..? ಎನ್ನುವಬೋಧನೆಯ ಜೊತೆಗೆ ಜೀವನದ ಮೌಲ್ಯಗಳನ್ನು ನೀಡುವ ಮತ್ತು ಧ್ಯಾನ, ಮೌನದ ಮೂಲಕ ಓದಿಸಿ ಗುರಿಯೆಡೆಗೆ ಪ್ರೇರೆಪಿಸುವ ಸಂಸ್ಥೆ ಎಂದರೆ ಸ್ಪರ್ಧಾ ಸಾರಥಿ.',
      photo: '/images/john.jpg',
    },
    {
      name: 'ದರ್ಶನ್ PSI ಅಭ್ಯರ್ಥಿ',
      opinion:
        'ಸ್ಪರ್ಧಾ ಸಾರಥಿ ಅಕಾಡೆಮಿಗೆ ಸೇರುವುದಕ್ಕೆ ಮುಂಚೆ ಪೊಲೀಸ್ ಸಬ್‌ಇನ್ಸ್‌ಪೆಕ್ಟರ್ - ಆದ್ದೇಕು ಅನ್ನೋದು ನನ್ನ ಕನಸಾಗಿತ್ತು...',
      photo: '/images/jane.jpg',
    },
    {
      name: '-ರಕ್ಷಿತಾ ಕೆಳಸುಂಕ KAS ಅಭ್ಯರ್ಥಿ',
      opinion: 'ಸ್ಪರ್ಧಾ ಸಾರಥಿ ನಿಜಕ್ಕೂ ನೈತಿಕ ಮೌಲ್ಯಗಳನ್ನು ತುಂಬಿದ ಅಧಿಕಾರಿಗಳನ್ನು ತಯಾರಿ ಮಾಡುವ ಫ್ಯಾಕ್ಟರಿ ಇದು. ಇಲ್ಲಿನ ವಿನೂತನ ಪರಿಕಲ್ಪನೆ ನಮ್ಮನ್ನು ದಿನಗಟ್ಟಲೇ ಕೂತು ಓದುವ ಹಾಗೆ ಮಾಡಿದೆ.',
      photo: '/images/jane.jpg',
    },
    {
      name: 'ರಕ್ಷಿತಾ ಸ್ಪರ್ಧಾ ಸಾರಥಿ ಅಕಾಡೆಮಿ',
      opinion: 'ಅಬ್ಬಾ! ಈ ತರ ಒಂದು ಕೋಚಿಂಗ್ ಅಕಾಡೆಮಿ ಇರುತ್ತೆ ಅನ್ನುವ ಕಲ್ಪನೆಯೂ ನಮಗೆ ಇರಲಿಲ್ಲ!.',
      photo: '/images/adarsh.jpg',
    },
    {
      name: 'ಶಾರ್ವರಿ ಸ್ಪರ್ಧಾ ಸಾರಥಿ ಅಕಾಡೆಮಿ',
      opinion: 'ಡಿಗ್ರಿ ನಂತರ ಮುಂದೇನು ಎಂಬ ನನ್ನ ಪ್ರಶ್ನೆಗೆ MBA ಮತ್ತು ಸ್ಪರ್ಧಾತ್ಮಕ ಪರೀಕ್ಷೆ. ಸ್ಪರ್ಧಾತ್ಮಕ ಪರೀಕ್ಷೆಗೆ ತಯಾರಾಗಲು ಪ್ರಚೋದಿಸಿತು.',
      photo: '/images/jane.jpg',
    },
    // Add other students...
  ];

  const bgColors = [
    'bg-gradient-to-r from-blue-100 to-blue-300',
    'bg-gradient-to-r from-green-100 to-green-300',
    'bg-gradient-to-r from-purple-100 to-purple-300',
  ]; // Gradient backgrounds
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
      <div className="relative overflow-x-auto">
        <div
          ref={scrollRef}
          className="flex transition-transform duration-500 ease-in-out space-x-6"
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
