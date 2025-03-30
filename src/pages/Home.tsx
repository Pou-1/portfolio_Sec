import "../App.css";
import "../styles/test.css";
import "../styles/home.css";
import React, { useEffect, useState } from "react";
import ScrollSnapControl from "../components/ScrollSnapControl";

const App: React.FC = () => {
  const [scrollY, setScrollY] = useState<number>(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <ScrollSnapControl/>
    </>
  );
};

export default App;
