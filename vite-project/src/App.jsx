import {ScrollTrigger} from "gsap/all"
import gsap from "gsap";
import Message from "./section/Message";
import Flavor from "./section/Flavor";
import FakeMessage from "./section/FakeMessage";

gsap.registerPlugin(ScrollTrigger);

const App = () => {
  return (
    <div>
      <div className="h-80"></div>
      <Message></Message>
     

      <Flavor/>
    </div>
  )
}

export default App