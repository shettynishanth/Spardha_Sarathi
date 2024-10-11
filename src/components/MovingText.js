import React, { useState, useEffect } from 'react';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../firebase'; // Import Firestore instance
import { FaWhatsapp } from 'react-icons/fa';

const MovingText = () => {
  const [scrollingText, setScrollingText] = useState('');

  // Fetch the scrolling text from Firestore
  useEffect(() => {
    const fetchText = async () => {
      const docRef = doc(db, 'config', 'scrollingText'); // Use config collection and scrollingText document
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        setScrollingText(docSnap.data().text); // Fetching the 'text' field
      } else {
        console.log('No such document!');
      }
    };
    fetchText();
  }, []);

  return (
    <>
      {/* WhatsApp Icon */}
      <a
        href="https://wa.me/yourphonenumber" // Replace with your WhatsApp link
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-20 right-4 z-50 bg-white rounded-full p-3 shadow-lg transition-transform duration-300 hover:scale-110"
      >
        <FaWhatsapp size={50} className="text-green-500 hover:text-green-400" />
      </a>

      {/* Scrolling text with animations */}
      <div className="w-full overflow-hidden bg-gray-800 text-black py-2">
        <div className="scrolling-text whitespace-nowrap animate-scroll px-10">
          <span>{scrollingText}</span>
        </div>
      </div>

    </>
  );
};

export default MovingText;
