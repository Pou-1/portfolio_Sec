/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState, useRef } from "react";
import FirstCardDiv from "./home/FirstCardDiv";
import TopBar from "./TopBar";
import AnimatedCard2 from "./home/AnimatedCard2";
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

const ScrollSnapControl = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const sectionsRef = useRef<(HTMLDivElement | null)[]>([]);

  const projects = [
    {
      image: CrocoDive,
      text: "CrocoDive",
      logos: [
        <ReactLogo size={35} key="react" />,
        <TailwindLogo size={35} key="tailwind" />,
      ],
      colorGradient: "bg-gradient-to-b from-transparent to-green-800",
      workers: ["Pou-1", "juliensailly"],
    },
    {
      image: Nautilus,
      text: "Nautilus",
      logos: [
        <LaravelLogo size={35} key="laravel" />,
        <PhPLogo size={35} key="php" />,
      ],
      colorGradient: "bg-gradient-to-b from-transparent to-blue-800",
      workers: ["Pou-1", "juliensailly"],
    },
    {
      image: PtiCuisto,
      text: "Pti Cuisto",
      logos: [
        <BootstrapLogo size={35} key="bootstrap" />,
        <PhPLogo size={35} key="php" />,
      ],
      colorGradient: "bg-gradient-to-b from-transparent to-red-800",
      workers: ["Pou-1"],
    },
    {
      image: InstantWeather,
      text: "Instant Weather",
      logos: [<JSLogo size={35} key="react" />],
      colorGradient: "bg-gradient-to-b from-transparent to-gray-800",
      workers: ["Pou-1"],
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visibleSection = entries.find((entry) => entry.isIntersecting);
        if (visibleSection) {
          setActiveIndex(
            sectionsRef.current.indexOf(visibleSection.target as HTMLDivElement)
          );
        }
      },
      { threshold: 0.6 } // Détecte la section qui est au moins à 60% visible
    );

    sectionsRef.current.forEach(
      (section) => section && observer.observe(section)
    );

    return () => {
      sectionsRef.current.forEach(
        (section) => section && observer.unobserve(section)
      );
    };
  }, []);

  return (
    <article className="flex gap-10">
      <TopBar activeIndex={activeIndex} />
      <div className="overflow-auto flex flex-col snap-mandatory snap-both bg-white w-full h-screen">
        <div
          ref={(el) => (sectionsRef.current[0] = el)}
          className="snap-center flex-center h-screen"
        >
          <FirstCardDiv scrollY={0} />
        </div>
        {projects.map((project, index) => (
          <div
            ref={(el) => (sectionsRef.current[index + 1] = el)}
            key={index}
            className="snap-center sticky top-0 flex-center h-screen"
          >
            <AnimatedCard2
              image={project.image}
              text={project.text}
              logos={project.logos}
              colorGradient={project.colorGradient}
              workers={project.workers}
            />
          </div>
        ))}
        <div
          ref={(el) => (sectionsRef.current[projects.length + 1] = el)}
          className="snap-center flex-center h-screen"
        >
          <FirstCardDiv scrollY={0} />
        </div>
      </div>
    </article>
  );
};

export default ScrollSnapControl;
