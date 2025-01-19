import { createContext, useContext } from "react";

export const AccessContext = createContext({
    isAccessToken : false,
    setIsAccessToken : ()=>{}
});

export const AccessProvider = AccessContext.Provider;

export default  function useAccess (){
    return useContext(AccessContext);
}