import "../App.css";
import "../styles/test.css";
import React, { useEffect } from "react";
import VanillaTilt from "vanilla-tilt";
import cat from "../assets/imgs/cat.jpg";
import cat2 from "../assets/imgs/cat2.jpeg";
import NavBar from "../components/NavBar";

const App: React.FC = () => {
  useEffect(() => {
    const elements = Array.from(
      document.querySelectorAll(".card")
    ) as HTMLElement[];
    VanillaTilt.init(elements, {
      max: 25,
      speed: 400,
      glare: true,
      "max-glare": 0.2,
      gyroscope: false,
    });
  }, []);


  addEventListener("scroll", (_) => {

  });

  return (
    <>
      <div className="w-full h-screen relative flex-center overflow-hidden bg-customDark">
        <div className="absolute -left-1/4 -bottom-2/4 w-6/12 aspect-square rounded-full bg-[#F32E66] appear"></div>
        <div className="absolute right-11 top-5 w-1/6 aspect-square rounded-full bg-[#F32E66] appear"></div>
        <div className="absolute left-11 top-5 w-1/12 aspect-square rounded-full bg-[#C522FB] appear"></div>
        <div className="absolute right-80 bottom-5 w-1/6 aspect-square rounded-full bg-[#C522FB] appear"></div>
        <div
          className="card text-white gap-x-5 p-10 relative glassIco m-3 rounded-3xl trans-fast border border-[#574d4d]
        			bg-white/5 backdrop-blur-xl flex-center overflow-hidden flex-col-reverse"
        >
          <div className="text-3xl w-full flex flex-col gap-y-5 mt-4">
            <div>
              <h1>
                Hello I'm{" "}
                <span className="font-bold text-[#F32E66]">Emily</span>
              </h1>
              <h1 className="font-bold text-[#F32E66]">D'Harambure</h1>
            </div>
            <p className="text-sm">
              I'm a student in Software & Web Development.
            </p>
            <p className="text-sm">
              I'm currently studying in the University of Caen, in Normandie
              (France) for a University Bachelor.
            </p>
          </div>
          <div className="w-full flex-center">
            <div className="border-[3px] border-[#F32E66] p-1 rounded-full">
              <img className="w-80 rounded-full" src={cat} alt="" />
            </div>
          </div>
        </div>
      </div>
      <NavBar/>
	  <div className="bg-white rounded-xl mx-2 h-screen flex-center flex-col gap-4 px-4">
		<div className="bg-white flex-col rounded-md w-full flex-center">
			<img src={cat2} alt="" className=" rounded-t-2xl" />
			<h1 className="text-2xl">Pomodoro</h1>
			<div className="flex gap-4">
				<p className="flex-center w-5 rounded-full bg-customDark text-white aspect-square">S</p>
				<p className="flex-center w-5 rounded-full bg-customDark text-white aspect-square">D</p>
				<p className="flex-center w-5 rounded-full bg-customDark text-white aspect-square">A</p>
				<p className="flex-center w-5 rounded-full bg-customDark text-white aspect-square">H</p>
			</div>
		</div>
		<div className="bg-white border-2 border-[#F32E66] rounded-md py-2 w-full flex-center">Instant weather</div>
		<div className="bg-white border-2 border-[#F32E66] rounded-md py-2 w-full flex-center">A</div>

	  </div>
    </>
  );
};

export default App;
