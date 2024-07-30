import React from "react";
import coreTeam from "../assets/coreTeam.svg";

const CoreTeam = () => {
  const teamMembers = [
    {
      name: "UDO, OKEY OKORO CPA, MNIM, M.Sc.(UK),PHD (USA), CNA, ACTI.",
      title: "Chief Executive Officer",
      imgSrc: `${coreTeam}`, // Replace with the actual image path
    },
    {
      name: "UDO, OKEY OKORO CPA, MNIM, M.Sc.(UK),PHD (USA), CNA, ACTI.",
      title: "Chief Executive Officer",
      imgSrc: `${coreTeam}`, // Replace with the actual image path
    },
    {
      name: "UDO, OKEY OKORO CPA, MNIM, M.Sc.(UK),PHD (USA), CNA, ACTI.",
      title: "Chief Executive Officer",
      imgSrc: `${coreTeam}`, // Replace with the actual image path
    },
    // Add more team members here if needed
  ];

  return (
    <div className="p-4">
      <h2 className="text-center text-2xl font-bold mb-4">
        Our <span className="text-green-700">Core Team</span>
      </h2>
      <div className="flex flex-col items-center space-y-6 lg:flex-row lg:space-y-0 lg:space-x-6 lg:justify-center">
        {teamMembers.map((member, index) => (
          <div
            key={index}
            className="w-full lg:w-1/3 flex flex-col items-center text-center p-4"
          >
            <img
              src={member.imgSrc}
              alt={member.name}
              className="w-full rounded-xl mb-4"
            />
            <div>
              <p className="text-lg font-semibold">{member.name}</p>
              <p className="text-green-700">{member.title}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CoreTeam;
