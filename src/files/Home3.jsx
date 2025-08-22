import React from "react";
import { TfiLayoutLineSolid } from "react-icons/tfi";
import { FaCheckCircle } from "react-icons/fa";
import { FaCompass } from "react-icons/fa";
import drive from '../assets/drive.jpg'
const Home3 = () => {
  return (
    <>
      <div className="flex gap-20  h-screen w-full justify-center items-center bg-zinc-950">
        <div>
          <img className="rounded-xl" src={drive} alt="drive" />
        </div>
        <div>
          <div>
            <div className=" flex flex-col    w-96   ">
              <div className="flex  gap-2 ">
                <div className="w-14 h-[2px] bg-red-500  mt-3">
                  <TfiLayoutLineSolid />
                </div>
                <p className="font-sans uppercase ml-2 text-white ">
                  Drive With Distinction
                </p>
              </div>
              <h1 className="flex text-[40px] font-bold text-white">
                Where Quality Meets Prestige
              </h1>
              <p className="text-zinc-400">
                Tellus sed sed odio enim sem mauris mattis. Pellentesque aliquet
                integer non neque id. Ac nisl imperdiet tellus placerat
                venenatis. Habitant ullamcorper ornare est arcu elit
                pellentesque.
              </p>
            </div>
          </div>
          <div>
            <div className="flex p-10 gap-5">
              <div className="bg-red-500 justify-center items-center h-7  text-2xl text-black rounded-full border-2 border-red-500">
                <FaCheckCircle />
              </div>
              <div className="w-100">
                <h1 className="text-2xl text-white pb-5">Trusted Service</h1>
                <p className="text-white text-sm">
                  Neque id ac nisl imperdiet tellus placerat venenatis habitant
                  ullamcorper ornare est arcu elit pellentesque.
                </p>
              </div>
            </div>
            <div className="flex pl-10 gap-5">
              <div className="bg-red-500 justify-center items-center h-7  text-2xl text-black rounded-full border-2 border-red-500">
                <FaCompass />
              </div>
              <div className="w-100">
                <h1 className="text-2xl text-white pb-5">Nationwide Reach</h1>
                <p className="text-white text-sm">
                  Neque id ac nisl imperdiet tellus placerat venenatis habitant
                  ullamcorper ornare est arcu elit pellentesque.
                </p>
              </div>
            </div>
            <button className="bg-red-500 text-white rounded-full p-3 m-8 hover:bg-red-500 text-lg font-semibold">Experience the Difference</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home3;
