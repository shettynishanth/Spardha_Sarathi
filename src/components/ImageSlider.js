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
      }, 4000);

      return () => clearInterval(intervalId);
    }
  }, [images]);

  const goToPrevious = () => {
    setCurrentIndex(prevIndex => (prevIndex - 1 + images.length) % images.length);
  };

  const goToNext = () => {
    setCurrentIndex(prevIndex => (prevIndex + 1) % images.length);
  };

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Image Slider */}
      <div
        className="absolute inset-0 flex transition-transform duration-700 ease-in-out"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {images.map((url, index) => (
          <img
            key={index}
            src={url}
            alt={`Slide ${index}`}
            className="w-full h-screen object-cover"
          />
        ))}
      </div>

      {/* Navigation Buttons */}
      <button
        onClick={goToPrevious}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-3 rounded-full shadow-lg hover:bg-black/70 transition-all duration-300"
      >
        &#9664;
      </button>
      <button
        onClick={goToNext}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-3 rounded-full shadow-lg hover:bg-black/70 transition-all duration-300"
      >
        &#9654;
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-3">
        {images.map((_, index) => (
          <button
            key={index}
            className={`w-4 h-4 rounded-full transition-all duration-300 ${
              index === currentIndex ? 'bg-white scale-125' : 'bg-gray-400'
            }`}
            onClick={() => setCurrentIndex(index)}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;
