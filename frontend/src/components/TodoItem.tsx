import { format, isPast, isToday, isTomorrow } from "date-fns";
import { toast } from "react-toastify";
import axios from "../axiosConfig";

interface TodoItemProps {
  todo: any;
  onEdit: (todo: any) => void;
  onDelete: (id: string) => void;
  onToggle: (id: string, completed: boolean) => void;
}

const TodoItem: React.FC<TodoItemProps> = ({
  todo,
  onEdit,
  onDelete,
  onToggle,
}) => {
  const getDateLabel = (date: string) => {
    const d = new Date(date);
    if (isToday(d)) return "Today";
    if (isTomorrow(d)) return "Tomorrow";
    if (isPast(d)) return "Overdue";
    return format(d, "MMM d");
  };

  const getPriorityColor = (priority: string) => {
    const colors: { [key: string]: string } = {
      high: "bg-red-100 border-red-300 text-red-800",
      medium: "bg-yellow-100 border-yellow-300 text-yellow-800",
      low: "bg-green-100 border-green-300 text-green-800",
    };
    return colors[priority] || colors.medium;
  };

  const getDueDateColor = (date: string) => {
    const d = new Date(date);
    if (isPast(d) && !isToday(d)) return "text-red-600 font-semibold";
    if (isToday(d)) return "text-orange-600 font-semibold";
    return "text-gray-500";
  };

  return (
    <div
      className={`p-4 border border-gray-200 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-800 hover:shadow-md transition ${
        todo.completed ? "opacity-70 bg-gray-50 dark:bg-gray-900" : ""
      }`}
    >
      <div className="flex items-start justify-between gap-4">
        {/* Left side - Checkbox and content */}
        <div className="flex items-start gap-3 flex-1 min-w-0">
          <input
            type="checkbox"
            checked={todo.completed}
            onChange={() => onToggle(todo._id, !todo.completed)}
            className="mt-1 w-5 h-5 cursor-pointer accent-blue-500 flex-shrink-0"
          />

          <div className="flex-1 min-w-0">
            {/* Title */}
            <h3
              className={`text-base font-semibold break-words ${
                todo.completed
                  ? "line-through text-gray-400 dark:text-gray-500"
                  : "text-gray-900 dark:text-white"
              }`}
            >
              {todo.title}
            </h3>

            {/* Description */}
            {todo.description && (
              <p
                className={`text-sm mt-1 break-words ${
                  todo.completed
                    ? "text-gray-400 dark:text-gray-500"
                    : "text-gray-600 dark:text-gray-400"
                }`}
              >
                {todo.description}
              </p>
            )}

            {/* Metadata row */}
            <div className="flex flex-wrap gap-2 mt-3">
              {/* Priority badge */}
              <span
                className={`text-xs font-medium px-2.5 py-1 rounded-full border ${getPriorityColor(
                  todo.priority,
                )}`}
              >
                {todo.priority.charAt(0).toUpperCase() + todo.priority.slice(1)}
              </span>

              {/* Category badge */}
              {todo.category && todo.category !== "general" && (
                <span className="text-xs font-medium px-2.5 py-1 rounded-full bg-blue-50 dark:bg-blue-900 border border-blue-200 dark:border-blue-700 text-blue-700 dark:text-blue-300">
                  {todo.category}
                </span>
              )}

              {/* Due date */}
              {todo.dueDate && (
                <span
                  className={`text-xs font-medium px-2.5 py-1 rounded-full ${getDueDateColor(
                    todo.dueDate,
                  )}`}
                >
                  📅 {getDateLabel(todo.dueDate)}
                </span>
              )}

              {/* Tags */}
              {todo.tags && todo.tags.length > 0 && (
                <div className="flex gap-1 flex-wrap">
                  {todo.tags.map((tag: string, idx: number) => (
                    <span
                      key={idx}
                      className="text-xs px-2 py-1 rounded bg-purple-100 border border-purple-300 text-purple-800"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Right side - Action buttons */}
        <div className="flex gap-2 flex-shrink-0">
          <button
            onClick={() => onEdit(todo)}
            className="px-3 py-1.5 text-sm bg-blue-500 hover:bg-blue-600 text-white rounded-lg transition font-medium flex items-center gap-1"
            title="Edit this task"
          >
            ✏️
          </button>
          <button
            onClick={() => onDelete(todo._id)}
            className="px-3 py-1.5 text-sm bg-red-500 hover:bg-red-600 text-white rounded-lg transition font-medium flex items-center gap-1"
            title="Delete this task"
          >
            🗑️
          </button>
        </div>
      </div>
    </div>
  );
};

export default TodoItem;
