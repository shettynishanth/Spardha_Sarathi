import React from "react";
import { 
  FaChalkboardTeacher, 
  FaBookReader, 
  FaLightbulb, 
  FaUsers, 
  FaBrain, 
  FaGlobe, 
  FaUserGraduate, 
  FaCalendarCheck, 
  FaHeartbeat 
} from "react-icons/fa";


const AboutUs = () => {
  return (
    <div className="relative overflow-hidden bg-gray-50">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-0 w-72 h-72 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
        <div className="absolute top-0 right-0 w-72 h-72 bg-purple-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-0 left-20 w-72 h-72 bg-pink-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-4000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
        {/* Enhanced Heading Section */}
        <div className="relative text-center my-14">
  {/* Decorative Element */}
  {/* <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500"></div> */}

  {/* Main Heading */}
  <h1 className="text-6xl font-extrabold tracking-wide uppercase">
    <span className="bg-gradient-to-r from-blue-500 via-indigo-600 to-purple-600 bg-clip-text text-transparent drop-shadow-md">
      Spardha Sarathi
    </span>
  </h1>

  {/* Subtitle */}
  <p className="text-xl text-gray-700 mt-3 px-6 md:px-20 leading-relaxed">
    Empowering aspirants with top-tier guidance to achieve excellence in <br className="hidden md:block" /> KAS & UPSC examinations.
  </p>

  {/* Underline Animation */}
  <div className="relative mt-4">
    <div className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-blue-500 to-purple-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-center"></div>
  </div>
</div>


        {/* Introductory Text with Decorative Icons */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          {["English", "Kannada"].map((lang, i) => (
            <div
              key={i}
              className="relative p-8 bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 group border border-gray-100"
            >
              <div className="absolute top-4 right-4 w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                <span className="text-blue-600 font-bold">{i === 0 ? "EN" : "KN"}</span>
              </div>
              <p className="text-lg text-gray-600 leading-relaxed">
                {i === 0 ? (
                  <>
                    At{" "}
                    <span className="font-semibold text-blue-900 relative inline-block">
                      Spardha Sarathi KAS Academy
                      <span className="absolute bottom-0 left-0 w-full h-1 bg-purple-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
                    </span>
                    , we are dedicated to shaping the future of aspiring civil
                    servants through comprehensive training and mentorship.
                  </>
                ) : (
                  <>
                    <span className="font-semibold text-blue-900">
                      ಸ್ಪರ್ಧಾ ಸರಥಿ KAS Academy
                    </span>{" "}
                    ನಲ್ಲಿ, ನಾವು ಸರ್ಕಾರಿ ಸೇವೆಗಾಗಿ ಅಗತ್ಯವಿರುವ ಅಭ್ಯರ್ಥಿಗಳ
                    ಭವಿಷ್ಯವನ್ನು ರೂಪಿಸಲು ಸಮಗ್ರ ತರಬೇತಿ ಮತ್ತು ಮಾರ್ಗದರ್ಶನಕ್ಕೆ
                    ಬದ್ಧರಾಗಿದ್ದೇವೆ.
                  </>
                )}
              </p>
            </div>
          ))}
        </div>

        {/* Enhanced Key Features Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
  {[
    {
      icon: FaChalkboardTeacher,
      title: "Expert Guidance",
      text: "Learn from experienced educators and professionals.",
      color: "from-blue-500",
    },
    {
      icon: FaBookReader,
      title: "Comprehensive Resources",
      text: "Access top-tier study materials and library resources.",
      color: "from-purple-500",
    },
    {
      icon: FaLightbulb,
      title: "Innovative Methods",
      text: "Stay ahead with our cutting-edge teaching methodologies.",
      color: "from-pink-500",
    },
    {
      icon: FaUsers,
      title: "Personalized Mentorship",
      text: "One-on-one mentoring sessions for proper guidance.",
      color: "from-orange-500",
    },
    {
      icon: FaBrain,
      title: "Analytical Approach",
      text: "Enhance problem-solving skills with structured learning.",
      color: "from-yellow-500",
    },
    {
      icon: FaGlobe,
      title: "Global Perspectives",
      text: "Stay updated with worldwide trends and insights.",
      color: "from-green-500",
    },
    // New Features
    {
      icon: FaUserGraduate,
      title: "Result-Oriented Training",
      text: "Focused strategies to maximize exam success rates.",
      color: "from-red-500",
    },
    {
      icon: FaCalendarCheck,
      title: "Structured Study Plans",
      text: "Well-organized timetables and exam preparation schedules.",
      color: "from-teal-500",
    },
    {
      icon: FaHeartbeat,
      title: "Meditation with Learning",
      text: "Special sessions to improve focus, memory, and mental well-being.",
      color: "from-indigo-500",
    },
  ].map((feature, index) => (
    <div
      key={index}
      className="relative group overflow-hidden bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
    >
      <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-10`}></div>
      <div className="relative p-8">
        <div className={`text-center mb-4 relative inline-block`}>
          <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} rounded-full blur-lg opacity-30`}></div>
          <feature.icon className={`w-14 h-14 mx-auto text-${feature.color.split('-')[1]}-600 relative z-10`} />
        </div>
        <h3 className="text-2xl font-bold text-gray-900 text-center mb-4">
          {feature.title}
        </h3>
        <p className="text-gray-600 text-center">{feature.text}</p>
      </div>
    </div>
  ))}
</div>


        {/* Enhanced Founder's Section */}
        <div className="mt-20 relative">
          <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-transparent via-blue-400 to-transparent"></div>
          <h2 className="text-4xl font-bold text-gray-900 text-center my-12 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 inline-block">
            Founder's Vision
          </h2>
          <div className="flex flex-col lg:flex-row items-center lg:items-start gap-12 p-8 ">
            <div className="w-full lg:w-1/3 flex justify-center relative">
              {/* <div className="absolute -inset-2 bg-gradient-to-r from-blue-400 to-purple-400 rounded-3xl blur opacity-30 animate-pulse"></div> */}
              <img
                className="rounded-2xl shadow-2xl border-4 border-white transform transition-transform duration-500 hover:scale-105 z-10"
                src="/Snapinsta.jpg"
                alt="Adarsh Kela"
                loading="lazy"
              />
            </div>
            <div className="w-full lg:w-2/3 space-y-6">
              <div className="relative pl-8 border-l-4 border-blue-600">
                <div className="absolute left-0 top-0 w-8 h-8 bg-blue-600 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
                <p className="text-xl text-gray-800 leading-relaxed font-medium italic">
                  "Education is the foundation of progress. Our academy strives
                  to provide the best learning environment for aspiring civil
                  servants. With dedication and the right guidance, success is
                  within reach."
                </p>
                <div className="mt-6 flex items-center space-x-4">
                  <div className="h-px flex-1 bg-gradient-to-r from-blue-400 to-purple-400"></div>
                  <span className="text-2xl font-bold text-blue-800">Adarsh Kela</span>
                  <div className="h-px flex-1 bg-gradient-to-r from-purple-400 to-blue-400"></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Animated Section Dividers */}
        <div className="py-16 relative">
          {/* <div className="absolute inset-x-0 top-0 h-2 bg-gradient-to-r from-transparent via-blue-400 to-transparent"></div> */}
          {/* <div className="absolute inset-x-0 bottom-0 h-2 bg-gradient-to-r from-transparent via-purple-400 to-transparent"></div> */}
        </div>
      </div>

      {/* Floating Elements with Gradient */}
      <div className="hidden lg:block">
        <div className="absolute top-1/4 left-5 w-8 h-8 bg-gradient-to-br from-blue-400 to-purple-400 rounded-full animate-float shadow-lg"></div>
        <div className="absolute top-1/3 right-10 w-12 h-12 bg-gradient-to-br from-purple-400 to-pink-400 opacity-30 rounded-full animate-float animation-delay-2000 shadow-xl"></div>
        <div className="absolute bottom-1/4 left-20 w-16 h-16 bg-gradient-to-br from-pink-300 to-orange-300 opacity-20 rounded-full animate-float animation-delay-4000 shadow-lg"></div>
      </div>

      {/* Custom Animations */}
      <style jsx global>{`
        @keyframes blob {
          0% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
          100% { transform: translate(0px, 0px) scale(1); }
        }
        .animate-blob {
          animation: blob 7s infinite cubic-bezier(0.4, 0, 0.2, 1);
        }
        @keyframes float {
          0% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(5deg); }
          100% { transform: translateY(0px) rotate(0deg); }
        }
        .animate-float {
          animation: float 4s ease-in-out infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </div>
  );
};

export default AboutUs;
