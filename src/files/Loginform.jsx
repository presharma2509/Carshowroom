import React from "react";
import { TfiLayoutLineSolid } from "react-icons/tfi";

const Loginform = () => {
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
                <p className="font-sans uppercase ml-2 ">Drive Starts Here</p>
              </div>
              <h1 className="flex text-5xl font-bold ">
                Drive Starts Here Your Journey Begins with One Click
              </h1>
              <p className="text-gray-100">
                Tellus sed sed odio enim sem mauris mattis. Pellentesque aliquet
                integer non neque id. Ac nisl imperdiet tellus placerat
                venenatis. Habitant ullamcorper ornare est arcu elit
                pellentesque.
              </p>
              
            </div>
            <div>
              <div className="w-[530px]">
                <span className="text-3xl text-red-500 ">|</span>
                <span className="text-white text-3xl pl-5">Oprating Hours</span>
              </div>
              <div className="mt-10 text-white  pl-6">
                <div className="border-b-[2px] border-gray-500 flex justify-between py-2 "><h1>MONDAY - FRIDAY</h1> <p>08:00-22:00</p></div>
                <div className="border-b-[2px] border-gray-500 flex justify-between py-2"><h1>SATURADAY</h1> <p>09:00-23:00</p></div>
                <div className="border-b-[2px] border-gray-500 flex justify-between py-2"><h1>SUNDAY</h1> <p>10:00-20:00</p></div>
              </div>
            </div>
          </div>

          {/* forms */}
          <div className=" w-full mt-36 h-[600px] flex justify-center items-center">
            <form className="bg-black/40 rounded-2xl p-8 max-w-full w-full max-h-full h-full backdrop-blur-none border border-white/20">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Full Name */}
                <div>
                  <label className="block text-white font-semibold mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    placeholder="Enter your full name"
                    className="w-full p-3 rounded-lg bg-transparent border border-white/20 text-white placeholder-gray-300 focus:outline-none focus:text-red-500"
                  />
                </div>

                {/* Email Address */}
                <div>
                  <label className="block text-white font-semibold mb-2">
                    Email Address <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="w-full p-3 rounded-lg bg-transparent border border-white/20 text-white placeholder-gray-300 focus:outline-none focus:text-red-500"
                  />
                </div>

                {/* Phone Number */}
                <div>
                  <label className="block text-white font-semibold mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    placeholder="Enter your phone number"
                    className="w-full p-3 rounded-lg bg-transparent border border-white/20 text-white placeholder-gray-300 focus:outline-none "
                  />
                </div>
              </div>

              {/* Pickup Date & Time */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                <div>
                  <label className="block text-white font-semibold mb-2">
                    Pickup Date & Time
                  </label>
                  <input
                    type="datetime-local"
                    className="w-full p-3 rounded-lg bg-transparent border border-white/20 text-white focus:outline-none focus:text-red-500"
                  />
                </div>

                <div>
                  <label className="block text-white font-semibold mb-2">
                    Pickup Date & Time
                  </label>
                  <input
                    type="datetime-local"
                    className="w-full p-3 rounded-lg bg-transparent border border-white/20 text-white focus:outline-none focus:text-red-500"
                  />
                </div>
              </div>

              {/* Additional Notes */}
              <div className="mt-6">
                <label className="block text-white font-semibold mb-2">
                  Additional Notes
                </label>
                <textarea
                  placeholder="Any special request?"
                  className="w-full h-56 p-3 rounded-lg bg-transparent border border-white/20 text-white placeholder-gray-300 focus:outline-none focus:text-red-500"
                  rows={3}
                ></textarea>
              </div>

              {/* Submit Button */}
              <div className="mt-6">
                <button
                  type="submit"
                  className="w-full bg-red-500 text-white font-semibold py-3 rounded-full hover:bg-red-300 transition hover:text-black text-lg"
                >
                  Ask Availability
                </button>
              </div>
            </form>
          </div>
          {/* formend */}
        </div>
        <img
          src="src/assets/logincar.jpg"
          alt=""
          className=" h-full w-screen"
        />
      </div>
    </>
  );
};

export default Loginform;
