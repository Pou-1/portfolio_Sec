import React, { forwardRef } from "react";

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
    return (
      <div
        ref={ref}
        className={`bg-white relative p-2 shadow-md rounded-xl overflow-hidden z-10 
        transition-all duration-700 ease-in-out
        ${
          scrollY > scrollYMin && scrollY < scrollYMax
            ? "opacity-100 translate-x-0"
            : "opacity-0 translate-x-[-400px]"
        }
      `}
      >
        <img src={image} alt="" className="w-full rounded-xl" />
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
