import React from "react";
import '../App.css'

const App: React.FC = () => {
  return (
    <div className="w-screen min-h-screen h-screen flex">

      <div className="absolute w-screen h-screen flex items-center">
        <div className="big-shadow-red absolute left-0 w-1/6 aspect-square rounded-full bg-transparent"></div>
        <div className="big-shadow-pink absolute right-0 w-1/6 aspect-square rounded-full"></div>
      </div>
      
      <div className="w-full h-full flex flex-col">
        <div className="w-full h-full">
          <div className="ml-32 mt-32 rounded-full backdrop-blur bg-white/60 drop-shadow w-10 h-10"></div>
          <div className="ml-52 mt-10 rounded-full backdrop-blur bg-white/30 drop-shadow w-24 h-24"></div>
        </div>
        <div className="w-full h-full"></div>
      </div>
      <div className="w-full h-full"></div>

      <div className="absolute w-screen h-screen flex justify-center items-center">
        <div className="w-2/4 h-1/3 backdrop-blur-xl flex items-center justify-center bg-white/10 drop-shadow rounded-xl">
          Hiii
        </div>
      </div>
    </div>
  );
};

export default App;
