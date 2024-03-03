import React from "react";
import Education from "../Education";
// import KnowWhoIam from "../KnowWhoIam";
import ContactMe from "../ContactMe";
import Testimonials from "../Testimonials";
import "./index.css";
import WhatICan from "../WhatICan";

const About = () => {
  return (
    <div className="about-container">
      <Education />
      <WhatICan />
      <Testimonials />
      <ContactMe />
    </div>
  );
};
export default About;
