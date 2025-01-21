import React from "react";
import { IoCopyOutline } from "react-icons/io5";

function ChatboxApiSection() {
  return (
    <>
      <div className="h-full w-full space-y-3">
        <div className="w-full p-2 rounded-lg bg-transparent border-[1px] border-zinc-700 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="bg-[#5796f2] rounded-lg px-2 py-1 text-sm">
              POST
            </div>
            <h1>https://api.domex.ai/v1/chat/completions</h1>
          </div>
          <div>
            <IoCopyOutline />
          </div>
        </div>
        <div className="h-full w-full flex items-center gap-2">
          <div className="flex flex-col w-1/2 h-full gap-2">
            <div className="h-[170px] border-[1px] border-zinc-700 rounded-lg p-2">
              <h1 className="mb-1">Request Body</h1>
              <p className="text-sm font-semibold">
                message:{" "}
                <span className="text-zinc-400 font-normal">string</span>
              </p>
              <p className="text-sm text-zinc-400 font-normal">
                Message request to agent
              </p>
              <p className="text-sm font-semibold">
                private_key:{" "}
                <span className="text-zinc-400 font-normal">string</span>
              </p>
              <p className="text-sm text-zinc-400 font-normal">
                Private key of connected Wallet
              </p>
              <p className="text-sm font-semibold">
                agent_id:{" "}
                <span className="text-zinc-400 font-normal">string</span>
              </p>
              <p className="text-sm text-zinc-400 font-normal">
                uuid of agent to interact
              </p>
            </div>
            <div className="h- border-[1px] border-zinc-700 rounded-lg p-2">
              <h1 className="mb-1">Request Body</h1>

              <div className="py-3 border-b-[1px]">
                <p className="text-sm font-semibold">
                  id: <span className="text-zinc-400 font-normal">string</span>
                </p>
                <p className="text-sm text-zinc-400 font-normal">
                  The Id of message
                </p>
              </div>

              <div className="py-3 border-b-[1px]">
                <p className="text-sm font-semibold">
                  created:{" "}
                  <span className="text-zinc-400 font-normal">number</span>
                </p>
                <p className="text-sm text-zinc-400 font-normal">
                  Time Chat was created
                </p>
              </div>

              <div className="py-3 border-b-[1px]">
                <p className="text-sm font-semibold">
                  requested:{" "}
                  <span className="text-zinc-400 font-normal">number</span>
                </p>
                <p className="text-sm text-zinc-400 font-normal">
                  Total request you has been requested!
                </p>
              </div>

              <div className="py-3 border-b-[1px]">
                <p className="text-sm font-semibold">
                  rate_limit:{" "}
                  <span className="text-zinc-400 font-normal">number</span>
                </p>
                <p className="text-sm text-zinc-400 font-normal">
                  The maximum request can create base on subscription plan
                </p>
              </div>

              <div className="py-3 border-b-[1px]">
                <p className="text-sm font-semibold">
                  choice_message:{" "}
                  <span className="text-zinc-400 font-normal">string</span>
                </p>
                <p className="text-sm text-zinc-400 font-normal">
                  Result of chat
                </p>
              </div>
            </div>
          </div>
          <div className="flex flex-col w-1/2 h-full gap-2">
            <div className=" border-[1px] border-zinc-700 rounded-lg p-3 text-sm">
              <h1 className="mb-1 text-base">Request</h1>

              <p>const response = await</p>
              <p>{"fetch('https://api.psynova.ai/v1/chat/completions'"}</p>
              <p>{"{"}</p>
              <div className="ms-5 space-y-1">
                <p>method: 'POST',</p>
                <p>{"body: {"}</p>
                <p className="flex items-center gap-2">
                  'message':{" "}
                  <p className="h-8 w-44 bg-darksecondary rounded-lg"></p>,
                </p>
                <p className="flex items-center gap-2">
                  'private_key':{" "}
                  <p className="h-8 w-44 bg-darksecondary rounded-lg"></p>,
                </p>
                <p className="flex items-center gap-2">
                  'agent_id':{" "}
                  <input
                    className="h-8 w-44 py-1 px-2 outline-none bg-darksecondary rounded-lg"
                    value={"cfb90bf0-ca62-4270-afb9-f2866b4a05ae"}
                  ></input>
                  ,
                </p>
                <p>{"}"}</p>
              </div>
              <p>{"});"}</p>
              <p>{"const data = await response.json();"}</p>
              <p>{"console.log(data);"}</p>

              <div className="w-fit self-end bg-white text-black font-semibold py-2 px-4 rounded-3xl mt-2">Test it</div>
            </div>

            <div className="h-[170px] border-[1px] border-zinc-700 rounded-lg p-2">
              <h1 className="mb-1">Request Body</h1>
              <div className="h-full w-full flex items-center justify-center">
                <p className="">No response found</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ChatboxApiSection;
