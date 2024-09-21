import React, { useEffect, useState } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../firebase';

const ImageSlider = () => {
  const [images, setImages] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const fetchImages = async () => {
      const imagesCollection = collection(db, 'images');
      const imageSnapshot = await getDocs(imagesCollection);
      const imageList = imageSnapshot.docs.map(doc => doc.data().url);
      setImages(imageList);
    };

    fetchImages();
  }, []);

  useEffect(() => {
    if (images.length > 0) {
      const intervalId = setInterval(() => {
        setCurrentIndex(prevIndex => (prevIndex + 1) % images.length);
      }, 4000); // Change image every 4 seconds for a smoother experience

      return () => clearInterval(intervalId); // Clear interval on component unmount
    }
  }, [images]);

  const goToPrevious = () => {
    setCurrentIndex(prevIndex => (prevIndex - 1 + images.length) % images.length);
  };

  const goToNext = () => {
    setCurrentIndex(prevIndex => (prevIndex + 1) % images.length);
  };

  return (
    <div className="relative w-full max-w-screen-lg mx-auto overflow-hidden rounded-lg shadow-lg">
      {/* Image container */}
      <div
        className="flex transition-transform duration-700 ease-in-out"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {images.map((url, index) => (
          <img
            key={index}
            src={url}
            alt={`Slide ${index}`}
            className="w-full object-cover h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px]" 
          />
        ))}
      </div>

      {/* Previous and Next buttons */}
      <div className="absolute inset-0 flex items-center justify-between px-4">
        <button
          onClick={goToPrevious}
          className="bg-black/60 text-white p-2 rounded-full shadow-lg hover:bg-black/80 transition-all duration-300"
        >
          &#9664;
        </button>
        <button
          onClick={goToNext}
          className="bg-black/60 text-white p-2 rounded-full shadow-lg hover:bg-black/80 transition-all duration-300"
        >
          &#9654;
        </button>
      </div>

      {/* Slide indicators */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {images.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full ${
              index === currentIndex ? 'bg-white' : 'bg-gray-300'
            }`}
            onClick={() => setCurrentIndex(index)}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;
