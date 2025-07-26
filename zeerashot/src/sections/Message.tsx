"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { SplitText } from "gsap/all";

gsap.registerPlugin(SplitText);

const Message: React.FC = () => {
  useGSAP(() => {
    const firstMsgSplit = SplitText.create(".first-message", {
      type: "words",
    });
    const secMsgSplit = SplitText.create(".second-message", {
      type: "words",
    });

    gsap.to(firstMsgSplit.words, {
      color: "#f7f4e1",
      ease: "power1.in",
      stagger: 1,
      scrollTrigger: {
        trigger: ".message-content",
        start: "top center",
        end: "30% center",
        scrub: true,
      },
    });
    gsap.to(secMsgSplit.words, {
      color: "#f7f4e1",
      ease: "power1.in",
      stagger: 1,
      scrollTrigger: {
        trigger: ".second-message",
        start: "top center",
        end: "bottom center",
        scrub: true,
      },
    });

    const revealTl = gsap.timeline({
      delay: 1,
      scrollTrigger: {
        trigger: ".msg-text-scroll",
        start: "top 60%",
      },
    });
    revealTl.to(".msg-text-scroll", {
      duration: 1,
      clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
      ease: "circ.inOut",
    });

    const canTl = gsap.timeline({
      scrollTrigger: {
        trigger: ".message-content",
        start: "top 80%",
        end: "bottom 20%",
        scrub: 2,
      },
    });
    canTl.fromTo(
      ".zeera-can",
      {
        rotation: 180,
        y: 200,
        scale: 0.5,
        transformOrigin: "bottom center",
      },
      {
        rotation: 0,
        y: 0,
        scale: 1,
        ease: "back.out(1.7)",
      }
    );
  });

  return (
    <section className="message-content">
      <div className="container mx-auto flex-center py-28 relative">
        <div className="w-full h-full">
          <div className="msg-wrapper">
            <h1 className="first-message">Zero booze. 100% vibe.</h1>
            <div
              style={{
                clipPath: "polygon(0 0, 0 0, 0 100%, 0% 100%)",
              }}
              className="msg-text-scroll"
            >
              <div className="bg-dark-yellow md:pb-5 pb-3 px-5">
                <h2 className="text-dark-green">Zeerashot</h2>
              </div>
            </div>
            <h1 className="second-message z-2">
              Straight from mum’s kitchen to your Aussie grind.
            </h1>
          </div>
        </div>
      </div>
      <img
        className="zeera-can absolute bottom-0 left-1/2 -translate-x-1/2 object-contain max-w-[300px] md:max-w-[400px] z-0 opacity-70"
        src="/images/zeera-1.png"
        alt="zeera-img"
      />
    </section>
  );
};

export default Message;