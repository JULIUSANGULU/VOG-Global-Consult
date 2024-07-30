import React from "react";
import { FaCheckCircle, FaChevronDown, FaChevronUp } from "react-icons/fa";
import Why from "../assets/WhyUs.svg";
import useToggle from "./useToggle"; // Custom hook for toggling

const WhyUs = () => {
  const [isExpanded, toggle] = useToggle([false, false, false, false, false]);

  return (
    <div className="bg-white text-gray-800 p-6 md:p-12">
      <div className="text-center mb-6">
        <h2 className="text-2xl md:text-4xl font-bold">
          Why are we{" "}
          <span className="underline decoration-green-500">
            your best choice?
          </span>
        </h2>
        <p className="mt-2 md:mt-4">
          Choosing the right partner for your business consulting, tax audit,
          and assurance needs is crucial to your success. At VOG Global, we
          stand out as the premier choice for businesses seeking reliable,
          expert, and client-centric services.
        </p>
      </div>

      <div className="md:flex md:items-center md:justify-between md:space-x-6">
        <div className="md:w-1/2 mb-6 md:mb-0">
          <img
            src={Why}
            alt="Why Us"
            className="rounded-md w-full h-auto object-cover"
          />
        </div>

        <div className="md:w-1/2">
          {[
            "Unmatched Expertise and Experience",
            "Comprehensive Service Offering",
            "Customized Solutions",
            "Commitment to Excellence",
            "Industry Recognition",
          ].map((title, index) => (
            <div key={index} className="mb-4 border-b pb-2">
              <div
                className="flex justify-between items-center cursor-pointer py-2"
                onClick={() => toggle(index)}
              >
                <div className="flex items-center">
                  <FaCheckCircle className="text-green-600 mr-2" />
                  <p className="font-semibold text-lg">{title}</p>
                </div>
                {isExpanded[index] ? (
                  <FaChevronUp className="text-gray-600" />
                ) : (
                  <FaChevronDown className="text-gray-600" />
                )}
              </div>
              {isExpanded[index] && (
                <div className="mt-2 pl-6 text-gray-600">
                  <p>Content for {title} goes here...</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      <div className="mt-12 text-center">
        <p className="italic text-lg md:text-xl">
          “At VOG Global, we believe in empowering businesses through
          unparalleled expertise and personalized solutions. Our commitment to
          excellence and integrity drives us to deliver results that not only
          meet but exceed our clients’ expectations. Together, we can navigate
          complexities, seize opportunities, and achieve lasting success.”
        </p>
        <p className="font-semibold mt-4">Udo, OKEY Okoro, CEO</p>
      </div>
    </div>
  );
};

export default WhyUs;
