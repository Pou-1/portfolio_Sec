import "../App.css";
import "../styles/test.css";
import "../styles/home.css";
import React from "react";
import FirstScreen from "../components/home/firstScreen";
import cat2 from "../assets/imgs/cat2.jpeg";
import NavBar from "../components/NavBar";

const App: React.FC = () => {
  return (
    <>
      <FirstScreen/>
      <NavBar />
      <div className="bg-white rounded-xl mx-2 h-screen flex-center flex-col gap-4 px-4">
        <div className="bg-white flex-col rounded-md w-full flex-center">
          <img src={cat2} alt="" className=" rounded-t-2xl" />
          <h1 className="text-2xl">Pomodoro</h1>
          <div className="flex gap-4">
            <p className="flex-center w-5 rounded-full bg-customDark text-white aspect-square">
              S
            </p>
            <p className="flex-center w-5 rounded-full bg-customDark text-white aspect-square">
              D
            </p>
            <p className="flex-center w-5 rounded-full bg-customDark text-white aspect-square">
              A
            </p>
            <p className="flex-center w-5 rounded-full bg-customDark text-white aspect-square">
              H
            </p>
          </div>
        </div>
        <div className="bg-white border-2 border-[#F32E66] rounded-md py-2 w-full flex-center">
          Instant weather
        </div>
        <div className="bg-white border-2 border-[#F32E66] rounded-md py-2 w-full flex-center">
          A
        </div>
      </div>
    </>
  );
};

export default App;
