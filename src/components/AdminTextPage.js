import React, { useState, useEffect } from 'react';
import { doc, getDoc, updateDoc } from 'firebase/firestore';
import { db } from '../firebase'; // Import Firestore instance

const AdminTextPage = () => {
  const [text, setText] = useState('');
  const [loading, setLoading] = useState(false);

  // Fetch the current text from Firestore on component mount
  useEffect(() => {
    const fetchText = async () => {
      setLoading(true);
      const docRef = doc(db, 'config', 'scrollingText'); // Use config collection and scrollingText document
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        setText(docSnap.data().text); // Fetching the 'text' field
      } else {
        console.log('No such document!');
      }
      setLoading(false);
    };
    fetchText();
  }, []);

  // Update text in Firestore
  const handleUpdate = async () => {
    const docRef = doc(db, 'config', 'scrollingText'); // Use config collection and scrollingText document
    await updateDoc(docRef, { text });
    alert('Text updated successfully!');
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Admin Text Editor</h1>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div>
          <textarea
            value={text}
            onChange={(e) => setText(e.target.value)}
            className="w-full h-40 p-2 border border-gray-300 rounded-md"
          />
          <button
            onClick={handleUpdate}
            className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-700"
          >
            Update Text
          </button>
        </div>
      )}
    </div>
  );
};

export default AdminTextPage;
