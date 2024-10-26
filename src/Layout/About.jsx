import React from "react";
import VisitDetails from "../Component/AboutPage/VisitDetails";
import Video from "../Component/AboutPage/Video";
import Review from "../Component/AboutPage/Review";
import Delivery from "../Component/AboutPage/Delivery";

const About = () => {
  return (
    <div className="bg-[#F9F9F7]">
      <VisitDetails />
      <Video />
      <Delivery />
      <Review />
    </div>
  );
};

export default About;
