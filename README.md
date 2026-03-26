Advanced Todo App - Production Ready
Built with React, Node.js, MongoDB, and TypeScript. Full-featured with authentication, dark mode, project organization, and smart filtering.

Features
Authentication: JWT-based secure login/register
Task Management: Full CRUD with priorities, categories, tags
Projects: Organize tasks
Dark Mode: Persistent system-wide theme
Smart Filtering & Views: Search, sort, Inbox, Today, Upcoming, Completed
Due Dates: Smart formatting (Today/Tomorrow/Overdue)
Responsive Design: Desktop, tablet, mobile ready
Notifications: Toast messages for actions
Quick Start

Install dependencies and run backend:
cd backend
npm install
npm start

Backend runs on http://localhost:6002.

Frontend
Install dependencies and run frontend:
cd frontend
npm install
npm start

Frontend runs on http://localhost:4002.

Project Structure
backend/
├── models/       # User, Todo, Project schemas
├── routes/       # auth.js, todo.js, project.js
├── middleware/   # auth.js
└── server.js

frontend/
├── src/
│   ├── Pages/         # HomePage, LoginPage, RegisterPage, ProfilePage
│   ├── components/    # Sidebar, TodoItem, TodoModal, Navbar, DarkModeToggle
│   ├── context/       # DarkModeContext
│   ├── App.tsx        # Routes
│   └── axiosConfig.ts
API Endpoints

Todos (Requires Auth)

GET /api/todos - Get all todos
POST /api/todos - Create todo
PUT /api/todos/:id - Update todo
DELETE /api/todos/:id - Delete todo

Projects (Requires Auth)

GET /api/projects - Get all projects
POST /api/projects - Create project
PUT /api/projects/:id - Update project
DELETE /api/projects/:id - Delete project
Usage
Register & Login
Create Project (optional)
Add Task: Title, Description, Priority, Category, Project, Due Date, Tags
Manage Tasks: Complete, Edit, Delete, Search, Filter
Views: Inbox, Today, Upcoming, Completed, Projects
Toggle Dark Mode: Theme persists
Tech Stack

Frontend: React 19, TypeScript 4.9, Tailwind CSS 3, React Router, Axios, date-fns, React Toastify
Backend: Node.js 18+, Express 4, MongoDB 7, Mongoose 7, JWT, bcryptjs

Security
Passwords hashed (bcrypt)
JWT authentication
Protected routes
CORS enabled
User data isolation
Database Schemas

User: _id, email, password, createdAt
Todo: _id, user, project, title, description, completed, priority, category, dueDate, tags, createdAt, updatedAt
Project: _id, user, name, color, icon, createdAt
