import React from 'react'

const CarGallery = () => {

     const images = [
    "src/assets/carg1.jpg",
    "src/assets/carg2.jpg",
    "src/assets/carg3.jpg",
    "src/assets/carg4.jpg",
    "src/assets/carg5.jpg",
    "src/assets/car1.jpg",
  ];
  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center p-6 pt-10">
       <div className='w-[750px] text-center'>
         <p className='text-zinc-400 text-sm-center mt-16 mb-5 uppercase'>Our Car Moments</p>
      <h1 className="text-5xl font-bold mb-8">A Glimpse of Elegance</h1>
      <p className='text-zinc-400 text-sm-center mb-5 '>Vitae consequat nunc montes maecenas. Sed mauris tincidunt maecenas scelerisque ac sed. Semper risus facilisis nibh rutrum. Laoreet at massa sed volutpat.</p>
       </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 w-full max-w-5xl">
        {images.map((src, index) => (
          <div
            key={index}
            className="overflow-hidden rounded-2xl shadow-lg hover:scale-105 transform transition duration-300"
          >
            <img
              src={src}
              alt={`Car ${index + 1}`}
              className="w-full h-64 object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  )
}

export default CarGallery