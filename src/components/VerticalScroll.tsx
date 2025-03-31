import { useState, useRef, useEffect } from "react";

type VerticalScrollProps = {
  activeIndex: number;
  setActiveIndex: (index: number) => void;
};

const VerticalScroll: React.FC<VerticalScrollProps> = ({ activeIndex, setActiveIndex }) => {
  const buttonRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const blueBoxRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const targetButton = buttonRefs.current[activeIndex];
    if (targetButton && blueBoxRef.current) {
      const rect = targetButton.getBoundingClientRect();
      const parentRect = targetButton.offsetParent?.getBoundingClientRect() || { top: 0, left: 0 };
      
      blueBoxRef.current.style.top = `${rect.top - parentRect.top}px`;
      blueBoxRef.current.style.left = `${rect.left - parentRect.left}px`;
      blueBoxRef.current.style.width = `${rect.width}px`;
      blueBoxRef.current.style.height = `${rect.height}px`;
    }
  }, [activeIndex]);

  const [blueBoxStyle, setBlueBoxStyle] = useState({
    top: 0,
    left: 0,
    width: 0,
    height: 0,
  });

  const handleButtonClick = (index: number) => {
    const currentButton = buttonRefs.current[activeIndex];
    const targetButton = buttonRefs.current[index];

    if (currentButton && targetButton) {
      const currentRect = currentButton.getBoundingClientRect();
      const targetRect = targetButton.getBoundingClientRect();

      const parentRect = currentButton.offsetParent!.getBoundingClientRect();

      setBlueBoxStyle((prevStyle) => ({
        top: Math.min(currentRect.top, targetRect.top) - parentRect.top,
        left: targetRect.left - parentRect.left,
        width: targetRect.width,
        height: Math.abs(currentRect.top - targetRect.top) + targetRect.height,
      }));

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

  return (
    <div className="relative z-50 flex-center flex-col">
      <div
        className="absolute bg-red-500 rounded-full trans-fast"
        style={{
          top: `${blueBoxStyle.top}px`,
          left: `${blueBoxStyle.left}px`,
          width: `${blueBoxStyle.width}px`,
          height: `${blueBoxStyle.height}px`,
        }}
      />

      <div className="flex-center relative flex-col gap-y-4">
        {[0, 1, 2, 3, 4].map((index) => (
          <button
            key={index}
            ref={(el) => (buttonRefs.current[index] = el!)}
            className={`w-5 h-5 rounded-full trans-fast bg-red-500/40 hover:bg-red-500/70`}
            onClick={() => handleButtonClick(index)}
          />
        ))}
      </div>
    </div>
  );
}

export default VerticalScroll;
