import React from "react";
import { TfiLayoutLineSolid } from "react-icons/tfi";
import { RiDoubleQuotesL } from "react-icons/ri";

const Futurecar = () => {
  return (
    <>
      <div className="relative h-full w-full text-white ">
        <div className="absolute py-28 px-40">
          <div className="flex justify-around gap-20">
            <div className="  flex flex-col gap-5 ">
              <div className="flex  gap-2 ">
                <div className="w-14 h-[2px] bg-red-500 mt-3">
                  <TfiLayoutLineSolid />
                </div>
                <p className="font-sans uppercase ml-2 ">Driven by Vision</p>
              </div>
              <h1 className="flex text-5xl font-bold ">
                Driven by Vision Leading the Future of Luxury Mobility
              </h1>
            </div>
            <div className="mt-20">
              <p className="text-gray-300 text-sm">
                Tellus sed sed odio enim sem mauris mattis. Pellentesque aliquet
                integer non neque id. Ac nisl imperdiet tellus placerat
                venenatis. Habitant ullamcorper ornare est arcu elit
                pellentesque.
              </p>
            </div>
          </div>


          <div className="  h-screen mt-20 flex justify-center">
            <div className="text-red-500 text-8xl ">
              <RiDoubleQuotesL />
            </div>
            <div className=" text-white text-4xl text-bold mt-20 w-[700px]  h-32">
              <p>To Redefine The Boundaries Of Mobility by Merging Luxury,
              Technology, and Personalized Service.</p>
            </div>
          </div>


        </div>
        <img
          src="src/assets/futurecar.jpg"
          alt=""
          className=" h-full w-screen"
        />
      </div>
    </>
  );
};

export default Futurecar;
