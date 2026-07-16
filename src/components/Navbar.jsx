import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-green-600 text-white shadow-md">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-8 py-4">

        {/* Logo */}
        <Link
          to="/"
          className="text-6xl font-bold hover:text-green-100"
        >
           FIT FUEL
        </Link>

        {/* Navigation Links */}
        <div className="flex items-center gap-6">

          <Link to="/" className="hover:text-green-200">
            Home
          </Link>

          <Link to="/dashboard" className="hover:text-green-200">
            Dashboard
          </Link>

          <Link to="/profile" className="hover:text-green-200">
            Profile
          </Link>

          <Link to="/bmi" className="hover:text-green-200">
            BMI
          </Link>

          <Link to="/calories" className="hover:text-green-200">
            Calories
          </Link>

          <Link to="/meals" className="hover:text-green-200">
            Meals
          </Link>

          <Link to="/login" className="hover:text-green-200">
            Login
          </Link>

          <Link to="/register" className="hover:text-green-200">
            Register
          </Link>

        </div>
      </div>
    </nav>
  );
}

export default Navbar;