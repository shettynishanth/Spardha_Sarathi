import React from "react";
import { FaTrophy, FaShareAlt, FaRegClock, FaBookOpen } from "react-icons/fa";
import { IoRibbon } from "react-icons/io5";

const students = [
  {
    name: "Rahul Sharma",
    exam: "KAS 2024",
    photo: "https://via.placeholder.com/150",
    rank: "12",
    description: "Achieved a top rank in KAS with excellent performance.",
    preparationTime: "18 Months",
    subjects: ["GS", "History", "Law"],
    social: { twitter: "#", linkedin: "#" },
  },
  {
    name: "Anjali Verma",
    exam: "IAS 2023",
    photo: "https://via.placeholder.com/150",
    rank: "5",
    description: "Excelled in IAS examination with dedication and hard work.",
    preparationTime: "24 Months",
    subjects: ["Polity", "Economics", "Essay"],
    social: { twitter: "#", linkedin: "#" },
  },
  {
    name: "Vikram Patil",
    exam: "KPSC 2024",
    photo: "https://via.placeholder.com/150",
    rank: "7",
    description: "Consistently performed well and secured top position.",
    preparationTime: "12 Months",
    subjects: ["Mathematics", "Science", "CSAT"],
    social: { twitter: "#", linkedin: "#" },
  },
];

const ResultPage = () => {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-50 py-12 px-4 sm:px-6 lg:px-20 relative overflow-hidden pt-40">
        {/* Animated Background Elements */}
        <div className="absolute top-0 left-0 w-full h-full opacity-10">
          <div className="absolute top-20 -left-20 w-96 h-96 bg-blue-100 rounded-full mix-blend-multiply animate-blob"></div>
          <div className="absolute top-60 -right-20 w-96 h-96 bg-yellow-100 rounded-full mix-blend-multiply animate-blob animation-delay-2000"></div>
        </div>
  
        {/* Header Section */}
        <div className="text-center mb-16 relative z-10">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-blue-900 mb-4">
            <IoRibbon className="inline-block mr-3 text-yellow-500 w-12 h-12" />
            Our Achievers
          </h1>
          <p className="text-lg sm:text-xl text-gray-700 max-w-2xl mx-auto">
            Celebrating Excellence in Civil Services Examinations
          </p>
          
         
        </div>
  
        {/* Students Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 relative z-10">
          {students.map((student, index) => (
            <div
              key={index}
              className="relative bg-white rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-300 group transform hover:scale-[1.02]"
            >
              {/* Rank Ribbon */}
              {student.rank <= 10 && (
                <div className="absolute -top-4 right-4 bg-gradient-to-r from-yellow-400 to-yellow-500 text-white px-4 py-2 rounded-t-lg flex items-center shadow-md">
                  <FaTrophy className="mr-2" />
                  <span>Top 10</span>
                </div>
              )}
  
              <div className="p-6 sm:p-8">
                <div className="flex flex-col items-center">
                  {/* Profile Image */}
                  <div className="relative mb-6">
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-blue-600 rounded-full blur-lg opacity-30 group-hover:opacity-50 transition-opacity"></div>
                    <img
                      src={student.photo}
                      alt={student.name}
                      className="w-40 h-40 sm:w-48 sm:h-48 rounded-full border-4 border-white shadow-xl transform group-hover:rotate-2 transition-transform duration-300"
                    />
                    <div className="absolute bottom-2 right-2 bg-gradient-to-br from-blue-600 to-blue-700 text-white w-14 h-14 rounded-full flex items-center justify-center text-lg font-bold shadow-md">
                      #{student.rank}
                    </div>
                  </div>
  
                  {/* Student Info */}
                  <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-1 text-center">
                    {student.name}
                  </h2>
                  <p className="text-blue-700 font-semibold text-lg mb-6 text-center">
                    {student.exam}
                  </p>
  
                  {/* Exam Details */}
                  <div className="bg-gray-50 p-4 rounded-xl w-full mb-6 border border-gray-100">
                    <div className="grid grid-cols-2 gap-4 mb-3">
                      <div className="flex items-center justify-center space-x-2 p-2 bg-white rounded-lg">
                        <FaRegClock className="text-gray-600" />
                        <span className="text-sm font-medium">{student.preparationTime}</span>
                      </div>
                      <div className="flex items-center justify-center space-x-2 p-2 bg-white rounded-lg">
                        <FaBookOpen className="text-gray-600" />
                        <span className="text-sm font-medium">{student.subjects.length} Subjects</span>
                      </div>
                    </div>
                    <p className="text-gray-700 text-sm text-center italic">
                      "{student.description}"
                    </p>
                  </div>
  
                  {/* Subjects */}
                  <div className="flex flex-wrap justify-center gap-3 mb-6">
                    {student.subjects.map((subject, idx) => (
                      <span
                        key={idx}
                        className="bg-gradient-to-br from-blue-100 to-blue-200 text-blue-800 px-4 py-2 rounded-full text-sm font-medium shadow-inner"
                      >
                        {subject}
                      </span>
                    ))}
                  </div>
  
                  {/* Social Sharing */}
                  <div className="flex space-x-5 opacity-90 group-hover:opacity-100 transition-opacity">
                    <button className="text-blue-600 hover:text-blue-700 transform hover:scale-125 transition-all">
                      <FaShareAlt size={22} />
                    </button>
                    <button className="text-blue-600 hover:text-blue-700 transform hover:scale-125 transition-all">
                      {/* Twitter Icon */}
                      <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                        <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                      </svg>
                    </button>
                    <button className="text-blue-600 hover:text-blue-700 transform hover:scale-125 transition-all">
                      {/* LinkedIn Icon */}
                      <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
  
        {/* Animated Background Circles (Add to your CSS) */}
        <style jsx>{`
          @keyframes blob {
            0% { transform: translate(0px, 0px) scale(1); }
            33% { transform: translate(30px, -50px) scale(1.1); }
            66% { transform: translate(-20px, 20px) scale(0.9); }
            100% { transform: translate(0px, 0px) scale(1); }
          }
          .animate-blob {
            animation: blob 7s infinite;
          }
          .animation-delay-2000 {
            animation-delay: 2s;
          }
        `}</style>
      </div>
    );
  };

export default ResultPage;
