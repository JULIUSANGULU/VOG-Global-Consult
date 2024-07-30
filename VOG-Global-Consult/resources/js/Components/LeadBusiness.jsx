import React from "react";
import Why from "../assets/WhyUs.svg";

const LeadBusiness = () => {
  return (
    <div className="container mx-auto p-4">
      <div className="flex flex-col md:flex-row items-center">
        <div className="md:w-1/2">
          <div className="relative">
            <img
              src={Why}
              alt="Lead Business"
              className="w-full h-auto rounded"
            />
            <div className="absolute top-4 left-4 bg-secondary-500 text-white px-2 py-1 rounded">
              Over 100+ Leading firms being serviced
            </div>
          </div>
        </div>
        <div className="md:w-1/2 md:pl-8 mt-4 md:mt-0">
          <h1 className="text-3xl md:text-4xl font-bold text-center md:text-left">
            We Lead Your Business To{" "}
            <span className="underline decoration-green-700">Success!</span>
          </h1>
          <p className="text-center md:text-left mt-4">
            Our Team’s goal is to drive your team to success with the right
            finances and financial practices.
          </p>
          <div className="flex justify-center md:justify-start space-x-4 mt-4">
            <button className="bg-primary-500 text-white px-4 py-2 rounded hover:bg-green-600">
              Mission Statement
            </button>
            <button className="border border-green-700 text-green-700 px-4 py-2 rounded hover:bg-green-600 hover:text-white">
              Vision Statement
            </button>
          </div>
          <div className="bg-green-100 text-green-700 p-4 mt-4 rounded">
            To create professional rewarding services for all our clients
            through relentless pursuit of perfection with necessary
            technological aids.
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeadBusiness;
