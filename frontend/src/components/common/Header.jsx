import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Menu, X, Info, Home, Trophy, UserPlus } from "lucide-react";
import Avatar from "./Avatar";
import { jwtDecode } from "jwt-decode";
import { showSuccess } from "../../utils/toastService";

const navItems = [
  {
    id: "home",
    label: "Home",
    icon: <Home size={18} />,
    path: "/dashboard",
  },
  {
    id: "leaderboard",
    label: "LeaderBoard",
    icon: <Trophy size={18} />,
    path: "/leaderboard",
  },
  {
    id: "new-intern",
    label: "New Intern",
    icon: <UserPlus size={18} />,
    path: "/new-intern",
  },
  {
    id: "about",
    label: "About",
    icon: <Info size={18} />,
    path: "/about",
  },
];

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [name, setName] = useState(null);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      try {
        const decoded = jwtDecode(token);
        setName(decoded.name || "User");
      } catch (err) {
        console.error("Invalid token");
        setName(null);
      }
    } else {
      setName(null);
    }
  }, [location]);

  const handleLogout = () => {
    localStorage.removeItem("token");
    setName(null);
    showSuccess("Logout successful!");
    navigate("/login");
  };

  return (
    <header className="sticky top-0 z-50 w-full backdrop-blur bg-black/60 shadow-md">
      <nav className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        <div className="text-2xl font-bold tracking-wide text-pink-400">
          Intern with Us
        </div>

        <ul className="hidden md:flex gap-6 text-base font-medium text-white">
          {navItems.map(({ id, label, icon, path }) => (
            <li key={id}>
              <Link
                to={path}
                className={`flex items-center gap-2 transition-all duration-200 hover:text-pink-400 ${
                  location.pathname === path
                    ? "border-b-2 border-pink-400 pb-1"
                    : ""
                }`}
              >
                {icon}
                {label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-4">
          {name && (
            <div className="block">
              <Avatar name={name} onLogout={handleLogout} />
            </div>
          )}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden text-white"
          >
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </nav>

      <div
        className={`md:hidden transition-all duration-300 ease-in-out overflow-hidden text-white ${
          menuOpen ? "max-h-96 opacity-100 py-4 px-6" : "max-h-0 opacity-0"
        }`}
      >
        <ul className="flex flex-col gap-4 font-medium">
          {navItems.map(({ id, label, icon, path }) => (
            <li key={id}>
              <Link
                to={path}
                onClick={() => setMenuOpen(false)}
                className={`flex items-center gap-2 transition-all duration-200 hover:text-pink-400 ${
                  location.pathname === path
                    ? "border-b-2 border-pink-400 pb-1"
                    : ""
                }`}
              >
                {icon}
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
};

export default Header;
