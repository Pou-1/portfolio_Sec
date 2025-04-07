import { useEffect, useRef, useState } from "react";

type AnimatedSelectProps = {
  options: string[];
  activeIndex: number;
  setActiveIndex: (index: number) => void;
};

const Select: React.FC<AnimatedSelectProps> = ({
  options,
  activeIndex,
  setActiveIndex,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isOpen, setIsOpen] = useState(false);
  const highlightRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const selectedButton = containerRef.current?.children[
      activeIndex + 1
    ] as HTMLButtonElement;
    if (selectedButton && highlightRef.current) {
      const rect = selectedButton.getBoundingClientRect();
      const parentRect = containerRef.current!.getBoundingClientRect();

      highlightRef.current.style.top = `${rect.top - parentRect.top}px`;
      highlightRef.current.style.left = `${rect.left - parentRect.left}px`;
      highlightRef.current.style.width = `${rect.width}px`;
      highlightRef.current.style.height = `${rect.height}px`;
    }
  }, [activeIndex]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="overflow-hidden flex-center flex-col p-2 w-32 rounded-md">
      <div
        className="px-4 py-2 flex-center text-white bg-customDarkLight rounded-md"
        onClick={() => {
          setIsOpen(true);
        }}
      >
        {options[activeIndex]}
      </div>
      <div
        ref={containerRef}
        className={`absolute p-2 gap-2 flex flex-col w-32 top-full shadow-md border-gray-600 rounded-lg bg-customDark
        ${isOpen ? "flex" : "hidden"}
            `}
      >
        <div
          ref={highlightRef}
          className='absolute inset-0 bg-customRed rounded-md transition-all duration-300'
        
        ></div>
        {options.map((option, index) => (
          <button
            key={index}
            onClick={() => setActiveIndex(index)}
            className="relative z-10 px-4 py-2 w-full text-white hover:bg-customRed/30 rounded-md transition-all"
          >
            {option}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Select;
