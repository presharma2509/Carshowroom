import React from "react";
import { TfiLayoutLineSolid } from "react-icons/tfi";
import { FaCheckCircle } from "react-icons/fa";
import { FaCompass } from "react-icons/fa";

const Aboutdrice = () => {
  return (
    <>
      <div className="flex gap-20  h-screen w-full justify-center items-center bg-zinc-950">
        <div>
          <img className="rounded-xl" src="src/assets/driver.jpg" alt="" />
        </div>
        <div>
          <div>
            <div className=" flex flex-col    w-[550px]  ">
              <div className="flex  gap-2 ">
                <div className="w-14 h-[2px] bg-red-500  mt-3">
                  <TfiLayoutLineSolid />
                </div>
                <p className="font-sans uppercase ml-2 text-white ">
                  Driven by Passion
                </p>
              </div>
              <h1 className="flex text-[40px] font-bold text-white">
                Built to Redefine Luxury
              </h1>
              <p className="text-zinc-400">
                Tellus sed sed odio enim sem mauris mattis. Pellentesque aliquet
                integer non neque id. Ac nisl imperdiet tellus placerat
                venenatis. Habitant ullamcorper ornare est arcu elit
                pellentesque.
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-5 mt-10">
            <div className="flex pl-10 gap-5">
              <div className="w-100">
                <h1 className="text-gray-300 text-sm pb-1">
                  2018 <span className="text-[15px] mx-4 text-red-500">|</span>
                  First Spark
                </h1>
                <p className="text-gray-500 text-sm">
                  Ac turpis amet velit ac bibendum augue sit. Ac dignissim sed
                  consequat nunc sed. Scelerisque sagittis iaculis nibh vitae
                  laoreet.
                </p>
              </div>
            </div>
            <div className="flex pl-10 gap-5">
              <div className="w-100">
                <h1 className="text-gray-300 text-sm pb-1">
                  2020 <span className="text-[15px] mx-4 text-red-500">|</span> Fleet Expansion
                </h1>
                <p className="text-gray-500 text-sm">
                  Ac turpis amet velit ac bibendum augue sit. Ac dignissim sed
                  consequat nunc sed. Scelerisque sagittis iaculis nibh vitae
                  laoreet.
                </p>
              </div>
            </div>
            <div className="flex pl-10 gap-5">
              <div className="w-100">
                <h1 className="text-gray-300 text-sm pb-1">
                  2024 <span className="text-[15px] mx-4 text-red-500">|</span>
                  Flagship Milestone
                </h1>
                <p className="text-gray-500 text-sm">
                  Ac turpis amet velit ac bibendum augue sit. Ac dignissim sed
                  consequat nunc sed. Scelerisque sagittis iaculis nibh vitae
                  laoreet.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Aboutdrice;
