import React, { useEffect, useState } from "react";
import { gsap } from "gsap";
import MouseFollower from "./MouseFollower";
import Loader from "./Loader";
import bgVideo2 from "../assets/bg-video2.mp4";
import { Link } from "react-router-dom";
import OurFeatures from "./OurFeatures";
import Faq from "./Faq";
import ContactUs from "./ContactUs";
import MainFooter from "./MainFooter";
import Process from "./Process";

const Landing = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (!isLoading) {
      // GSAP Timeline for Navbar Animation
      const tl = gsap.timeline();
      tl.fromTo(
        ".logo",
        { y: -30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, ease: "bounce.out" }
      )
        .fromTo(
          ".menu-item",
          { y: -20, opacity: 0 },
          { y: 0, opacity: 1, stagger: 0.2, duration: 0.6 },
          "-=0.5"
        )
        .fromTo(
          ".cta-button",
          { scale: 0.8, opacity: 0 },
          { scale: 1, opacity: 1, duration: 0.5 }
        );
    }
  }, [isLoading]);

  const handleLoaderComplete = () => {
    setIsLoading(false);
  };

  return (
    <>
      <MouseFollower />
      <div className="relative w-full h-screen bg-black overflow-hidden">
        <video
          autoPlay
          loop
          muted
          className="absolute top-0 inset-0 w-full h-full object-cover"
          style={{ filter: "blur(4px)" }}
        >
          <source src={bgVideo2} type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black bg-opacity-70"></div>
        {isLoading && (
          <div className="absolute inset-0 z-50 flex items-center justify-center">
            <Loader onLoaded={handleLoaderComplete} />
          </div>
        )}
        {!isLoading && (
          <>
            <nav className="relative top-0 left-0 w-full px-4 sm:px-8 py-4 flex items-center justify-between bg-transparent z-20">
              <div className="h-7 logo">
                <h1 className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-white to-blue-500 bg-clip-text text-transparent">
                  Domex.
                </h1>
              </div>
              <div className= " border-2 bg-[#0f0f0f87] border-[#0f0f0f] rounded-lg py-2 px-10 hidden md:flex space-x-8">
                {["Discover", "Features", "Create AI Agent", "FAQs", "Contact Us"].map((item, index) => (
                  <Link
                    key={index}
                    to={`${item.toLowerCase().replace(" ", "-")}`}
                    className="menu-item text-gray-600 font-semibold hover:text-transparent hover:bg-clip-text  hover:bg-gradient-to-l hover:from-white hover:to-blue-400 transform transition-transform duration-300 hover:scale-110"
                  >
                    {item}
                  </Link>
                ))}
              </div>
              <div className="md:hidden flex items-center">
                <button className="text-white">Menu</button>
              </div>
              <div className="hidden md:block">
                <button
                  className="cta-button border border-[#0f0f0f] px-4 sm:px-5 py-2 font-semibold text-gray-600 rounded-md hover:from-white hover:to-blue-400 transition-all duration-300"
                  onMouseMove={(e) => {
                    const button = e.target;
                    const rect = button.getBoundingClientRect();
                    const x = e.clientX - rect.left;
                    const y = e.clientY - rect.top;
                    button.style.background = `radial-gradient(circle at ${x - 250}px ${y}px, #74C0FA, #01192b)`;
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.background = "none";
                  }}
                >
                  Try Your Tool
                </button>
              </div>
            </nav>
            <div className="relative flex flex-col items-center justify-center h-screen text-center px-4">
              <h1 className="text-4xl sm:text-6xl md:text-8xl font-bold bg-gradient-to-r from-white to-blue-500 bg-clip-text text-transparent">
                We're Domex.
              </h1>
              <p className="mt-4 text-sm sm:text-md md:text-lg text-white">
                We've built a powerful tool to bring your Web3 ideas to life.
              </p>
              <button
                className="mt-6 border border-[#444444] px-4 sm:px-5 py-2 font-bold text-gray-400 rounded-md hover:from-white hover:to-blue-400 transition-all duration-300"
                onMouseMove={(e) => {
                  const button = e.target;
                  const rect = button.getBoundingClientRect();
                  const x = e.clientX - rect.left;
                  const y = e.clientY - rect.top;
                  button.style.background = `radial-gradient(circle at ${x - 250}px ${y}px, #4a7cbd , #01192b)`;
                }}
                onMouseLeave={(e) => {
                  e.target.style.background = "none";
                }}
              >
                Try Your Tool
              </button>
            </div>
          </>
        )}
      </div>
      {!isLoading && (
        <>
          <OurFeatures className="z-50 px-4 sm:px-8" />
          
        </>
      )}
      {!isLoading && (
        <>
          <Process/>
          
        </>
      )}
      {!isLoading && (
        <>
          <Faq className="z-50"/>
          
        </>
      )}
     
      {!isLoading && (
        <>
          <MainFooter/>
          
        </>
      )}
    </>
  );
};

export default Landing;
