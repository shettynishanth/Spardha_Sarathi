import React from 'react';

const GalleryPage = () => {
  // Add your institution images here
  const images = [
    { url: 'image1.jpg', alt: 'Institution Image 1' },
    { url: 'image2.jpg', alt: 'Institution Image 2' },
    { url: 'image3.jpg', alt: 'Institution Image 3' },
    { url: 'image4.jpg', alt: 'Institution Image 4' },
    { url: 'image5.jpg', alt: 'Institution Image 5' },
    // Add more images here
  ];

  return (
    <div className="py-8 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">
          Institution Gallery
        </h1>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {images.map((image, index) => (
            <div key={index} className="relative overflow-hidden rounded-lg shadow-lg">
              <img
                src={image.url}
                alt={image.alt}
                className="w-full h-64 object-cover transform hover:scale-105 transition-transform duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default GalleryPage;
