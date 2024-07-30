import React from "react";
import { useState } from "react";
import Logo from "../assets/logo.svg";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className="sticky top-0 z-50 flex justify-between h-20 w-full mx-auto text-white bg-accent-500">
      <h1 className="w-full">
        <img src={Logo} alt="VOG Global" className="h-16 mt-3 ml-3" />
      </h1>
      <ul className="hidden md:flex whitespace-nowrap">
        <li className="p-4">Home</li>
        <li className="p-4">About Us</li>
        <li className="p-4">Blog</li>
        <li className="p-4">Our Approach</li>
        <li className="p-4">Services</li>
        <li className="p-4">Contact Us</li>
      </ul>
      <div onClick={handleNav} className="block md:hidden mt-5">
        {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>
      <div
        className={
          nav
            ? "fixed left-0 h-full top-0 w-[60%] border-r border-r-accent-400 bg-accent-500 ease-in-out duration-500 z-40"
            : "fixed left-[-100%]"
        }
      >
        <img src={Logo} className="h-20 mt-3 ml-3" />
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
  );
};

export default Navbar;
