import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./App.css";
import "./index.css";
import Home from "./pages/Home";
import Test from "./pages/Test";

function App() {
	return (
		<Router>
			<div className="flex w-screen min-h-screen">
				<nav className="flex flex-col h-screen absolute gap-4 p-4 z-10">
					<Link
						to="/"
						className="px-4 w-40 py-2 bg-white/5 backdrop-blur-3xl text-white rounded hover:bg-purple-600"
					>
						Home Page
					</Link>
					<Link
						to="/test"
						className="px-4 w-40 py-2 bg-white/5 backdrop-blur-3xl text-white rounded hover:bg-purple-600"
					>
						Test Page
					</Link>
				</nav>
				<div className="w-screen h-full">
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
