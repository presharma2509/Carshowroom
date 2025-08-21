import React from "react";
import { TfiLayoutLineSolid } from "react-icons/tfi";
import { MdAccessTimeFilled } from "react-icons/md";
import { IoCallSharp } from "react-icons/io5";
import { FaAt } from "react-icons/fa";

const CarContact = () => {
  return (
    <>
      <div className="bg-zinc-950  w-full flex  justify-around items-center  ">
        <div className="mx-36  flex  gap-20 py-28">
          <div
            className="flex  flex-col  
             justify-around items-center gap-10"
          >
            {/* firstdiv */}
            <div>
              <div className=" flex flex-col    w-[500px]   gap-5 ">
                <div className="flex  gap-2 ">
                  <div className="w-14 h-[2px] bg-red-500  mt-3">
                    <TfiLayoutLineSolid />
                  </div>
                  <p className="font-sans uppercase ml-2 text-white ">
                    Let’s Get in Touch
                  </p>
                </div>
                <h1 className="flex text-[40px] font-bold text-white">
                  Reach Out Anytime, Anywhere
                </h1>
                <p className="text-zinc-400">
                  Tellus sed sed odio enim sem mauris mattis. Pellentesque
                  aliquet integer non neque id. Ac nisl imperdiet tellus
                  placerat venenatis. Habitant ullamcorper ornare est arcu elit
                  pellentesque.
                </p>
              </div>
              <div className="flex flex-column  gap-10 text-zinc-400 mb-10 border-b-[1px] border-zinc-700">
                {/* firstbox */}
                <div className="gap-10  ">
                  <div className="flex py-7">
                    <div className="text-2xl text-red-500  border-1 border-red-500 p-5 rounded-full mr-5 hover:bg-white ">
                      <IoCallSharp />
                    </div>
                    <div>
                      <h1 className="text-2xl font-bold font-sans text-zinc-100 pb-3">
                        PHONE
                      </h1>
                      <p>+1 (800) 456-7890</p>
                    </div>
                  </div>
                  <div className="flex py-7">
                    <div className="text-2xl text-red-500  border-1 border-red-500 p-5 rounded-full mr-5 hover:bg-white ">
                      <FaAt />
                    </div>
                    <div>
                      <h1 className="text-2xl font-bold font-sans text-zinc-100 pb-3">
                        EMAIL
                      </h1>
                      <p>support@luzurio.com</p>
                    </div>
                  </div>
                </div>

                {/* secondbox */}
              </div>
              <div className="flex flex-col gap-6">
                <h1 className="text-lg text-zinc-600 font-sans">Address</h1>
                <p className="text-lg font-bold text-white">1288 Sunset Blvd, Beverly Hills, CA 90210, USA</p>
              </div>
            </div>
            {/* enddiv */}
          </div>

          {/* rightbox */}
          <div className="flex flex-col gap-5  w-1/2  font-sans">
            <img className="rounded-xl h-[700px] w-[600px]" src="src/assets/car6.jpg" alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default CarContact;
