import React, { useState, useEffect } from "react";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";

const events = [
  {
    id: 1,
    title: "From Nitte University to Global Research: Rasik’s PhD Journey",
    date: "29 Nov 2024",
    description: "Rasik's PhD journey begins at The University of Texas at Dallas.",
    image: "https://via.placeholder.com/300",
  },
  {
    id: 2,
    title: "NSS Special Camp for Government School Children | NUCESR",
    date: "12 Nov 2024",
    description: "A special camp conducted for government school children.",
    image: "https://via.placeholder.com/300",
  },
  {
    id: 3,
    title: "NMAMIT celebrates World Standards Day",
    date: "14 Oct 2024",
    description: "Celebrating World Standards Day with various activities and events.",
    image: "https://via.placeholder.com/300",
  },
  {
    id: 4,
    title: "AI & Machine Learning Workshop",
    date: "05 Sep 2024",
    description: "A hands-on workshop on AI & ML conducted by industry experts.",
    image: "https://via.placeholder.com/300",
  },
  {
    id: 5,
    title: "Cybersecurity Awareness Program",
    date: "18 Aug 2024",
    description: "A seminar on the latest trends and threats in cybersecurity.",
    image: "https://via.placeholder.com/300",
  },
  {
    id: 6,
    title: "Entrepreneurship & Startup Bootcamp",
    date: "30 Jul 2024",
    description: "A 3-day bootcamp for aspiring entrepreneurs and startup enthusiasts.",
    image: "https://via.placeholder.com/300",
  },
];

const EventsPage = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const totalEvents = events.length;
  const visibleEvents = 3;
  const cardWidth = 320; // Width for consistent animation

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % (totalEvents - visibleEvents + 1));
    }, 4000);

    return () => clearInterval(interval);
  }, [totalEvents]);

//   const nextSlide = () => {
//     setCurrentIndex((prev) => Math.min(prev + 1, totalEvents - visibleEvents));
//   };

//   const prevSlide = () => {
//     setCurrentIndex((prev) => Math.max(prev - 1, 0));
//   };

  return (
    <div className="bg-white py-12 px-5 lg:px-20">
      <div className="max-w-7xl mx-auto">
       

        <div className="relative group">
          {/* Navigation Arrows */}
          {/* <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 p-3 bg-white/80 backdrop-blur-md shadow-md rounded-full hover:bg-white transition-opacity duration-300 opacity-0 group-hover:opacity-100"
          >
            <FiArrowLeft className="text-gray-700 w-6 h-6" />
          </button> */}

          {/* Events Container */}
          <div className="overflow-hidden">
            <div
              className="flex gap-6 transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${currentIndex * (cardWidth + 24)}px)` }}
            >
              {events.map((event) => (
                <div
                  key={event.id}
                  className="flex-shrink-0 w-[300px] bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow"
                >
                  <img
                    src={event.image}
                    alt={event.title}
                    className="w-full h-36 object-cover rounded-t-lg"
                  />
                  <div className="p-4">
                    <p className="text-xs text-gray-500 mb-1">{event.date}</p>
                    <h3 className="text-sm font-semibold text-gray-900 line-clamp-2 mb-1">
                      {event.title}
                    </h3>
                    <p className="text-xs text-gray-600 line-clamp-3 mb-2">
                      {event.description}
                    </p>
                    <button className="text-blue-600 text-xs font-medium hover:underline">
                      Read More
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 p-3 bg-white/80 backdrop-blur-md shadow-md rounded-full hover:bg-white transition-opacity duration-300 opacity-0 group-hover:opacity-100"
          >
            <FiArrowRight className="text-gray-700 w-6 h-6" />
          </button> */}
        </div>

        {/* Pagination Dots */}
        <div className="flex justify-center mt-6 gap-2">
          {Array.from({ length: totalEvents - visibleEvents + 1 }).map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentIndex(i)}
              className={`w-3 h-3 rounded-full transition-all ${
                i === currentIndex ? "bg-blue-600" : "bg-gray-300"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default EventsPage;
