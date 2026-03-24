import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "../axiosConfig";
import { toast } from "react-toastify";

interface Project {
  _id: string;
  name: string;
  icon: string;
  color: string;
}

interface SidebarProps {
  activeView: string;
  onViewChange: (view: string) => void;
  onProjectSelect?: (projectId: string) => void;
}

export default function Sidebar({
  activeView,
  onViewChange,
  onProjectSelect,
}: SidebarProps) {
  const [projects, setProjects] = useState<Project[]>([]);
  const [showNewProject, setShowNewProject] = useState(false);
  const [newProjectName, setNewProjectName] = useState("");
  const navigate = useNavigate();

  const fetchProjects = async () => {
    try {
      const res = await axios.get("/projects");
      setProjects(res.data);
    } catch (error) {
      console.error("Failed to fetch projects");
    }
  };

  useEffect(() => {
    fetchProjects();
  }, []);

  const handleCreateProject = async () => {
    if (!newProjectName.trim()) {
      toast.error("Project name required!");
      return;
    }

    try {
      const res = await axios.post("/projects", {
        name: newProjectName,
        icon: "📁",
        color: "#3498db",
      });
      setProjects([res.data, ...projects]);
      setNewProjectName("");
      setShowNewProject(false);
      toast.success("Project created!");
    } catch (error) {
      toast.error("Failed to create project");
    }
  };

  const handleDeleteProject = async (id: string) => {
    if (window.confirm("Delete this project?")) {
      try {
        await axios.delete(`/projects/${id}`);
        setProjects(projects.filter((p) => p._id !== id));
        toast.success("Project deleted!");
      } catch (error) {
        toast.error("Failed to delete project");
      }
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  const menuItems = [
    { id: "inbox", label: "Inbox", icon: "📬" },
    { id: "today", label: "Today", icon: "📅" },
    { id: "upcoming", label: "Upcoming", icon: "🗓️" },
    { id: "completed", label: "Completed", icon: "✅" },
  ];

  return (
    <div className="w-64 bg-white dark:bg-gray-800 border-r border-gray-200 dark:border-gray-700 h-screen flex flex-col">
      {/* Menu Items */}
      <nav className="flex-1 overflow-y-auto p-4 space-y-2">
        {menuItems.map((item) => (
          <button
            key={item.id}
            onClick={() => onViewChange(item.id)}
            className={`w-full text-left px-4 py-3 rounded-lg flex items-center gap-3 transition font-medium ${
              activeView === item.id
                ? "bg-blue-50 dark:bg-blue-900 text-blue-600 dark:text-blue-400"
                : "text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700"
            }`}
          >
            <span className="text-xl">{item.icon}</span>
            <span className="text-sm">{item.label}</span>
          </button>
        ))}

        {/* Projects Section */}
        <div className="pt-4 mt-4 border-t border-gray-200 dark:border-gray-700">
          <div className="flex items-center justify-between px-4 mb-3">
            <h3 className="font-semibold text-gray-700 dark:text-gray-300 text-xs uppercase tracking-wide">
              Projects
            </h3>
            <button
              onClick={() => setShowNewProject(!showNewProject)}
              className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 text-xl hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg p-1 transition"
            >
              +
            </button>
          </div>

          {/* New Project Form */}
          {showNewProject && (
            <div className="px-4 mb-3 space-y-2">
              <input
                type="text"
                placeholder="Project name..."
                value={newProjectName}
                onChange={(e) => setNewProjectName(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                onKeyPress={(e) => e.key === "Enter" && handleCreateProject()}
                autoFocus
              />
              <div className="flex gap-2">
                <button
                  onClick={handleCreateProject}
                  className="flex-1 px-3 py-1 bg-blue-500 text-white text-xs rounded-lg hover:bg-blue-600 transition font-medium"
                >
                  Create
                </button>
                <button
                  onClick={() => setShowNewProject(false)}
                  className="flex-1 px-3 py-1 bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-xs rounded-lg hover:bg-gray-300 dark:hover:bg-gray-600 transition"
                >
                  Cancel
                </button>
              </div>
            </div>
          )}

          {/* Projects List */}
          <div className="space-y-1">
            {projects.length > 0 ? (
              projects.map((project) => (
                <div
                  key={project._id}
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg group transition ${
                    activeView === project._id
                      ? "bg-blue-50 dark:bg-blue-900"
                      : "hover:bg-gray-50 dark:hover:bg-gray-700"
                  }`}
                >
                  <span className="text-lg">{project.icon}</span>
                  <button
                    onClick={() => onProjectSelect?.(project._id)}
                    className={`flex-1 text-left text-sm transition ${
                      activeView === project._id
                        ? "text-blue-600 dark:text-blue-400 font-semibold"
                        : "text-gray-700 dark:text-gray-300"
                    }`}
                  >
                    {project.name}
                  </button>
                  <button
                    onClick={() => handleDeleteProject(project._id)}
                    className="opacity-0 group-hover:opacity-100 text-gray-400 hover:text-red-500 text-sm transition"
                  >
                    ✕
                  </button>
                </div>
              ))
            ) : (
              <p className="text-xs text-gray-500 dark:text-gray-400 px-4 py-2">
                No projects yet
              </p>
            )}
          </div>
        </div>
      </nav>
    </div>
  );
}
