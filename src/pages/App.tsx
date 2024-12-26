import React from "react";
import "../App.css";

const App: React.FC = () => {
  return (
    <div className="w-screen min-h-screen h-screen flex">
      {/* background Div */}
      <div className="absolute w-screen h-screen flex items-center">
        <div className="big-shadow-red absolute -left-60 w-1/6 aspect-square rounded-full bg-transparent"></div>
        <div className="big-shadow-pink absolute -right-60 w-1/6 aspect-square rounded-full"></div>
      </div>

      {/* Dot Background Div */}
      <div className="w-full h-full flex flex-col">
        <div className="w-full h-full flex-center">
          <div className="mr-72 mb-24 gap-10 flex">
            <div className="align-top items-start rounded-full backdrop-blur bg-white/60 drop-shadow w-10 h-10"></div>
            <div className="mt-10 align-bottom items-end rounded-full backdrop-blur bg-white/30 drop-shadow w-24 h-24"></div>
          </div>
        </div>
        <div className="w-full h-full"></div>
      </div>
      <div className="w-full h-full">
        <div className="ml-32 mt-32 rounded-full backdrop-blur bg-white/60 drop-shadow w-10 h-10"></div>
      </div>

      {/* Text Div */}
      <div className="absolute w-screen h-screen flex justify-center items-center">
        <div className="w-2/4 h-1/3 backdrop-blur-3xl p-10 bg-[#FFCECE]/10 text-white text-4xl drop-shadow rounded-3xl">
          <p className="font-bold">Hiii</p>
        </div>
      </div>
    </div>
  );
};

export default App;
