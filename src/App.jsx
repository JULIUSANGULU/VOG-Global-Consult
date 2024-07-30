import { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/services";
import MoreServices from "./components/MoreServices";
import OurApproach from "./components/OurApproach";
import WhyUs from "./components/WhyUs";
import TeamSection from "./components/TeamSection";
import LeadBusiness from "./components/LeadBusiness";
import CoreTeam from "./components/CoreTeam";
import Testimonial from "./components/Testimonial";
import Email from "./components/Email";
import Footer from "./components/Footer";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Navbar />
      <Hero />
      <Services />
      <MoreServices />
      <OurApproach />
      <WhyUs />
      <TeamSection />
      <LeadBusiness />
      <CoreTeam />
      <Testimonial />
      <Email />
      <Footer />
    </>
  );
}

export default App;
