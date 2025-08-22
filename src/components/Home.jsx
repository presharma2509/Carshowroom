import { useGSAP } from '@gsap/react'
import gsap from 'gsap';
import React from 'react'
import Header from '../files/Header';
import { RxTriangleRight } from "react-icons/rx";
import Docnumber from '../files/Docnumber';
import Home2 from '../files/Home2';
import Boxslide from '../files/Boxslide';
import Cardisplay from '../files/Cardisplay';
import Loginform from '../files/Loginform';
import Home3 from '../files/Home3';
import Showcar from '../files/Showcar';
import Subscribe from '../files/Subscribe';
import Footers from '../files/Footers';
import carbox from '../assets/carbox.jpeg';

const Home = () => {
  useGSAP(() => {
    gsap.to(".box", {
      duration: 1,
      y:-300,
      delay: 0,})
    gsap.to(".box1", {
      duration: 1,
      y: -300,
      delay: 0.2,})
  } );
  return (
   <>
    <Header/>
    
     <div className='flex flex-row h-screen w-full justify-around  relative px-28'>
        {/* textfont */}
        <div className='flex flex-col  h-screen px-28 '>
              <h1 className='box text-white text-sm mt-[550px]'>Arrive In Style</h1>
              <h1 className='box text-white font-bold font-sans  text-5xl '>Luxury Cars, First-Class Experience</h1>
              <h1 className='box text-white font-bold font-sans  z-20 text-5xl ' >Car</h1>
              <p className='box text-white mt-5'>Make every moment unforgettable with Luzurio. From exotic sports cars to executive sedans, indulge in the ultimate ride backed by premium service and attention to detail.</p>
          </div>


        {/* boximg */}
        <div className='box flex flex-col items-center justify-center  w-96 mt-[550px] '>
          
          <div className=' w-80 '>
                  <img className='w-96 rounded-lg border-1 border-white' src={carbox} alt="carbox" />
                 <div className=' text-white mt-2  p-5 flex text-lg font-sans border-1 border-white rounded-lg '><p className=' pr-40'>Car Details </p>
                  <button className=' bg-red-600 px-1'><RxTriangleRight /></button>
                  </div>
          </div>
        </div>
     </div>

     <Docnumber/>
     <Home2/>
     <Boxslide/>
     <Cardisplay/>
     <Loginform/>
     <Home3/>
     <Showcar/>
     <Subscribe/>
     <Footers/>
   </>
  )
}

export default Home