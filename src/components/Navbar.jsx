import React,{useState} from 'react'
import { FaHome } from "react-icons/fa";
import { TbArrowRoundaboutRight } from "react-icons/tb";
import { AiOutlineProduct } from "react-icons/ai";
import { IoMdContacts } from "react-icons/io";
import { MdOutlineMiscellaneousServices } from "react-icons/md";
import { IoMenuOutline } from "react-icons/io5";
import { IoSearch } from "react-icons/io5";
import { PiDevToLogoFill } from "react-icons/pi";
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

const Navbar = () => {

    useGSAP(() => {
        gsap.to(".container-box", {
            duration: 1,
            x:70,
            delay:1
        })
    });

    

    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(prev => !prev);
    };


  return (
    <>
    <div className='h-20 w-auto  z-20 fixed top-0 left-0 right-0 shadow-lg'>
        <div className=' flex justify-between items-center h-full p-5  '>
            <div className='flex'>
            <button
                onClick={toggleMenu}  
              className='text-4xl pt-1 text-white bg-black px-2'><IoMenuOutline /></button>
                <div className=' text-red-600 text-5xl ml-6 rounded-full'  > <PiDevToLogoFill /></div>
            </div>
            <form action="">
                <div>
                    <input type="search" placeholder='search' className='bg-white text-gray-300 text-sm p-2 pl-4 pr-10 w-100 rounded-full border-1 border-black' />
                    <button className='absolute text-sm flex right-[24px] top-[25px]  p-2 bg-gray-400 rounded-full '><IoSearch />
                    </button>
                </div>
            </form>
        </div>
    </div>
    <div 
    // onClick={handleclick} 
    className={`container-box flex flex-col gap-5 items-center z-20 w-20 pt-2 -ml-16 mt-20 fixed left-0 h-[100%]${ menuOpen ? 'visible opacity-100' : 'invisible opacity-0'}`}>
        <a className='text-3xl  bg-white text-black rounded-full p-1' href="/"><FaHome /></a>
        <a className='text-3xl  bg-white text-black rounded-full p-1' href="/about"><TbArrowRoundaboutRight /></a>
        <a className='text-3xl  bg-white text-black rounded-full p-1' href="/products"><AiOutlineProduct /></a>
        <a className='text-3xl  bg-white text-black rounded-full p-1' href="/contact"><IoMdContacts /></a>
        <a className='text-3xl  bg-white text-black rounded-full p-1' href="/services"><MdOutlineMiscellaneousServices /></a>
    </div>
    </>
  )
}

export default Navbar