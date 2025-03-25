import React, { forwardRef, useState } from "react";

type AnimatedCardProps = {
  image: string;
  text: string;
  logos: React.ReactNode[];
  scrollY: number;
  scrollYMin: number;
  scrollYMax: number;
};

const AnimatedCard = forwardRef<HTMLDivElement, AnimatedCardProps>(
  ({ image, text, logos, scrollY, scrollYMin, scrollYMax }, ref) => {
    //const [cursorHover, setCursorHover] = useState<boolean>(false);

    return (
      <div
        ref={ref}
        className={`bg-white group md:w-[900px] relative p-2 shadow-md rounded-xl overflow-hidden z-10 
        transition-all duration-700 ease-in-out
        ${
          scrollY > scrollYMin && scrollY < scrollYMax
            ? "opacity-100 translate-x-0"
            : "opacity-0 translate-x-[-400px]"
        }
      `}
      >
        <div className="overflow-hidden rounded-2xl relative">
          <img
            src={image}
            alt=""
            className="w-full group-hover:scale-110 trans-fast"
          />
          <div className="inset-0 trans-fast flex-center absolute w-full h-full rounded-2xl opacity-0 group-hover:opacity-100 scale-90 group-hover:scale-100 bg-white/5 backdrop-blur-xl">
            <button className="rounded-full w-56 aspect-square shadow-md text-white font-semibold text-xl flex-center bg-[#F32E66]">
              Voir le projet
            </button>
          </div>
        </div>
        <div className="pt-4 w-full flex justify-between z-10 text-lg">
          <p>{text}</p>
          <div className="flex gap-2">
            {logos.map((logo, index) => (
              <span key={index}>{logo}</span>
            ))}
          </div>
        </div>
      </div>
    );
  }
);

export default AnimatedCard;
