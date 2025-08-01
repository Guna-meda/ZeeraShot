"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { SplitText } from "gsap/all";

gsap.registerPlugin(SplitText);

const FlavorTitle: React.FC = () => {
  useGSAP(() => {
    const firstTextSplit = SplitText.create(".first-text-split h1", {
      type: "chars",
    });
    const secondTextSplit = SplitText.create(".second-text-split h1", {
      type: "chars",
    });

    gsap.from(firstTextSplit.chars, {
      yPercent: 200,
      stagger: 0.02,
      ease: "power1.inOut",
      scrollTrigger: {
        trigger: ".flavor-section",
        start: "top 30%",
      },
    });

    gsap.to(".flavor-text-scroll", {
      duration: 1,
      clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
      scrollTrigger: {
        trigger: ".flavor-section",
        start: "top 10%",
      },
    });

    gsap.from(secondTextSplit.chars, {
      yPercent: 200,
      stagger: 0.02,
      ease: "power1.inOut",
      scrollTrigger: {
        trigger: ".flavor-section",
        start: "top 30%",
      },
    });
  });

  return (
    <>
     
    <div className="general-title col-center h-full 2xl:gap-32 xl:gap-24 gap-16">
      <div className="overflow-hidden 2xl:py-0 py-3 first-text-split">
        <h1>We made them because</h1>
      </div>

      <div
        style={{
          clipPath: "polygon(0 0, 0 0, 0 100%, 0% 100%)",
        }}
        className="flavor-text-scroll"
      >
        <div className="bg-dark-yellow pb-5 2xl:pt-0 pt-3 2xl:px-5 px-3">
          <h2 className="text-light-cream">3 FLAVOURS</h2>
        </div>
      </div>

      <div className="2xl:py-0 py-3 second-text-split">
        <h1 className="text-dark-green">one wasn't enough.</h1>
      </div>
    </div>
    <div className="hidden md:flex justify-center mt-6">
  <button className="px-8 py-3 bg-transparent border-2 border-dark-green text-dark-green font-bold uppercase text-lg rounded-lg transition-colors duration-300 hover:bg-dark-green hover:text-light-cream active:bg-mid-green active:text-white">
    Get it now
  </button>
</div>
    </>
  );
};

export default FlavorTitle;