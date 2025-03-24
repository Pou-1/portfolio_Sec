import "../App.css";
import "../styles/test.css";
import "../styles/home.css";
import React, { useEffect, useState } from "react";
import FirstCardDiv from "../components/home/FirstCardDiv";
import WorkDivs from "../components/home/WorksDivs";

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
      <FirstCardDiv scrollY={scrollY}/>
      <WorkDivs scrollY={scrollY}/>
    </>
  );
};

export default App;
