import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaBook, FaShieldAlt, FaUserTie, FaChartLine, FaBalanceScale, FaGraduationCap, FaUniversity } from "react-icons/fa";

const courses = [
  {
    id: 1,
    name: "KAS (Karnataka Administrative Service)",
    description: "Comprehensive training for Karnataka state administrative exams with expert faculty.",
    duration: "6 Months",
    icon: <FaUserTie className="w-8 h-8" />,
    details: "The curriculum includes in-depth coverage of topics such as the cultural heritage of India and Karnataka, modern history, political systems, and economic planning. Emphasis is placed on current affairs of national and international importance, as well as state-specific issues. The course also provides guidance on essay writing, comprehension, and communication skills to prepare candidates for the descriptive papers."
  },
  {
    id: 2,
    name: "PSI (Police Sub-Inspector)",
    description: "Rigorous preparation for the PSI exam, covering aptitude, general knowledge, and law.",
    duration: "8 Months",
    icon: <FaShieldAlt className="w-8 h-8" />,
    details: "The course is divided into two main sections: a descriptive paper focusing on essay writing, précis, and translation, and an objective paper covering general knowledge, current affairs, and mental ability. Topics include the Indian freedom movement, constitution, history, geography, economics, general science, and mental ability areas such as data interpretation and logical reasoning"
  },
  {
    id: 3,
    name: "FDA (First Division Assistant)",
    description: "Structured course for clerical job aspirants in Karnataka government services.",
    duration: "4 Months",
    icon: <FaBook className="w-8 h-8" />,
    details: "The training covers general knowledge, quantitative aptitude, and language skills. Subjects include current affairs, general science, Indian history and culture, geography, the Indian constitution, and computer knowledge. The course also emphasizes developing proficiency in Kannada and English languages, essential for clerical duties"
  },
  {
    id: 4,
    name: "PDO (Panchayat Development Officer)",
    description: "Detailed guidance for rural development officer roles in Karnataka.",
    duration: "5 Months",
    icon: <FaChartLine className="w-8 h-8" />,
    details: "The curriculum focuses on rural development policies, Karnataka's panchayat raj system, and schemes related to rural upliftment. It also covers general studies, including history, geography, polity, economy, and current affairs pertinent to the state. Emphasis is placed on understanding the socio-economic issues affecting rural areas and the administrative mechanisms in place."
  },
  {
    id: 5,
    name: "SSC (Staff Selection Commission)",
    description: "Covers SSC CGL, CHSL, and other central government exams with in-depth syllabus coverage.",
    duration: "5 Months",
    icon: <FaBalanceScale className="w-8 h-8" />,
    details: "The course includes quantitative aptitude, reasoning ability, general awareness, and English language proficiency. Topics range from arithmetic, algebra, and geometry to logical reasoning, data interpretation, current events, and grammar. Regular mock tests and practice sessions are conducted to enhance speed and accuracy"
  },
  {
    id: 6,
    name: "RRB (Railway Recruitment Board)",
    description: "Covers technical and non-technical railway job exams with expert guidance.",
    duration: "5 Months",
    icon: <FaUniversity className="w-8 h-8" />,
    details: "The training covers subjects like mathematics, general intelligence and reasoning, general awareness, and general science. Specific topics include number systems, coding-decoding, current affairs, physics, chemistry, and biology. The course also offers specialized modules for technical posts, focusing on relevant engineering concepts"
  },
  {
    id: 7,
    name: "Other Competitive Exams",
    description: "Coaching for various state and central government job exams including banking, insurance, and defense.",
    duration: "5 Months",
    icon: <FaGraduationCap className="w-8 h-8" />,
    details: "The curriculum is customized based on the specific exam but generally includes sections on quantitative aptitude, reasoning ability, general awareness, and English language skills. Specialized modules are available for exams like IBPS PO, SBI Clerk, LIC AAO, and defense entrance tests, focusing on the unique requirements of each"
  }
];

const CourseList = () => {
  const [selectedCourse, setSelectedCourse] = useState(null);

  const handleClick = (course) => {
    setSelectedCourse(course);
  };

  const closeModal = () => {
    setSelectedCourse(null);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.10 }}
        >
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Competitive Exam Courses
            </span>
          </h1>
          <motion.p 
            className="text-xl text-gray-600 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            Transform your career aspirations into achievements with our structured programs
          </motion.p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {courses.map((course, index) => (
            <motion.div
              key={course.id}
              className="relative bg-white rounded-2xl shadow-xl overflow-hidden transition-all duration-300 cursor-pointer"
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.6 }}
              onClick={() => handleClick(course)}
            >
              <div className="p-8">
                <div className="mb-6 text-blue-600">
                  {course.icon}
                </div>
                
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {course.name}
                </h3>
                
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {course.description}
                </p>
                
                <div className="flex items-center justify-between">
                  <span className="inline-block bg-gradient-to-r from-blue-100 to-purple-100 text-blue-800 px-4 py-2 rounded-full text-sm font-semibold">
                    🕒 {course.duration}
                  </span>
                  <span className="text-blue-600 font-medium">Click for Details</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Modal for Course Details */}
        {selectedCourse && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
            <motion.div
              className="bg-white rounded-2xl shadow-2xl w-11/12 md:w-3/4 lg:w-1/2 p-8 relative"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}
            >
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              <div className="text-center">
                <div className="text-blue-600 mb-4">
                  {selectedCourse.icon}
                </div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  {selectedCourse.name}
                </h2>
                <p className="text-gray-600 mb-6">
                  {selectedCourse.description}
                </p>
                <div className="bg-gray-50 p-6 rounded-lg text-left">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">
                    Course Details
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {selectedCourse.details}
                  </p>
                </div>
                <div className="mt-6">
                  <span className="inline-block bg-gradient-to-r from-blue-100 to-purple-100 text-blue-800 px-4 py-2 rounded-full text-sm font-semibold">
                    🕒 Duration: {selectedCourse.duration}
                  </span>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CourseList;
