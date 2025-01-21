import React from "react";
import { IoCopyOutline } from "react-icons/io5";

function ChatboxSDKSection() {
  return (
    <>
      <div className="h-full w-full space-y-3">
        <h1>Installation</h1>
        <div className="w-full p-2 rounded-lg bg-transparent border-[1px] border-zinc-700 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <h1 className="text-sm">pip install psynova==1.3</h1>
          </div>
          <div>
            <IoCopyOutline />
          </div>
        </div>
        <h1>Basic Usage</h1>
        <div class="bg-gray-900 text-white p-4 rounded-lg flex flex-col gap-2 overflow-x-auto">
            <IoCopyOutline className="self-end"/>
            <span class="font-mono text-sm">from psynova import PsynovaClient</span>
            <span class="font-mono text-sm"># Initialize the client</span>
            <span class="font-mono text-sm">client = PsynovaClient(</span>
            <span class="font-mono text-sm ms-5">    private_key="your_private_key",</span>
            <span class="font-mono text-sm ms-5">    base_url="https://api.psynova.ai" # Optional: defaults to dev environment</span>
            <span class="font-mono text-sm">)</span>
            <span class="font-mono text-sm"># Create a new agent</span>
            <span class="font-mono text-sm">agent_id = client.create_agent(</span>
            <span class="font-mono text-sm ms-5">    name="My AI Agent",</span>
            <span class="font-mono text-sm ms-5">    version_id=1,</span>
            <span class="font-mono text-sm ms-5">    using_https=True,</span>
            <span class="font-mono text-sm ms-5">    using_socket=True</span>
            <span class="font-mono text-sm">)</span>
            <span class="font-mono text-sm"># Chat with the agent</span>
            <span class="font-mono text-sm">response = client.chat(</span>
            <span class="font-mono text-sm ms-5">    agent_id=agent_id,</span>
            <span class="font-mono text-sm ms-5">    message="Hello, AI agent!"</span>
            <span class="font-mono text-sm">)</span>
            <span class="font-mono text-sm">print(response)</span>
    </div>
      </div>
    </>
  );
}

export default ChatboxSDKSection;
