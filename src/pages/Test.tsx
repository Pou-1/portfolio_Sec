import "../App.css";
import Cursor from "../components/cursor/Cursor";
import { CursorProvider } from "../components/cursor/CursorFunct";
import ButtonCursor from "../components/test/ButtonCursor";
import ButtonCursor2 from "../components/test/ButtonCursor2";
import "../styles/test.css";
import React from "react";

const App: React.FC = () => {
  return (
    <CursorProvider>
      <Cursor />
      <div className="flex cursor-none gap-5 flex-wrap items-center justify-center h-screen">
        <ButtonCursor />
        <ButtonCursor />
        <ButtonCursor />

        <div className="z-30 flex-center bg-customDarkDarker p-4 h-20 w-full">
          <ButtonCursor2 />
        </div>
      </div>
    </CursorProvider>
  );
};

export default App;
