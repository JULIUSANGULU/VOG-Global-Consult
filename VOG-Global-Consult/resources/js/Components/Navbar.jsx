import React from "react";
import { useState } from "react";
// import Logo from "../assets/logo.svg";
// import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className="sticky top-0 z-50 h-20 w-full flex  justify-center mx-auto text-white bg-accent-500">
      <div className="lg:max-w-7xl flex justify-between items-center ">
        <h1 className="w-full">
          <img src="/assets/logo.svg" alt="VOG Global" className="h-16 mt-3 ml-3" />
        </h1>
        <ul className="hidden md:flex whitespace-nowrap ">

          <li className="p-4"><a href="">Home </a></li>
          <li className="p-4"><a href="">About Us </a></li>
          <li className="p-4"><a href="">Blog </a></li>
          <li className="p-4"><a href="">Our Approach </a></li>
          <li className="p-4"><a className="p-4 bg-[#6e886e] rounded-lg" href="">Services </a></li>
          <li className="p-4  border-primary-300 rounded-lg "><a className=" border-primary-300 rounded-lg " href="">Contact Us </a></li>
        </ul>
        <div onClick={handleNav} className="block md:hidden mt-5">
          {/* {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />} */}
        </div>
        <div
          className={
            nav
              ? "fixed left-0 h-full top-0 w-[60%] border-r border-r-accent-400 bg-accent-500 ease-in-out duration-500 z-40"
              : "fixed left-[-100%]"
          }
        >
          <img src="/assets/logo.svg" className="h-20 mt-3 ml-3" />
          <ul className="pt-10 p-4 uppercase">
            <li className="p-4 border-b border-green-500">Home</li>
            <li className="p-4 border-b border-green-500">About Us</li>
            <li className="p-4 border-b border-green-500">Blog</li>
            <li className="p-4 border-b border-green-500">Our Approach</li>
            <li className="p-4 border-b border-green-500">Services</li>
            <li className="p-4 border-b border-green-500">Contact Us</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
