import React, { useEffect, useState } from "react";
import { IoChevronBack } from "react-icons/io5";
import {
  ApiBackendRequest,
  ApiGetBackendRequest,
} from "../axios/BackendRequest";
import { useNavigate } from "react-router-dom";
import AutohideSnackbar from "./SnackBar";
const api_url = import.meta.env.API_URL;
import gpt from "../assets/openai.png";
import gemma from "../assets/gemma.png";
import meta from "../assets/meta.png";

function CreateAIAgent() {

  const [errors, setErrors] = useState({general:""});

  const navigate = useNavigate();
  const [ModeProviders, setModeProviders] = useState([]);
  const [ModeName, setModeName] = useState([]);
  const [selectedProvider, setSelectedProvider] = useState("");
  const [validation, setValidation] = useState(false);
  const [loading,setloading]=useState(false)
  const [open, setOpen] = useState(false);
  const [data, setData] = useState({
    name: "",
    introduction: "",
    modeProvider: "",
    modeName: "",
  });


//   const handleProviderSelect = (provider) => {
//     setData((prev) => ({ ...prev, modeProvider: provider }));
//     setErrors((prev) => ({ ...prev, modeProvider: "",general:"" })); // Clear error on selection
//   };

  
  // const ModeName = [{ name: "V2.0", icon: "..." }];
  const validateForm = () => {
    const newErrors = {};
    if (!data.name || data.name.length < 3) {
      newErrors.name = "Agent Name must be at least 3 characters long.";
    }
    if (!data.introduction) {
      newErrors.introduction = "Agent Introduction is required.";
    }
    if (!data.modeProvider) {
      newErrors.modeProvider = "Please select a Mode Provider.";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  useEffect(() => {
    ApiGetBackendRequest(
      `https://domex-mw1q.onrender.com/agent/available`
    ).then((res) => {
      setModeProviders(res.data.data.aiData);
    });
  }, []);

  const handleProviderSelect = (provider, name) => {
    setData((prev) => ({ ...prev, [name]: provider }));
    setErrors((prev) => ({ ...prev, modeProvider: "",general:"" }));
    const selectedMode = ModeProviders.find((mode) => mode.name == provider);
  
    if (selectedMode) {
      console.log(selectedMode.aimodels); 
      setModeName(selectedMode.aimodels); 
    } else {
      console.warn("No matching mode found for the selected provider");
      setModeName([]); 
    }
  };

  const handleModeSelect = (mode, name)=>{
    setData((prev) => ({...prev, [name] : mode}))
  }
  

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
      setData((prev) => ({ ...prev, [name]: value }));
      setErrors((prev) => ({ ...prev, [name]: "" })); // Clear error on input
  };


  const handlesubmit =async  (e)=>{
    setloading(true)
    e.preventDefault()
        // Client-side validation
        if (validateForm()) {
          try {
            const res = await ApiBackendRequest(`https://domex-mw1q.onrender.com/agent`, data);
            if (res.data) {
              navigate("/Discover/my-agent", {
                state: { agentCreated: true },
              });
            }

            if(res.isException){
              setErrors({ general:res.exceptionMessage.message });
              console.log(res.exceptionMessage.message)
            }
            setloading(false)
            console.log(res)
          } catch (error) {
            console.log(error)
            if (error.response && error.response.statusCode === 400) {
              setErrors({ general: "Failed to create agent. Please check your inputs." });
            }
          }
        }
        setloading(false)
console.log(errors.general)
  }
//   const handlesubmit = (e) => {
//     e.preventDefault();
//     ApiBackendRequest(`https://domex-mw1q.onrender.com/agent`, data).then(
//       (res) => {
//         if (res.data.statusCode == 200) {
//           navigate("/Discover/my-agent", {
//             state: { agentCreated: true },
//           });
//         }
//       }
//     );
//   };
  return (
    <>
      <div className="w-full h-full mb-5 flex flex-col justify-center items-center text-white">
        <button
          className="flex items-center gap-2 mb-1 group hover:text-primary duration-150"
          onClick={() => window.history.back()}
        >
          <span className="p-1 bg-darksecondary rounded-full">
            <IoChevronBack className="group-hover:text-primary" />
          </span>
          Back
        </button>
        <div className="min-w-[65%] min-h-[100vh] p-5 bg-darkprimary mt-5 rounded-lg border-[1px] border-darksecondary">
          <h1 className="text-2xl font-semibold mb-5">Create AI Agent</h1>
          <form className="flex flex-col space-y-4" onSubmit={handlesubmit}>
            <div className="flex flex-col gap-2 w-full">
              <label htmlFor="agentName" className="text-zinc-300">
                Agent Name
              </label>
              <input
                type="text"
                name="name"
                id="agentName"
                className="border-[1px] border-darksecondary bg-darksecondary outline-none rounded-lg p-3 text-sm text-zinc-400"
                placeholder="Enter Name"
                onChange={handleChange}
                maxLength={25}
                autoComplete="off"
              />
              <div
                className={`transition-all duration-200 ease-in-out overflow-hidden ${
                  data.name.length <= 2
                    ? "max-h-[60px] opacity-100"
                    : "max-h-0 opacity-0"
                }`}
              >
                <p className="text-red-500 mt-[-3px] ms-[10px] text-sm">
                  {data.name.length == 0
                    ? "This field is Required"
                    : "This field must contain between 3 and 25 characters."}
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="agentIntro" className="text-zinc-300">
                Agent Introduction
              </label>
              <textarea
                type="text"
                name="introduction"
                id="agentIntro"
                className=" border-[1px] border-darksecondary bg-darksecondary outline-none rounded-lg p-3 text-sm text-zinc-400f resize-none"
                placeholder="Enter Introduction"
                onChange={handleChange}
              />
                 {errors.introduction && <p className="text-red-500 text-sm">{errors.introduction}</p>}
            </div>

            <div className="mb-4 flex flex-col gap-2">
              <label
                htmlFor="modeProvider"
                className="block text-sm font-medium mb-1 text-zinc-300"
              >
                Mode Provider
              </label>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {ModeProviders.map((provider) => (
                  <div
                    key={provider.name}
                    className={`bg-darksecondary text-white rounded-lg p-4 border-[1px] border-darksecondary hover:border-primary ${
                      data.modeProvider == provider.name
                        ? "border-[1px] border-primary"
                        : "border-[1px] border-darksecondary "
                    } duration-150`}
                    onClick={() => handleProviderSelect(provider.name, "modeProvider")}
                  >
                    <div className="flex flex-col items-center justify-center gap-1">
                      {/* Render the icon for the provider here */}
                      {provider.name == "OPENAI" && (
                        <img src={gpt} alt="" className="h-8" />
                      )}
                      {provider.name == "GEMMA" && (
                        <img src={gemma} alt="" className="h-8 w-8 " />
                      )}
                      {provider.name == "LAMA" && (
                        <img src={meta} alt="" className="h-8 w-8 " />
                      )}

                      <span className="ml-2 sm:text-base text-xs text-nowrap">
                        {provider.name}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
              {errors.modeProvider && (
              <p className="text-red-500 text-sm">{errors.modeProvider}</p>
            )}
            </div>
            <div className="mb-4 flex flex-col gap-2">
              <label
                htmlFor="modeProvider"
                className="block text-sm font-medium mb-1 text-zinc-300"
              >
                Mode Name
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {ModeName.map((mode, index) => (
                  <div
                  key={index}
                  className={`bg-darksecondary text-white rounded-lg p-4 border-[1px] hover:border-primary duration-150 ${data.modeName == mode? " border-primary" : "border-darksecondary"}`}
                  onClick={() => handleModeSelect(mode, "modeName")}
                  >
                    <div className="flex items-center justify-center">
                      <p className="ml-2 sm:text-base text-xs text-nowrap">
                    {/* {console.log(mode + "mode")} */}
                        {mode}
                      </p>
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
                      <input type="checkbox" className="size-4" checked />
                      API
                    </p>
                    <p className="sm:text-sm text-xs text-zinc-400">
                      Ideal for standard request/response interactions.
                    </p>
                  </div>
                </div>
                <div
                  className={`bg-darksecondary text-white rounded-lg p-4 border-[1px] border-darksecondary hover:border-primary duration-150 cursor-not-allowed`}
                >
                  <div className="flex flex-col gap-2">
                    <p className="flex items-center gap-2">
                      <input type="checkbox" className="size-4" disabled />
                      WebSocket
                    </p>
                    <p className="sm:text-sm text-xs text-zinc-400">
                      Comming Soon
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="space-y-4">
            {errors && <p className="text-red-500 text-sm">{errors.general}</p>}
              <h4 className="text-sm">
                Validate configurations and confirm to activate your AI agent.
              </h4>
              <button
                type="submit"
                className={`bg-primary hover:bg-secondary duration-200 px-4 py-2 text-black rounded-3xl font-medium ${
                  data.name.length <= 2 &&
                  "cursor-not-allowed bg-white hover:bg-white text-zinc-500"
                }`}
                disabled={data.name.length <= 2 ? true : false}
              >
                {loading?"Loading...":"Create AI Agent"}
                
              </button>
            </div>
          </form>
        </div>
      </div>
      {/* <AutohideSnackbar
        open={openSnackbar}
        message={snackbarMessage}
        onClose={() => setOpenSnackbar(false)}
        variant={"error"}
      /> */}
    </>
  );
}

export default CreateAIAgent;
