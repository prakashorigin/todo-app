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
    <nav className="bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 shadow-sm sticky top-0 z-50">
      <div className="flex items-center justify-between px-6 py-4 max-w-7xl mx-auto">
        {/* Left: Logo and Title */}
        <div
          className="flex items-center gap-3 cursor-pointer hover:opacity-80 transition"
          onClick={() => navigate("/home")}
        >
          <span className="text-3xl">📝</span>
          <h1 className="text-xl font-bold text-gray-900 dark:text-white">
            Todo App
          </h1>
        </div>

        {/* Center: User Email */}
        <div className="flex-1 flex justify-center">
          <span className="text-sm font-bold text-gray-900 dark:text-white bg-gray-100 dark:bg-gray-700 px-4 py-2 rounded-lg">
            👤 {userEmail}
          </span>
        </div>

        {/* Right: Buttons and Controls */}
        <div className="flex items-center gap-3">
          {/* Dashboard Button */}
          <button
            onClick={() => navigate("/home")}
            className="px-4 py-2 text-sm font-bold text-gray-900 dark:text-white bg-blue-100 dark:bg-blue-800 hover:bg-blue-200 dark:hover:bg-blue-700 rounded-lg transition"
          >
            📊 Dashboard
          </button>

          {/* Profile Button */}
          <button
            onClick={() => navigate("/profile")}
            className="px-4 py-2 text-sm font-bold text-gray-900 dark:text-white bg-blue-100 dark:bg-blue-800 hover:bg-blue-200 dark:hover:bg-blue-700 rounded-lg transition"
          >
            👤 Profile
          </button>

          {/* Logout Button */}
          <button
            onClick={handleLogout}
            className="px-4 py-2 text-sm font-medium text-white bg-red-500 hover:bg-red-600 rounded-lg transition"
          >
            🚪 Logout
          </button>

          {/* Dark Mode Toggle */}
          <div className="border-l border-gray-200 dark:border-gray-700 pl-3">
            <DarkModeToggle />
          </div>
        </div>
      </div>
    </nav>
  );
}
