import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useMediaQuery } from "react-responsive";

const VideoPinSection = () => {
  const isMobile = useMediaQuery({
    query: "(max-width: 768px)",
  });

  useGSAP(() => {
    if (!isMobile) {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: ".vd-pin-section",
          start: "-15% top",
          end: "200% top",
          scrub: 1.5,
          pin: true,
        },
      });

      tl.to(".video-box", {
        clipPath: "circle(100% at 50% 50%)",
        ease: "power1.inOut",
      });
    }
  });

  return (
    <section className="vd-pin-section relative w-full min-h-[60vh] md:min-h-[70vh] lg:min-h-[80vh] bg-[var(--color-light-cream)] overflow-hidden">
      <div
        style={{
          clipPath: isMobile
            ? "circle(100% at 50% 50%)"
            : "circle(6% at 50% 50%)",
        }}
        className="video-box w-full h-full relative"
      >
        <video
          src="/videos/pin-video.mp4"
          playsInline
          muted
          loop
          autoPlay
          className="w-full h-full object-cover"
        />
        <div className="abs-center md:scale-100 scale-150 sm:scale-125">
          <img
            src="/images/circle-text.svg"
            alt=""
            className="spin-circle w-[20vw] md:w-[15vw] lg:w-[10vw]"
          />
          <div className="play-btn flex items-center justify-center w-[8vw] md:w-[6vw] lg:w-[4vw] h-[8vw] md:h-[6vw] lg:h-[4vw] bg-[var(--color-dark-green)] rounded-full">
            <img
              src="/images/play.svg"
              alt=""
              className="w-[2.5vw] md:w-[2vw] lg:w-[1.5vw] ml-[0.5vw]"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoPinSection;