import React, { useEffect, useState } from "react";
import { IoChevronBack } from "react-icons/io5";
import { IoCopyOutline } from "react-icons/io5";
import { useLocation, useNavigate } from "react-router-dom";
import { BsSendFill } from "react-icons/bs";
import AutohideSnackbar from "./SnackBar";
import {
  ApiBackendRequest,
  ApiGetBackendRequest,
} from "../axios/BackendRequest";
import Loading from "./Loading";
import ChatLoader from "./ChatLoader";
import ChatboxApiSection from "./ChatboxApiSection";
import ChatboxSDKSection from "./ChatboxSDKSection";
import gpt from "../assets/openai.png";
import gemma from "../assets/gemma.png";
import meta from "../assets/meta.png";

function AiAgent() {
  const [loading, setLoading] = useState(false);
  const [modechange, setModeChange] = useState("chat");
  const [chatLoading, setChatLoading] = useState(false);
  const [open, setOpen] = useState(false);
  const [throughMyAgent, setThroughMyAgent] = useState();
  const [chatId, setChatId] = useState("");
  const [content, setContent] = useState("");
  const [chats, setChats] = useState([]);
  const location = useLocation();
  const [agentData, setAgentData] = useState(location.state);
  const currentUrl = window.location.href;
  const navigate = useNavigate()

  useEffect(() => {
    function fetch() {
      setLoading(true);
      ApiGetBackendRequest(
        `https://domex-mw1q.onrender.com/agent/${location.state.id}`
      ).then((res) => {
        // console.log(res);
        if (res.data.statusCode == 200) {
          // console.log(res);
          setAgentData(res.data.data);
          setLoading(false);
          if (location.state.href.includes("my-agent")) {
            setThroughMyAgent(true);
          } else {
            setThroughMyAgent(false);
          }
          ApiBackendRequest("https://domex-mw1q.onrender.com/chat", {
            agentId: res.data.data._id,
          }).then((res) => {
            if (res.data.statusCode == 200) {
              setChatId(res.data.data.chatId);
            }
          });
        }
      });
    }

    fetch();
  }, []);

  const handleCopy = (text) => {
    navigator.clipboard.writeText(text).then(() => {
      setOpen(true);
      setTimeout(() => {
        setOpen(false);
      }, 5000);
    });
  };

  const createdDate = new Date(agentData?.createdAt); // Given date
  const now = new Date(); // Current date and time

  // Calculate the difference in milliseconds
  const diffInMs = now - createdDate;

  // Helper constants
  const msInMinute = 60 * 1000;
  const msInHour = 60 * msInMinute;
  const msInDay = 24 * msInHour;
  const msInWeek = 7 * msInDay;
  const msInMonth = 30.44 * msInDay; // Average month length

  // Calculate differences
  const minutes = Math.floor(diffInMs / msInMinute);
  const hours = Math.floor(diffInMs / msInHour);
  const days = Math.floor(diffInMs / msInDay);
  const weeks = Math.floor(diffInMs / msInWeek);
  const months = Math.floor(diffInMs / msInMonth);

  const handleChange = (e) => {
    const value = e.target.value;
    setContent(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setChatLoading(true);

    setChats((prev) => [...prev, { sender: content, receiver: null }]);

    setContent("");

    ApiBackendRequest("https://domex-mw1q.onrender.com/chat/query", {
      chatId,
      content,
    }).then((res) => {
      if (res.data.statusCode === 201) {
        setChats((prev) => {
          const updatedChats = [...prev];

          updatedChats[updatedChats.length - 1] = {
            ...updatedChats[updatedChats.length - 1],
            receiver: res.data.data,
          };
          setChatLoading(false);
          return updatedChats;
        });
      }
    });
  };

  const handlePublishClick = () => {
    ApiBackendRequest(`https://domex-mw1q.onrender.com/agent/publish`, {
      agentId: agentData._id,
    }).then((res) => {
      if (res.data.statusCode == 200) {
        navigate("/Discover/my-agent", {
          state: { agentPublished: true },
        });
      }
    });
  };

  const handleclick = (text) => {
    setModeChange(text);
  };

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <div className="lg:w-[80%] w-[100%] h-full text-white">
          <AutohideSnackbar
            open={open}
            message={"Copy to Clipboard successfully"}
            variant={"success"}
          />
          <button
            className="flex items-center gap-2 mb-1 group hover:text-primary duration-150"
            onClick={() => window.history.back()}
          >
            <span className="p-1 bg-darksecondary rounded-full">
              <IoChevronBack className="group-hover:text-primary" />
            </span>
            Back
          </button>
          <div className="min-w-full min-h-[80vh] flex md:flex-row flex-col-reverse justify-between md:gap-0 gap-2">
            <div className="md:w-[35%] w-full rounded-xl bg-gradient-to-tr from-darksecondary to-[#2c6795] p-5 space-y-5">
              <div className=" space-y-5">
                {agentData.modeProvider == "OPENAI" && (
                  <img
                    src={gpt}
                    alt={name}
                    className="md:h-20 h-12 ms-[-14px]  rounded-full"
                  />
                )}
                {agentData.modeProvider == "GEMMA" && (
                  <img
                    src={gemma}
                    alt={name}
                    className="md:h-28 h-20 md:w-28 w-20 rounded-full"
                  />
                )}
                {agentData.modeProvider == "LAMA" && (
                  <img
                    src={meta}
                    alt={name}
                    className="md:h-28 h-20 md:w-28 w-20 rounded-full"
                  />
                )}

                <div>
                  <h1 className="bg-gradient-to-r from-white to-[#478ec4] bg-clip-text text-transparent md:text-2xl text-xl font-bold">
                    {agentData?.name}
                  </h1>
                  <p className="text-sm text-zinc-400 ">
                    {agentData?.introduction}
                  </p>
                </div>
              </div>
              <div className="py-5 border-t-[1px] border-b-[1px] border-zinc-500 space-y-3">
                <div className=" text-sm md:space-y-3 space-y-1">
                  <p className="flex justify-between items-center md:text-base text-sm">
                    <span className="flex items-center space-x-2 text-zinc-400">
                      <span className="font-semibold md:text-base text-sm">
                        {throughMyAgent ? "Agent ID" : "Owner"}
                      </span>
                    </span>
                    <span className="flex items-center gap-1">
                      <span className="w-32 truncate">{location.state.id}</span>
                      <i className="">
                        <IoCopyOutline
                          className="cursor-pointer"
                          onClick={() => {
                            handleCopy(location.state.id);
                          }}
                        />
                      </i>
                    </span>
                  </p>
                  <p className="flex justify-between items-center md:text-base text-sm">
                    <span className="flex items-center space-x-2 text-zinc-400">
                      <span className="font-semibold md:text-base text-sm">
                        Created
                      </span>
                    </span>
                    {months < 1
                      ? weeks < 1
                        ? days < 1
                          ? hours < 1
                            ? minutes
                            : hours + " hours"
                          : days + " day"
                        : weeks + " weeks"
                      : months}{" "}
                    ago
                  </p>
                  {throughMyAgent && (
                    <p className="flex justify-between items-center md:text-base text-sm">
                      <span className="flex items-center space-x-2 text-zinc-400">
                        <span className="font-semibold md:text-base text-sm">
                          All-time interaction
                        </span>
                      </span>
                      {0}
                    </p>
                  )}
                  <p className="flex justify-between items-center md:text-base text-sm">
                    <span className="flex items-center space-x-2 text-zinc-400">
                      <span className="font-semibold md:text-base text-sm">
                        Terminal
                      </span>
                    </span>
                    {throughMyAgent && (
                      <button
                        className={`px-3 py-1 rounded-3xl text-black bg-secondary hover:bg-primary duration-150 ${
                          agentData.isPublic ? "hidden" : "block"
                        }`}
                        onClick={() => {
                          handlePublishClick();
                        }}
                      >
                        Public
                      </button>
                    )}
                  </p>
                </div>
                {!throughMyAgent && (
                  <div className="bg-darksecondary py-3 px-5  flex items-center justify-between gap-5 rounded-lg border-[1px] border-zinc-700">
                    <div className="truncate w-[60%]">
                      <a href={currentUrl} target="blank" className=" text-sm ">
                        {currentUrl}
                      </a>
                    </div>
                    <i className="">
                      <IoCopyOutline
                        className="cursor-pointer"
                        onClick={() => {
                          handleCopy(currentUrl);
                        }}
                      />
                    </i>
                  </div>
                )}
              </div>
              <div className="text-sm space-y-2">
                <p className="flex items-center md:text-base text-sm">
                  Mode Provider: &nbsp;
                  {agentData.modeProvider == "OPENAI" && (
                    <img
                      src={gpt}
                      alt={name}
                      className="h-8 w-8 rounded-full"
                    />
                  )}
                  {agentData.modeProvider == "GEMMA" && (
                    <img
                      src={gemma}
                      alt={name}
                      className="h-8 w-8 rounded-full"
                    />
                  )}
                  {agentData.modeProvider == "LAMA" && (
                    <img
                      src={meta}
                      alt={name}
                      className="h-8 w-8 rounded-full"
                    />
                  )}{" "}
                  &nbsp;
                  {agentData?.modeProvider}
                </p>

                <p className="flex items-center md:text-base text-sm">
                  Mode Name: {agentData?.modeName}
                </p>

                <p className="flex items-center md:text-base text-sm">
                  Plugins: API
                </p>

                <p className="flex items-center md:text-base text-sm">
                  Quota: {agentData?.currentMessages}/{agentData?.quota}{" "}
                  messages
                </p>
              </div>
            </div>
            <div className="md:w-[64%] min-h-[80vh] h-full w-full rounded-xl bg-darkprimary p-5">
              {throughMyAgent && (
                <div className="w-full flex justify-center items-center self-center mb-1">
                  <div className="md:w-[55%] w-full h-12 bg-black rounded-full flex items-center p-1 gap-1 cursor-pointer">
                    <div
                      className={`w-1/3 h-full rounded-full md:text-lg text-sm flex justify-center items-center hover:bg-primary hover:text-black ${
                        modechange == "chat"
                          ? "bg-primary text-black"
                          : " text-white bg-none"
                      } duration-150`}
                      onClick={() => {
                        handleclick("chat");
                      }}
                    >
                      Chat
                    </div>
                    <div
                      className={`w-1/3 h-full rounded-full md:text-lg text-sm flex justify-center items-center hover:bg-primary hover:text-black ${
                        modechange == "api"
                          ? "bg-primary text-black"
                          : "text-white bg-none"
                      } duration-150`}
                      onClick={() => {
                        handleclick("api");
                      }}
                    >
                      APIs
                    </div>
                    <div
                      className={`w-1/3 h-full rounded-full md:text-lg text-sm flex justify-center items-center hover:bg-primary hover:text-black  ${
                        modechange == "sdk"
                          ? "bg-primary text-black"
                          : "text-white bg-none"
                      } duration-150`}
                      onClick={() => {
                        handleclick("sdk");
                      }}
                    >
                      SDK
                    </div>
                  </div>
                </div>
              )}
              <div className=" min-h-[58vh] w-full bg-transparent mb-2">
                <div
                  className={`flex flex-col h-full overflow-y-auto ${
                    modechange == "chat" ? "block" : "hidden"
                  }`}
                >
                  {chats?.map((chat) => (
                    <>
                      <div class="flex justify-end">
                        <div class="flex justify-start">
                          <div class="text-white p-3 rounded-lg max-w-xs">
                            <div className=" flex justify-end">
                              <p className="w-fit text-sm text-zinc-400 text-end self-end">
                                You
                              </p>
                            </div>
                            {chat.sender}
                          </div>
                        </div>
                      </div>
                      {chatLoading ? (
                        <ChatLoader />
                      ) : (
                        <div className="text-white rounded-lg max-w-xs">
                          <p className="text-sm text-zinc-400">Agent</p>
                          {chat.receiver}
                        </div>
                      )}
                    </>
                  ))}
                </div>
                {throughMyAgent && (
                  <>
                    {modechange == "api" && <ChatboxApiSection />}
                    {modechange == "sdk" && <ChatboxSDKSection />}
                  </>
                )}
              </div>
              <form
                action=""
                onSubmit={handleSubmit}
                className={`${modechange == "chat" ? "block" : "hidden"}`}
              >
                <div className="w-full flex justify-between items-center bg-darksecondary md:text-base text-sm py-3 px-3 border-[1px] border-zinc-700 rounded-lg static bottom-10 text-zinc-400">
                  <input
                    type="text"
                    className=" outline-none bg-transparent w-full"
                    placeholder="Type your message here..."
                    name="content"
                    onChange={handleChange}
                    value={content}
                    autoComplete="off"
                  />
                  <button type="submit">
                    <BsSendFill className="text-2xl text-secondary" />
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default AiAgent;
