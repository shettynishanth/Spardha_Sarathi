import React, { useEffect, useState } from 'react';
import { db } from '../firebase';
import { collection, getDocs } from 'firebase/firestore';

const PleasedDisplay = () => {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchImages = async () => {
    try {
      const imagesCollection = collection(db, 'imageText');
      const imagesSnapshot = await getDocs(imagesCollection);
      const imageList = imagesSnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setImages(imageList);
    } catch (error) {
      console.error('Error fetching images: ', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchImages();
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-blue-500 border-solid"></div>
        <span className="ml-4 text-lg font-semibold">Loading images...</span>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto p-10 py-10 rounded-lg">
      <h2 className="text-3xl font-extrabold text-gray-900 text-center mb-8 tracking-wide uppercase">
        Selected Students
      </h2>
      {images.length > 0 ? (
        <div className="flex overflow-x-auto scrollbar-hide space-x-6 snap-x snap-mandatory">
          {images.map((image) => (
            <div
              key={image.id}
              className="flex-none w-80 group bg-white border border-gray-200 rounded-lg overflow-hidden shadow-md transition-transform transform hover:scale-105 hover:shadow-xl snap-center"
            >
              <div className="relative">
                <img
                  src={image.url}
                  alt="Uploaded"
                  className="w-full h-48 object-cover transition-transform transform group-hover:scale-110 duration-500"
                />
                <div className="p-4 bg-white">
                  {/* Displaying all text fields here */}
                  <p className="text-gray-700 text-lg font-semibold mb-2">{image.text}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-center text-gray-500"></p>
      )}
    </div>
  );
};

export default PleasedDisplay;
