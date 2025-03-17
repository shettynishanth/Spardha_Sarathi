import { motion } from 'framer-motion';
import { FaQuoteLeft, FaHandshake, FaBullseye, FaYoutube } from 'react-icons/fa';

const FoundersVision = () => {
  return (
    <div className=" pt-28 min-h-screen bg-gradient-to-b from-purple-50 to-blue-50 py-16 px-4 sm:px-6 lg:px-8">
      {/* Hero Section */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-7xl mx-auto text-center mb-16"
      >
        <div className="relative inline-block">
          <div className="absolute -inset-2 bg-gradient-to-r from-purple-400 to-blue-500 rounded-full blur-lg opacity-30" />
          <img 
            src="/founder-image.jpg" 
            alt="Founder"
            className="relative w-48 h-48 rounded-full border-4 border-white shadow-xl mx-auto"
          />
        </div>
        <h1 className="mt-6 text-4xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
          Dr. Ravi Sharma
        </h1>
        <p className="text-xl text-gray-600 mt-2">Founder & CEO</p>
      </motion.div>

      {/* Vision Statement */}
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl mx-auto mb-16 relative"
      >
        <div className="absolute -left-8 -top-4 text-purple-400 text-6xl opacity-20">
          <FaQuoteLeft />
        </div>
        <p className="text-2xl lg:text-3xl text-center font-medium text-gray-800 leading-relaxed">
          "Our mission is to empower every aspirant with not just knowledge, but the 
          <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent font-bold"> confidence </span> 
          and 
          <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent font-bold"> strategic mindset </span> 
          needed to conquer government examinations."
        </p>
      </motion.div>

      {/* Video Section */}
<motion.div 
  initial={{ scale: 0.95, opacity: 0 }}
  whileInView={{ scale: 1, opacity: 1 }}
  transition={{ duration: 0.5 }}
  className="max-w-4xl mx-auto mb-16 rounded-3xl overflow-hidden shadow-2xl relative group"
>
  <div className="aspect-w-16 aspect-h-9 bg-gradient-to-br from-purple-500 to-blue-600">
    <video 
      className="w-full h-full object-cover"
      poster="/video-poster.jpg" // Add your poster image
      controls={false}
    >
      <source src="/founder-vision.mp4" type="video/mp4" />
      Your browser does not support the video tag.
    </video>
    
    {/* Custom Play Button */}
    <button 
      className="absolute inset-0 flex items-center justify-center w-full h-full bg-black/20 hover:bg-black/30 transition-all"
      onClick={(e) => {
        e.target.previousElementSibling.play()
        e.target.style.display = 'none'
      }}
    >
      <motion.div 
        whileHover={{ scale: 1.1 }}
        className="w-20 h-20 bg-white/90 rounded-full flex items-center justify-center backdrop-blur-sm"
      >
        <svg 
          className="w-12 h-12 text-purple-600" 
          fill="currentColor" 
          viewBox="0 0 24 24"
        >
          <path d="M8 5v14l11-7z"/>
        </svg>
      </motion.div>
    </button>
  </div>

  {/* Video Title */}
  <div className="bg-gradient-to-r from-purple-600 to-blue-600 p-6">
    <div className="flex items-center gap-3 text-white">
      <svg 
        className="w-6 h-6" 
        fill="currentColor" 
        viewBox="0 0 24 24"
      >
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 14.5v-9l6 4.5-6 4.5z"/>
      </svg>
      <h3 className="text-xl font-semibold">Founder's Vision Unveiled</h3>
    </div>
  </div>

  {/* Glow Effect */}
  <div className="absolute inset-0 rounded-3xl border-2 border-white/20 pointer-events-none" />
</motion.div>

      {/* Core Principles */}
      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8 mb-16">
        <motion.div 
          whileHover={{ y: -10 }}
          className="bg-white p-8 rounded-2xl shadow-lg border border-purple-50"
        >
          <div className="text-purple-600 text-4xl mb-4">
            <FaBullseye />
          </div>
          <h3 className="text-xl font-bold text-gray-800 mb-2">Our Vision</h3>
          <p className="text-gray-600">
            To become the nation's most trusted platform for government exam preparation, 
            transforming 1 million careers by 2030
          </p>
        </motion.div>

        <motion.div 
          whileHover={{ y: -10 }}
          className="bg-white p-8 rounded-2xl shadow-lg border border-blue-50"
        >
          <div className="text-blue-600 text-4xl mb-4">
            <FaHandshake />
          </div>
          <h3 className="text-xl font-bold text-gray-800 mb-2">Our Promise</h3>
          <p className="text-gray-600">
            Quality education accessible to all, with personalized mentorship and 
            continuously updated study material
          </p>
        </motion.div>

        <motion.div 
          whileHover={{ y: -10 }}
          className="bg-white p-8 rounded-2xl shadow-lg border border-purple-50"
        >
          <div className="text-purple-600 text-4xl mb-4">
            <FaQuoteLeft />
          </div>
          <h3 className="text-xl font-bold text-gray-800 mb-2">Founder's Note</h3>
          <p className="text-gray-600">
            "True success comes when we create opportunities for others to succeed. 
            Your victory is our greatest achievement"
          </p>
        </motion.div>
      </div>

      {/* Milestones */}
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        className="bg-gradient-to-r from-purple-600 to-blue-600 text-white py-16 rounded-3xl shadow-xl"
      >
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">Our Journey So Far</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <div className="text-4xl font-bold mb-2">15K+</div>
              <div className="text-sm">Successful Students</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">200+</div>
              <div className="text-sm">Expert Faculty</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">95%</div>
              <div className="text-sm">Satisfaction Rate</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">50+</div>
              <div className="text-sm">Exam Patterns Covered</div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default FoundersVision;
