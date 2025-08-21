import React from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap';
import Header from '../files/Header';
import Subscribe from '../files/Subscribe';
import Footers from '../files/Footers';
import CarContact from '../files/CarContact';
import Carmap from '../files/Carmap';

const Services = () => {
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
      <div className='mt-[550px]'><h1 className='text-9xl text-center text-white'>Help Center</h1>
      <p className='text-white w-[750px] text-center mt-5 text-sm'>Eget lacinia nisl sit urna. Arcu arcu molestie metus tellus dui at vel odio massa. Facilisi aliquam pulvinar aliquet cursus pellentesque vestibulum. Vitae nec tortor non potenti in.</p></div>
    </div>
    <Carmap/>
    <CarContact/>
    <Subscribe/>
    <Footers/>
    </>
  )
}

export default Services