import { ScrollSmoother, ScrollTrigger } from "gsap/all";
import gsap from "gsap";
import Message from "./section/Message";
import Flavor from "./section/Flavor";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

const App = () => {
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
        <Message></Message>

        <Flavor />
      </div>
    </div>
  );
};

export default App;
