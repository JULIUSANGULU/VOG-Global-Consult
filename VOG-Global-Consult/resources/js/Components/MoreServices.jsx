import React, { useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import serve1 from "../assets/serve1.png";
import serve2 from "../assets/serve2.png";
import serve3 from "../assets/serve3.png";
import serve4 from "../assets/serve4.png";

const MoreServices = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = [serve1, serve2, serve3, serve4];

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePrev = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  return (
    <div className="bg-slate-50 text-black p-6 mb-5">
      <div className="text-center mb-6">
        <h2 className="text-2xl md:text-3xl font-bold">
          Enjoy The Ease That Financial Assurance Brings!
        </h2>
        <p className="mt-2">
          Secure your business's future with comprehensive financial assurance.
          Our expert assurance services provide accurate and reliable financial
          insights, enhancing your credibility with stakeholders and ensuring
          compliance with regulatory standards.
        </p>
      </div>

      <div className="relative flex items-center justify-center overflow-hidden">
        <div className="flex flex-nowrap md:space-x-4">
          {images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Service ${index + 1}`}
              className={`rounded-md transition-transform duration-300 ${
                currentIndex === index ? "block" : "hidden"
              } md:block w-full md:w-auto h-64 md:h-96 object-cover hover:scale-105`}
            />
          ))}
        </div>
        <button
          className="absolute top-1/2 transform -translate-y-1/2 left-2 text-white bg-gray-800 hover:bg-gray-600 rounded-full p-2 md:hidden"
          onClick={handlePrev}
        >
          <FaArrowLeft />
        </button>
        <button
          className="absolute top-1/2 transform -translate-y-1/2 right-2 text-white bg-gray-800 hover:bg-gray-600 rounded-full p-2 md:hidden"
          onClick={handleNext}
        >
          <FaArrowRight />
        </button>
      </div>

      <div className="mt-6 text-center">
        <a
          href="/services"
          className="inline-block bg-primary-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-full transition-colors duration-300"
        >
          See all our services
        </a>
      </div>
    </div>
  );
};

export default MoreServices;
