import React from "react";
import Swal from "sweetalert2";
import { FiYoutube, FiArrowUpRight } from "react-icons/fi";

const YouTubeChannelPromo = () => {
  const handleButtonClick = () => {
    let timerInterval;
    Swal.fire({
      title: "Redirecting to YouTube Channel!",
      html: "Opening in <b></b> milliseconds.",
      timer: 2000,
      timerProgressBar: true,
      background: "#fff",
      color: "#333",
      didOpen: () => {
        Swal.showLoading();
        const timer = Swal.getPopup().querySelector("b");
        timerInterval = setInterval(() => {
          timer.textContent = Swal.getTimerLeft();
        }, 100);
      },
      willClose: () => {
        clearInterval(timerInterval);
      },
    }).then((result) => {
      if (result.dismiss === Swal.DismissReason.timer) {
        window.open(
          "https://www.youtube.com/@SpardhaSarathiAcademyKundapura",
          "_blank"
        );
      }
    });
  };

  return (
    <div className="py-20 bg-white text-gray-900 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 lg:px-8 text-center">
        {/* Decorative elements */}
        <div className="absolute top-10 left-5 w-24 h-24 bg-red-500/10 -translate-x-12 -translate-y-12 rounded-full" />
        <div className="absolute bottom-20 right-5 w-44 h-44 bg-red-500/5 -translate-x-12 translate-y-12 rounded-full" />

        {/* Heading */}
        <h2 className="text-4xl font-extrabold mb-4">
          Discover & Elevate Your Learning
        </h2>
        <p className="text-lg text-gray-600 mb-12 max-w-3xl mx-auto">
          Unlock exclusive insights, expert guidance, and engaging video content
          that transforms the way you learn.
        </p>

        {/* Video Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {["nfP_VPb5G5A", "yNnBASSkHok", "sde1vh0M0nw"].map((videoId) => (
            <div
              key={videoId}
              className="relative group transform transition-all duration-300 hover:scale-105 rounded-xl overflow-hidden shadow-lg"
            >
              <iframe
                className="w-full h-60 rounded-xl border-2 border-gray-200"
                src={`https://www.youtube.com/embed/${videoId}`}
                title="YouTube video"
                allowFullScreen
              />
              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <FiYoutube className="text-red-500 w-16 h-16" />
              </div>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="mt-12 flex justify-center">
          <button
            onClick={handleButtonClick}
            className="relative group bg-gradient-to-r from-red-500 to-red-600 text-white px-10 py-4 rounded-lg font-bold text-lg shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105 flex items-center gap-3"
          >
            <FiYoutube className="w-6 h-6 text-white" />
            <span>Explore Our YouTube Universe</span>
            <FiArrowUpRight className="w-5 h-5 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform group-hover:translate-x-1" />
          </button>
        </div>
      </div>

      <section className="relative w-full pt-14">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between px-6 md:px-12">
          {/* Left Side: Image */}
          <div className="md:w-1/2 flex justify-center items-center">
            <img
              src="/image.png" // Replace with actual image path
              alt="Student"
              className="w-[90px] md:w-[150px] lg:w-[180px] xl:w-[225px] object-contain drop-shadow-lg"
            />
          </div>

          {/* Right Side: Contact Details */}
          <div className="md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Any Queries or Details?
            </h2>
            <p className="text-lg text-gray-600 mb-4">
              Feel free to reach out for more information.
            </p>
            <p className="text-lg text-gray-800 font-semibold">
              📞 +91 98765 43210
            </p>
            <p className="text-lg text-gray-800 font-semibold">
              ✉️ info@example.com
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default YouTubeChannelPromo;
