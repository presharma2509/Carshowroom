import React from "react";

const Showcar = () => {
  return (
    <>
      <div className="relative h-screen w-full flex justify-center items-center bg-zinc-950 ">
        <div className="absolute  text-white text-center w-[750px]">
          <p className="text-lg"> Ready to Drive?</p>
          <h1 className="text-7xl font-sans font-semibold">Experience Luxury, On Your Terms</h1>
          <p className="text-lg mt-6 px-28">
            Step into the world of elite driving. With Luzurio, your perfect car
            is just a few clicks away — fast booking, flawless service,
            unforgettable journeys.
          </p>
          <button className="bg-red-500 text-white rounded-full px-5 py-1 m-8 hover:bg-black text-lg font-semibold">Browse Our Cars</button>
        </div>
        <img className="h-screen w-full overflow-hidden" src="src/assets/bg-car.jpg" alt="" />
      </div>
    </>
  );
};

export default Showcar;
