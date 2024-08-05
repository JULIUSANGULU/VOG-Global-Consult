import React from "react";
// import HeroImage from "/assets/hero-image.png";
// import HeroBackground from "/assets/hero-background.png";
// import coin_icon from "/assets/coin.svg";

const Hero = () => {
  return (
    <div className="bg-green-50">
      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col-reverse lg:flex-row items-center justify-between">
          <div className="w-full lg:w-1/2 text-center lg:text-left">
            <h1 className="text-3xl lg:text-5xl font-bold text-green-900 mb-4">
              Expert Tax Auditing and Business Consulting Services in Nigeria.
            </h1>
            <p className="text-lg lg:text-xl text-green-800 mb-6">
              Ensuring Compliance, Maximizing Efficiency, Driving Success
              <span role="img" aria-label="fist">
                {" "}
                🫴 🪙
              </span>
            </p>
            <button className="bg-primary-500 hover:bg-green-600 text-white px-6 py-3 rounded-full inline-flex items-center mb-6">
              Get Started
              <svg
                className="w-6 h-6 ml-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 12h14M12 5l7 7-7 7"
                ></path>
              </svg>
            </button>
            <img
              src="/assets/hero-image.png"
              alt="Person"
              className="rounded-full w-64 h-64 object-cover lg:hidden mb-6 mx-auto"
            />
            <div className="bg-white p-4 rounded-lg shadow-md">
              <p className="text-green-900 mb-2">
                Vog Global helped my business stay on the safe side of the law
                and keep better track of our finances with its amazing customer
                service and financial regulation services.
              </p>
              <p className="text-green-800 font-semibold">
                ~Tunde, CEO Cafe Abuja
              </p>
              <a href="#" className="text-green-700 underline">
                See More{" "}
                <span role="img" aria-label="arrow">
                  ↗
                </span>
              </a>
            </div>
          </div>
          <div className="w-full lg:w-1/2 flex justify-center lg:justify-end mb-8 lg:mb-0">
            <img
              src="/assets/coin_icon.png"
              alt="Coins"
              className="hidden lg:block w-3/4"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
