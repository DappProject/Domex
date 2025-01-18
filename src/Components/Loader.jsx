// Loader.js
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const Loader = ({ onLoaded }) => {
  const loaderRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({
      onComplete: () => {
        if (onLoaded) onLoaded(); // Call onLoaded when animation finishes
      },
    });

    // Animate the text upwards
    tl.to(textRef.current, {
      y: -50,
      opacity: 1,
      duration: 0.5,
      ease: 'power3.out',
    })
      .to(textRef.current, {
        opacity: 1,
        y:-50,
        duration: 1.5,
        ease: 'power3.out',
      })
     
      // Fade out the loader
      .to(
        loaderRef.current,
        {
          opacity: 0,
          duration: 0.5,
          ease: 'power3.out',
        },
        "-=0.5"
      )
      .set(loaderRef.current, { display: 'none' }); // Remove loader after animation
  }, [onLoaded]);

  return (
    <div
      ref={loaderRef}
      className="fixed inset-0  bg-transparent flex items-center justify-center z-50"
      style={{
        backdropFilter: 'blur(4px)', // Blur effect
      }}
    >
      <h1
        ref={textRef}
        className="text-white text-7xl font-extrabold opacity-0"
        style={{
          letterSpacing: '2px',
          background: 'linear-gradient(45deg, blue, #ffffff)', // Light blue and white gradient
          backgroundClip: 'text',
          color: 'transparent', // Make the text color transparent to show the gradient
          WebkitBackgroundClip: 'text', // Required for webkit browsers
          textShadow: '4px 4px 10px rgba(48, 137, 227, 0.3), -4px -4px 6px rgba(138, 78, 242, 0.4)', // 3D text shadow
        }}
      >
        DOMEX
      </h1>
    </div>
  );
};

export default Loader;
