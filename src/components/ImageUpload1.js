import React, { useState, useEffect } from 'react';
import { storage, db } from '../firebase';
import { ref, uploadBytesResumable, getDownloadURL, listAll } from 'firebase/storage';
import { collection, addDoc, getDocs } from 'firebase/firestore';

const ImageUpload = () => {
  const [file, setFile] = useState(null);
  const [uploading, setUploading] = useState(false);
  const [progress, setProgress] = useState(0);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [images, setImages] = useState([]);

  useEffect(() => {
    fetchImages();
  }, []);

  const fetchImages = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, 'images'));
      const imageList = querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
      setImages(imageList);
    } catch (error) {
      console.error('Error fetching images:', error);
    }
  };

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
    setError('');
    setSuccess('');
  };

  const handleUpload = async (e) => {
    e.preventDefault();
    if (!file) {
      setError('Please select a file to upload.');
      return;
    }

    setUploading(true);
    const storageRef = ref(storage, `images/${file.name}`);
    const uploadTask = uploadBytesResumable(storageRef, file);

    uploadTask.on(
      'state_changed',
      (snapshot) => {
        const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        setProgress(progress);
      },
      (error) => {
        console.error('Upload error:', error);
        setError('Failed to upload image. Please try again.');
        setUploading(false);
      },
      async () => {
        const url = await getDownloadURL(storageRef);
        await addDoc(collection(db, 'images'), { url });
        setSuccess('Image uploaded successfully!');
        setUploading(false);
        setFile(null);
        fetchImages();
      }
    );
  };

  return (
    <div className="max-w-6xl mx-auto p-6 grid grid-cols-1 md:grid-cols-2 gap-6">
      {/* Upload Section */}
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold text-center mb-4 text-gray-800">Upload News Image</h2>
        <form onSubmit={handleUpload} className="space-y-4">
          <input
            type="file"
            accept="image/*"
            onChange={handleFileChange}
            className="w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer focus:ring-2 focus:ring-blue-500"
            required
          />
          {uploading && (
            <div className="w-full bg-gray-200 rounded-full h-2.5">
              <div
                className="bg-blue-600 h-2.5 rounded-full"
                style={{ width: `${progress}%` }}
              ></div>
            </div>
          )}
          {error && <p className="text-red-500 text-sm">{error}</p>}
          {success && <p className="text-green-500 text-sm">{success}</p>}
          <button
            type="submit"
            disabled={uploading}
            className="w-full px-4 py-2 rounded-md text-white font-semibold tracking-wide bg-blue-600 hover:bg-blue-700 transition-all"
          >
            {uploading ? 'Uploading...' : 'Upload Image'}
          </button>
        </form>
      </div>
      
      {/* Uploaded Images Section */}
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold text-center mb-4 text-gray-800">Uploaded Images</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
          {images.length > 0 ? (
            images.map((img) => (
              <div key={img.id} className="rounded-lg overflow-hidden shadow-md">
                <img src={img.url} alt="Uploaded" className="w-full h-32 object-cover" />
              </div>
            ))
          ) : (
            <p className="text-gray-600 text-center">No images uploaded yet.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default ImageUpload;
