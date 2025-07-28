"use client";

import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { cards } from "../constants";
import { ChevronDown } from "lucide-react";

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

  const handleNext = () => {
    const nextIndex = (currentIndex + 1) % cards.length;
    setCurrentIndex(nextIndex);
  };

  return (
    <>
      {/* Heading */}
      <motion.div
        className="flex flex-col items-center justify-center min-h-[20vh] md:min-h-[30vh] lg:min-h-[40vh] w-full px-4 py-6 xl:flex-row xl:items-center xl:space-x-4"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={headingVariants}
      >
        <motion.h1
          variants={wordVariant}
          className="text-[12vw] sm:text-[10vw] md:text-[7vw] lg:text-[8vw] xl:text-[10vw] font-bold uppercase leading-tight tracking-[-0.02em] text-center xl:text-left"
        >
          What's
        </motion.h1>
        <motion.h1
          variants={wordVariant}
          className="text-[var(--color-dark-yellow)] text-[12vw] sm:text-[10vw] md:text-[7vw] lg:text-[8vw] xl:text-[10vw] font-bold uppercase leading-tight tracking-[-0.02em] text-center xl:text-left"
        >
          Everyone
        </motion.h1>
        <motion.h1
          variants={wordVariant}
          className="text-[12vw] sm:text-[10vw] md:text-[7vw] lg:text-[8vw] xl:text-[10vw] font-bold uppercase leading-tight tracking-[-0.02em] text-center xl:text-left"
        >
          Talking
        </motion.h1>
      </motion.div>

      {/* Video Section */}
      {/* Video Section */}
      <section className="w-full flex flex-col items-center justify-center px-4 py-8">
        <div className="w-[70vw] max-w-[300px] aspect-[9/16] rounded-xl overflow-hidden shadow-[0_8px_30px_rgba(0,0,0,0.35)]
">
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

        {/* Navigation Buttons */}
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
