import React from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap';
import Header from '../files/Header'
import Home2 from '../files/Home2';
import Boxslide from '../files/Boxslide';
import Home3 from '../files/Home3';
import Aboutdrice from '../files/Aboutdrice';
import Futurecar from '../files/Futurecar';
import Subscribe from '../files/Subscribe';
import Footers from '../files/Footers';

const About = () => {
  useGSAP(() => {
    gsap.to(".box", {
      duration: 1,
      y:-300,
      delay: 0,})
    
  } );
  return (
    <>
    <Header/>
    <div className='box grid place-items-center h-screen '>
      <div className='mt-[550px]'><h1 className='text-9xl text-center text-white'>About Us</h1>
      <p className='text-white w-[750px] text-center mt-5 text-sm'>Eget lacinia nisl sit urna. Arcu arcu molestie metus tellus dui at vel odio massa. Facilisi aliquam pulvinar aliquet cursus pellentesque vestibulum. Vitae nec tortor non potenti in.</p></div>
    </div>
    <Home2/>
    <Boxslide/>
    <Aboutdrice/>
    <Futurecar/>
    <Subscribe/>
    <Footers/>
    </>
  )
}

export default About