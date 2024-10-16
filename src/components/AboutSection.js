"use client";
import React, { useRef, useEffect, useState } from 'react';

// Custom Hook for Intersection Observer
const useOnScreen = (options) => {
  const ref = useRef();
  const [isIntersecting, setIntersecting] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIntersecting(entry.isIntersecting),
      options
    );
    if (ref.current) {
      observer.observe(ref.current);
    }
    // return () => {
    //   if (ref.current) {
    //     observer.unobserve(ref.current);
    //   }
    // };
  }, [ref, options]);

  return [ref, isIntersecting];
};

const AboutSection = () => {
  const [titleRef, titleVisible] = useOnScreen({ threshold: 0.1 });
  const [descRef, descVisible] = useOnScreen({ threshold: 0.1 });
  const [facultyRef, facultyVisible] = useOnScreen({ threshold: 0.5 });
  const [materialRef, materialVisible] = useOnScreen({ threshold: 0.5 });
  const [successRef, successVisible] = useOnScreen({ threshold: 0.5 });

  return (
    <section className="py-20">
      <div className="container mx-auto px-6">
        {/* Section Title with Fade-In Effect */}
        <h2
          ref={titleRef}
          className={`text-4xl font-extrabold text-gray-900 text-center transition-opacity duration-700 ${
            titleVisible ? 'opacity-100' : 'opacity-0'
          }`}
        >
          About Spardha Sarathi KAS Academy
        </h2>

        {/* Section Description with Delay Fade-In Effect */}
        <p
          ref={descRef}
          className={`mt-6 text-lg text-gray-700 text-center max-w-2xl mx-auto transition-opacity duration-700 delay-200 ${
            descVisible ? 'opacity-100' : 'opacity-0'
          }`}
        >
          Spardha Sarathi KAS Academy is committed to empowering future leaders by providing top-notch coaching and resources tailored to KAS aspirants. Our mission is to foster excellence in education and help students achieve their career goals. <br/>
          <br/>
          ಸ್ಪರ್ಧಾ ಸರಥಿ KAS ಅಕಾಡೆಮಿ, ಭವಿಷ್ಯದ ನಾಯಕರನ್ನು ಶಕ್ತಿಶಾಲಿಗಳನ್ನಾಗಿಸಲು ಸಮರ್ಪಿತವಾಗಿದ್ದು, KAS ಅಭ್ಯಾಸಾರ್ಥಿಗಳಿಗೆ ಉತ್ಕೃಷ್ಟ ತರಬೇತಿಯನ್ನು ಮತ್ತು ಸಂಪನ್ಮೂಲಗಳನ್ನು ಒದಗಿಸುತ್ತಿದೆ. ನಮ್ಮ ಧ್ಯೇಯವು ಶಿಕ್ಷಣದಲ್ಲಿ ಅತಿಲೋಕದ ಅನುಭವವನ್ನು ಬೆಳೆಸುವುದು ಮತ್ತು ವಿದ್ಯಾರ್ಥಿಗಳಿಗೆ ಅವರ ವೃತ್ತಿ ಗುರಿಗಳನ್ನು ಸಾಧಿಸಲು ಸಹಾಯ ಮಾಡುವುದು.
        </p>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-12">
         
          <div
            ref={facultyRef}
            className={`text-center transform transition duration-700 ${
              facultyVisible ? 'scale-100 opacity-100' : 'scale-95 opacity-0'
            }`}
          >
            <img 
              src="/college-mates.jpg" 
              alt="Experienced Faculty" 
              className="mx-auto h-40 w-40 rounded-full object-cover"
              />
              <h3 className="mt-6 text-xl font-semibold text-gray-800">
                Experienced Faculty
                 {/* <br/> ಅನುಭವದ ಶಿಕ್ಷಕವೃಂದ */}
              </h3>
              <p className="mt-4 text-gray-600">
                Learn from the best with our seasoned educators. <br/> ನಮ್ಮ ಅನುಭವದ ಅಧ್ಯಾಪಕರಿಂದ ಉತ್ತಮ ತರಬೇತಿ ಪಡೆಯಿರಿ.
              </p>
            </div>
  
            
            <div
              ref={materialRef}
              className={`text-center transform transition duration-700 delay-300 ${
                materialVisible ? 'scale-100 opacity-100' : 'scale-95 opacity-0'
              }`}
            >
              <img 
                src="/public-examination.jpg" 
                alt="Study Material" 
                className="mx-auto h-40 w-40 rounded-full object-cover"
              />
              <h3 className="mt-6 text-xl font-semibold text-gray-800">
                Comprehensive Study Material 
                {/* <br/> ಸಮಗ್ರ ಅಧ್ಯಯನ ಸಾಮಗ್ರಿ */}
              </h3>
              <p className="mt-4 text-gray-600">
                Access extensive resources to guide your studies.
                <br/>ನಿಮ್ಮ ಅಧ್ಯಯನವನ್ನು ಮಾರ್ಗದರ್ಶನ ಮಾಡಲು ವಿಶಾಲ ಸಂಪನ್ಮೂಲಗಳನ್ನು  ಪ್ರವೇಶಿಸಿ.
              </p>
            </div>
  
            <div
              ref={successRef}
              className={`text-center transform transition duration-700 delay-500 ${
                successVisible ? 'scale-100 opacity-100' : 'scale-95 opacity-0'
              }`}
            >
              <img 
                src="/454964-PFLG0R-800.jpg" 
                alt="Success Stories" 
                className="mx-auto h-40 w-40 rounded-full object-cover"
              />
              <h3 className="mt-6 text-xl font-semibold text-gray-800">
                Proven Success Stories 
              </h3>
              <p className="mt-4 text-gray-600">
              Join the community of successful Spardha Sarathi achievers <br/> ಯಶಸ್ಸು ಸಾಧಿಸಿದ ಸ್ಪರ್ಧಾ ಸರಥಿ ವಿದ್ಯಾರ್ಥಿಗಳ ಸಮುದಾಯವನ್ನು ಸೇರುವಂತೆ.
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  };
  
  export default AboutSection;
  
