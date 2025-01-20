import React from "react";

const ContactUs = () => {
  return (
    <div className="bg-[#080808] w-full text-white py-12 px-6 md:py-20 md:px-10 h-auto flex flex-col md:flex-row gap-8 justify-between items-center">
      {/* Left Section */}
      <div className="flex-1 text-center md:text-left">
        <h1 className="text-5xl sm:text-7xl md:text-9xl font-bold text-transparent bg-clip-text bg-gradient-to-l from-white to-blue-400 mb-8 md:mb-14">
          Let's talk!
        </h1>
        <hr className="mb-6 md:mb-8 border-t-2 border-gray-800" />
        <p className="text-lg sm:text-xl md:text-2xl mb-4">Email:</p>
        <p className="text-3xl sm:text-4xl md:text-5xl font-semibold">
          support@domex.in
        </p>
        <hr className="mt-6 md:mt-8 border-t-2 border-gray-800" />
      </div>

      {/* Right Section */}
      <div className="flex-1 bg-[#10121777] p-4 sm:p-6 rounded-md shadow-md">
        <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
          <div>
            <label htmlFor="name" className="block text-base sm:text-lg mb-1">
              Name
            </label>
            <input
              type="text"
              id="name"
              placeholder="Your Name"
              className="w-full p-3 sm:p-4 bg-black border text-base sm:text-lg border-gray-700 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-base sm:text-lg mb-1">
              Email
            </label>
            <input
              type="email"
              id="email"
              placeholder="Your Email"
              className="w-full p-3 sm:p-4 bg-black border text-base sm:text-lg border-gray-700 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          <div>
            <label
              htmlFor="message"
              className="block text-base sm:text-lg mb-1"
            >
              Message
            </label>
            <textarea
              id="message"
              placeholder="Your Message"
              rows="4"
              className="w-full p-4 sm:p-5 bg-black text-base sm:text-lg border border-gray-700 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-blue-400"
            ></textarea>
          </div>

          <button
            className="w-full bg-[#141a22] text-lg sm:text-2xl py-2 rounded-md hover:bg-[#10161d] focus:outline-none focus:ring-2 focus:ring-blue-400"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;
