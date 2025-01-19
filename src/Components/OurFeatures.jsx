import React, { useState } from 'react';
import featureImage1 from '../assets/card14.gif';
import featureImage1Preview from '../assets/card14.jpeg.png';
import featureImage2 from '../assets/card2.gif';
import featureImage2Preview from '../assets/card2.png';
import featureImage9 from '../assets/card8.gif';
import featureImage9Preview from '../assets/card8.png';
import featureImage10 from '../assets/card9.gif';
import featureImage7 from '../assets/card12.gif';
import featureImage10Preview from '../assets/card9.png';
import featureImage7Preview from '../assets/card12.png';

const featureContent = [
  {
    heading: 'Effortless Account Creation with Solana Wallet Integration',
    gif: featureImage1,
    preview: featureImage1Preview,
    description:
      'Get started in seconds with our secure and fast account creation process using Solana Wallet. With just a few clicks, you can connect your wallet and have full access to Domex’s powerful features.',
  },
  {
    heading: 'Create Your Custom AI Agent with Ease',
    gif: featureImage2,
    preview: featureImage2Preview,
    description:
      'No more generic chatbots! With Domex, you can create your very own AI agent that responds to messages just like ChatGPT. Personalize your AI\'s behavior and make it an extension of your brand, providing unique responses to suit your needs.',
  },
  {
    heading: 'Tailor Your Chatbot’s Personality',
    gif: featureImage9,
    preview: featureImage9Preview,
    description:
      'Create a chatbot that feels truly personalized. With Domex, you can customize your AI agent’s personality and interaction style, ensuring it speaks and behaves the way you want it to.',
  },
  {
    heading: 'AI for Every Need',
    gif: featureImage10,
    preview: featureImage10Preview,
    description:
      'Domex isn’t just for chatbots. You can use our platform to create AI agents for a wide range of purposes, including customer support, content creation, social media management, and more.',
  },
  {
    heading: 'Quick Setup, Easy-to-Use Interface',
    gif: featureImage7,
    preview: featureImage7Preview,
    description:
      'We believe in making technology accessible to everyone. Domex is built with a simple, intuitive interface, allowing you to set up your AI agent and start chatting in no time. No technical expertise is required.',
  },
];

const OurFeatures = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <div className="relative bg-[rgba(0,0,0,0.97)] py-10 sm:py-14 lg:py-20">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-4 lg:px-0">
      <h2 className="text-4xl sm:text-5xl lg:text-8xl mb-9 font-bold bg-gradient-to-t from-white via-gray-400 to-gray-700 bg-clip-text text-transparent text-center md:text-start transition-all duration-300 "> Our Feature's</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-12">
          {featureContent.slice(0, 3).map((feature, index) => (
            <div
              key={index}
              style={{
                background: 'linear-gradient(45deg, black, #0d0d0d, black)',
              }}
              className="text-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transform transition duration-300"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div className="relative h-48 sm:h-64 lg:h-72 w-full">
                <img
                  src={hoveredIndex === index ? feature.gif : feature.preview}
                  alt={feature.heading}
                  className="w-full h-full object-cover"
                  style={{
    userSelect: "none", // Disable text selection
    pointerEvents: "none", // Disable dragging
  }}
                />
                <div className="absolute top-0 h-full w-full bg-[#0000004f]"></div>
              </div>
              <div className="p-4 sm:p-6">
                <h3 className="text-xl sm:text-2xl font-bold text-gray-300 mb-4">
                  {feature.heading}
                </h3>
                <p className="text-sm sm:text-lg text-gray-500">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
          {featureContent.slice(3).map((feature, index) => (
            <div
              key={index}
              style={{
                background: 'linear-gradient(45deg, black, #0d0d0d, black)',
              }}
              className="text-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transform transition duration-300"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div className="relative h-56 sm:h-72 w-full">
                <img
                  src={hoveredIndex === index ? feature.gif : feature.preview}
                  alt={feature.heading}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-0 h-full w-full bg-[#0000004f]"></div>
              </div>
              <div className="p-4 sm:p-6">
                <h3 className="text-xl sm:text-2xl font-semibold text-gray-300 mb-4">
                  {feature.heading}
                </h3>
                <p className="text-md sm:text-lg text-gray-500">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OurFeatures;
