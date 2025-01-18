import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import bgVideo from '../assets/bg-video2.mp4';  // Import the video file

const Landing = () => {
  const contentRef = useRef(null);
  const videoRef = useRef(null);

  useEffect(() => {
    // Animate content from bottom to top
    gsap.fromTo(
      contentRef.current,
      { y: 100, opacity: 0 }, // Start from the bottom with 0 opacity
      { y: 0, opacity: 1, duration: 2, ease: 'power3.out' } // End at the top with full opacity
    );

    // Slow down video playback speed
    if (videoRef.current) {
      videoRef.current.playbackRate = 1; // Set playback rate to 50% speed
    }
  }, []);

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Background Video */}
      <video
        ref={videoRef}
        autoPlay
        loop
        muted
        className="absolute inset-0 w-full h-full object-cover"
        style={{
          filter: 'blur(4px)',
        }}
      >
        <source src={bgVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-60"></div>

      {/* Content */}
      <div
        ref={contentRef}
        className="relative flex flex-col items-center justify-center h-full text-white z-10"
      >
        <h1 className="text-5xl font-bold mb-4">Welcome to Domax</h1>
        <p className="text-xl text-center max-w-2xl">
          Your innovation hub for the next generation of technology solutions.
        </p>
      </div>
    </div>
  );
};

export default Landing;
