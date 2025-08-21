import React from 'react'
import Header from '../files/Header'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap';
import Home3 from '../files/Home3';
import Pricecar from '../files/Pricecar';
import CarGallery from '../files/CarGallery';
import Showcar from '../files/Showcar';
import Subscribe from '../files/Subscribe';
import Footers from '../files/Footers';

const Products = () => {
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
      <div className='mt-[550px]'><h1 className='text-9xl text-center text-white'>Products</h1>
      <p className='text-white w-[750px] text-center mt-5 text-sm'>Eget lacinia nisl sit urna. Arcu arcu molestie metus tellus dui at vel odio massa. Facilisi aliquam pulvinar aliquet cursus pellentesque vestibulum. Vitae nec tortor non potenti in.</p></div>
    </div>
    <Home3/>
    <Pricecar/>
    <Showcar/>
    <CarGallery/>
    <Subscribe/>
    <Footers/>
   </>
  )
}

export default Products