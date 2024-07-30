import React, { useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import image1 from "../assets/image1.png";
import image2 from "../assets/image2.png";
import image3 from "../assets/image3.png";
import image4 from "../assets/image4.png";

const Services = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = [image1, image2, image3, image4];

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePrev = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  return (
    <div className="bg-primary-500 text-white p-6">
      <div className="text-center mb-6">
        <h2 className="text-2xl md:text-3xl font-bold">
          We provide the best financial services for your business
        </h2>
        <p className="mt-2">
          Successfully audited and consulted for over 500 businesses across
          various industries.
        </p>
      </div>

      <div className="relative">
        <div className="hidden md:flex justify-center space-x-4">
          {images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Service ${index + 1}`}
              className="rounded-md object-cover h-64 w-64 transition-transform duration-300 hover:scale-105"
            />
          ))}
        </div>
        <div className="block md:hidden">
          <img
            src={images[currentIndex]}
            alt={`Service ${currentIndex + 1}`}
            className="rounded-md w-full object-cover h-64 transition-transform duration-300 hover:scale-105"
          />
          <button
            className="absolute top-1/2 transform -translate-y-1/2 left-2 text-white bg-gray-800 hover:bg-gray-600 rounded-full p-2 transition-colors duration-300"
            onClick={handlePrev}
          >
            <FaArrowLeft />
          </button>
          <button
            className="absolute top-1/2 transform -translate-y-1/2 right-2 text-white bg-gray-800 hover:bg-gray-600 rounded-full p-2 transition-colors duration-300"
            onClick={handleNext}
          >
            <FaArrowRight />
          </button>
        </div>
      </div>

      <div className="mt-6">
        <p className="text-lg">Here at VOG Tech:</p>
        <ul className="list-disc list-inside mt-2">
          <li>
            We are utilizing the latest technologies and methodologies to ensure
            compliance and efficiency.
          </li>
          <li>
            Ensuring your business meets all Nigerian tax laws and regulations.
          </li>
          <li>
            Recognized by leading industry bodies and certified by [relevant
            authority]
          </li>
          <li>
            Clear and transparent processes with regular updates and reports.
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Services;
