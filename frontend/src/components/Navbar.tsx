import { useNavigate } from "react-router-dom";
import DarkModeToggle from "./DarkModeToggle";
import { useState, useEffect } from "react";

export default function Navbar() {
  const navigate = useNavigate();
  const [userEmail, setUserEmail] = useState("");

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      navigate("/login");
    } else {
      try {
        const payload = JSON.parse(atob(token.split(".")[1]));
        setUserEmail(payload.email || "User");
      } catch {
        setUserEmail("User");
      }
    }
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <nav className="flex justify-between items-center p-4 bg-gradient-to-r from-blue-600 to-blue-500 text-white shadow-lg dark:from-blue-800 dark:to-blue-700">
      {/* Logo and Title */}
      <div className="flex items-center gap-3 min-w-fit">
        <h1
          className="text-2xl font-bold cursor-pointer hover:text-blue-100 transition flex items-center gap-2"
          onClick={() => navigate("/home")}
        >
          <span>📝</span> Todo App
        </h1>
      </div>

      {/* Right Side: User Info and Buttons */}
      <div className="flex items-center gap-4 justify-end flex-wrap">
        <span className="text-sm font-semibold px-3 py-2 bg-white bg-opacity-20 rounded-lg min-w-fit">
          👤 {userEmail}
        </span>
        <button
          onClick={() => navigate("/home")}
          className="bg-blue-400 hover:bg-blue-300 text-gray-900 font-bold px-4 py-2 rounded-lg text-sm transition transform hover:scale-105 whitespace-nowrap"
        >
          📊 Dashboard
        </button>
        <button
          onClick={() => navigate("/profile")}
          className="bg-blue-400 hover:bg-blue-300 text-gray-900 font-bold px-4 py-2 rounded-lg text-sm transition transform hover:scale-105 whitespace-nowrap"
        >
          👤 Profile
        </button>
        <button
          onClick={handleLogout}
          className="bg-red-500 hover:bg-red-600 text-white font-bold px-4 py-2 rounded-lg text-sm transition transform hover:scale-105 whitespace-nowrap"
        >
          🚪 Logout
        </button>
        <DarkModeToggle />
      </div>
    </nav>
  );
}
