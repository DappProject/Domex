import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const MouseFollower = () => {
  const followerRef = useRef(null);

  useEffect(() => {
    // Get the follower element
    const follower = followerRef.current;

    // Set initial position of the follower
    gsap.set(follower, { xPercent: -100, yPercent: -100 });

    // Update position on mouse move
    const handleMouseMove = (event) => {
      gsap.to(follower, {
        x: event.clientX,
        y: event.clientY,
        duration: 0.2, // Smooth movement
        ease: 'power3.out', // Easing function
      });
    };

    
    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  // MouseFollower.js
const handleMouseEnter = () => {
     gsap.to(followerRef.current, {
       scale: 3, 
       duration: 0.3,
       ease: 'power3.out',
       backgroundImage: 'linear-gradient(45deg, lightblue, white)', // Gradient background
     });
   };
   
   const handleMouseLeave = () => {
     gsap.to(followerRef.current, {
       scale: 1, 
       duration: 0.3,
       ease: 'power3.out',
       backgroundImage: 'linear-gradient(45deg, white, lightblue)', // Reset gradient
     });
   };
   
  return (
    <>
      <div
        ref={followerRef}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '20px',
          height: '20px',
          backgroundImage: 'linear-gradient(45deg, lightblue, white)',
          borderRadius: '50%',
          pointerEvents: 'none',
          zIndex: 1000,
        }}
      ></div>
      <div onMouseOver={handleMouseEnter} onMouseOut={handleMouseLeave}>Hover Me</div>
    </>
  );
};

export default MouseFollower;
