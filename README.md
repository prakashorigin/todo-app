# 📋 Advanced Todo App - Production Ready ✨

> A **Todoist-like task management application** built with React, Node.js, MongoDB, and TypeScript. Full-featured with authentication, dark mode, advanced filtering, and project organization.

![Todo App](https://img.shields.io/badge/Status-Production%20Ready-brightgreen)
![React](https://img.shields.io/badge/React-19.2.4-blue)
![Node.js](https://img.shields.io/badge/Node.js-18%2B-green)
![MongoDB](https://img.shields.io/badge/MongoDB-7.0-green)
![TypeScript](https://img.shields.io/badge/TypeScript-4.9-blue)

---

## 🎯 Features at a Glance

| Feature               | Status | Details                                     |
| --------------------- | ------ | ------------------------------------------- |
| **Authentication**    | ✅     | JWT-based secure login/register             |
| **Task Management**   | ✅     | Full CRUD with priorities, categories, tags |
| **Projects**          | ✅     | Organize tasks into projects                |
| **Dark Mode**         | ✅     | System-wide with persistence                |
| **Smart Filtering**   | ✅     | Search + Priority + Category + Sort         |
| **Smart Views**       | ✅     | Inbox, Today, Upcoming, Completed           |
| **Due Dates**         | ✅     | Smart formatting (Today/Tomorrow/Overdue)   |
| **Responsive Design** | ✅     | Desktop, tablet, mobile ready               |
| **Notifications**     | ✅     | Toast messages for all actions              |

---

## 🚀 Get Started in 5 Minutes

### **Option A: Quick Start (Fastest)**

1. **Create `.env` file** in backend folder:

```bash
# backend/.env
MONGO_URI=mongodb://localhost:27017/todo-app
JWT_SECRET=your_secret_key_here
PORT=6002
NODE_ENV=development
```

2. **Start MongoDB** (Terminal 1):

```bash
mongod
```

3. **Start Backend** (Terminal 2):

```bash
cd backend
npm install  # First time only
npm start
```

4. **Start Frontend** (Terminal 3):

```bash
cd frontend
npm install  # First time only
npm start
```

✅ **Done!** Open http://localhost:3000

### **Option B: See Documentation Files**

- 📖 **[QUICK_START.md](QUICK_START.md)** - 5-minute setup walkthrough
- 📖 **[SETUP_AND_RUN_GUIDE.md](SETUP_AND_RUN_GUIDE.md)** - Comprehensive setup with details
- 📖 **[COMPLETE_CODE_REFERENCE.md](COMPLETE_CODE_REFERENCE.md)** - All code files explained
- 🔧 **[TROUBLESHOOTING.md](TROUBLESHOOTING.md)** - Solutions for common issues

### Backend Setup

1. **Install backend dependencies**

```bash
cd /Users/prakash/fullstack-todo-app/backend
npm install
```

2. **Create .env file** in backend folder:

```
MONGO_URI=mongodb://localhost:27017/todo-app
JWT_SECRET=your_secret_key_here
PORT=6002
```

3. **Start MongoDB** (if using local):

```bash
mongod
```

4. **Run backend server**:

```bash
npm start
# or
node server.js
```

Backend runs on: `http://localhost:6002`

### Frontend Setup

1. **Install frontend dependencies**

```bash
cd /Users/prakash/fullstack-todo-app/frontend
npm install
```

2. **Start React dev server**:

```bash
npm start
```

Frontend runs on: `http://localhost:4002` (or `http://localhost:3000`)

## 📁 Project Structure

```
backend/
├── models/
│   ├── User.js
│   ├── Todo.js
│   └── Project.js
├── routes/
│   ├── auth.js
│   ├── todo.js
│   └── project.js
└── server.js

frontend/
├── src/
│   ├── Pages/
│   │   ├── HomePage.tsx (Main dashboard with sidebar)
│   │   ├── LoginPage.tsx
│   │   ├── RegisterPage.tsx
│   │   └── ProfilePage.tsx
│   ├── components/
│   │   ├── Sidebar.tsx (Navigation with projects)
│   │   ├── TodoItem.tsx (Todo card display)
│   │   └── TodoModal.tsx (Create/Edit modal)
│   ├── App.tsx (Routes)
│   └── axiosConfig.ts (API config)
```

## 🔑 API Endpoints

### Authentication

- `POST /api/auth/register` - Register new user
- `POST /api/auth/login` - Login user

### Todos

- `GET /api/todos` - Get all todos
- `POST /api/todos` - Create todo
- `PUT /api/todos/:id` - Update todo
- `DELETE /api/todos/:id` - Delete todo

### Projects

- `GET /api/projects` - Get all projects
- `POST /api/projects` - Create project
- `PUT /api/projects/:id` - Update project
- `DELETE /api/projects/:id` - Delete project

## 💡 How to Use

### 1. Register & Login

- Go to Register page, create account
- Login with email and password
- You're redirected to Home/Dashboard

### 2. Create a Project (Optional)

- In Sidebar, click `+` next to "MY PROJECTS"
- Enter project name
- Click "Create"

### 3. Add a Task

- Click "+ Add Task" button
- Fill in:
  - Title (required)
  - Description
  - Priority
  - Category
  - Project (optional)
  - Due Date
  - Tags
- Click "Create"

### 4. Manage Tasks

- **Complete Task** - Click checkbox
- **View Task Details** - Click "Edit" button
- **Delete Task** - Click "Delete" button
- **Search** - Use search box in header

### 5. Navigate Views

- **Inbox** - All pending tasks
- **Today** - Tasks due today
- **Upcoming** - Tasks due in future
- **Completed** - Done tasks
- **Projects** - Tasks in each project

## 🛠️ Technologies Used

**Backend:**

- Node.js + Express
- MongoDB + Mongoose
- JWT for authentication
- CORS enabled

**Frontend:**

- React 19
- TypeScript
- Tailwind CSS
- React Router
- Axios
- React Toastify (notifications)
- date-fns (date formatting)

---

## 📁 Project Structure

```
fullstack-todo-app/
├── backend/                          # Node.js + Express server
│   ├── models/
│   │   ├── User.js                  # User schema (email, password)
│   │   ├── Todo.js                  # Todo schema with all fields
│   │   └── Project.js               # Project schema for organization
│   ├── routes/
│   │   ├── auth.js                  # Authentication endpoints
│   │   ├── todo.js                  # Todo CRUD endpoints
│   │   └── project.js               # Project CRUD endpoints
│   ├── middleware/
│   │   └── auth.js                  # JWT verification middleware
│   ├── server.js                    # Express server entry point
│   ├── package.json
│   └── .env                         # Environment variables
│
├── frontend/                         # React + TypeScript app
│   ├── src/
│   │   ├── Pages/
│   │   │   ├── HomePage.tsx         # Main dashboard (all features)
│   │   │   ├── LoginPage.tsx        # User login
│   │   │   ├── RegisterPage.tsx     # User registration
│   │   │   └── ProfilePage.tsx      # User profile
│   │   ├── components/
│   │   │   ├── Sidebar.tsx          # Navigation & project list
│   │   │   ├── TodoItem.tsx         # Individual task card
│   │   │   ├── TodoModal.tsx        # Create/Edit task form
│   │   │   ├── SearchFilter.tsx     # Advanced search & filters
│   │   │   ├── DarkModeToggle.tsx   # Dark/light mode button
│   │   │   └── Navbar.tsx           # Top navigation bar
│   │   ├── context/
│   │   │   └── DarkModeContext.tsx  # Dark mode state management
│   │   ├── App.tsx                  # Main app with routes
│   │   ├── axiosConfig.ts           # API configuration
│   │   └── index.tsx                # React entry point
│   ├── package.json
│   └── tailwind.config.js
│
├── QUICK_START.md                   # 5-minute setup guide
├── SETUP_AND_RUN_GUIDE.md           # Detailed setup instructions
├── COMPLETE_CODE_REFERENCE.md       # All files explained
├── TROUBLESHOOTING.md               # Solutions for common issues
└── README.md                        # This file
```

---

## 🔑 API Reference

### Authentication (`/api/auth`)

```bash
POST /api/auth/register
  Body: { email, password }
  Response: { token, user }

POST /api/auth/login
  Body: { email, password }
  Response: { token, user }
```

### Todos (`/api/todos`) - _Requires Authentication_

```bash
GET /api/todos
  Headers: Authorization: Bearer <token>
  Response: array of todos

POST /api/todos
  Headers: Authorization: Bearer <token>
  Body: { title, description, priority, category, project, dueDate, tags }
  Response: { created todo object }

PUT /api/todos/:id
  Headers: Authorization: Bearer <token>
  Body: { completed, title, description, ... }
  Response: { updated todo object }

DELETE /api/todos/:id
  Headers: Authorization: Bearer <token>
  Response: { message }
```

### Projects (`/api/projects`) - _Requires Authentication_

```bash
GET /api/projects
  Headers: Authorization: Bearer <token>
  Response: array of projects

POST /api/projects
  Headers: Authorization: Bearer <token>
  Body: { name, color, icon }
  Response: { created project object }

PUT /api/projects/:id
  Headers: Authorization: Bearer <token>
  Body: { name, color, icon }
  Response: { updated project object }

DELETE /api/projects/:id
  Headers: Authorization: Bearer <token>
  Response: { message }
```

---

## 💡 How to Use

### 1️⃣ Register Account

```
Go to http://localhost:3000/register
Fill in: Email, Password
Click "Register"
Redirects to Login
```

### 2️⃣ Login

```
Go to http://localhost:3000/login
Fill in: Email, Password
Click "Login"
Redirects to Dashboard (HomePage)
```

### 3️⃣ Create a Task

```
Click "+ Add Task" button in header
Fill form:
  - Title (required)
  - Description (optional)
  - Priority (High/Medium/Low)
  - Category (Work/Personal/etc)
  - Project (optional)
  - Due Date (optional)
  - Tags (optional, comma-separated)
Click "Create"
✅ Task appears in list
```

### 4️⃣ Manage Tasks

```
✓ Complete: Click checkbox
✏️ Edit: Click "Edit" button, modify, save
🗑️ Delete: Click "Delete" button
🔍 Search: Type in search box
🎯 Filter: Use Priority/Category dropdowns
📊 Sort: Use Sort dropdown
```

### 5️⃣ Navigate Views

```
📥 Inbox: All pending tasks
📅 Today: Tasks due today only
🗓️ Upcoming: Future tasks
✅ Completed: Finished tasks
📁 Projects: Tasks in selected project
```

### 6️⃣ Dark Mode

```
Click ☀️ (light) or 🌙 (dark) button in navbar
Theme persists across reloads
Applies to entire app
```

---

## 🛠️ Tech Stack

| Layer    | Technology   | Version            |
| -------- | ------------ | ------------------ |
| Frontend | React        | 19.2.4             |
| Frontend | TypeScript   | 4.9.5              |
| Frontend | Tailwind CSS | 3.x                |
| Frontend | React Router | 7.13.2             |
| Frontend | Axios        | 1.13.6             |
| Frontend | date-fns     | 4.1.0              |
| Backend  | Node.js      | 18+                |
| Backend  | Express      | 4.18.2             |
| Backend  | MongoDB      | 7.0                |
| Backend  | Mongoose     | 7.0.0              |
| Backend  | JWT          | jsonwebtoken 9.0.0 |
| Backend  | Password     | bcryptjs 2.4.3     |

---

## 🎨 Dark Mode

Features:

- ✅ Toggle button in navbar
- ✅ Persists to localStorage
- ✅ Automatically applied to entire app
- ✅ Tailwind CSS dark: utilities

Components styled with dark mode:

- Header & navbar
- Sidebar
- Task cards
- Modals
- Buttons
- Text colors

---

## 🔐 Security

- ✅ Passwords hashed with bcryptjs (10 salt rounds)
- ✅ JWT tokens for stateless authentication
- ✅ Protected routes on frontend (token check)
- ✅ Protected endpoints on backend (middleware)
- ✅ CORS enabled for cross-origin requests
- ✅ Authorization - users only access own data
- ✅ Token stored in localStorage (safe for this app)

---

## ⚡ Performance

- ✅ Optimized React components
- ✅ Efficient filtering and sorting
- ✅ Debounced search input
- ✅ Lazy loading support ready
- ✅ Minimal re-renders with proper state
- ✅ MongoDB indexes on user_id for faster queries

---

## 📊 Database Schema

### Users

```javascript
{
  _id: ObjectId,
  email: String (unique, indexed),
  password: String (bcrypt hashed),
  createdAt: Date
}
```

### Todos

```javascript
{
  _id: ObjectId,
  user: ObjectId (ref: User, indexed),
  project: ObjectId (ref: Project),
  title: String,
  description: String,
  completed: Boolean (default: false),
  priority: String (low|medium|high),
  category: String,
  dueDate: Date,
  tags: [String],
  createdAt: Date,
  updatedAt: Date
}
```

### Projects

```javascript
{
  _id: ObjectId,
  user: ObjectId (ref: User),
  name: String,
  color: String (hex color, default: #3498db),
  icon: String (emoji),
  createdAt: Date
}
```

---

## 🚀 Deployment Ready

### Environment Variables Checklist

```env
# Backend
MONGO_URI=<your_mongodb_url>
JWT_SECRET=<strong_random_key>
PORT=6002
NODE_ENV=production

# Frontend
REACT_APP_API_URL=<backend_url>
```

### Deployment Options

- **Backend**: Heroku, AWS, Azure, DigitalOcean, Railway
- **Frontend**: Vercel, Netlify, GitHub Pages
- **Database**: MongoDB Atlas, AWS DocumentDB
- **Full Stack**: Docker Compose for easy deployment

---

## 📚 Documentation Files

| File                                                     | Purpose                         |
| -------------------------------------------------------- | ------------------------------- |
| [QUICK_START.md](QUICK_START.md)                         | 5-minute setup walkthrough      |
| [SETUP_AND_RUN_GUIDE.md](SETUP_AND_RUN_GUIDE.md)         | Detailed setup with all options |
| [COMPLETE_CODE_REFERENCE.md](COMPLETE_CODE_REFERENCE.md) | All 23 files explained          |
| [TROUBLESHOOTING.md](TROUBLESHOOTING.md)                 | Solutions for 30+ issues        |

---

## 🐛 Common Issues

| Issue                    | Solution                      |
| ------------------------ | ----------------------------- |
| MongoDB connection error | Ensure `mongod` is running    |
| Port 6002 already in use | Kill process: `lsof -i :6002` |
| 401 unauthorized         | Check token in localStorage   |
| React compilation error  | Run `npm install` in frontend |
| Module not found         | Run `npm cache clean --force` |

**For more:** See [TROUBLESHOOTING.md](TROUBLESHOOTING.md)

---

## 🎯 Next Steps

After getting the app running:

1. ✅ Test all features (create/edit/delete tasks)
2. ✅ Try different views and filters
3. ✅ Test dark mode persistence
4. ✅ Create multiple projects
5. ✅ Logout and login
6. ✅ Try search functionality

**Advanced:**

- Add drag-and-drop task reordering
- Implement task recurring
- Add task reminders/notifications
- Add sharing/collaboration features
- Add mobile app version

---

## 📈 Project Status

- ✅ Backend: Production ready
- ✅ Frontend: Production ready
- ✅ Authentication: Secure JWT implementation
- ✅ Database: Mongoose schemas with proper indexes
- ✅ Features: All core features implemented
- ✅ Styling: Tailwind CSS with dark mode
- ✅ Documentation: Comprehensive guides included

---

## 📞 Support

If you encounter issues:

1. Check [TROUBLESHOOTING.md](TROUBLESHOOTING.md) first
2. Verify all 3 servers running:
   - MongoDB (`mongod`)
   - Backend (`npm start` in backend/)
   - Frontend (`npm start` in frontend/)
3. Check logs in each terminal
4. Verify .env file exists and is correct
5. Clear browser cache and localStorage

---

## 📄 License

Open source - feel free to use, modify, and deploy!

---

## 🎉 Enjoy!

You now have a **production-ready, Todoist-like todo app** with:

- ✨ Modern UI with dark mode
- 🔐 Secure authentication
- 📊 Advanced filtering and search
- 📱 Responsive design
- 🚀 Full CRUD operations
- 📅 Smart date handling
- 🏷️ Project organization

**Happy task management!** 🚀

- Debounced search
- Lazy loading supported
- Mobile responsive

## 🔐 Security

- JWT-based authentication
- Password hashing
- Protected routes
- CORS enabled
- Environment variables for secrets

## 🚀 Next Steps

You can further enhance with:

- Recurring tasks
- Task attachments
- Collaboration/Team features
- Notifications
- Dark mode
- Mobile app
- Export/Import tasks

---

**Happy Tasking! 🎉**
# todo-app
