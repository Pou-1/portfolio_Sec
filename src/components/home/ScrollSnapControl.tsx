import { useEffect, useState, useRef } from "react";
import FirstCardDiv from "./FirstCardDiv";
import TopBar from "../navigation/TopBar";
import AnimatedCard from "./AnimatedCard";

import CrocoDive from "../../assets/imgs/works/crocoDive/CrocoDive.svg";
import CrocoDiveEng from "../../assets/imgs/works/crocoDive/CrocoDiveEng.svg";
import CrocoDiveDark from "../../assets/imgs/works/crocoDive/CrocoDiveDark.svg";
import CrocoDiveDarkEng from "../../assets/imgs/works/crocoDive/CrocoDiveDarkEng.svg";
import CrocodiveMobile from "../../assets/imgs/works/crocoDive/CrocodiveMobile.svg";
import CrocodiveMobileEng from "../../assets/imgs/works/crocoDive/CrocodiveMobileEng.svg";
import CrocodiveMobileDark from "../../assets/imgs/works/crocoDive/CrocodiveDarkMobile.svg";
import CrocodiveMobileDarkEng from "../../assets/imgs/works/crocoDive/CrocodiveDarkMobileEng.svg";

import Nautilus from "../../assets/imgs/works/nautilus.png";
import PtiCuisto from "../../assets/imgs/works/pti_cuisto.png";
import InstantWeather from "../../assets/imgs/works/instant_weather.png";
import ReactLogo from "../../assets/logo/ReactLogo";
import TailwindLogo from "../../assets/logo/TailwindLogo";
import LaravelLogo from "../../assets/logo/LaravelLogo";
import PhPLogo from "../../assets/logo/PhPLogo";
import BootstrapLogo from "../../assets/logo/BootsrapLogo";
import JSLogo from "../../assets/logo/JSLogo";
import VerticalScroll from "../navigation/VerticalScroll";

const ScrollSnapControl = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const sectionsRef = useRef<(HTMLDivElement | null)[]>([]);
  const isManualScroll = useRef(false);

  const projects = [
    {
      image: CrocoDive,
      imageEng: CrocoDiveEng,
      imageDark: CrocoDiveDark,
      imageDarkEng: CrocoDiveDarkEng,
      imageMobile: CrocodiveMobile,
      imageMobileEng: CrocodiveMobileEng,
      imageMobileDark: CrocodiveMobileDark,
      imageMobileDarkEng: CrocodiveMobileDarkEng,
      text: "CrocoDive",
      logos: [
        <ReactLogo size={35} key="react" />,
        <TailwindLogo size={35} key="tailwind" />,
      ],
      logosLinks: ["https://fr.react.dev/", "https://tailwindcss.com/"],
      colorGradient: "bg-gradient-to-b from-transparent to-green-800",
      workers: [
        "Pou-1",
        "juliensailly",
        "waterfox-dev",
        "SirSoliloque",
        "Mehliug-SG",
      ],
    },
    {
      image: Nautilus,
      imageEng: CrocoDiveEng,
      imageDark: CrocoDiveDark,
      imageDarkEng: CrocoDiveDarkEng,
      imageMobile: CrocodiveMobile,
      imageMobileEng: CrocodiveMobileEng,
      imageMobileDark: CrocodiveMobileDark,
      imageMobileDarkEng: CrocodiveMobileDarkEng,
      text: "Nautilus",
      logos: [
        <LaravelLogo size={35} key="laravel" />,
        <PhPLogo size={35} key="php" />,
      ],
      logosLinks: ["https://laravel.com/", "https://www.php.net/"],
      colorGradient: "bg-gradient-to-b from-transparent to-blue-800",
      workers: [
        "Pou-1",
        "juliensailly",
        "AlensoLopes",
        "AndgelBrissaud",
        "Elrigabel",
        "LucBUTGH",
        "PetitGens",
        "Mehliug-SG",
        "SirSoliloque",
        "waterfox-dev",
      ],
    },
    {
      image: PtiCuisto,
      imageEng: CrocoDiveEng,
      imageDark: CrocoDiveDark,
      imageDarkEng: CrocoDiveDarkEng,
      imageMobile: CrocodiveMobile,
      imageMobileEng: CrocodiveMobileEng,
      imageMobileDark: CrocodiveMobileDark,
      imageMobileDarkEng: CrocodiveMobileDarkEng,
      text: "Pti Cuisto",
      logos: [
        <BootstrapLogo size={35} key="bootstrap" />,
        <PhPLogo size={35} key="php" />,
      ],
      logosLinks: ["https://getbootstrap.com/", "https://www.php.net/"],
      colorGradient: "bg-gradient-to-b from-transparent to-red-800",
      workers: ["Pou-1", "AndgelBrissaud", "Elrigabel", "waterfox-dev"],
    },
    {
      image: InstantWeather,
      imageEng: CrocoDiveEng,
      imageDark: CrocoDiveDark,
      imageDarkEng: CrocoDiveDarkEng,
      imageMobile: CrocodiveMobile,
      imageMobileEng: CrocodiveMobileEng,
      imageMobileDark: CrocodiveMobileDark,
      imageMobileDarkEng: CrocodiveMobileDarkEng,
      text: "Instant Weather",
      logos: [<JSLogo size={35} key="react" />],
      logosLinks: ["https://en.wikipedia.org/wiki/JavaScript"],
      colorGradient: "bg-gradient-to-b from-transparent to-gray-800",
      workers: ["Pou-1", "AndgelBrissaud", "Elrigabel", "waterfox-dev"],
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (isManualScroll.current) return;

        const visibleSection = entries.find((entry) => entry.isIntersecting);
        if (visibleSection) {
          setActiveIndex(
            sectionsRef.current.indexOf(visibleSection.target as HTMLDivElement)
          );
        }
      },
      { threshold: 0.6 }
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

  const handleScrollToIndex = (index: number) => {
    isManualScroll.current = true;
    sectionsRef.current[index]?.scrollIntoView({ behavior: "smooth", block: "center" });

    setTimeout(() => {
      isManualScroll.current = false;
    }, 800);
    setActiveIndex(index);
  };

  return (
    <article className="flex flex-col gap-10">
      <TopBar />
      <div className="absolute flex justify-end items-center p-8 w-screen h-screen">
        <VerticalScroll
          activeIndex={activeIndex}
          setActiveIndex={handleScrollToIndex}
        />
      </div>
      <div className="overflow-auto flex flex-col snap-mandatory snap-both bg-white w-full h-screen bg-dots dark:bg-customDarkDarker">
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
            className="snap-center flex-center h-screen"
          >
            <AnimatedCard
              image={project.image}
              imageEng={project.imageEng}
              imageDark={project.imageDark}
              imageDarkEng={project.imageDarkEng}
              imageMobile={project.imageMobile}
              imageMobileEng={project.imageMobileEng}
              imageMobileDark={project.imageMobileDark}
              imageMobileDarkEng={project.imageMobileDarkEng}
              text={project.text}
              logos={project.logos}
              logosLink={project.logosLinks}
              colorGradient={project.colorGradient}
              workers={project.workers}
              isactiveIndex={activeIndex === index + 1}
            />
          </div>
        ))}
      </div>
    </article>
  );
};

export default ScrollSnapControl;
