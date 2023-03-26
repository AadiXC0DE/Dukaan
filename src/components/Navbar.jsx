import React from "react";
import logo from "../assets/logo.svg";

const Navbar = () => {
  return (
    <div className="bg-white">
      <div className="p-4 pb-32 bg-[#146EB4] ">
        <div className="mx-auto py-4 flex flex-row items-center justify-between gap-4 flex-wrap w-[min(1024px,_100%)]">
          <div className="logo">
            <img alt="logo" class="w-32" src={logo}></img>
          </div>
          <div className="flex-row flex items-center justify-end gap-7">
            <a href="#" className="text-white font-Galano">
              Sign In
            </a>
            <a
              href="#"
              className="font-Galano_medium text-[#146EB4] px-4 py-2 bg-white rounded"
            >
              Dukaan for PC
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
