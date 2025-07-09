import React from "react";
import { useCursor } from "../cursor/CursorFunct";

const ButtonCursor: React.FC = () => {
	const { handleHover, resetCursor } = useCursor();

	return (
		<button
			onMouseEnter={(e) =>
				handleHover(e.currentTarget, 10, {
					background: "bg-transparent",
					borderColor: "border-customGreen",
					borderWidth: "10px",
					iconName: "check",
				})
			}
			onMouseLeave={resetCursor}
			className="shadow-md h-96 w-64 z-10 rounded-xl bg-white text-customGreen"
		>
			Slutty waist
		</button>
	);
};

export default ButtonCursor;
