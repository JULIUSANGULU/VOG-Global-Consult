import React from "react";

const Email = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-8 mx-auto bg-primary-600 rounded-lg shadow-lg md:max-w-2xl">
        <h2 className="text-2xl font-bold text-white text-center mb-4">
          Ready To Change Your Business
        </h2>
        <p className="text-white text-center mb-6">
          Unlock your business’s full potential with VOG Global’s expert
          consulting, tax audit, and assurance services. Our team of seasoned
          professionals is dedicated to providing tailored solutions that drive
          growth, enhance efficiency, and ensure compliance.
        </p>
        <form className="flex flex-col items-center">
          <input
            type="email"
            placeholder="Enter Your Email Address"
            className="w-full px-4 py-2 mb-4 text-gray-900 border rounded-lg focus:outline-none md:w-2/3"
          />
          <button
            type="submit"
            className="w-full px-4 py-2 text-white bg-teal-700 rounded-lg md:w-1/3 hover:bg-green-600"
          >
            Get Started!
          </button>
        </form>
      </div>
    </div>
  );
};

export default Email;
