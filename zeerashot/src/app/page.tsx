"use client";

import { ScrollSmoother, ScrollTrigger } from "gsap/all";
import gsap from "gsap";
import Message from "@/sections/Message";
import Flavor from "@/sections/Flavor";
import { useGSAP } from "@gsap/react";
import Details from "@/sections/Details";
import TestimonialSection from "@/sections/Testimonials";

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

const Home: React.FC = () => {
  useGSAP(() => {
    ScrollSmoother.create({
      smooth: 3,
      effects: true,
    });
  });

  return (
    <div id="smooth-wrapper">
      <div id="smooth-content">
        <div className="h-80"></div>
        <Message />
        <Flavor />
        <Details/>
        <TestimonialSection/>
      </div>
    </div>
  );
};

export default Home;