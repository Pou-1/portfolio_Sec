import { useEffect, useState, useRef } from "react";
import FirstCardDiv from "./home/FirstCardDiv";
import CrocoDive from "../assets/imgs/works/CrocoDive.png";
import Nautilus from "../assets/imgs/works/nautilus.png";
import PtiCuisto from "../assets/imgs/works/pti_cuisto.png";
import InstantWeather from "../assets/imgs/works/instant_weather.png";
import ReactLogo from "../assets/logo/ReactLogo";
import TailwindLogo from "../assets/logo/TailwindLogo";
import LaravelLogo from "../assets/logo/LaravelLogo";
import PhPLogo from "../assets/logo/PhPLogo";
import BootstrapLogo from "../assets/logo/BootsrapLogo";
import JSLogo from "../assets/logo/JSLogo";
import AnimatedCard from "./home/AnimatedCard";
import TopBar from "./TopBar";
import AnimatedCard2 from "./home/AnimatedCard2";

const ScrollSnapControl = () => {
  const [scrollY, setScrollY] = useState<number>(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  const projects = [
    {
      image: CrocoDive,
      text: "CrocoDive",
      logos: [<ReactLogo size={35} key="react" />, <TailwindLogo size={35} key="tailwind" />],
      colorGradient: "bg-gradient-to-b from-transparent to-green-800",
      workers: ["Pou-1", "juliensailly", "SirSoliloque", "waterfox-dev", "LucBUTGH"],
    },
    {
      image: Nautilus,
      text: "Nautilus",
      logos: [<LaravelLogo size={35} key="laravel" />, <PhPLogo size={35} key="php" />],
      colorGradient: "bg-gradient-to-b from-transparent to-blue-800",
      workers: ["Pou-1", "juliensailly", "SirSoliloque", "waterfox-dev", "LucBUTGH", "AlensoLopes", "PetitGens", "AndgelBrissaud", "Mehliug-SG"],
    },
    {
      image: PtiCuisto,
      text: "Pti Cuisto",
      logos: [<BootstrapLogo size={35} key="bootstrap" />, <PhPLogo size={35} key="php" />],
      colorGradient: "bg-gradient-to-b from-transparent to-red-800",
      workers: ["Pou-1", "waterfox-dev", "AndgelBrissaud", "Elrigabel"],
    },
    {
      image: InstantWeather,
      text: "Instant Weather",
      logos: [<JSLogo size={35} key="react" />],
      colorGradient: "bg-gradient-to-b from-transparent to-gray-800",
      workers: ["Pou-1", "waterfox-dev", "AndgelBrissaud", "Elrigabel"],
    },
  ];

  return (
    <article className="flex gap-10">
      <TopBar/>
      <div className="overflow-auto flex flex-col snap-mandatory snap-both bg-white w-full h-screen">
          <div
            className="snap-center bg-red-50 flex-center h-screen rounded-xl aspect-square list-none text-3xl"
          >
            <FirstCardDiv scrollY={scrollY}/>
          </div>
          {projects.map((project, index) => (
            <div
            key={index}
            className="snap-center bg-red-50 flex-center h-screen rounded-xl aspect-square list-none text-3xl"
          >
          <AnimatedCard2
            key={index}
            ref={(el) => (cardsRef.current[index] = el)}
            image={project.image}
            text={project.text}
            logos={project.logos}
            colorGradient={project.colorGradient}
            workers={project.workers}
          />
          </div>
        ))}
          {projects.map((project, index) => (
            <div
            key={index}
            className="snap-center bg-red-50 flex-center h-screen rounded-xl aspect-square list-none text-3xl"
          >
          <AnimatedCard
            key={index}
            ref={(el) => (cardsRef.current[index] = el)}
            image={project.image}
            text={project.text}
            logos={project.logos}
          />
          </div>
        ))}
          <div
            key={3}
            className="snap-center bg-red-50 flex-center h-screen rounded-xl aspect-square list-none text-3xl"
          >
            About
          </div>
      </div>
    </article>
  );
};

export default ScrollSnapControl;
