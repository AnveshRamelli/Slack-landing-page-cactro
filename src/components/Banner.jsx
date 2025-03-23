import React, { useState } from "react";
import { IoClose } from "react-icons/io5";

const Banner = () => {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div className="relative bg-blue-500 text-white p-4 md:p-6 rounded-4xl w-full max-w-[1200px] mx-auto mt-4 shadow-md flex items-center justify-between">
      <p className="text-sm md:text-base">
        Slack is your digital HQ. Meet the new features keeping teams connected in a work-from-anywhere world. 
        <a href="#" className="underline hover:text-blue-200 ml-1">Let's go</a>
      </p>
      <IoClose
        className="cursor-pointer text-white text-3xl sm:text-2xl hover:text-gray-300"
        onClick={() => setIsVisible(false)}
      />
    </div>
  );
};

export default Banner;
