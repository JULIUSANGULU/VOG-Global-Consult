import React from "react";
import { FaLinkedin, FaInstagram, FaTwitter } from "react-icons/fa";
import { FiImage } from "react-icons/fi";
import Logo from "../assets/logo.svg";
import eiza from "../assets/eiza.svg";

const Footer = () => {
  return (
    <footer className="bg-white text-center md:text-left pt-4">
      <div className="container mx-auto px-6">
        <div className="md:flex md:justify-between md:items-start space-y-6 md:space-y-0">
          <div className="md:flex-1 md:max-w-xs mr-8">
            <img src={Logo} alt="VOG Global" className="mx-auto md:mx-0" />
            <p className="text-sm text-gray-700 mt-4">
              At VOG Global, we are committed to helping you achieve lasting
              success. Our comprehensive suite of services is designed to
              provide the support and guidance you need to navigate today’s
              complex business landscape.
            </p>
          </div>
          <div className="md:flex-1">
            <h3 className="text-lg font-semibold mb-2">Our Services</h3>
            <ul className="text-sm text-gray-700">
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
          <div className="md:flex-1">
            <h3 className="text-lg font-semibold mb-2">VOG Global</h3>
            <ul className="text-sm text-gray-700">
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
          <div className="md:flex-1 md:max-w-xs">
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
        <div className="flex items-center mb-4 md:mb-0">
          <img src={eiza} className="mr-4 mb-8 ml-3" />
          <p className="text-lg mb-8 ">
            Designed and Built By Eiza Innovations
          </p>
        </div>
        <div className="flex space-x-4 mb-8 mr-2">
          <a href="#" className="hover:text-gray-900">
            <FaLinkedin size={30} />
          </a>
          <a href="#" className="hover:text-gray-900">
            <FaInstagram size={30} />
          </a>
          <a href="#" className="hover:text-gray-900">
            <FaTwitter size={30} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
