import React from "react";
import Swal from "sweetalert2"; // Import SweetAlert

const YouTubeChannelPromo = () => {
 

  const handleButtonClick = () => {
    let timerInterval;
    Swal.fire({
      title: "Redirecting to YouTube Channel!",
      html: "Opening in <b></b> milliseconds.",
      timer: 2000,
      timerProgressBar: true,
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
        window.open("https://www.youtube.com/@SpardhaSarathiAcademyKundapura", "_blank"); // Open YouTube Channel
      }
    });
  };

  return (
    <div className="py-8">
      <div className="max-w-4xl mx-auto rounded-lg p-6">
        {/* Heading */}
        <div className="flex justify-center">
          <img
            src="subscribe.png" // Replace with your actual image URL
            alt="YouTube Channel Banner"
            className="w-full h-auto object-cover"
          />
        </div>

        <p className="text-lg text-center text-gray-600 mb-8">
          Watch important strategies, guidelines, best practices, expert views and analysis. Don't miss out on our latest uploads!
        </p>

       
      

        {/* Call to Action Button */}
        <div className="flex justify-center mt-8">
          <button
            onClick={handleButtonClick}
            className="bg-gradient-to-r  bg-blue-500 text-white font-bold py-3 px-6 rounded-full shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
          >
            Visit Our YouTube Channel
          </button>
        </div>
      </div>
    </div>
  );
};

export default YouTubeChannelPromo;
