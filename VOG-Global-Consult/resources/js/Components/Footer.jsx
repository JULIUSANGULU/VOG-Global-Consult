import React from "react";
// import { FaLinkedin, FaInstagram, FaTwitter } from "react-icons/fa";
// import { FiImage } from "react-icons/fi";
// import Logo from "../assets/logo.svg";
// import eiza from "../assets/eiza.svg";

const Footer = () => {
  return (
    <footer className="bg-white text-center md:text-left ">
      <div className="container mx-auto py-20 px-10">
        <div className="flex justify-between items-start lg:grid grid-cols-4 gap-24">
          <div className="md:flex-1 md:max-w-xs mr-8">
            <img src="/assets/logo.svg" alt="VOG Global" className="mx-auto md:mx-0" />
            <p className="text-sm text-gray-700 mt-4">
              At VOG Global, we are committed to helping you achieve lasting
              success. Our comprehensive suite of services is designed to
              provide the support and guidance you need to navigate today’s
              complex business landscape.
            </p>
          </div>
          <div className="md:flex-1 text-center  gap-[15px]">
            <h3 className="text-[25px] text-gray-700 font-semibold mb-2">Our Services</h3>
            <ul className="text-xl text-black leading-normal">
              <li>
                <a href="#" className="hover:underline">
                  IT Audits
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Internal Auditing
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  External Auditing
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Financial Reviews
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Financial Services
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Tax Auditing Services
                </a>
              </li>
            </ul>
          </div>
          <div className="md:flex-1 text-center  gap-[15px]">
            <h3 className="text-[25px] text-gray-700 font-semibold mb-2">VOG Global</h3>
            <ul className="text-[20px] text-gray-700">
              <li>
                <a href="#" className="hover:underline">
                  VOG Finance
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  VOG GlobalTech
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  VOG Global Consult
                </a>
              </li>
            </ul>
          </div>
          <div className="md:flex-1 md:max-w-xs text-center  gap-[15px]">
            <h3 className="text-lg font-semibold mb-2">
              Subscribe To Our Newsletters
            </h3>
            <form>
              <input
                type="email"
                placeholder="Enter your email address"
                className="p-2 border rounded w-full mb-4"
              />
              <button
                type="submit"
                className="bg-primary-500 text-white py-2 px-4 rounded w-full hover:bg-green-600"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>
      <div className="border-t mt-8 pt-6 flex flex-col md:flex-row justify-between items-center text-sm text-white bg-primary-500 w-full h-full">
        <div className="flex items-center justify-start mb-4 md:mb-0 px-3">
          <img src="/assets/eiza.svg" className="mr-4 mb-8 ml-3" />
          <p className="text-lg mb-8 ">
            Designed and Built By Eiza Innovations
          </p>
        </div>
        <div className="flex space-x-4 mb-8 mr-2">
          <a href="#" className="hover:text-gray-900">
            {/* <FaLinkedin size={30} /> */}
          </a>
          <a href="#" className="hover:text-gray-900">
            {/* <FaInstagram size={30} /> */}
          </a>
          <a href="#" className="hover:text-gray-900">
            {/* <FaTwitter size={30} /> */}
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
