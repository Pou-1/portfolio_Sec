import { useContext } from "react";
import { ThemeContext } from "../ThemeProvider";
import { useCursor } from "../cursor/CursorFunct";
import StarLogo from "../../assets/logo/StarLogo";
import StarLogoSVG from "../../assets/logo/CS_Star_12.svg";

const ThemeToggle = () => {
	const themeContext = useContext(ThemeContext);
	if (!themeContext) return null;
	const { handleHover, resetCursor } = useCursor();

	return (
		<button
			onClick={themeContext.toggleTheme}
			className="relative p-2 px-4 rounded-lg hover:bg-gray-200 dark:hover:bg-yellow-950 trans-fast"
			onMouseEnter={(e) =>
				handleHover(e.currentTarget, 5, {
					background: "bg-transparent",
				})
			}
			onMouseLeave={resetCursor}
		>
			{themeContext.isDarkMode ? (
				<div className="gap-3 text-yellow-400 flex-center">
					<div className="w-4 h-4 p-2 bg-yellow-400 rounded-full" />
					<p>Light</p>
				</div>
			) : (
				<div className="gap-3 text-customDark flex-center">
					<div className="w-4 h-4 p-2 rounded-full bg-customDark" />
					<p>Dark</p>
				</div>
			)}
		</button>
	);
};

export default ThemeToggle;
