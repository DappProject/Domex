import React from 'react'

function CreateAIAgent() {
  return (
    <>
        <div className='w-full h-full flex justify-center items-center text-white'>
        <div className='w-[65%] h-[100vh] p-5 bg-darkprimary mt-5 rounded-lg border-[1px] border-darksecondary'>
            <h1 className='text-2xl font-semibold'>Create AI Agent</h1>
            <form action="" className='flex flex-col space-y-3'>
                <div className='flex flex-col gap-2'>
                    <label htmlFor="agentName" className='text-zinc-300'>Agent Name</label>
                    <input type="text" id='agentName' className='border-[1px] border-darksecondary bg-darksecondary outline-none rounded-lg p-3 text-sm text-zinc-400' placeholder='Enter Name'/>
                </div>
                <div className='flex flex-col gap-2'>
                    <label htmlFor="agentIntro" className='text-zinc-300'>Agent Introduction</label>
                    <textarea type="text" id='agentIntro' className=' border-[1px] border-darksecondary bg-darksecondary outline-none rounded-lg p-3 text-sm text-zinc-400f resize-none' placeholder='Enter Introduction'/>
                </div>
                <select name="" id=""></select>
            </form>
        </div>
        </div>
    </>
  )
}

export default CreateAIAgent