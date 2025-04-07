import { useState, useRef, useEffect } from "react";
import { useCursor } from "../cursor/CursorFunct";

type VerticalScrollProps = {
  activeIndex: number;
  setActiveIndex: (index: number) => void;
};

const VerticalScroll: React.FC<VerticalScrollProps> = ({ activeIndex, setActiveIndex }) => {
  const { handleHover, resetCursor } = useCursor();

  const buttonRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const blueBoxRef = useRef<HTMLDivElement>(null);

  const [blueBoxStyle, setBlueBoxStyle] = useState({
    top: 0,
    left: 0,
    width: 0,
    height: 0,
  });

  const sectionsNames = ["Who am i", "Works - 1", "Works - 2", "Works - 3", "Works - 4"];

  useEffect(() => {
    const firstButton = buttonRefs.current[0];
    if (firstButton) {
      const rect = firstButton.getBoundingClientRect();
      const parentRect = firstButton.offsetParent!.getBoundingClientRect();
      setBlueBoxStyle({
        top: rect.top - parentRect.top,
        left: rect.left - parentRect.left,
        width: rect.width,
        height: rect.height,
      });
    }
  }, []);

  useEffect(() => {
    const targetButton = buttonRefs.current[activeIndex];
    if (targetButton && blueBoxRef.current) {
      const rect = targetButton.getBoundingClientRect();
      const parentRect = targetButton.offsetParent!.getBoundingClientRect();

      setBlueBoxStyle({
        top: rect.top - parentRect.top,
        left: rect.left - parentRect.left,
        width: rect.width,
        height: rect.height,
      });
    }
  }, [activeIndex]);

  const handleButtonClick = (index: number) => {
    const currentButton = buttonRefs.current[activeIndex];
    const targetButton = buttonRefs.current[index];

    if (currentButton && targetButton) {
      const currentRect = currentButton.getBoundingClientRect();
      const targetRect = targetButton.getBoundingClientRect();
      const parentRect = currentButton.offsetParent!.getBoundingClientRect();

      setBlueBoxStyle({
        top: Math.min(currentRect.top, targetRect.top) - parentRect.top,
        left: targetRect.left - parentRect.left,
        width: targetRect.width,
        height: Math.abs(currentRect.top - targetRect.top) + targetRect.height,
      });

      setTimeout(() => {
        setBlueBoxStyle({
          top: targetRect.top - parentRect.top,
          left: targetRect.left - parentRect.left,
          width: targetRect.width,
          height: targetRect.height,
        });
      }, 300);
    }

    setActiveIndex(index);
  };

  return (
    <div className="relative z-50 flex-center flex-col">
      {/* rond animé */}
      <div
        className="absolute z-[110] bg-customViolet rounded-full trans-fast -translate-x-2.5"
        style={{
          top: `${blueBoxStyle.top}px`,
          left: `${blueBoxStyle.left}px`,
          width: `${blueBoxStyle.width}px`,
          height: `${blueBoxStyle.height}px`,
        }}
        ref={blueBoxRef}
      />

      {/* liste des sections */}
      <div className="absolute flex flex-col gap-5 right-0">
        {sectionsNames.map((section, index) => (
          <div
            key={section + index}
            className="hover:text-black flex h-fit pr-2.5 group items-center text-transparent hover:bg-white dark:hover:text-white 
            dark:hover:bg-customDarkLight trans-fast rounded-full border-transparent"
            onClick={() => handleButtonClick(index)}
            onMouseEnter={(e) =>
              handleHover(e.currentTarget, 0, {
                background: "bg-transparent",
              })
            }
            onMouseLeave={resetCursor}
          >
            <p className="h-fit py-2 flex-center w-32 px-4">{section}</p>
            <button
              ref={(el) => (buttonRefs.current[index] = el!)}
              className="h-5 aspect-square rounded-full trans-fast group-hover:scale-110 bg-customViolet/20 hover:bg-customViolet/70"
            />
          </div>
        ))}
      </div>

      {/* bouton rond uniquement */}
      <div className="flex-center relative flex-col gap-y-10 -translate-x-2.5">
        {[0, 1, 2, 3, 4].map((index) => (
          <button
            key={index + 'b'}
            ref={(el) => (buttonRefs.current[index] = el!)}
            className="w-5 h-5 rounded-full trans-fast hover:scale-110 hover:bg-customViolet/70"
            onClick={() => handleButtonClick(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default VerticalScroll;
