"use client";

import { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import { cards } from "../constants";
import { ChevronDown } from "lucide-react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const headingVariants = {
  hidden: { opacity: 0, y: 100 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
      ease: "easeOut" as const,
      duration: 0.8,
    },
  },
};

const wordVariant = {
  hidden: { opacity: 0, y: 80 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const TestimonialSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const vdRef = useRef<HTMLVideoElement[]>([]);

  useEffect(() => {
    if (window.innerWidth >= 1280) {
      gsap.set(".testimonials-section", {
        marginTop: "-140vh",
      });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: ".testimonials-section",
          start: "top bottom",
          end: "200% top",
          scrub: true,
        },
      });

      tl.to(".testimonials-section .first-title", {
        xPercent: 70,
      })
        .to(
          ".testimonials-section .sec-title",
          {
            xPercent: 25,
          },
          "<"
        )
        .to(
          ".testimonials-section .third-title",
          {
            xPercent: -50,
          },
          "<"
        );

      const pinTl = gsap.timeline({
        scrollTrigger: {
          trigger: ".testimonials-section",
          start: "10% top",
          end: "200% top",
          scrub: 1.5,
          pin: true,
        },
      });

      pinTl.from(".vd-card", {
        yPercent: 150,
        stagger: 0.2,
        ease: "power1.inOut",
      });
    }
  }, []);

  const handlePlay = (index: number) => {
    const video = vdRef.current[index];
    if (video) video.play();
  };

  const handlePause = (index: number) => {
    const video = vdRef.current[index];
    if (video) video.pause();
  };

  const handleNext = () => {
    const nextIndex = (currentIndex + 1) % cards.length;
    setCurrentIndex(nextIndex);
  };

  return (
    <>
      <motion.div
        className="flex flex-col items-center justify-center min-h-[20vh] md:min-h-[30vh] lg:min-h-[40vh] w-full px-4 py-6 xl:flex-row xl:items-center xl:space-x-4"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={headingVariants}
      >
        <motion.h1
          variants={wordVariant}
          className="text-[12vw] sm:text-[10vw] md:text-[7vw] lg:text-[8vw] xl:text-[10vw] font-bold uppercase leading-tight tracking-[-0.02em] text-center xl:text-left first-title"
        >
          What's
        </motion.h1>
        <motion.h1
          variants={wordVariant}
          className="text-[var(--color-dark-yellow)] text-[12vw] sm:text-[10vw] md:text-[7vw] lg:text-[8vw] xl:text-[10vw] font-bold uppercase leading-tight tracking-[-0.02em] text-center xl:text-left sec-title"
        >
          Everyone
        </motion.h1>
        <motion.h1
          variants={wordVariant}
          className="text-[12vw] sm:text-[10vw] md:text-[7vw] lg:text-[8vw] xl:text-[10vw] font-bold uppercase leading-tight tracking-[-0.02em] text-center xl:text-left third-title"
        >
          Talking
        </motion.h1>
      </motion.div>

      {/* For xl+ screens */}
      <section className="testimonials-section hidden xl:block">
        <div className="absolute size-full flex flex-col items-center pt-[5vw]">
          <h1 className="text-[var(--color-black)] first-title">What's</h1>
          <h1 className="text-[var(--color-dark-yellow)] sec-title">Everyone</h1>
          <h1 className="text-[var(--color-black)] third-title">Talking</h1>
        </div>

        <div className="pin-box">
          {cards.map((card, index) => (
            <div
              key={index}
              className={`vd-card ${card.translation} ${card.rotation}`}
              onMouseEnter={() => handlePlay(index)}
              onMouseLeave={() => handlePause(index)}
            >
              <video
                ref={(el) => {
                  if (el) vdRef.current[index] = el;
                }}
                src={card.src}
                playsInline
                muted
                loop
                className="size-full object-cover"
              />
            </div>
          ))}
        </div>
      </section>

      {/* Spacer for xl+ screens only */}
      <div className="hidden xl:block h-[20vh]" />

      {/* For <xl screens */}
      <section className="w-full flex flex-col items-center justify-center px-4 py-8 xl:hidden">
        <div className="w-[70vw] max-w-[300px] aspect-[9/16] rounded-xl overflow-hidden shadow-[0_8px_30px_rgba(0,0,0,0.35)]">
          <video
            ref={videoRef}
            src={cards[currentIndex].src}
            muted
            autoPlay
            loop
            playsInline
            className="w-full h-full object-cover"
          />
        </div>

        <div className="flex gap-6 mt-4">
          <button
            onClick={() =>
              setCurrentIndex(
                (prevIndex) => (prevIndex - 1 + cards.length) % cards.length
              )
            }
            className="bg-[var(--color-dark-green)] text-white p-3 rounded-full hover:scale-105 transition-transform"
          >
            <ChevronDown className="rotate-90 w-6 h-6" />
          </button>

          <button
            onClick={handleNext}
            className="bg-[var(--color-dark-yellow)] text-white p-3 rounded-full hover:scale-105 transition-transform"
          >
            <ChevronDown className="-rotate-90 w-6 h-6" />
          </button>
        </div>
      </section>
    </>
  );
};

export default TestimonialSection;
