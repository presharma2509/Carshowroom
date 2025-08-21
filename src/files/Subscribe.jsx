import React from "react";

const Subscribe = () => {
  return (
    <>
      <div className="flex bg-white w-full h-80 gap-20 px-56 py-16 items-center">
        <div>
          <h1 className="text-3xl font-semibold font-sans">Subscribe to Newsletter</h1>
          <p className="mt-4 text-gray-600 ">
            Aliquet dignissim erat habitasse aliquet tincidunt phasellus
            ultrices. Aenean sed elit mattis sagittis id velit sed scelerisque.
          </p>
        </div>
        <div className="flex flex-col gap-5">
            <input className="bg-gray-300 text-gray-600 w-[450px] rounded-full px-10 text-lg font-semibold py-5" type="text"  placeholder="enter your email"/>
            <button className="bg-red-500 w-[450px] rounded-full px-10 text-lg font-semibold py-5 text-white hover:bg-white hover:text-black border-1 hover:border-red-500">Subscribe Now</button>
        </div>
      </div>
    </>
  );
};

export default Subscribe;
