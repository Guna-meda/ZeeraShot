// components/BenefitSection.tsx
"use client";

import { useGSAP } from "@gsap/react";
import ClipPathTitle from "../components/LandingPage/ClipPathTitle";
import gsap from "gsap";

const Details: React.FC = () => {
  useGSAP(() => {
    const revealTl = gsap.timeline({
      delay: 1,
      scrollTrigger: {
        trigger: ".details-section",
        start: "top 60%",
        end: "top top",
        scrub: 1.5,
      },
    });

    revealTl
      .to(".details-section .first-title", {
        duration: 1,
        opacity: 1,
        clipPath: "polygon(0% 0%, 100% 0, 100% 100%, 0% 100%)",
        ease: "circ.out",
      })
      .to(".details-section .second-title", {
        duration: 1,
        opacity: 1,
        clipPath: "polygon(0% 0%, 100% 0, 100% 100%, 0% 100%)",
        ease: "circ.out",
      })
      .to(".details-section .third-title", {
        duration: 1,
        opacity: 1,
        clipPath: "polygon(0% 0%, 100% 0, 100% 100%, 0% 100%)",
        ease: "circ.out",
      })
      .to(".details-section .fourth-title", {
        duration: 1,
        opacity: 1,
        clipPath: "polygon(0% 0%, 100% 0, 100% 100%, 0% 100%)",
        ease: "circ.out",
      });
  }, []); 

  return (
    <section className="details-section">
      <div className="container mx-auto pt-20">
        <div className="col-center">
          <p className="text-[var(--color-light-cream)] font-[var(--font-paragraph)] text-center text-lg">
             Information on shipping times <br />regions served
          </p>

          <div className="mt-20 col-center">
            <ClipPathTitle
              title={"Place one"}
              color={"#faeade"} 
              bg={"var(--color-dark-yellow)"} 
              className={"first-title"}
              borderColor={"var(--color-black)"}
            />
            <ClipPathTitle
              title={"Place two of store"}
              color={"var(--color-black)"} 
              bg={"var(--color-pale-yellow)"} 
              className={"second-title"}
              borderColor={"var(--color-black)"}
            />
            <ClipPathTitle
              title={"Store three"}
              color={"#faeade"} 
              bg={"var(--color-dark-green)"} 
              className={"third-title"}
              borderColor={"var(--color-black)"} 
            />
            <ClipPathTitle
              title={"Available online"}
              color={"var(--color-black)"} 
              bg={"var(--color-lemon-yellow)"} 
              className={"fourth-title"}
              borderColor={"var(--color-black)"} 
            />
          </div>

          <div className="md:mt-0 mt-10">
            <p className="text-[var(--color-light-cream)] font-[var(--font-paragraph)] text-center text-lg">
              Contact for more details...
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Details;