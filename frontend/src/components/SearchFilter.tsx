import { useState } from "react";

interface SearchFilterProps {
  onSearch: (query: string) => void;
  onFilterPriority: (priority: string) => void;
  onFilterCategory: (category: string) => void;
  onSort: (sortBy: string) => void;
  totalTodos: number;
}

export default function SearchFilter({
  onSearch,
  onFilterPriority,
  onFilterCategory,
  onSort,
  totalTodos,
}: SearchFilterProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const [showFilters, setShowFilters] = useState(false);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value;
    setSearchQuery(query);
    onSearch(query);
  };

  return (
    <div className="bg-white dark:bg-gray-800 shadow-md rounded-lg p-6 space-y-4">
      {/* Search Bar */}
      <div className="flex gap-3 items-center">
        <div className="flex-1 relative">
          <input
            type="text"
            placeholder="🔍 Search tasks..."
            value={searchQuery}
            onChange={handleSearchChange}
            className="w-full px-4 py-3 border dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white font-medium"
          />
        </div>
        <button
          onClick={() => setShowFilters(!showFilters)}
          className="px-5 py-3 bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-white rounded-lg hover:bg-gray-300 dark:hover:bg-gray-600 transition flex items-center gap-2 font-bold"
        >
          ⚙️ Filters
        </button>
      </div>

      {/* Filters Panel */}
      {showFilters && (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 p-5 bg-gray-50 dark:bg-gray-700 rounded-lg border border-gray-200 dark:border-gray-600">
          {/* Priority Filter */}
          <div>
            <label className="block text-sm font-bold text-gray-900 dark:text-white mb-2">
              Priority
            </label>
            <select
              onChange={(e) => onFilterPriority(e.target.value)}
              className="w-full px-3 py-2 border dark:border-gray-600 rounded-lg dark:bg-gray-600 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 font-medium"
            >
              <option value="">All</option>
              <option value="high">High</option>
              <option value="medium">Medium</option>
              <option value="low">Low</option>
            </select>
          </div>

          {/* Category Filter */}
          <div>
            <label className="block text-sm font-bold text-gray-900 dark:text-white mb-2">
              Category
            </label>
            <select
              onChange={(e) => onFilterCategory(e.target.value)}
              className="w-full px-3 py-2 border dark:border-gray-600 rounded-lg dark:bg-gray-600 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 font-medium"
            >
              <option value="">All</option>
              <option value="work">Work</option>
              <option value="personal">Personal</option>
              <option value="shopping">Shopping</option>
              <option value="health">Health</option>
              <option value="general">General</option>
            </select>
          </div>

          {/* Sort */}
          <div>
            <label className="block text-sm font-semibold mb-2 dark:text-gray-200">
              Sort By
            </label>
            <select
              onChange={(e) => onSort(e.target.value)}
              className="w-full px-3 py-2 border dark:border-gray-600 rounded-lg dark:bg-gray-600 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="dueDate">Due Date</option>
              <option value="priority">Priority</option>
              <option value="newest">Newest</option>
              <option value="oldest">Oldest</option>
            </select>
          </div>
        </div>
      )}

      {/* Info Bar */}
      <div className="text-sm text-gray-900 dark:text-white font-bold bg-gray-100 dark:bg-gray-700 px-4 py-3 rounded-lg">
        📊 Total tasks:{" "}
        <span className="font-bold text-blue-600 dark:text-blue-400">
          {totalTodos}
        </span>
      </div>
    </div>
  );
}
