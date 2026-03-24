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
      <div className="flex items-center gap-3">
        <img
          src="/Todo-logo.png"
          alt="Todo Logo"
          className="h-10 w-10 rounded-full border-2 border-white hover:scale-110 transition cursor-pointer"
          onClick={() => navigate("/todos")}
        />
        <h1
          className="text-2xl font-bold cursor-pointer hover:text-blue-100 transition"
          onClick={() => navigate("/todos")}
        >
          📝 Todo App
        </h1>
      </div>
      <div className="flex items-center gap-4">
        <span className="text-sm font-semibold hidden sm:inline">
          👤 {userEmail}
        </span>
        <button
          onClick={() => navigate("/dashboard")}
          className="bg-blue-400 hover:bg-blue-300 px-3 py-2 rounded-lg text-xs sm:text-sm font-semibold transition transform hover:scale-105"
        >
          📊 Dashboard
        </button>
        <button
          onClick={() => navigate("/profile")}
          className="bg-blue-400 hover:bg-blue-300 px-3 py-2 rounded-lg text-xs sm:text-sm font-semibold transition transform hover:scale-105"
        >
          👤 Profile
        </button>
        <button
          onClick={handleLogout}
          className="bg-red-500 hover:bg-red-600 px-3 py-2 rounded-lg text-xs sm:text-sm font-semibold transition transform hover:scale-105"
        >
          🚪 Logout
        </button>
        <DarkModeToggle />
      </div>
    </nav>
  );
}
