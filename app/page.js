'use client'

import Link from 'next/link';
import React, { useState } from 'react';

const page = () => {

  const[roomId,setRoomId]=useState('')


  return (
  <div className='h-screen w-screen flex flex-col items-center justify-center bg-slate-300'>
      <h1 className='text-[25px] mb-[1rem] md:text-[35px] lg:text-[50px] text center font-bold leading-10 text-blue-600 '>
      Video Call Application using
      <br></br>
      <div className='ml-8 text-[60px] font-semibold text-center mt-6 text-blue-900'>ZEGOCLOUD</div>
      </h1>

    
      <input type="text"
      placeholder='Enter the Room ID'
      className='px-8 py-3 w-[50%] rounded-lg outline-1 bg-gray-500 mt-5 mb-2'
      onChange={(e)=>setRoomId(e.target.value)}
      value={roomId}
      /> 

      <Link href={`room/${roomId}`}>
        <button className=' w-[120px] px-[16px] py-[8px] rounded-lg bg-blue-600 text-white mt-[1rem]'> Join</button>
      </Link>

    </div> 

    
  )
}

export default page;
