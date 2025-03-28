import React from "react";
import { 
  FaChalkboardTeacher, FaBookReader, FaLightbulb, FaUsers, 
  FaBrain, FaGlobe, FaUserGraduate, FaCalendarCheck, FaHeartbeat 
} from "react-icons/fa";
import { motion } from "framer-motion";

const AboutUs = () => {
  return (
     <div className="pt-16 relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-blue-50 min-h-screen">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 z-0">
        <motion.div 
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 2 }}
          className="absolute top-20 -left-20 w-96 h-96 bg-purple-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30"
        />
        <motion.div 
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 2, delay: 0.2 }}
          className="absolute top-1/3 right-0 w-96 h-96 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
        {/* Enhanced Heading Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-20 space-y-6"
        >
          <div className="inline-block relative">
            <div className="absolute -inset-[10px] blur-3xl opacity-40 rounded-full" />
            <h1 className="text-5xl md:text-8xl font-black bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-500 bg-clip-text text-transparent relative tracking-tighter leading-tight">
              ಸ್ಪರ್ಧಾ ಸಾರಥಿ
            </h1>
          </div>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-xl md:text-2xl text-gray-700 max-w-3xl mx-auto leading-relaxed pt-1"
          >
            Empowering aspirants with revolutionary guidance to conquer KAS & UPSC examinations
          </motion.p>
        </motion.div>

        {/* Introductory Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-24">
          {["English", "Kannada"].map((lang, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="relative p-8 bg-white/80 backdrop-blur-sm rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-300 border border-white/20"
            >
              <div className="absolute top-6 right-6 w-14 h-14 bg-gradient-to-br from-blue-100 to-purple-100 rounded-2xl flex items-center justify-center shadow-md">
                <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  {i === 0 ? "EN" : "KN"}
                </span>
              </div>
              <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
                {i === 0 ? (
                  <>
                    At <span className="font-bold text-blue-900">Spardha Sarathi KAS Academy</span>, 
                    we pioneer transformative learning experiences through cutting-edge pedagogy 
                    and personalized mentorship, crafting tomorrow's civil service leaders.
                  </>
                ) : (
                  <>
                    <span className="font-bold text-blue-900">ಸ್ಪರ್ಧಾ ಸರಥಿ KAS Academy</span> ನಲ್ಲಿ, 
                    ನಾವು ಆಧುನಿಕ ಬೋಧನಾ ವಿಧಾನಗಳು ಮತ್ತು ವೈಯಕ್ತಿಕ ಮಾರ್ಗದರ್ಶನದ ಮೂಲಕ ಭವಿಷ್ಯದ ಸಿವಿಲ್ ಸರ್ವಿಸ್ 
                    ನಾಯಕರನ್ನು ರೂಪಿಸುತ್ತಿದ್ದೇವೆ.
                  </>
                )}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Key Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
          {[
            {
              icon: FaChalkboardTeacher,
              title: "Elite Faculty Team",
              text: "Learn from IAS/IPS officers and subject matter experts",
              color: "from-blue-500 to-blue-600",
            },
            {
              icon: FaBookReader,
              title: "Smart Study Ecosystem",
              text: "AI-powered learning platform with 10,000+ resources",
              color: "from-purple-500 to-purple-600",
            },
            {
              icon: FaLightbulb,
              title: "Innovative Pedagogy",
              text: "Gamified learning modules and case-study approach",
              color: "from-pink-500 to-pink-600",
            },
            {
              icon: FaUsers,
              title: "1:1 Mentorship",
              text: "Personalized guidance from career counselors",
              color: "from-orange-500 to-orange-600",
            },
            {
              icon: FaBrain,
              title: "Mind Mapping",
              text: "Advanced techniques for information retention",
              color: "from-yellow-500 to-yellow-600",
            },
            {
              icon: FaGlobe,
              title: "Global Perspective",
              text: "International case studies and expert sessions",
              color: "from-green-500 to-green-600",
            },
            {
              icon: FaUserGraduate,
              title: "Result Framework",
              text: "98% success rate in preliminary exams",
              color: "from-red-500 to-red-600",
            },
            {
              icon: FaCalendarCheck,
              title: "Strategic Planning",
              text: "Customized study schedules with progress tracking",
              color: "from-teal-500 to-teal-600",
            },
            {
              icon: FaHeartbeat,
              title: "Holistic Development",
              text: "Yoga and meditation sessions for peak performance",
              color: "from-indigo-500 to-indigo-600",
            },
          ].map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              className="group relative bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-5`} />
              <div className="p-8 relative">
                <div className="mb-6 flex justify-center">
                  <div className={`p-5 rounded-2xl bg-gradient-to-br ${feature.color} shadow-lg`}>
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">
                  {feature.title}
                </h3>
                <p className="text-gray-600 text-center leading-relaxed">
                  {feature.text}
                </p>
              </div>
              <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${feature.color} opacity-0 group-hover:opacity-100 transition-opacity`} />
            </motion.div>
          ))}
        </div>

        {/* Achievements Section */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="bg-gradient-to-br from-blue-600 to-purple-600 rounded-3xl p-8 md:p-12 shadow-2xl mb-24"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { number: "15K+", label: "Successful Students" },
              { number: "98%", label: "Prelims Success Rate" },
              { number: "200+", label: "Expert Faculty Members" },
              { number: "50+", label: "Exam Patterns Mastered" },
            ].map((stat, index) => (
              <div key={index} className="p-4">
                <div className="text-4xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-sm text-blue-100 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Philosophy Section */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="bg-white/90 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-xl border border-white/20"
        >
          <div className="max-w-4xl mx-auto text-center">
            <div className="text-4xl mb-8">🌟</div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Our Educational Philosophy
            </h2>
            <p className="text-xl text-gray-700 leading-relaxed">
              At Spardha Sarathi, we blend ancient wisdom with modern technology, creating a 
              learning ecosystem that nurtures both intellectual growth and emotional resilience. 
              Our 360° approach combines rigorous academic training with mindfulness practices, 
              ensuring our students develop the complete skill set needed for administrative 
              excellence.
            </p>
          </div>
        </motion.div>
      </div>

      {/* Floating Elements */}
      <div className="hidden lg:block">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 0.2 }}
            transition={{
              duration: 2,
              repeat: Infinity,
              repeatType: "mirror",
              delay: i * 0.5,
            }}
            className="fixed w-8 h-8 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default AboutUs;
