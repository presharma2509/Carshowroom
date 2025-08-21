import React from 'react'
import { TfiLayoutLineSolid } from "react-icons/tfi";
import { FaKey } from "react-icons/fa";
import { MdAccessTimeFilled } from "react-icons/md";
import { FaShieldAlt } from "react-icons/fa";
import { FaStar } from "react-icons/fa6";



const Home2 = () => {
  return (
    <>
    <div className='bg-zinc-950 h-[100%] w-full flex  justify-around items-center  '>
        <div className='mx-36 mb-28 flex  gap-10 py-36'>
            <div className='flex  flex-col h-screen w-1/2
         justify-around items-center gap-10'>

            {/* firstdiv */}
            <div >
                <div className=' flex flex-col    w-96   gap-5 '>
                    <div className='flex  gap-2 '>
                    <div className='w-14 h-[2px] bg-red-500  mt-3'><TfiLayoutLineSolid /> 
                        </div>
                        <p className='font-sans uppercase ml-2 text-white '>Beyond the Drive</p>
                        </div>
                        <h1 className='flex text-[40px] font-bold text-white'>Experience, Elegance, Excellence</h1>
                     <p className='text-zinc-400'>Tellus sed sed odio enim sem mauris mattis. Pellentesque aliquet integer non neque id. Ac nisl imperdiet tellus placerat venenatis. Habitant ullamcorper ornare est arcu elit pellentesque.</p>
                 </div>
                 <div className='flex flex-column justify-center gap-10 text-zinc-400 mb-10' >
                    {/* firstbox */}
                    <div className='gap-10 '>
                        <div className='py-7'>
                            <div className='text-2xl text-red-500 py-7 '><FaKey /></div>
                            <h1 className='text-2xl font-bold font-sans text-zinc-100 pb-3'>Easy Access</h1>
                            <p> Neque id ac nisl imperdiet tellus placerat venenatis habitant ullamcorper ornare est arcu elit pellentesque.</p>
                        </div>
                        <div className='py-7'>
                            <div className='text-2xl text-red-500 py-7 '><MdAccessTimeFilled /></div>
                            <h1 className='text-2xl font-bold font-sans text-zinc-100 pb-3'>On-Time Always</h1>
                            <p>Neque id ac nisl imperdiet tellus placerat venenatis habitant ullamcorper ornare est arcu elit pellentesque.</p>
                        </div>
                    </div>

                    {/* secondbox */}
                    <div className='my-28'>
                        <div className='py-7'>
                            <div className='text-2xl text-red-500 py-7 '><FaShieldAlt /></div>
                            <h1 className='text-2xl font-bold font-sans text-zinc-100 pb-3'>Total Protection</h1>
                            <p>Neque id ac nisl imperdiet tellus placerat venenatis habitant ullamcorper ornare est arcu elit pellentesque.</p>
                        </div>
                        <div className='py-7'>
                            <div className='text-red-500 text-2xl py-7 '><FaStar /></div>
                            <h1 className='text-2xl font-bold font-sans text-zinc-100 pb-3'>Premium Service</h1>
                            <p>Neque id ac nisl imperdiet tellus placerat venenatis habitant ullamcorper ornare est arcu elit pellentesque.</p>
                        </div>
                    </div>
                 </div>
            </div>
            {/* enddiv */}
        </div>


        {/* rightbox */}
        <div className='flex flex-col gap-5 h-screen w-1/2 p-10 font-sans'>
            <img className='rounded-xl h-[100%]' src="src/assets/car6.jpg" alt="" />
            <p className='text-zinc-400 '>Tellus sed sed odio enim sem mauris mattis. Pellentesque aliquet integer non neque id. Ac nisl imperdiet tellus placerat venenatis. Habitant ullamcorper ornare est arcu elit pellentesque.</p>
              <button className='w-52 py-3 rounded-full font-medium font-sans text-lg text-black bg-red-500'>Discover Our Story</button>
        </div>
       

     
        </div> 
       
    </div>
    </>
    
  )
}

export default Home2