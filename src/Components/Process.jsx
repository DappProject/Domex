import React from "react";

const Process = () => {
     const stats = [
          {
               title: "Connect Your Wallet",
               value: "01",
               description: "Start by securely connecting your wallet to Domex. This ensures your data is protected and your transactions are seamless.",
          },
          {
               title: "Create an Agent",
               value: "02",
               description: " Customize and set up your AI agent. Define its role and capabilities to align with your goals.",
          },
          {
               title: "Chat with Your AI Agent",
               value: "03",
               description: " Interact with your AI agent in real-time to streamline your workflows, get insights, or solve problems.",
          }
     ];

     return (
          <section id="Create AI Agent" className="bg-[#080808] text-white py-16 px-6 md:py-20 md:px-10 lg:px-20">
               <h2
                    className="text-5xl md:text-7xl  lg:text-8xl underline font-bold text-left mb-14 bg-clip-text text-transparent bg-gradient-to-r from-gray-300 to-blue-500"
               >
                   The Process
               </h2>
               <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {stats.map((stat, index) => (
                         <div
                              key={index}
                              className="bg-[#101217] p-6 rounded-md shadow-lg text-left"
                         >
                              <p
                                   className="text-4xl md:text-5xl  lg:text-9xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-gray-400 to-blue-500"
                              >
                                   {stat.value}
                              </p>
                              <h3 className="text-xl md:text-2xl lg:text-2xl font-semibold mb-4">
                                   {stat.title}
                              </h3>
                              <p className="text-base md:text-md text-gray-500">{stat.description}</p>
                         </div>
                    ))}
               </div>
          </section>
     );
};

export default Process;
