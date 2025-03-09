import { Link } from "react-router-dom";
import "../App.css";
import "../index.css";

function NavBar() {
  return (
        <nav className="flex flex-col h-fit gap-4 p-4 z-10 bg-customDark">
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
  );
}
export default NavBar;
