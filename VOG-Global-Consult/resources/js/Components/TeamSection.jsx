import React from "react";
import inov from "../assets/innov.svg";

const teamMembers = [
  {
    id: 1,
    name: "UDO, OKEY OKORO CPA, MNIM, M.Sc. (UK),PHD (USA), CNA, ACTI.",
    image: `${inov}`,
    role: "Head Auditor in the Audit and Accounting Service Department, VOG Global Consult",
    description:
      "Udo is a graduate of Economics from the University of Calabar, MSc in international finance and account from the University of Liverpool. PHD in finance from the Walden University, USA...",
    readMoreLink: "#",
  },
  {
    id: 2,
    name: "EMMANUEL UDUMA GEORGE BSc, ACA.",
    image: `${inov}`,
    role: "Head the Audit and Accounting Service department, VOG Global Consult",
    description:
      "Emmanuel Uduma George is a graduate of Government and Public Administration, Abia State University, where he obtained a Bachelor of Science Degree. He is also an Associate member of the institute of Chartered Accountants of Nigeria (ICAN)...",
    readMoreLink: "#",
  },
  {
    id: 3,
    name: "ANGELA ADAMU, BSc, ACA.",
    image: `${inov}`,
    role: "Head the Audit and Accounting Service department, VOG Global Consult",
    description:
      "Angela Adamu is a graduate of Economics from Ambrose Ali University, Edo state. She is also an associate member of the Institute of Chartered Accountants of Nigeria (ICAN). She has in dept knowledge and skills in accounting system...",
    readMoreLink: "#",
  },
  {
    id: 4,
    name: "AJAYIOLUWANIYIMOSES, MBA, ACA, CISA, CAMS, CFLT.",
    image: `${inov}`,
    role: "Manager, Corporate Services and Business Development Department, VOG Global Consult",
    description:
      "Ajayi Oluwaniyi Moses is a young and dynamic self-motivated and result oriented person that is committed to producing result in any area or field of empowerment and high core value. He is an associate of the institute of chartered accountants of Nigeria (ICAN),a certified Anti money Laundry Specialist (CAMS), a certified Information System Auditor (CISA) and a Certified Financial Literacy Trainer (CFLT)...",
    readMoreLink: "#",
  },
  {
    id: 5,
    name: "IDIKA KALU IBE, FCIIN, MPA, BSc, CILRM.",
    image: `${inov}`,
    role: "head of Insurance & Risk Assessment Team, VOG Global Consult",
    description:
      "Idika Kalu Ibe is a fellow of the Chartered Institute of Insurance Nigeria (CIIN), He also holds a master’s degree in Public and international Affairs, and is an associate member of the chartered institute of loan and risk management (CILRM). Having worked with several top-notch insurance firms, he comes over with more than 20 years of experience in the Insurance, Assurance...",
    readMoreLink: "#",
  },
  {
    id: 6,
    name: "KALU UCHE EME, NSA, MPA, HND.",
    image: `${inov}`,
    role: "Head of Actuary, VOG Global Consult",
    description:
      "Kalu Uche Eme is an astute Statistician, he is an associate of the Nigerian Statistical Association (NSA) and having worked with several international organizations including the British Council, UNODC and others. He comes over with above 22 years of experience with statistics.",
    readMoreLink: "#",
  },
  {
    id: 7,
    name: "BENEDICT O. UWAOKHONYE BSc, Msc, ACIHRM.",
    image: `${inov}`,
    role: "Admin Officer and Head Of ICT Department, VOG Global Consult",
    description:
      "Benedict Uwaokhonye is a graduate of Applied Mathematics from the University of Benin, Edo state, he also is an Associate of the Chartered institute of Human Resource Managers (ACIHRM). He has Msc. in Financial Mathematics, and is in the final stage of being an associate member of the Institute of chartered accountant in Nigeria (ICAN).",
    readMoreLink: "#",
  },
  {
    id: 8,
    name: "VIVIAN ENEOKAFOR BSc, CNA.",
    image: `${inov}`,
    role: "Audit and Accounting Department, VOG Global Consult",
    description:
      "Vivian Eneokafor holds a Bsc in Accounting. She is also a Certified National Accountant a certificate earned from the Association of National Accountants (ANAN). She is also a member of the Audit and Accounting Department.",
    readMoreLink: "#",
  },
];

const TeamMember = ({ name, image, role, description, readMoreLink }) => (
  <div className="flex flex-col items-center mb-8 md:mb-16">
    <img
      src={image}
      alt={name}
      className="rounded-full w-32 h-32 md:w-40 md:h-40 object-cover mb-4"
    />
    <h3 className="text-xl font-semibold text-center">{name}</h3>
    <span className="text-center px-4 md:px-8 text-sm md:text-base text-gray-500">
      {role}
    </span>

    <p className="text-center px-4 md:px-8">{description}</p>
    <a
      href={readMoreLink}
      className="mt-4 inline-block bg-primary-500 text-white py-2 px-4 rounded-full hover:bg-green-600"
    >
      Read More
    </a>
  </div>
);

const TeamSection = () => (
  <section className="py-12 bg-gray-50">
    <div className="container mx-auto">
      <h2 className="text-3xl font-bold text-center mb-12">
        Meet Our Team Of{" "}
        <span className="underline decoration-green-500">
          Innovative Problem Solvers
        </span>
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {teamMembers.map((member, index) => (
          <TeamMember
            key={index}
            name={member.name}
            image={member.image}
            role={member.role}
            description={member.description}
            readMoreLink={member.readMoreLink}
          />
        ))}
      </div>
    </div>
  </section>
);

export default TeamSection;
