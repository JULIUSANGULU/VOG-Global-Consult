import React from "react";
import {
  FaLightbulb,
  FaHandsHelping,
  FaShieldAlt,
  FaBullhorn,
  FaCog,
  FaSync,
  FaUsers,
  FaChartLine,
  FaShieldVirus,
} from "react-icons/fa";

const approachItems = [
  {
    icon: <FaLightbulb />,
    title: "Personalized Solutions",
    description:
      "We understand that every business is unique. Our team takes the time to thoroughly understand your specific needs, challenges, and goals. We tailor our services to provide customized solutions that drive your business forward.",
  },
  {
    icon: <FaHandsHelping />,
    title: "Expert Guidance",
    description:
      "Our team of seasoned professionals brings over 20 years of industry experience to the table. With deep expertise in tax auditing, business consulting, and assurance services, we offer strategic guidance and insights that help you navigate complex financial landscapes.",
  },
  {
    icon: <FaShieldAlt />,
    title: "Proactive Risk Management",
    description:
      "We help you identify and mitigate potential risks before they become issues. Our proactive approach to risk management ensures that your business remains compliant and resilient in the face of uncertainties.",
  },
  {
    icon: <FaBullhorn />,
    title: "Transparent Communication",
    description:
      "We believe in open and clear communication. Throughout our engagement, we keep you informed with regular updates and detailed reports. Our transparent processes build trust and ensure you are always aware of our progress and findings.",
  },
  {
    icon: <FaCog />,
    title: "Cutting-Edge Technology",
    description:
      "We leverage the latest tools and technologies to enhance our services. From advanced data analytics to innovative audit techniques, we use state-of-the-art resources to deliver accurate and timely results.",
  },
  {
    icon: <FaSync />,
    title: "Continuous Improvement",
    description:
      "We are committed to continuous improvement and staying ahead of industry trends. Our methodologies and training programs are regularly updated to incorporate the latest best practices and regulatory changes, ensuring you receive the best possible service.",
  },
  {
    icon: <FaUsers />,
    title: "Collaborative Partnership",
    description:
      "We view our relationship with clients as a partnership. We work closely with your team, offering support, guidance, and expertise every step of the way. Your success is our priority, and we are dedicated to helping you achieve your business objectives.",
  },
  {
    icon: <FaChartLine />,
    title: "Measurable Results",
    description:
      "Our approach is result-driven. We focus on delivering measurable improvements in compliance, efficiency, and financial performance. The tangible benefits we provide reflect our commitment to your business’s success.",
  },
  {
    icon: <FaShieldVirus />,
    title: "Unwavering Integrity",
    description:
      "Integrity is the cornerstone of our business. We adhere to the highest standards of ethics and professionalism, ensuring that our services are reliable, credible, and trustworthy.",
  },
];

const OurApproach = () => {
  return (
    <div className="bg-custom-green text-white p-6">
      <div className="text-center mb-6">
        <h2 className="text-2xl md:text-3xl font-bold">Our Approach</h2>
        <p className="mt-2">
          At VOG Global, our approach to financial assurance and business
          consulting is rooted in a commitment to excellence, integrity, and
          client-centric service. We understand that each business is unique,
          and we tailor our services to meet your specific needs and challenges.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {approachItems.map((item, index) => (
          <div
            key={index}
            className="bg-primary-800 p-6 rounded-md flex flex-col items-center transform transition-transform duration-300 hover:scale-105"
          >
            <div className="text-5xl mb-4">{item.icon}</div>
            <h3 className="text-xl font-bold mb-2 text-center">{item.title}</h3>
            <p className="text-center">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurApproach;
