import React from "react";
import { FcGoogle } from "react-icons/fc";

const Hero = () => {
  return (
    <div className="flex flex-col-reverse md:flex-row items-center justify-between max-w-[1200px] mx-auto p-4 md:p-8">
      <div className="text-left max-w-xl">
        <h1 className="text-4xl md:text-6xl font-bold leading-tight text-black">
          Slack is where the <br />
          <span className="text-black">future works.</span>
        </h1>
        <p className="text-sm md:text-base mt-4 text-black font-semibold">
          Transform the way you work with one place for <br />
          everyone and everything you need to get stuff done.
        </p>
        <div className="mt-6 flex gap-4">
          <button className="bg-purple-700 text-white px-6 py-3 rounded font-semibold hover:bg-purple-800">
            TRY FOR FREE
          </button>
          <button className="bg-blue-600 text-white px-6 py-3 rounded font-semibold flex items-center gap-2 hover:bg-blue-700">
            <div className="bg-white p-1 rounded-full">
              <FcGoogle />
            </div>
            Sign up with Google
          </button>
        </div>
      </div>


      <div className="w-full md:w-1/2 flex justify-start items-center">
        <img
          src="./assets/hero.jpeg"
          alt="Hero Image"
          className="w-[80%] h-48 md:h-64 object-cover rounded-lg"
        />
      </div>
    </div>
  );
};

export default Hero;