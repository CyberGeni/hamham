import React from "react";
import navBg from "/src/assets/images/hero-bg.svg";
import Cart from "/src/assets/icons/cart.svg";
import "../App.css";
function Navbar() {
  return (
    <nav className="flex justify-between items-center text-[#E4DDCD] font-['Maven_Pro'] py-4 lg:py-6 px-8 relative">
      <img
        src={navBg}
        className="absolute -z-10 w-fit min-w-[1200px] lg:min-w-[1500px] top-0 left-0"
        alt=""
      />
      <ul className="md:flex hidden space-x-4">
        <li>About</li>
        <li>Menu</li>
        <li>Contact</li>
      </ul>
      <div className="relative flex font-['Calfine_Demo']">
        <h1 className="text-4xl sm:text-5xl text-[#A65B1F] absolute -z-10 mt-1 -ml-1">
          HamHam
        </h1>
        <h1 className="text-4xl sm:text-5xl">HamHam</h1>
        <span className="text-[#A65B1F] mt-3.5 ml-1 w-4 h-4 bg-[#A65B1F] rounded-full"></span>
      </div>
      <div className="flex space-x-2">
        <span className="text-sm border rounded-full px-4 py-1 h-fit">
          LOREM IPSUM
        </span>
        <img src={Cart} alt="" />
      </div>
    </nav>
  );
}

export default Navbar;
