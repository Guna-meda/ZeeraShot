export interface Flavor {
  name: string;
  number: string;
  rotation: string;
}

export interface Card {
  src: string;
  rotation: string;
  name: string;
  img: string;
  translation?: string;
}

export const flavorlists: Flavor[] = [
  {
    name: "Lemon",
    number: "1",
    rotation: "md:rotate-[-8deg] rotate-0",
  },
  {
    name: "Cumin",
    number: "3",
    rotation: "md:rotate-[8deg] rotate-0",
  },
  {
    name: "Mint",
    number: "5",
    rotation: "md:rotate-[-8deg] rotate-0",
  },
];

export const cards: Card[] = [
  {
    src: "/videos/f1.mp4",
    rotation: "rotate-z-[-10deg]",
    name: "Madison",
    img: "/images/p1.png",
    translation: "translate-y-[-5%]",
  },
  {
    src: "/videos/f2.mp4",
    rotation: "rotate-z-[4deg]",
    name: "Alexander",
    img: "/images/p2.png",
  },
  {
    src: "/videos/f3.mp4",
    rotation: "rotate-z-[-4deg]",
    name: "Andrew",
    img: "/images/p3.png",
    translation: "translate-y-[-5%]",
  },
  {
    src: "/videos/f4.mp4",
    rotation: "rotate-z-[4deg]",
    name: "Bryan",
    img: "/images/p4.png",
    translation: "translate-y-[5%]",
  },
  {
    src: "/videos/f5.mp4",
    rotation: "rotate-z-[-10deg]",
    name: "Chris",
    img: "/images/p5.png",
  },
  {
    src: "/videos/f6.mp4",
    rotation: "rotate-z-[4deg]",
    name: "Devante",
    img: "/images/p6.png",
    translation: "translate-y-[5%]",
  },
  {
    src: "/videos/f7.mp4",
    rotation: "rotate-z-[-3deg]",
    name: "Melisa",
    img: "/images/p7.png",
    translation: "translate-y-[10%]",
  },
];