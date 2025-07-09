import "../App.css";
import Cursor from "../components/cursor/Cursor";
import { CursorProvider } from "../components/cursor/CursorFunct";
import ButtonCursor from "../components/test/ButtonCursor";
import ButtonCursor2 from "../components/test/ButtonCursor2";
import Caroussel from "../components/test/Caroussel";
import "../styles/test.css";
import React from "react";

const App: React.FC = () => {
	return (
		<CursorProvider>
			<Caroussel />
			<Cursor />
			<div className="flex flex-wrap items-center justify-center h-screen gap-5 cursor-none">
				<ButtonCursor />
				<ButtonCursor />
				<ButtonCursor />

				<div className="z-30 w-full h-20 p-4 flex-center bg-customDarkDarker">
					<ButtonCursor2 />
				</div>
			</div>
		</CursorProvider>
	);
};

export default App;
