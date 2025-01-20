import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

const Loader = ({ onLoaded }) => {
  const loaderRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({
      onComplete: () => {
        if (onLoaded) onLoaded(); // Call onLoaded when animation finishes
      },
    });

    // Animate loader text and fade out
    tl.to(textRef.current, {
      y: 0,
      opacity: 0,
      duration: 0.5,
      ease: "power3.out",
    })
      .to(textRef.current, {
        y: -50,
        opacity: 1,
        duration: 1.5,
        ease: "power3.out",
      })
      .to(
        loaderRef.current,
        {
          opacity: 0,
          duration: 1,
          ease: "power3.out",
        },
        "-=0.5"
      )
      .set(loaderRef.current, { display: "none" }); // Remove loader after animation
  }, [onLoaded]);

  return (
    <div
      ref={loaderRef}
      className="absolute inset-0 flex flex-col items-center justify-center bg-transparent bg-opacity-60 z-50 text-black"
    >
     <h1
  ref={textRef}
  className="text-transparent bg-clip-text bg-gradient-to-r from-white to-blue-500 text-8xl font-bold mb-4 opacity-0"
>
  DOMEX
</h1>

    
    </div>
  );
};

export default Loader;
