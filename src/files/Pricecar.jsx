import React from "react";
import { FaCheck } from "react-icons/fa6";

const Pricecar = () => {
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
                scelerisque ac sed. Semper risus facilisis nibh rutrum. Laoreet
                at massa sed volutpat.
              </p>
            </div>
          </div>
          </div>
          <div className="flex flex-col  ">
            <div className=" text-white flex justify-between gap-10 px-52 ">


              {/* firstbox */}
              <div className="flex flex-col  border-[2px] border-gray-300 rounded-lg bg-black/30 backdrop-blur-none p-10 mt-10">
                <div className="flex  gap-2">
                  <span className="text-red-500 text-2xl font-bold">|</span><h1 className="text-xl pt-2">Urban Ride</h1>
                </div>
                <p className="text-sm mt-2 text-gray-500">
                  Urban Ride Sit vulputate egestas parturient at lacus risus
                  enim aliquet duis vulputate.
                </p>

                <p>
                  <span className="text-4xl font-bold">$149</span> <span className="text-gray-500">/day</span>
                </p>
                <div className="mt-4">
                  <div className="flex  gap-2   ">
                    <div className="text-red-500">
                      <FaCheck />
                    </div>
                    <p className="text-gray-400">Complimentary pickup & drop-off</p>
                  </div>
                  <div className="flex  gap-2   ">
                    <div className="text-red-500">
                      <FaCheck />
                    </div>
                    <p className="text-gray-400">Access to luxury sedans</p>
                  </div>
                  <div className="flex  gap-2   ">
                    <div className="text-red-500">
                      <FaCheck />
                    </div>
                    <p className="text-gray-400">24/7 customer support</p>
                  </div>
                  <div className="flex  gap-2   ">
                    <div className="text-red-500">
                      <FaCheck />
                    </div>
                    <p className="text-gray-400">Daily maintenance check</p>
                  </div >
                  <div className="flex  gap-2   ">
                    <div className="text-red-500">
                      <FaCheck />
                    </div>
                    <p className="text-gray-400">Unlimited city mileage</p>
                  </div>
                </div>
                <button className="bg-black text-red-500 cursor-pointer px-4 py-2 rounded-full hover:bg-red-500 hover:text-black mt-5 text-xl font-bold">Book Now</button>
              </div>



              {/* secondbox */}
              <div className="flex flex-col  border-[2px] border-gray-300 rounded-lg bg-black/30 backdrop-blur-none p-10 mt-10">
                <div className="flex  gap-2">
                  <span className="text-red-500 text-2xl font-bold">|</span><h1 className="text-xl pt-2">Weekend Escape</h1>
                </div>
                <p className="text-sm mt-2 text-gray-500">
                  Urban Ride Sit vulputate egestas parturient at lacus risus
                  enim aliquet duis vulputate.
                </p>

                <p>
                  <span className="text-4xl font-bold">$399</span> <span className="text-gray-500">/3day</span>
                </p>
                <div className="mt-4">
                  <div className="flex  gap-2   ">
                    <div className="text-red-500">
                      <FaCheck />
                    </div>
                    <p className="text-gray-400">Choice of premium sport or SUV</p>
                  </div>
                  <div className="flex  gap-2   ">
                    <div className="text-red-500">
                      <FaCheck />
                    </div>
                    <p className="text-gray-400">300 miles included</p>
                  </div>
                  <div className="flex  gap-2   ">
                    <div className="text-red-500">
                      <FaCheck />
                    </div>
                    <p className="text-gray-400">GPS & phone connectivity</p>
                  </div>
                  <div className="flex  gap-2   ">
                    <div className="text-red-500">
                      <FaCheck />
                    </div>
                    <p className="text-gray-400">Roadside assistance</p>
                  </div >
                  <div className="flex  gap-2   ">
                    <div className="text-red-500">
                      <FaCheck />
                    </div>
                    <p className="text-gray-400">Chauffeur option available</p>
                  </div>
                </div>
                <button className="bg-red-500 text-black cursor-pointer px-4 py-2 rounded-full hover:bg-black hover:text-red mt-5 text-xl font-bold">Start Your Trip</button>
              </div>



              {/* thirdbox */}
              <div className="flex flex-col  border-[2px] border-gray-300 rounded-lg bg-black/30 backdrop-blur-none p-10 mt-10">
                <div className="flex  gap-2">
                  <span className="text-red-500 text-2xl font-bold">|</span><h1 className="text-xl pt-2">Elite Executive</h1>
                </div>
                <p className="text-sm mt-2 text-gray-500">
                  Urban Ride Sit vulputate egestas parturient at lacus risus
                  enim aliquet duis vulputate.
                </p>

                <p>
                  <span className="text-4xl font-bold">$1199</span> <span className="text-gray-500">/week</span>
                </p>
                <div className="mt-4">
                  <div className="flex  gap-2   ">
                    <div className="text-red-500">
                      <FaCheck />
                    </div>
                    <p className="text-gray-400">Full luxury fleet access</p>
                  </div>
                  <div className="flex  gap-2   ">
                    <div className="text-red-500">
                      <FaCheck />
                    </div>
                    <p className="text-gray-400">Private chauffeur & concierge</p>
                  </div>
                  <div className="flex  gap-2   ">
                    <div className="text-red-500">
                      <FaCheck />
                    </div>
                    <p className="text-gray-400">Vehicle swap available anytime</p>
                  </div>
                  <div className="flex  gap-2   ">
                    <div className="text-red-500">
                      <FaCheck />
                    </div>
                    <p className="text-gray-400">Airport meet & greet</p>
                  </div >
                  <div className="flex  gap-2   ">
                    <div className="text-red-500">
                      <FaCheck />
                    </div>
                    <p className="text-gray-400">Priority customer service</p>
                  </div>
                </div>
                <button className="bg-black text-red-500 cursor-pointer px-4 py-2 rounded-full hover:bg-red-500 hover:text-black mt-5  text-xl font-bold">Book Now</button>
              </div>
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

export default Pricecar;
