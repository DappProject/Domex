import React from 'react';

function MainFooter() {
  return (
    <footer className="bg-[#080808] shadow-teal-200 text-gray-400 py-8">
      <div className="container mx-auto px-4">
        {/* Call to Action */}
        <div className="flex flex-col md:flex-row border-2 border-gray-700 rounded-3xl px-6 md:px-8 py-8 items-center justify-between">
          <div className="text-center md:text-left mb-6 md:mb-0">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-white to-blue-500">
              Join our support Discord
            </h2>
            <p className="text-sm sm:text-lg text-gray-500">
              Subscribe to get the latest updates on our tool right into your inbox every month.
            </p>
          </div>
          <a
            href="https://discord.gg/sine"
            className="text-transparent bg-clip-text bg-gradient-to-r from-white to-blue-500 font-semibold text-xl sm:text-2xl md:text-4xl text-center"
          >
            discord.gg/sine
          </a>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 mt-8"></div>

        {/* Footer Links */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mt-10 space-y-8 md:space-y-0">
          {/* Left Section */}
          <div className="text-center md:text-left">
            <p className="text-white text-2xl sm:text-4xl font-semibold mb-2">Domex</p>
            <p className="text-sm sm:text-md text-gray-500">
              &copy; 2025, Sine Inc - All rights reserved.
            </p>
          </div>

          {/* Socials and Links */}
          <div className="flex flex-col sm:flex-row sm:space-x-16">
            {/* Socials */}
            <div>
              <h3 className="text-white font-semibold text-md">Socials</h3>
              <ul className="mt-2 space-y-1">
                <li>
                  <a
                    href="#"
                    className="font-medium text-base hover:text-white"
                  >
                    Twitter
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="font-medium text-base hover:text-white"
                  >
                    GitHub
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="font-medium text-base hover:text-white"
                  >
                    Discord
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="font-medium text-base hover:text-white"
                  >
                    Buy (Unreleased)
                  </a>
                </li>
              </ul>
            </div>
            {/* Links */}
            <div>
              <h3 className="text-white font-semibold text-md">Links</h3>
              <ul className="mt-2 space-y-1">
                <li>
                  <a
                    href="#"
                    className="font-medium text-base hover:text-white"
                  >
                    Services
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="font-medium text-base hover:text-white"
                  >
                    Process
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="font-medium text-base hover:text-white"
                  >
                    Team
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="font-medium text-base hover:text-white"
                  >
                    Pricing
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="font-medium text-base hover:text-white"
                  >
                    FAQ
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="font-medium text-base hover:text-white"
                  >
                    Contact
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="font-medium text-base hover:text-white"
                  >
                    404
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default MainFooter;
