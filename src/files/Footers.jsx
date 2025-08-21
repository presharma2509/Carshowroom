import React from "react";
import { MdFacebook } from "react-icons/md";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaClock } from "react-icons/fa6";
import { FaTelegramPlane } from "react-icons/fa";
import { RiMapPin2Fill } from "react-icons/ri";
import { PiDevToLogoFill } from "react-icons/pi";

const Footers = () => {
  return (
    <>
      <div className="bg-black px-36 text-white w-full h-[400px]  flex flex-col justify-center items-center gap-10">
        <div className="flex">
          <div className="flex border-b-[1px] border-gray-900 py-10 gap-20">
            <div className="flex gap-5 flex-col text-sm  w-[570px]">
              <div className=' text-red-600 text-5xl  rounded-full'  > <PiDevToLogoFill /></div>
              <p className="text-gray-400">
                Feel free to call us in working hours Mon - fri (8:00 - 16.00).
                Our team will be happy to help answer your queries
              </p>
              <span className="text-gray-400">+1 (333) 000-0000</span>
              <div className="flex gap-3 mt-5 ">
                <div className="bg-red-500 text-black rounded-full p-1 hover:bg-yellow-100 text-lg">
                  <MdFacebook />
                </div>
                <div className="bg-red-500 text-black rounded-full p-1 hover:bg-yellow-100 text-lg">
                  <FaTwitter />
                </div>
                <div className="bg-red-500 text-black rounded-full p-1 hover:bg-yellow-100 text-lg">
                  <FaLinkedin />
                </div>
                <div className="bg-red-500 text-black rounded-full p-1 hover:bg-yellow-100 text-lg">
                  <FaInstagramSquare />
                </div>
              </div>
            </div>
            <div className="flex gap-5 flex-col">
              <h1>Company</h1>
              <div className="text-gray-400 text-sm">
                <p>Home</p>
                <p>About Us</p>
                <p>Services</p>
                <p>Teams</p>
              </div>
            </div>
            <div className="flex gap-5 flex-col">
              <h1>Help</h1>
              <div className="text-gray-400 text-sm ">
                <p>Costmer Support</p>
                <p>Hoe its works</p>
                <p>Terms & Condition</p>
                <p>Privacy Policy</p>
              </div>
            </div>
            <div className="flex gap-5 flex-col text-sm">
              <h1 className="mb-2 font-bold">Work Hours</h1>
              <div className="text-gray-400">
                <div className="flex gap-2 ">
                  <div className="text-red-500">
                    <FaClock />
                  </div>
                  <p>9 AM - 5 PM, Monday - Saturday</p>
                </div>
                <div className="flex my-2 gap-2">
                  <div className="text-red-500">
                    <FaTelegramPlane />
                  </div>
                  <p>support@luzurio.com</p>
                </div>
                <div className="flex gap-2">
                  <div className="text-red-500">
                    <RiMapPin2Fill />
                  </div>
                  <p>Jl. Menuju Roma No.01, Lewat Jalur Udara</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex  gap-170">
          <div className="flex text-sm text-gray-400 gap-3">
            <p>Copyright © 2025 Luzurio</p>
            <span>|</span>
            <p>Design by Tokotema</p>
          </div>
          <div className="flex text-sm text-gray-400 gap-3">
            <p>Term of use</p>
            <span>|</span>
            <p>Privacy Policy</p>
            <span>|</span>
            <p>Cookie Policy</p>
          </div>
        </div>
      </div>
    </>
  );
};
`~`;
export default Footers;
