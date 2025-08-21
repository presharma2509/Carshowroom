import React from "react";
import { FaMapMarkerAlt } from "react-icons/fa";
import { FaShieldAlt } from "react-icons/fa";
import { GrNotes } from "react-icons/gr";

const Carmap = () => {
  return (
    <>
      <div className="relative h-screen w-full flex flex-col justify-center items-center bg-zinc-950 ">
        <div className="absolute ">
          <div className="flex justify-center items-center">
            <div className="  text-white text-center justify-center  w-[750px] ">
              <div>
                <p className="text-sm"> Luxury Within Reach</p>
                <h1 className="text-6xl font-sans font-semibold">
                  Flexible Plans, Timeless Comfort
                </h1>
                <p className="text-sm mt-6 px-28">
                  Luxury Within Reach Flexible Plans, Timeless Comfort Vitae
                  consequat nunc montes maecenas. Sed mauris tincidunt maecenas
                  scelerisque ac sed. Semper risus facilisis nibh rutrum.
                  Laoreet at massa sed volutpat.
                </p>
              </div>
            </div>
          </div>
          <div className="flex flex-col  ">
            <div className=" text-white flex justify-between gap-10 px-52 ">
              {/* firstbox */}
              <div className="flex flex-col justify-center items-center border-[2px] border-gray-300 rounded-lg bg-black/30 backdrop-blur-none p-10 mt-10">
                <div className="flex text-red-500  gap-2">
                  <GrNotes />
                </div>
                <h1 className="text-2xl my-5">Booking Guide</h1>
                <p className="text-sm mt-2 text-gray-500">
                  Booking Guide In at in pellentesque fermentum. A mi euismod
                  hendrerit diam sit et purus hac. Ac mauris eu sed id. Sed
                  vitae magna at nulla.
                </p>

                <button className="bg-black text-red-500 cursor-pointer px-4 py-2 rounded-full hover:bg-red-500 hover:text-black mt-5 text-xl font-bold">
                  view Guide
                </button>
              </div>

              {/* secondbox */}
              <div className="flex flex-col justify-center items-center border-[2px] border-gray-300 rounded-lg bg-black/30 backdrop-blur-none p-10 mt-10">
                <div className="flex text-red-500  gap-2">
                  <FaMapMarkerAlt />
                </div>
                <h1 className="text-2xl my-5">Booking Guide</h1>
                <p className="text-sm mt-2 text-gray-500">
                  Booking Guide In at in pellentesque fermentum. A mi euismod
                  hendrerit diam sit et purus hac. Ac mauris eu sed id. Sed
                  vitae magna at nulla.
                </p>

                <button className="bg-black text-red-500 cursor-pointer px-4 py-2 rounded-full hover:bg-red-500 hover:text-black mt-5 text-xl font-bold">
                  view Guide
                </button>
              </div>

              {/* thirdbox */}
              <div className="flex flex-col justify-center items-center border-[2px] border-gray-300 rounded-lg bg-black/30 backdrop-blur-none p-10 mt-10">
                <div className="flex text-red-500  gap-2">
                  <FaShieldAlt />
                </div>
                <h1 className="text-2xl my-5">Booking Guide</h1>
                <p className="text-sm mt-2 text-gray-500">
                  Booking Guide In at in pellentesque fermentum. A mi euismod
                  hendrerit diam sit et purus hac. Ac mauris eu sed id. Sed
                  vitae magna at nulla.
                </p>

                <button className="bg-black text-red-500 cursor-pointer px-4 py-2 rounded-full hover:bg-red-500 hover:text-black mt-5 text-xl font-bold">
                  view Guide
                </button>
              </div>
              {/* endline */}
            </div>
          </div>
        </div>

        <img
          className="h-screen w-full overflow-hidden"
          src="src/assets/productcar.jpg"
          alt=""
        />
      </div>
    </>
  );
};

export default Carmap;
