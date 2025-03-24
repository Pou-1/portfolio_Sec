import { useState, useEffect, useRef } from "react";
import CrocoDive from "../../assets/imgs/works/CrocoDive.png";
import Nautilus from "../../assets/imgs/works/nautilus.png";
import PtiCuisto from "../../assets/imgs/works/pti_cuisto.png";
import InstantWeather from "../../assets/imgs/works/instant_weather.png";
import ReactLogo from "../../assets/logo/ReactLogo";
import TailwindLogo from "../../assets/logo/TailwindLogo";
import LaravelLogo from "../../assets/logo/LaravelLogo";
import PhPLogo from "../../assets/logo/PhPLogo";
import BootstrapLogo from "../../assets/logo/BootsrapLogo";
import JSLogo from "../../assets/logo/JSLogo";
import AnimatedCard from "./AnimatedCard";
import GithubLogo from "../../assets/logo/GithubLogo";
import LinkedinLogo from "../../assets/logo/LinkedinLogo";

const WorkDivs: React.FC<{ scrollY: number }> = ({ scrollY }) => {
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);
  const [scrollPositions, setScrollPositions] = useState<
    { min: number; max: number }[]
  >([]);

  useEffect(() => {
    if (cardsRef.current.length > 0) {
      const positions = [];
      const offset = 100;
      let lastMax = offset;

      for (const card of cardsRef.current) {
        if (card) {
          const height = card.offsetHeight;
          positions.push({ min: lastMax, max: lastMax + height + 200 });
          lastMax += height + 150;
        }
      }
      setScrollPositions(positions);
    }
  }, []);

  const projects = [
    { image: CrocoDive, text: "CrocoDive", logos: [<ReactLogo key="react" />, <TailwindLogo key="tailwind" />] },
    { image: Nautilus, text: "Nautilus", logos: [<LaravelLogo key="laravel" />, <PhPLogo key="php" />] },
    { image: PtiCuisto, text: "Pti Cuisto", logos: [<BootstrapLogo key="bootstrap" />, <PhPLogo key="php" />] },
    { image: InstantWeather, text: "Instant Weather", logos: [<JSLogo key="react" />] },
  ];

  return (
    <>
      <h1 className="text-[#F32E66] text-2xl mb-5 shadow-md bg-white p-2 mx-2 rounded-xl text-center">
        Works
      </h1>
      <div className="w-full pb-60 p-3 relative flex flex-col gap-10">
        {projects.map((project, index) => (
          <AnimatedCard
            key={index}
            ref={(el) => (cardsRef.current[index] = el)}
            scrollYMin={scrollPositions[index]?.min || 0}
            scrollYMax={scrollPositions[index]?.max || 1000}
            image={project.image}
            text={project.text}
            logos={project.logos}
            scrollY={scrollY}
          />
        ))}

        <div
          className={`relative p-2 z-10 
        transition-all duration-700 ease-in-out
        ${scrollY > 1800 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-[400px]"}
      `}
        >
          <h1 className="text-[#F32E66] text-2xl mt-10 mb-5 shadow-md bg-white p-2 rounded-xl text-center">
            Contacts
          </h1>
        </div>
      </div>
    </>
  );
};

export default WorkDivs;
