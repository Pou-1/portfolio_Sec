import "../App.css";
import "../styles/test.css";
import React from "react";
import cat from "../assets/imgs/cat.jpg";
import cat2 from "../assets/imgs/cat2.jpeg";
import NavBar from "../components/NavBar";

const App: React.FC = () => {
  return (
    <>
      <div className='w-full h-screen relative flex-center overflow-hidden bg-customDark'>
        <div className='absolute -left-1/4 -bottom-2/4 w-6/12 aspect-square rounded-full bg-[#F32E66] appear'></div>
        <div className='absolute right-11 top-5 w-1/6 aspect-square rounded-full bg-[#F32E66] animate-pulse appear'></div>
        <div className='absolute left-11 top-5 w-1/12 aspect-square rounded-full bg-[#C522FB] appear'></div>
        <div className='absolute right-80 bottom-5 w-1/6 aspect-square rounded-full bg-[#C522FB] appear'></div>
        <div
          className='card text-white p-2 trans-fast flex-center flex-col'
        >
		  {/* Div Img */}
            <div className='border-[3px] border-[#F32E66] p-1 bg-customDark m-3 rounded-full z-10'>
              <img className='w-full rounded-full' src={cat} alt='' />
            </div>

		  {/* Div Text */}
          <div className='text-3xl w-full flex flex-col gap-y-5 mt-4 bg-white/5 border pt-36 -translate-y-36 p-10 m-3 border-[#574d4d] backdrop-blur-xl  rounded-3xl'>
            <div>
              <h1>
                Hello I'm{" "}
                <span className='font-bold text-[#F32E66]'>Emily</span>
              </h1>
              <h1 className='font-bold text-[#F32E66]'>D'Harambure</h1>
            </div>
            <p className='text-sm'>
              I'm a student in Software & Web Development.
            </p>
            <p className='text-sm'>
              I'm currently studying in the University of Caen, in Normandie
              (France) for a University Bachelor.
            </p>
          </div>
        </div>
      </div>
      <NavBar />
      <div className='bg-white rounded-xl mx-2 h-screen flex-center flex-col gap-4 px-4'>
        <div className='bg-white flex-col rounded-md w-full flex-center'>
          <img src={cat2} alt='' className=' rounded-t-2xl' />
          <h1 className='text-2xl'>Pomodoro</h1>
          <div className='flex gap-4'>
            <p className='flex-center w-5 rounded-full bg-customDark text-white aspect-square'>
              S
            </p>
            <p className='flex-center w-5 rounded-full bg-customDark text-white aspect-square'>
              D
            </p>
            <p className='flex-center w-5 rounded-full bg-customDark text-white aspect-square'>
              A
            </p>
            <p className='flex-center w-5 rounded-full bg-customDark text-white aspect-square'>
              H
            </p>
          </div>
        </div>
        <div className='bg-white border-2 border-[#F32E66] rounded-md py-2 w-full flex-center'>
          Instant weather
        </div>
        <div className='bg-white border-2 border-[#F32E66] rounded-md py-2 w-full flex-center'>
          A
        </div>
      </div>
    </>
  );
};

export default App;
