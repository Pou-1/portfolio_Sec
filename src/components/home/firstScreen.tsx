import { useState, useEffect } from "react";
import cat from "../../assets/imgs/cat.jpg";
import Picrew from "../../assets/imgs/picrew.png";
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

function FirstScreen() {
  const [scrollY, setScrollY] = useState<number>(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <div className="w-full h-screen relative flex-center">
        {/* Cercles avec un effet parallaxe plus fort */}
        <div
          className="fixed right-11 top-5 w-1/4 aspect-square rounded-full z-20 bg-[#F32E66]"
          style={{
            transform: `translateY(${scrollY * 0.6}px)`,
            willChange: "transform",
          }}
        ></div>
        <div
          className="fixed left-11 top-5 w-1/6 aspect-square rounded-full bg-[#C522FB]"
          style={{
            transform: `translateY(${scrollY * 0.4}px)`,
            willChange: "transform",
          }}
        ></div>

        {/* Contenu principal */}
        <div className="p-5 trans-fast relative flex-center flex-col">
          <div className="border-[3px] absolute top-0 border-[#F32E66] z-50 p-1 bg-red-50 m-5 rounded-full aspect-square">
            <img
              className="h-full aspect-square rounded-full"
              src={Picrew}
              alt="Profile of Emily D'Harambure"
            />
          </div>

          <div className="text-3xl shadow-md z-40 w-full flex flex-col gap-y-5 bg-white/5 pt-56 mt-40 p-10 m-3 border-[#F32E66] border-[3px] backdrop-blur-xl rounded-3xl">
            <div>
              <h1>
                Hello, I'm{" "}
                <span className="font-bold text-[#F32E66]">Emily</span>
              </h1>
              <h1 className="font-bold text-[#F32E66]">D'Harambure</h1>
            </div>
            <p className="text-sm">
              I'm a student in Software & Web Development.
            </p>
            <p className="text-sm">
              I'm currently studying at the University of Caen, in Normandy
              (France) for a University Bachelor.
            </p>
          </div>
        </div>
      </div>

      <h1 className="text-[#F32E66] text-2xl mb-5 shadow-md bg-white p-2 mx-2 rounded-xl text-center">
        Works
      </h1>
      <div className="w-full pb-60 p-3 relative flex flex-col gap-10">
        <AnimatedCard
          scrollYMin={100}
          scrollYMax={1100}
          image={cat}
          text="CrocoDive"
          logos={[<ReactLogo key="react" />, <TailwindLogo key="tailwind" />]}
          scrollY={scrollY}
        />

        <AnimatedCard
          scrollYMin={800}
          scrollYMax={1400}
          image={Nautilus}
          text="Nautilus"
          logos={[<LaravelLogo key="laravel" />, <PhPLogo key="php" />]}
          scrollY={scrollY}
        />

        <AnimatedCard
          scrollYMin={1200}
          scrollYMax={1700}
          image={PtiCuisto}
          text="Pti Cuisto"
          logos={[<BootstrapLogo key="bootstrap" />, <PhPLogo key="php" />]}
          scrollY={scrollY}
        />

        <AnimatedCard
          scrollYMin={1500}
          scrollYMax={2300}
          image={InstantWeather}
          text="Instant Weather"
          logos={[<JSLogo key="react" />]}
          scrollY={scrollY}
        />
        <div
          className={`relative p-2 z-10 
        transition-all duration-700 ease-in-out
        ${
          scrollY > 1800
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-[400px]"
        }
      `}
        >
          <h1 className="text-[#F32E66] text-2xl mt-10 mb-5 shadow-md bg-white p-2 rounded-xl text-center">
            Contacts
          </h1>
          <div className="flex gap-2 bg-white shadow-md rounded-xl p-4">
            <GithubLogo size={60} />
            <LinkedinLogo size={60} />
          </div>
        </div>
      </div>
    </>
  );
}

export default FirstScreen;
