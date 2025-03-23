import React, { useState } from "react";
import { IoMdSearch, IoMdMenu, IoMdClose } from "react-icons/io";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex items-center justify-between p-4 font-semibold max-w-[1200px] mx-auto w-full">
      <div className="flex items-center gap-4">
        <img src="./assets/logo.png" className="w-24 h-12" alt="Logo" />
      </div>

      <div className="md:hidden">
        {isOpen ? (
          <IoMdClose size={28} onClick={() => setIsOpen(false)} />
        ) : (
          <IoMdMenu size={28} onClick={() => setIsOpen(true)} />
        )}
      </div>

      <ul className="hidden md:flex gap-6">
        <li>Product</li>
        <li>Enterprise</li>
        <li>Resources</li>
        <li>Pricing</li>
      </ul>

      <div className="hidden md:flex gap-6 items-center">
        <IoMdSearch size={20} />
        <h2>Sign in</h2>
        <button className="text-purple-800 font-semibold border-2 border-purple-700 px-4 py-2 rounded-sm">
          TALK TO SALES
        </button>
        <button className="font-semibold text-white border-2 border-purple-800 bg-purple-800 px-4 py-2 rounded-sm">
          TRY FOR FREE
        </button>
      </div>

      {isOpen && (
        <div className="absolute top-16 left-0 w-full bg-white shadow-md md:hidden flex flex-col items-center gap-4 py-4">
          <ul className="flex flex-col gap-4 items-center">
            <li>Product</li>
            <li>Enterprise</li>
            <li>Resources</li>
            <li>Pricing</li>
          </ul>
          <IoMdSearch size={20} />
          <h2>Sign in</h2>
          <button className="text-purple-800 font-semibold border-2 border-purple-700 px-4 py-2 rounded-sm w-3/4">
            TALK TO SALES
          </button>
          <button className="font-semibold text-white border-2 border-purple-800 bg-purple-800 px-4 py-2 rounded-sm w-3/4">
            TRY FOR FREE
          </button>
        </div>
      )}
    </div>
  );
};

export default Navbar;