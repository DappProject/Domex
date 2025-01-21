import React, { useEffect, useState } from "react";
import { gsap } from "gsap";
import MouseFollower from "./MouseFollower";
import Loader from "./Loader";
import bgVideo2 from "../assets/bg-video2.mp4";
import { Link, useNavigate } from "react-router-dom";
import OurFeatures from "./OurFeatures";
import Faq from "./Faq";
import ContactUs from "./ContactUs";
import MainFooter from "./MainFooter";
import Process from "./Process";
import MyComponent from "./MyComponent";

const Landing = () => {
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();


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
              <div className=" border-2 bg-[#0f0f0f87] border-[#0f0f0f] rounded-lg py-2 px-10 hidden md:flex space-x-8">
                {["Discover", "Features", "Create AI Agent", "FAQs"].map((item, index) => (
                  <Link
                    key={index}
                    to={`${item.toLowerCase().replace(" ", "-")}`}
                    className="menu-item text-gray-600 font-semibold hover:text-transparent hover:bg-clip-text  hover:bg-gradient-to-l hover:from-white hover:to-blue-400 transform transition-transform duration-300 hover:scale-110"
                  >
                    {item}
                  </Link>
                ))}
              </div>
              <MyComponent />
            </nav>
            <div className="relative flex flex-col items-center justify-center h-screen text-center px-4">
              <h1 className="text-4xl sm:text-6xl md:text-8xl font-bold bg-gradient-to-r from-white to-blue-500 bg-clip-text text-transparent">
                We're Domex.
              </h1>
              <p className="mt-4 text-sm sm:text-base md:text-lg lg:text-xl w-full sm:w-3/4 md:w-2/3 lg:w-1/2 text-gray-400">
                Domex is your gateway to seamless virtual interactions. By connecting your wallet, you can easily create a personalized agent tailored to your needs.
              </p>
              <button
                className="mt-6 border border-[#444444] px-4 sm:px-5 py-2 font-bold text-gray-300 rounded-md hover:from-white hover:to-blue-400 transition-all duration-300"
                onClick={() => {
                  navigate("/discover");
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
          {/* <ConnectWallet/> */}
          <OurFeatures className="z-50 px-4 sm:px-8" />
          <Process />
          <Faq className="z-50" />
          <MainFooter />

        </>
      )}

    </>
  );
};

export default Landing;
