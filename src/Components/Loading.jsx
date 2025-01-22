import React from 'react'
import loader from "../assets/loader.gif"
function Loading() {
  return (
    <>
        <img src={loader} alt="loading"  className='sm:h-[350px] h-[300px] w-[450px] fixed'/>
    </>
  )
}

export default Loading