import { Link } from "react-router-dom";

export function Navbar() {
  return (
    <header className="bg-white w-full">
      <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
        <Link to="/" className="text-xl font-semibold text-gray-800">
          Bob's Corn Logo
        </Link>
        <nav className="space-x-6">
          <Link to="/" className="text-gray-600 hover:text-black transition">
            Home
          </Link>
          <Link to="/buy" className="text-white bg-black px-4 py-2 rounded-md hover:opacity-90 transition">
            Buy Corn
          </Link>
        </nav>
      </div>
    </header>
  );
}
