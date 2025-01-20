import React from 'react'
import loader from "../assets/loader.gif"
function Loading() {
  return (
    <>
        <img src={loader} alt="loading"  className='h-[350px] w-[450px]'/>
    </>
  )
}

export default Loading