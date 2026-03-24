# 💻 ADVANCED TODO APP - COMPLETE CODE REFERENCE

## 📁 **COMPLETE FILE LISTING & DESCRIPTIONS**

This document contains a reference of all key components and their purposes.

---

## **BACKEND FILES**

### 1. `backend/server.js` - Main Server Entry Point

- Initializes Express server
- Connects MongoDB
- Registers routes
- Starts listening on PORT 6002

**Key Features:**

- CORS enabled for frontend communication
- MongoDB connection with error handling
- Morgan middleware for request logging
- Routes for auth, todos, projects

### 2. `backend/models/User.js` - User Schema

- Email (unique)
- Password (hashed with bcryptjs)
- Name
- Timestamps

**Methods:**

- `matchPassword()` - Compares plain password with hashed

### 3. `backend/models/Todo.js` - Todo Schema

- References User and Project
- Title, Description
- Completed status
- Priority (low, medium, high)
- Category (work, personal, shopping, health, general)
- Due Date
- Tags array
- Timestamps

### 4. `backend/models/Project.js` - Project Schema

- References User
- Name (project title)
- Color (#3498db default)
- Icon (emoji)
- Timestamps

### 5. `backend/middleware/auth.js` - Authentication Middleware

```javascript
// Checks for Bearer token in Authorization header
// Validates JWT signature
// Attaches user object to request
// Returns 401 if token missing/invalid
```

**Usage:**

```javascript
router.get("/", protect, async (req, res) => {
  // req.user available here
  // Only runs if valid token provided
});
```

### 6. `backend/routes/auth.js` - Authentication Routes

- `POST /api/auth/register` - Creates user, hashes password, returns JWT
- `POST /api/auth/login` - Validates credentials, returns JWT

**Request Format:**

```json
{
  "email": "user@example.com",
  "password": "securePassword123"
}
```

**Response Format:**

```json
{
  "token": "eyJhbGciOiJIUzI1NiIs...",
  "user": {
    "id": "507f1f77bcf86cd799439011",
    "email": "user@example.com"
  }
}
```

### 7. `backend/routes/todo.js` - Todo CRUD Routes

- `GET /api/todos` - Get all user's todos
- `POST /api/todos` - Create new todo
- `PUT /api/todos/:id` - Update todo
- `DELETE /api/todos/:id` - Delete todo

**All require authentication**

### 8. `backend/routes/project.js` - Project CRUD Routes

- `GET /api/projects` - Get all projects
- `POST /api/projects` - Create project
- `PUT /api/projects/:id` - Update project
- `DELETE /api/projects/:id` - Delete project

**All require authentication**

### 9. `backend/.env` - Environment Variables

```env
MONGO_URI=mongodb://localhost:27017/todo-app
JWT_SECRET=your_secret_key_here
PORT=6002
NODE_ENV=development
```

### 10. `backend/package.json` - Dependencies

```json
{
  "dependencies": {
    "express": "^4.18.2",
    "mongoose": "^7.0.0",
    "bcryptjs": "^2.4.3",
    "jsonwebtoken": "^9.0.0",
    "cors": "^2.8.5",
    "dotenv": "^16.0.3",
    "morgan": "^1.10.0"
  }
}
```

---

## **FRONTEND FILES**

### 11. `frontend/src/App.tsx` - Root Component

- Sets up React Router
- Wraps app with DarkModeProvider
- Defines all routes (login, register, home, profile)
- Protected route logic
- ToastContainer for notifications

**Routes:**

- `/login` - LoginPage (public)
- `/register` - RegisterPage (public)
- `/home` - HomePage (protected)
- `/profile` - ProfilePage (protected)
- `/` - Redirects to /home

### 12. `frontend/src/axiosConfig.ts` - API Configuration

```typescript
const instance = axios.create({
  baseURL: "http://localhost:6002/api",
});

// Request interceptor adds JWT token automatically
instance.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});
```

**Usage:**

```typescript
import axios from "../axiosConfig";
const res = await axios.get("/todos");
```

### 13. `frontend/src/context/DarkModeContext.tsx` - Dark Mode State Management

- Creates Context for dark mode
- Provider component
- Custom hook `useDarkMode()`
- Persists to localStorage
- Adds/removes "dark" class from HTML element

**Usage:**

```typescript
const { isDark, toggleDarkMode } = useDarkMode();
```

### 14. `frontend/src/components/DarkModeToggle.tsx` - Dark Mode Button

- Displays ☀️ (light) or 🌙 (dark) emoji
  -Calls toggleDarkMode() from context
- Button with hover effects

### 15. `frontend/src/components/SearchFilter.tsx` - Advanced Search/Filter Panel

**Features:**

- Search by task title (real-time)
- Filter by Priority: High/Medium/Low
- Filter by Category: Work/Personal/Shopping/Health/General
- Sort by: Due Date, Priority, Newest, Oldest
- Shows total task count

**Props:**

```typescript
interface SearchFilterProps {
  onSearch: (query: string) => void;
  onFilterPriority: (priority: string) => void;
  onFilterCategory: (category: string) => void;
  onSort: (sortBy: string) => void;
  totalTodos: number;
}
```

### 16. `frontend/src/components/TodoItem.tsx` - Individual Task Card

**Displays:**

- Checkbox to complete/uncomplete
- Task title (strikethrough if completed)
- Description
- Priority badge (color-coded)
- Category badge
- Due date with smart formatting (Today, Tomorrow, Overdue)
- Tags
- Edit and Delete buttons

**Features:**

- Click checkbox to toggle complete
- Edit button opens modal
- Delete button removes task
- Shows overdue in red
- Styling changes when completed

### 17. `frontend/src/components/TodoModal.tsx` - Create/Edit Task Modal

**Form Fields:**

- Title (required)
- Description (optional)
- Priority dropdown
- Category dropdown
- Project dropdown
- Due Date picker
- Tags (comma-separated)

**Features:**

- Loads projects from API on mount
- Populates form if editing existing task
- Validates required fields
- Shows different title for create vs edit
- Create/Update/Cancel buttons

**Props:**

```typescript
interface TodoModalProps {
  isOpen: boolean;
  todo: any | null;
  onClose: () => void;
  onSave: (todo: any) => void;
  defaultProject?: string | null;
}
```

### 18. `frontend/src/components/Sidebar.tsx` - Navigation Sidebar

**Features:**

- App logo and title
- Profile button
- Main menu (Inbox, Today, Upcoming, Completed)
- My Projects section with add/delete
- Create project form
- Logout button

**Quick Stats:**

- Shows count badges on menu items
- Highlights active view
- Project colors support

**Props:**

```typescript
interface SidebarProps {
  activeView: string;
  onViewChange: (view: string) => void;
  onProjectSelect?: (projectId: string) => void;
}
```

### 19. `frontend/src/Pages/HomePage.tsx` - Main Dashboard

**State Management:**

- todos - Array of all tasks
- activeView - Current filter view
- search - Search query
- priorityFilter - Priority filter
- categoryFilter - Category filter
- sort - Sort method
- loading - Loading state

**Functions:**

- `getFilteredTodos()` - Applies all filters and sorting
- `toggleComplete()` - Mark task complete/incomplete
- `deleteTodo()` - Delete a task
- `handleEditTodo()` - Open edit modal
- `handleSaveTodo()` - Refresh after save

**Features:**

- Real-time search
- Multi-filter support
- Advanced sorting
- Loading spinner
- Empty states with emojis
- Dark mode support

### 20. `frontend/src/Pages/LoginPage.tsx` - Login Form

**Features:**

- Email input
- Password input (with show/hide)
- Form validation
- Login button with loading state
- Register link
- Animated background
- Gradient header
- Error toasts

**On Success:**

- Saves token to localStorage
- Navigates to /home

### 21. `frontend/src/Pages/RegisterPage.tsx` - Registration Form

**Features:**

- Email input
- Password input (with validation)
- Confirm password input
- Password strength check (minimum 6 characters)
- Animated form
- Error handling
- Success message with redirect to login

### 22. `frontend/src/Pages/ProfilePage.tsx` - User Profile

- Shows user info
- Logout button
- Profile customization (optional)

### 23. `frontend/package.json` - Dependencies

```json
{
  "dependencies": {
    "react": "^19.2.4",
    "react-dom": "^19.2.4",
    "react-router-dom": "^7.13.2",
    "typescript": "^4.9.5",
    "tailwindcss": "^3.x",
    "axios": "^1.13.6",
    "react-toastify": "^11.0.5",
    "date-fns": "^4.1.0",
    "framer-motion": "^12.38.0"
  }
}
```

---

## 🔄 **DATA FLOW DIAGRAM**

```
Frontend (React)
    ↓
axios with JWT token
    ↓
Backend (Express)
    ↓
MongoDB
    ↓
Response with data
    ↓
Update React state
    ↓
Re-render UI
    ↓
Toast notification
```

---

## 📊 **DATABASE SCHEMA**

### **Users Collection**

```javascript
{
  _id: ObjectId,
  email: String (unique),
  password: String (hashed),
  createdAt: Date
}
```

### **Todos Collection**

```javascript
{
  _id: ObjectId,
  user: ObjectId (ref: User),
  project: ObjectId (ref: Project),
  title: String,
  description: String,
  completed: Boolean,
  priority: String (low, medium, high),
  category: String,
  dueDate: Date,
  tags: [String],
  createdAt: Date,
  updatedAt: Date
}
```

### **Projects Collection**

```javascript
{
  _id: ObjectId,
  user: ObjectId (ref: User),
  name: String,
  color: String (#hex),
  icon: String (emoji),
  createdAt: Date
}
```

---

## 🔐 **SECURITY FEATURES**

1. **Password Hashing** - bcryptjs with salt rounds
2. **JWT Authentication** - Secure token-based auth
3. **Protected Routes** - Frontend checks token
4. **Server-side Validation** - Backend validates all requests
5. **CORS** - Restricted to frontend origin
6. **Authorization** - Users can only access their own data

---

## 🎨 **STYLING APPROACH**

**Tailwind CSS Utility Classes Used:**

Dark Mode:

```
dark:bg-gray-800
dark:text-white
dark:border-gray-700
dark:hover:bg-gray-700
```

Responsive:

```
md:flex-row
lg:max-w-5xl
sm:px-4
```

States:

```
hover:bg-blue-600
focus:outline-none
focus:ring-2 focus:ring-blue-500
```

---

## 🚀 **COMPLETE API REFERENCE**

### **Authentication**

```
POST /api/auth/register
POST /api/auth/login
  Headers: None needed for these
  Body: { email, password }
```

### **Todos**

```
GET /api/todos
  Headers: Authorization: Bearer <token>

POST /api/todos
  Headers: Authorization: Bearer <token>
  Body: { title, description, priority, category, project, dueDate, tags }

PUT /api/todos/:id
  Headers: Authorization: Bearer <token>
  Body: { completed, title, description, etc }

DELETE /api/todos/:id
  Headers: Authorization: Bearer <token>
```

### **Projects**

```
GET /api/projects
  Headers: Authorization: Bearer <token>

POST /api/projects
  Headers: Authorization: Bearer <token>
  Body: { name, color, icon }

PUT /api/projects/:id
  Headers: Authorization: Bearer <token>
  Body: { name, color, icon }

DELETE /api/projects/:id
  Headers: Authorization: Bearer <token>
```

---

## 📚 **KEY CONCEPTS**

**JWT (JSON Web Token)**

- Signed token containing user ID
- Valid for 7 days
- Sent in every request header
- Verified on backend before processing

**Axios Interceptor**

- Automatically adds token to requests
- Runs before each request
- NO manual header setup needed

**Context API**

- Global state for dark mode
- Accessible from any component via hook
- Persists to localStorage

**TypeScript Interfaces**

- Define Todo, Project, User shapes
- Provides IDE autocomplete
- Catches errors at compile-time

**React Hooks**

- useState - Local component state
- useEffect - Side effects (fetch data)
- useContext - Access global state
- Custom hooks - Reusable logic

---

## 🔧 **ENVIRONMENT SETUP**

Create these files before running:

`backend/.env`:

```env
MONGO_URI=mongodb://localhost:27017/todo-app
JWT_SECRET=your_secret_key
PORT=6002
NODE_ENV=development
```

`frontend/.env` (optional):

```env
REACT_APP_API_URL=http://localhost:6002/api
```

---

## 📝 **QUICK CODE SNIPPETS**

**Fetch todos:**

```typescript
const res = await axios.get("/todos");
setTodos(res.data);
```

**Create todo:**

```typescript
await axios.post("/todos", {
  title: "Buy milk",
  priority: "high",
  category: "shopping",
  dueDate: "2026-03-26",
});
```

**Update todo:**

```typescript
await axios.put(`/todos/${id}`, {
  completed: true,
});
```

**Delete todo:**

```typescript
await axios.delete(`/todos/${id}`);
```

---

This is your **complete reference** for the advanced Todo app! All features are fully implemented and production-ready. 🎉
