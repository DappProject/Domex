import React, { useState } from "react";

function CreateAIAgent() {

  const [selectedProvider, setSelectedProvider] = useState("");

  const handleProviderSelect = (provider) => {
    setSelectedProvider(provider);
  };

  const Modeproviders = [
    { name: "META LLAMA", src: "https://psynova.s3.ap-southeast-1.amazonaws.com/model/meta.png" }, // Replace with actual icon
    { name: "GAMMA", src: "https://psynova.s3.ap-southeast-1.amazonaws.com/model/gemma.png" },
  ];
  const ModeName = [
    { name: "3.1 405B Instruct Turbo", icon: "..." }, // Replace with actual icon
    { name: "3.3 70B Instruct Turbo", icon: "..." },
    { name: "3.1 70B Instruct Turbo", icon: "..." },
  ];
  return (
    <>
      <div className="w-full h-full flex justify-center items-center text-white">
        <div className="min-w-[65%] min-h-[100vh] p-5 bg-darkprimary mt-5 rounded-lg border-[1px] border-darksecondary">
          <h1 className="text-2xl font-semibold mb-5">Create AI Agent</h1>
          <form action="" className="flex flex-col space-y-4">
            <div className="flex flex-col gap-2">
              <label htmlFor="agentName" className="text-zinc-300">
                Agent Name
              </label>
              <input
                type="text"
                id="agentName"
                className="border-[1px] border-darksecondary bg-darksecondary outline-none rounded-lg p-3 text-sm text-zinc-400"
                placeholder="Enter Name"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="agentIntro" className="text-zinc-300">
                Agent Introduction
              </label>
              <textarea
                type="text"
                id="agentIntro"
                className=" border-[1px] border-darksecondary bg-darksecondary outline-none rounded-lg p-3 text-sm text-zinc-400f resize-none"
                placeholder="Enter Introduction"
              />
            </div>

            <div className="mb-4 flex flex-col gap-2">
              <label
                htmlFor="modeProvider"
                className="block text-sm font-medium mb-1 text-zinc-300"
              >
                Mode Provider
              </label>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {Modeproviders.map((provider) => (
                  <div
                    key={provider.name}
                    className={`bg-darksecondary text-white rounded-lg p-4 border-[1px] border-darksecondary hover:border-primary duration-150`}
                    // onClick={() => handleProviderSelect(provider.name)}
                  >
                    <div className="flex flex-col items-center justify-center">
                      {/* Render the icon for the provider here */}
                      <img src={provider.src} alt="" className="h-8 w-8 "/>
                      <span className="ml-2">{provider.name}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="mb-4 flex flex-col gap-2">
              <label
                htmlFor="modeProvider"
                className="block text-sm font-medium mb-1 text-zinc-300"
              >
                Mode Name
              </label>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {ModeName.map((provider) => (
                  <div
                    key={provider.name}
                    className={`bg-darksecondary text-white rounded-lg p-4 border-[1px] border-darksecondary hover:border-primary duration-150`}
                    // onClick={() => handleProviderSelect(provider.name)}
                  >
                    <div className="flex items-center justify-center">
                      {/* Render the icon for the provider here */}
                      <span className="ml-2">{provider.name}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="w-full my-4 flex flex-col gap-2 py-7 border-t-[1px] border-b-[1px] border-darksecondary">
              <label
                htmlFor="modeProvider"
                className="block text-sm font-medium mb-1 text-zinc-300"
              >
                Choose Plugin
              </label>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div
                  className={`bg-darksecondary text-white rounded-lg p-4 border-[1px] border-darksecondary hover:border-primary duration-150`}
                  // onClick={() => handleProviderSelect(provider.name)}
                >
                  <div className="flex flex-col gap-2">
                    {/* Render the icon for the provider here */}
                    <p className="flex items-center gap-2">
                      <input type="checkbox" className="size-4" checked/>
                      API
                    </p>
                    <p className="text-sm text-zinc-400">Ideal for standard request/response interactions.</p>
                  </div>
                </div>
                <div
                  className={`bg-darksecondary text-white rounded-lg p-4 border-[1px] border-darksecondary hover:border-primary duration-150 cursor-not-allowed`}
                  // onClick={() => handleProviderSelect(provider.name)}
                >
                  <div className="flex flex-col gap-2">
                    {/* Render the icon for the provider here */}
                    <p className="flex items-center gap-2">
                      <input type="checkbox" className="size-4" disabled/>
                      WebSocket
                    </p>
                    <p className="text-sm text-zinc-400">Comming Soon</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="space-y-4">
                <h4 className="text-sm">Validate configurations and confirm to activate your AI agent.</h4>
                <button className={`bg-primary hover:bg-secondary duration-200 px-4 py-2 text-black rounded-3xl font-medium`}>Create AI Agent</button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default CreateAIAgent;
