"use client";

import { useGSAP } from "@gsap/react";
import { flavorlists } from "@/constants";
import gsap from "gsap";
import { useRef } from "react";
import { useMediaQuery } from "react-responsive";

interface Flavor {
  name: string;
  number: string;
  rotation: string;
}

const FlavorSlider: React.FC = () => {
  const sliderRef = useRef<HTMLDivElement>(null);

  const isTablet = useMediaQuery({
    query: "(max-width: 1024px)",
  });

  useGSAP(() => {
    if (sliderRef.current) {
      const scrollAmount = sliderRef.current.scrollWidth - window.innerWidth;

      if (!isTablet) {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: ".flavor-section",
            start: "2% top",
            end: `+=${scrollAmount + 1500}px`,
            scrub: true,
            pin: true,
          },
        });

        tl.to(".flavor-section", {
          x: `-${scrollAmount + 1500}px`,
          ease: "power1.inOut",
        });
      }

      const titleTl = gsap.timeline({
        scrollTrigger: {
          trigger: ".flavor-section",
          start: "top top",
          end: "bottom 80%",
          scrub: true,
        },
      });

      titleTl
        .to(".first-text-split", {
          xPercent: -30,
          ease: "power1.inOut",
        })
        .to(
          ".flavor-text-scroll",
          {
            xPercent: -22,
            ease: "power1.inOut",
          },
          "<"
        )
        .to(
          ".second-text-split",
          {
            xPercent: -10,
            ease: "power1.inOut",
          },
          "<"
        );
    }
  });

  return (
    <div ref={sliderRef} className="slider-wrapper">
      <div className="flavors">
        {flavorlists.map((flavor: Flavor) => (
          <div
            key={flavor.name}
            className={`relative z-10 lg:w-[50vw] w-96 lg:h-[70vh] md:w-[90vw] md:h-[50vh] h-80 flex-none ${flavor.rotation} rounded-2xl overflow-hidden`}
          >
            <img
              src={`/images/${flavor.number}-bg.png`}
              alt=""
              className="absolute bottom-0 w-full h-full object-cover rounded-2xl"
            />

            <img
              src={`/images/zeera-${flavor.number}.png`}
              alt=""
              className="drinks absolute left-1/2 -translate-x-1/2 bottom-0 md:h-full h-80 z-20"
            />

            <img
              src={`/images/${flavor.number}-elements.png`}
              alt=""
              className="elements absolute top-0 w-full h-full object-cover z-0"
            />

            <h1 className="absolute md:bottom-10 md:left-10 bottom-5 left-5 text-yellow-400 md:text-6xl text-3xl font-semibold uppercase tracking-tighter z-30">
              {flavor.name}
            </h1>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FlavorSlider;


