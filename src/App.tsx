import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import "./index.css";
import Home from "./pages/Home";
import Test from "./pages/Test";
import Slut from "./pages/slut";
import { ThemeProvider } from "./components/ThemeProvider";

function App() {
  return (
    <ThemeProvider>
      <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/test" element={<Test />} />
            <Route path="/slut" element={<Slut />} />
          </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
