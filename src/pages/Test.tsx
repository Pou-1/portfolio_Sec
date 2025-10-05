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


        <div className="z-30 flex-center bg-customDarkDarker p-4 h-20 w-full">
          <ButtonCursor2 />
        </div>

        <div className="bg-[conic-gradient(var(--tw-gradient-stops))] p-16 animate-spin from-blue-600 to-sky-400 to-50% h-40 aspect-square rounded-full">
          <div className="bg-white w-full h-full rounded-full"/>
          </div>
      </div>
    </CursorProvider>
  );

};

export default App;
