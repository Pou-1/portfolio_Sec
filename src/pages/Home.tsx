import "../App.css";
import "../styles/test.css";
import "../styles/home.css";
import React from "react";
import ScrollSnapControl from "../components/home/ScrollSnapControl";
import Cursor from "../components/cursor/Cursor";
import { CursorProvider } from "../components/cursor/CursorFunct";

const App: React.FC = () => {
  return (
    <div>
      <CursorProvider>
        <ScrollSnapControl />
        <Cursor />
      </CursorProvider>
    </div>
  );
};

export default App;
