import React, { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const testimonials = [
  {
    quote:
      "VOG Global has been an invaluable partner for our company. Their expertise in tax auditing and business consulting has helped us streamline our operations and achieve significant cost savings. The team is professional, knowledgeable, and always available to provide guidance. We couldn't have asked for a better partner.",
    name: "John Doe",
    title: "CEO, Tech Savy Company",
    image: "https://via.placeholder.com/150", // Replace with the actual image URL
  },
  {
    quote:
      "VOG Global has been an invaluable partner for our company. Their expertise in tax auditing and business consulting has helped us streamline our operations and achieve significant cost savings. The team is professional, knowledgeable, and always available to provide guidance. We couldn't have asked for a better partner.",
    name: "John Doe",
    title: "CEO, Tech Savy Company",
    image: "https://via.placeholder.com/150", // Replace with the actual image URL
  },
  {
    quote:
      "VOG Global has been an invaluable partner for our company. Their expertise in tax auditing and business consulting has helped us streamline our operations and achieve significant cost savings. The team is professional, knowledgeable, and always available to provide guidance. We couldn't have asked for a better partner.",
    name: "John Doe",
    title: "CEO, Tech Savy Company",
    image: "https://via.placeholder.com/150", // Replace with the actual image URL
  },
  // Add more testimonials as needed
];

const Testimonial = () => {
  const [current, setCurrent] = useState(0);

  const handleNext = () => {
    setCurrent((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setCurrent(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  return (
    <div className="flex flex-col items-center justify-center p-6 bg-gray-100">
      <h2 className="text-2xl font-bold mb-4">What Do Our Clients Say?</h2>
      <p className="text-center mb-6">
        We serve and are trusted by numerous companies and small businesses
        across the country.
      </p>
      <div className="relative flex items-center">
        <button
          onClick={handlePrev}
          className="absolute left-0 ml-2 text-xl text-gray-700"
        >
          <FaChevronLeft />
        </button>
        <div className="bg-white p-4 rounded-lg shadow-md max-w-lg mx-auto">
          <img
            src={testimonials[current].image}
            alt={testimonials[current].name}
            className="w-24 h-24 rounded-full mx-auto mb-4"
          />
          <p className="italic text-center mb-4">
            "{testimonials[current].quote}"
          </p>
          <p className="text-center font-bold">{testimonials[current].name}</p>
          <p className="text-center text-sm text-gray-600">
            {testimonials[current].title}
          </p>
        </div>
        <button
          onClick={handleNext}
          className="absolute right-0 mr-2 text-xl text-gray-700"
        >
          <FaChevronRight />
        </button>
      </div>
    </div>
  );
};

export default Testimonial;
