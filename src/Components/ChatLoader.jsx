import React from 'react'
import chatLoader from "../assets/chatLoader.gif"

function ChatLoader() {
  return (
    <>
        <img src={chatLoader} alt="chatLoader" className='h-20 w-20 bg-primary  bg-clip-text'/>
    </>
  )
}

export default ChatLoader