import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import React from 'react'
import { IoMdStar } from "react-icons/io";
import { TfiLayoutLineSolid } from "react-icons/tfi";



const Docnumber = () => {
  useGSAP(() => {
    gsap.to(".box", {
      duration: 1,
      y:-300,
      delay: 0,})
    
  } );
  
  return (
    <>
        <div className=' flex flex-row  justify-around  bg-gray-200  px-36  py-32'>
            <div className=' flex flex-col    w-80 justify-center  '>
              <div className='flex flex-col   '>
                <div className='flex justify-between '>
                  <div className='text-red-500 flex '><IoMdStar /><IoMdStar /><IoMdStar /><IoMdStar /><IoMdStar /></div>
                  <div> <button className='px-2 bg-gray-200 text-black rounded-lg'>5.0</button></div>
                  
                </div>
                <p className='border-b-[1px] border-gray-300 py-5 text-lg font-medium text-gray-600'>I never knew renting a car could feel this premium. The entire process was seamless, and the Ferrari was in mint condition. Luzurio exceeded every expectation.</p>
                  <h1 className='font-bold font-sans m-4'>Julian Maddox, <span className='font-light'>Luxury Event Planner</span></h1>
              </div>
            </div>


            {/* box2 */}
            <div className='flex flex-col    w-96   gap-5 '>
              <div className='flex  gap-2 '>
                <div className='w-14 h-[2px] bg-red-500 text-white mt-3'><TfiLayoutLineSolid /> 
                </div>
                <p className='font-sans uppercase ml-2 text-black '>Driven by Numbers</p>
              </div>
              <h1 className='flex text-5xl font-bold '>Our Reputation, Backed by Data</h1>
              <p className='text-gray-600'>Tellus sed sed odio enim sem mauris mattis. Pellentesque aliquet integer non neque id. Ac nisl imperdiet tellus placerat venenatis. Habitant ullamcorper ornare est arcu elit pellentesque.</p>
              <button className='w-52 py-3 rounded-full font-bold font-sans bg-black text-red-500'>Explore Our Legacy</button>
            </div>
        </div>
    </>
  )
}

export default Docnumber