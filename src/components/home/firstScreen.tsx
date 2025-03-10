import { useState, useEffect } from "react";
import cat from "../../assets/imgs/cat.jpg";

function FirstScreen() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <div className="w-full h-screen relative flex-center bg-customDark">
        {/* Cercles avec un effet parallaxe plus fort */}
        <div
          className="fixed right-11 top-5 w-1/4 aspect-square rounded-full bg-[#F32E66]"
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
        <div
          className="fixed right-80 bottom-5 w-1/5 aspect-square rounded-full bg-[#C522FB]"
          style={{
            transform: `translateY(-${scrollY * 0.3}px)`,
            willChange: "transform",
          }}
        ></div>

        {/* Contenu principal */}
        <div className="text-white p-5 trans-fast relative flex-center flex-col">
          <div className="border-[3px] absolute top-0 border-[#F32E66] p-1 bg-customDark m-5 rounded-full aspect-square z-10">
            <img className="h-full aspect-square rounded-full" src={cat} alt="Profile of Emily D'Harambure" />
          </div>

          <div className="text-3xl w-full flex flex-col gap-y-5 bg-white/5 border pt-44 mt-40 p-10 m-3 border-[#574d4d] backdrop-blur-xl rounded-3xl">
            <div>
              <h1>
                Hello, I'm <span className="font-bold text-[#F32E66]">Emily</span>
              </h1>
              <h1 className="font-bold text-[#F32E66]">D'Harambure</h1>
            </div>
            <p className="text-sm">I'm a student in Software & Web Development.</p>
            <p className="text-sm">
              I'm currently studying at the University of Caen, in Normandy
              (France) for a University Bachelor.
            </p>
          </div>
        </div>
      </div>

      {/* Force le scroll */}
      <div style={{ height: "200vh" }}></div>
    </>
  );
}

export default FirstScreen;
