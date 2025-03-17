import { motion } from "framer-motion";
import { 
  FaBook, FaChalkboard, FaTree, FaHandsHelping, 
  FaFan, FaTint, FaFirstAid, FaUsers, 
  FaWifi
} from "react-icons/fa";

const FacilitiesPage = () => {
  const facilities = [
    {
      icon: FaChalkboard,
      title: "Study Hall",
      features: ["Natural Lighting", "Whiteboards", "Ceiling Fans", "Benches & Desks"],
      image: "/study-hall.jpg",
      stats: { Capacity: "40 Students", Ventilation: "Cross-ventilated", Size: "800 sq.ft" }
    },
    {
      icon: FaBook,
      title: "Book Bank",
      features: ["1000+ Curated Books", "Weekly Book Rotation", "Quiet Reading Corner", "Donation Drive"],
      image: "/library.jpg",
      stats: { Seats: "25", Languages: "3", Hours: "8 AM - 6 PM" }
    },
    {
      icon: FaUsers,
      title: "Community Center",
      features: ["Village Meetings", "Free Evening Classes", "Skill Workshops", "Cultural Events"],
      image: "/community-center.jpg",
      stats: { Capacity: "100", Events: "Monthly", Space: "Open-air" }
    },
    // {
    //   icon: FaTree,
    //   title: "Outdoor Learning",
    //   features: ["Shaded Courtyard", "Blackboard Walls", "Herb Garden", "Solar Lighting"],
    //   image: "/outdoor-class.jpg",
    //   stats: { Trees: "15+", Seating: "Ground Mats", Area: "2000 sq.ft" }
    // },
    {
      icon: FaHandsHelping,
      title: "Volunteer Hub",
      features: ["Local Artisans Corner", "Study Groups", "Peer Tutoring", "Community Projects"],
      image: "/volunteer-hub.jpg",
      stats: { Members: "50+", Projects: "Ongoing", Impact: "Village-wide" }
    },
    {
      icon: FaFan,
      title: "Basic Amenities",
      features: ["Drinking Water", "Sanitation Facilities", "Electricity Backup", "First Aid"],
      image: "/amenities.jpg",
      stats: { Water: "24/7", Toilets:"", Safety: "Attendant" }
    }
  ];

  return (
    <div className="pt-20 min-h-screen bg-blue-50">
      {/* Hero Section */}
      <div className="relative py-16 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-blue-700 bg-clip-text text-transparent mb-6"
          >
            Our Facilities
          </motion.h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Simple yet effective facilities designed for community learning and growth
          </p>
        </div>
      </div>

      {/* Facilities Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {facilities.map((facility, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              className="relative bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden group border border-blue-50"
            >
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={facility.image} 
                  alt={facility.title}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
                <div className="absolute top-4 right-4 p-2 bg-white/90 rounded-lg shadow-sm">
                  <facility.icon className="w-6 h-6 text-blue-600" />
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">{facility.title}</h3>
                
                <div className="grid grid-cols-2 gap-3 mb-4">
                  {Object.entries(facility.stats).map(([key, value]) => (
                    <div key={key} className="bg-blue-50 p-2 rounded-md text-center">
                      <p className="text-xs text-gray-600 capitalize">{key}</p>
                      <p className="text-sm font-medium text-blue-700">{value}</p>
                    </div>
                  ))}
                </div>

                <div className="space-y-2">
                  {facility.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center space-x-2">
                      <div className="w-1.5 h-1.5 bg-blue-500 rounded-full" />
                      <span className="text-sm text-gray-600">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Community Impact Section */}
      <div className="bg-blue-50 py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-semibold text-center mb-8 text-blue-800">Community First Approach</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { icon: FaTint, title: "Water Access", value: "" },
              { icon: FaWifi, title: "Campus WiFi", value: "24/7 Access" },
              { icon: FaFirstAid, title: "Health Care", value: "First Aid Posts" },
              { icon: FaUsers, title: "Employment", value: "Local Staff" },
              
            ].map((item, idx) => (
              <motion.div 
                key={idx}
                whileHover={{ scale: 1.05 }}
                className="bg-white p-4 rounded-lg text-center shadow-sm"
              >
                <item.icon className="w-8 h-8 mx-auto mb-3 text-blue-600" />
                <h4 className="text-sm font-medium text-gray-700 mb-1">{item.title}</h4>
                <p className="text-lg font-semibold text-blue-700">{item.value}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Gallery Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h3 className="text-xl font-semibold text-center mb-8 text-gray-700">Our Learning Spaces</h3>
        <div className="columns-2 md:columns-3 gap-4">
          {[1,2,3,4,5,6].map((item) => (
            <motion.div 
              key={item}
              whileHover={{ scale: 1.02 }}
              className="mb-4 break-inside-avoid"
            >
              <img 
                src={`/rural-campus-${item}.jpg`} 
                alt="Campus" 
                className="rounded-lg shadow-sm w-full h-auto"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FacilitiesPage;
