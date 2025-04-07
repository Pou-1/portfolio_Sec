import React from "react";
import { useCursor } from "../cursor/CursorFunct";

const ButtonCursor2: React.FC = () => {
  const { handleHover, resetCursor } = useCursor();

  return (
    <button
      onMouseEnter={(e) =>
        handleHover(e.currentTarget, 0, {
          background: "bg-customDarkLight",
          borderWidth: "4px",
          borderColor: "border-blue-500",
          iconName: "arrow",
          textColor: "text-white",
          textSize: "text-base",
        })
      }
      onMouseLeave={resetCursor}
      className="shadow-md p-3 w-40 z-[10] rounded-xl bg-customDarkLight text-white"
    >
      Voir
    </button>
  );
};

export default ButtonCursor2;
