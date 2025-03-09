import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import "./index.css";
import Home from "./pages/Home";
import Test from "./pages/Test";

function App() {
	return (
		<Router>
			<div className="flex w-screen min-h-screen">
				<div className="w-screen h-full bg-customDark">
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/test" element={<Test />} />
					</Routes>
				</div>
			</div>
		</Router>
	);
}

export default App;
