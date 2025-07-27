// components/BenefitSection.tsx
"use client";

import { useGSAP } from "@gsap/react";
import ClipPathTitle from "../components/ClipPathTitle";
import gsap from "gsap";

const Details: React.FC = () => {
  useGSAP(() => {
    const revealTl = gsap.timeline({
      delay: 1,
      scrollTrigger: {
        trigger: ".benefit-section",
        start: "top 60%",
        end: "top top",
        scrub: 1.5,
      },
    });

    revealTl
      .to(".benefit-section .first-title", {
        duration: 1,
        opacity: 1,
        clipPath: "polygon(0% 0%, 100% 0, 100% 100%, 0% 100%)",
        ease: "circ.out",
      })
      .to(".benefit-section .second-title", {
        duration: 1,
        opacity: 1,
        clipPath: "polygon(0% 0%, 100% 0, 100% 100%, 0% 100%)",
        ease: "circ.out",
      })
      .to(".benefit-section .third-title", {
        duration: 1,
        opacity: 1,
        clipPath: "polygon(0% 0%, 100% 0, 100% 100%, 0% 100%)",
        ease: "circ.out",
      })
      .to(".benefit-section .fourth-title", {
        duration: 1,
        opacity: 1,
        clipPath: "polygon(0% 0%, 100% 0, 100% 100%, 0% 100%)",
        ease: "circ.out",
      });
  }, []); 

  return (
    <section className="benefit-section">
      <div className="container mx-auto pt-20">
        <div className="col-center">
          <p className="text-[var(--color-light-cream)] font-[var(--font-paragraph)] text-center text-lg">
             Information on shipping times <br />regions served
          </p>

          <div className="mt-20 col-center">
            <ClipPathTitle
              title={"Place one"}
              color={"#faeade"} // No exact match, kept as is
              bg={"var(--color-dark-yellow)"} // Replaced #c88e64 with closest dark yellow
              className={"first-title"}
              borderColor={"var(--color-black)"} // Replaced #222123
            />
            <ClipPathTitle
              title={"Place two of store"}
              color={"var(--color-black)"} // Replaced #222123
              bg={"var(--color-pale-yellow)"} // Replaced #faeade with closest light yellow
              className={"second-title"}
              borderColor={"var(--color-black)"} // Replaced #222123
            />
            <ClipPathTitle
              title={"Store three"}
              color={"#faeade"} // No exact match, kept as is
              bg={"var(--color-dark-green)"} // Replaced #7F3B2D with closest dark green
              className={"third-title"}
              borderColor={"var(--color-black)"} // Replaced #222123
            />
            <ClipPathTitle
              title={"Available online"}
              color={"var(--color-black)"} // Replaced #2E2D2F with closest black
              bg={"var(--color-lemon-yellow)"} // Replaced #FED775 with closest yellow
              className={"fourth-title"}
              borderColor={"var(--color-black)"} // Replaced #222123
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