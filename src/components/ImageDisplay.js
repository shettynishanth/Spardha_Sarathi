// src/components/ImageDisplay.js

import React, { useEffect, useState } from 'react';
import { db } from '../firebase';
import { collection, getDocs, deleteDoc, doc } from 'firebase/firestore';

const ImageDisplay = () => {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchImages = async () => {
    try {
      const imagesCollection = collection(db, 'images');
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

  const handleRemove = async (id) => {
    try {
      await deleteDoc(doc(db, 'images', id));
      setImages(images.filter((image) => image.id !== id));
    } catch (error) {
      console.error('Error removing image: ', error);
    }
  };

  useEffect(() => {
    fetchImages();
  }, []);

  if (loading) {
    return <div className="text-center text-lg">Loading images...</div>;
  }

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <h2 className="text-2xl font-semibold text-center mb-6">Uploaded Images</h2>
      {images.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((image) => (
            <div key={image.id} className="bg-white rounded shadow-md p-4 flex flex-col items-center">
              <img
                src={image.url}
                alt="Uploaded"
                className="w-full h-auto rounded"
              />
              <button
                onClick={() => handleRemove(image.id)}
                className="mt-2 w-full bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              >
                Remove
              </button>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-center text-lg">No images uploaded yet.</p>
      )}
    </div>
  );
};

export default ImageDisplay;
