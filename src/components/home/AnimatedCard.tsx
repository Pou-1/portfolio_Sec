import React, { forwardRef } from "react";

type AnimatedCardProps = {
  image: string;
  text: string;
  logos: React.ReactNode[];
};

const AnimatedCard = forwardRef<HTMLDivElement, AnimatedCardProps>(
  ({ image, text, logos }, ref) => {
    //const [cursorHover, setCursorHover] = useState<boolean>(false);

    return (
      <div className="p-10 h-screen" ref={ref}>
      <div
        
        className={`bg-white group relative w-full h-full p-2 flex flex-col shadow-md rounded-xl z-10 
        transition-all duration-700 ease-in-out
      `}
      >
        <div className="overflow-hidden rounded-2xl h-full w-full p-4 relative">
          <img
            src={image}
            alt=""
            className="w-full h-full group-hover:scale-110 trans-fast"
          />
          <div className="inset-0 trans-fast flex-center absolute w-full h-full rounded-2xl opacity-0 group-hover:opacity-100 scale-90 group-hover:scale-100 bg-white/5 backdrop-blur-xl">
            <button className="rounded-full w-56 aspect-square shadow-md text-white font-semibold text-xl flex-center bg-[#F32E66]">
              Voir le projet
            </button>
          </div>
        </div>
        <div className="pt-4 w-full flex justify-between h-24 z-10 text-lg">
          <p>{text}</p>
          <div className="flex gap-2">
            {logos.map((logo, index) => (
              <span key={index}>{logo}</span>
            ))}
          </div>
        </div>
      </div>
      </div>
    );
  }
);

export default AnimatedCard;
