import React from "react";
import { TfiLayoutLineSolid } from "react-icons/tfi";
import boxcar1 from '../assets/boxcar1.jpg';
import boxcar2 from '../assets/boxcar2.jpg';
import boxcar3 from '../assets/boxcar3.jpg';
import boxcar4 from '../assets/boxcar4.jpg';
import boxcar5 from '../assets/boxcar5.jpg';
import boxcar6 from '../assets/boxcar6.jpg';

const Cardisplay = () => {
  return (
    <>
      <div className="bg-white py-28 px-40">
        <div className="flex justify-around">
          <div className=" flex flex-col    w-[520px]  gap-5 ">
            <div className="flex  gap-2 ">
              <div className="w-14 h-[2px] bg-red-500 text-white mt-3">
                <TfiLayoutLineSolid />
              </div>
              <p className="font-sans uppercase ml-2 text-black ">
                Driven by Numbers
              </p>
            </div>
            <p className="text-gray-900">
              Tellus sed sed odio enim sem mauris mattis. Pellentesque aliquet
              integer non neque id. Ac nisl imperdiet tellus placerat venenatis.
              Habitant ullamcorper ornare est arcu elit pellentesque.
            </p>
            <button className="w-52 py-3 rounded-full font-bold font-sans bg-black text-red-500">
              Explore Our Legacy
            </button>
          </div>
          <div className="w-[530px]">
            <h1 className="flex text-5xl font-bold">
              Tailored for Style, Speed & Sophistication
            </h1>
          </div>
        </div>

        {/* car */}
        <div className="flex flex-col justify-center items-center mt-20 gap-7">
          <div className="flex  gap-7">
            <div className="relative">
              <div className="absolute p-5 text-white">
                <p className="text-[12px]">Vellaro</p>
                <h1 className="text-[25px] font-bold py-10 hover:text-red-500 cursor-pointer">Vellaro Strix V8</h1>
                <p className="text-[12px]">Rent Price</p>
                <p className="text-[25px] font-bold">$720/day</p>
              </div>{" "}
              <img className="rounded-xl" src={boxcar1} alt="boxcar1" />
            </div>
            <div className="relative">
              <div className="absolute p-5 text-white">
                <p className="text-[12px]">Vellaro</p>
                <h1 className="text-[25px] font-bold py-10 hover:text-red-500 cursor-pointer">Vellaro Strix V8</h1>
                <p className="text-[12px]">Rent Price</p>
                <p className="text-[25px] font-bold">$720/day</p>
              </div>{" "}
              <img className="rounded-xl" src={boxcar2} alt="boxcar2" />
            </div>
            <div className="relative">
              <div className="absolute p-5 text-white">
                <p className="text-[12px]">Vellaro</p>
                <h1 className="text-[25px] font-bold py-10 hover:text-red-500 cursor-pointer">Vellaro Strix V8</h1>
                <p className="text-[12px]">Rent Price</p>
                <p className="text-[25px] font-bold">$720/day</p>
              </div>{" "}
              <img className="rounded-xl" src={boxcar3} alt="boxcar3" />
            </div>
          </div>
          <div className="flex  gap-7">
            <div className="relative">
              <div className="absolute p-5 text-white">
                <p className="text-[12px]">Vellaro</p>
                <h1 className="text-[25px] font-bold py-10 hover:text-red-500 cursor-pointer">Vellaro Strix V8</h1>
                <p className="text-[12px]">Rent Price</p>
                <p className="text-[25px] font-bold">$720/day</p>
              </div>{" "}
              <img className="rounded-xl" src={boxcar4} alt="boxcar4" />
            </div>
            <div className="relative">
              <div className="absolute p-5 text-white">
                <p className="text-[12px]">Vellaro</p>
                <h1 className="text-[25px] font-bold py-10 hover:text-red-500 cursor-pointer">Vellaro Strix V8</h1>
                <p className="text-[12px]">Rent Price</p>
                <p className="text-[25px] font-bold">$720/day</p>
              </div>{" "}
              <img className="rounded-xl" src={boxcar5} alt="boxcar5" />
            </div>
            <div className="relative">
              <div className="absolute p-5 text-white">
                <p className="text-[12px]">Vellaro</p>
                <h1 className="text-[25px] font-bold py-10 hover:text-red-500 cursor-pointer">Vellaro Strix V8</h1>
                <p className="text-[12px]">Rent Price</p>
                <p className="text-[25px] font-bold">$720/day</p>
              </div>{" "}
              <img className="rounded-xl" src={boxcar6} alt="boxcar6" />
            </div>
          </div>
        </div>
        {/* end */}
      </div>
    </>
  );
};

export default Cardisplay;
