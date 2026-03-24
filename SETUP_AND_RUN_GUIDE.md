# 🚀 ADVANCED TODO APP - COMPLETE SETUP & RUN GUIDE

## 🎯 **What You Have**

A **fully-advanced, production-ready Todo application** with:

✅ **Authentication** - Email/Password register & login with JWT  
✅ **Task Management** - Create, Read, Update, Delete with real-time updates  
✅ **Projects** - Organize tasks into custom projects  
✅ **Smart Views** - Inbox, Today, Upcoming, Completed filters  
✅ **Advanced Search** - Search by text, filter by priority/category, sort  
✅ **Dark Mode** - Toggle dark/light theme with localStorage persistence  
✅ **Priority Levels** - High, Medium, Low with visual indicators  
✅ **Categories** - Work, Personal, Shopping, Health, General  
✅ **Due Dates** - Smart date formatting (Today, Tomorrow, Overdue)  
✅ **Tags** - Add multiple tags to tasks  
✅ **Drag & Drop Ready** - UI structure ready for @hello-pangea/dnd  
✅ **Responsive Design** - Works on desktop, tablet, mobile  
✅ **Toast Notifications** - Instant feedback on actions  
✅ **Dark Mode - Complete** - Dark mode across ALL components

---

## 📋 **PROJECT STRUCTURE**

```
fullstack-todo-app/
├── backend/
│   ├── middleware/
│   │   └── auth.js
│   ├── models/
│   │   ├── User.js
│   │   ├── Todo.js
│   │   └── Project.js
│   ├── routes/
│   │   ├── auth.js
│   │   ├── todo.js
│   │   └── project.js
│   ├── server.js
│   ├── package.json
│   └── .env
│
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   │   ├── Sidebar.tsx
│   │   │   ├── DarkModeToggle.tsx
│   │   │   ├── TodoItem.tsx
│   │   │   ├── TodoModal.tsx
│   │   │   └── SearchFilter.tsx
│   │   │
│   │   ├── context/
│   │   │   └── DarkModeContext.tsx
│   │   │
│   │   ├── Pages/
│   │   │   ├── HomePage.tsx
│   │   │   ├── LoginPage.tsx
│   │   │   ├── RegisterPage.tsx
│   │   │   └── ProfilePage.tsx
│   │   │
│   │   ├── App.tsx
│   │   ├── axiosConfig.ts
│   │   └── index.tsx
│   │
│   ├── package.json
│   ├── tailwind.config.js
│   └── tsconfig.json
│
└── README.md
```

---

## ⚙️ **STEP 1: BACKEND SETUP**

### A. Navigate to Backend

```bash
cd /Users/prakash/fullstack-todo-app/backend
```

### B. Create `.env` File

Create `backend/.env`:

```env
MONGO_URI=mongodb://localhost:27017/todo-app
JWT_SECRET=your_super_secret_jwt_key_change_in_production
PORT=6002
NODE_ENV=development
```

### C. Install Dependencies

```bash
npm install
```

### D. Start MongoDB (Terminal 1)

**Option 1 - Local MongoDB:**

```bash
mongod
```

**Option 2 - MongoDB Atlas (Cloud):**
Update `.env` with:

```
MONGO_URI=mongodb+srv://username:password@cluster.mongodb.net/todo-app
```

### E. Start Backend Server (Terminal 2)

```bash
npm start
```

✅ You should see:

```
MongoDB Connected
Server running on port 6002
```

---

## ⚙️ **STEP 2: FRONTEND SETUP**

### A. Navigate to Frontend (Terminal 3)

```bash
cd /Users/prakash/fullstack-todo-app/frontend
```

### B. Install Dependencies

```bash
npm install
```

### C. Start React Dev Server

```bash
npm start
```

✅ Browser opens automatically to `http://localhost:3000` or `http://localhost:4002`

---

## 🎮 **HOW TO USE THE APP**

### 1. **First Time Setup**

1. Go to `http://localhost:3000`
2. Click "Create Account" / "Register"
3. Enter email and password
4. Click "Sign Up"
5. Login with your credentials

### 2. **Add Your First Task**

1. Click **"+ Add Task"** button (top right)
2. Fill in:
   - **Title** (required): "Buy groceries"
   - **Description** (optional): "Milk, eggs, bread"
   - **Priority**: High, Medium, or Low
   - **Category**: Work, Personal, Shopping, Health
   - **Project** (optional): Select a project
   - **Due Date**: Pick a date
   - **Tags**: "shopping, urgent"
3. Click **"Create"**

### 3. **Navigate Views**

In the **Sidebar**, click:

- **📬 Inbox** - All pending tasks
- **📅 Today** - Tasks due today
- **🗓️ Upcoming** - Future tasks
- **✅ Completed** - Done tasks
- **MY PROJECTS** - Custom projects

### 4. **Search & Filter**

1. Type in **search bar** to find tasks
2. Click **"⚙️ Filters"** to expand advanced filters
3. Filter by:
   - **Priority**: High, Medium, Low
   - **Category**: Work, Personal, Shopping, Health
   - **Sort By**: Due Date, Priority, Newest, Oldest

### 5. **Manage Tasks**

- ☑️ **Complete** - Click checkbox
- ✏️ **Edit** - Click "Edit" button
- 🗑️ **Delete** - Click "Delete" button
- 🌙 / ☀️ **Dark Mode** - Toggle in top right

### 6. **Create Projects**

1. In left sidebar, find **"MY PROJECTS"**
2. Click **"+"** to add new project
3. Enter project name
4. Click **"Create"**
5. Assign tasks to projects from task modal

---

## 🔧 **BACKEND API ENDPOINTS**

### **Authentication**

- `POST /api/auth/register` - Create account
- `POST /api/auth/login` - Login user
- Header: `Authorization: Bearer <token>`

### **Todos**

- `GET /api/todos` - Get all user's todos
- `POST /api/todos` - Create new todo
- `PUT /api/todos/:id` - Update todo
- `DELETE /api/todos/:id` - Delete todo

### **Projects**

- `GET /api/projects` - Get all projects
- `POST /api/projects` - Create project
- `PUT /api/projects/:id` - Update project
- `DELETE /api/projects/:id` - Delete project

---

## 🎨 **FEATURES BREAKDOWN**

### ✨ **Dark Mode**

- Click 🌙/☀️ button in top right
- Saves preference to localStorage
- Works on all pages and components
- Automatic system theme detection possible

### 🔍 **Advanced Search**

- Real-time search as you type
- Search by task title
- Search box clears filters for fresh search

### 📊 **Smart Filtering**

- Filter by Priority: High/Medium/Low
- Filter by Category: Work/Personal/Shopping/Health/General
- Combine multiple filters
- Sort by: Due Date, Priority, Newest, Oldest

### 🎯 **Views**

- **Inbox**: All incomplete tasks
- **Today**: Tasks due today
- **Upcoming**: Tasks for future dates
- **Completed**: Finished tasks
- **By Project**: Tasks in each project

### 🏷️ **Task Properties**

- **Title** - Task name (required)
- **Description** - Additional details
- **Priority** - High (🔴), Medium (🟡), Low (🟢)
- **Category** - Organization
- **Project** - Group-related tasks
- **Due Date** - Deadline with smart formatting
- **Tags** - Multiple labels

---

## 🔐 **AUTHENTICATION FLOW**

1. **Register**
   - User enters email & password
   - Backend hashes password with bcrypt
   - JWT token created
   - Token stored in localStorage

2. **Login**
   - User credentials validated
   - JWT token generated
   - Sent to frontend and stored
   - Axios interceptor adds token to all requests

3. **Protected Routes**
   - Check for token in localStorage
   - If missing, redirect to login
   - If present, allow access

---

## 🐛 **TROUBLESHOOTING**

### **MongoDB Not Connecting**

```bash
# Check if MongoDB is running
mongod

# If using Atlas, verify connection string in .env
# Format: mongodb+srv://username:password@cluster.mongodb.net/db-name
```

### **Port Already in Use**

```bash
# Backend on port 6002
# Change in backend/server.js or .env PORT

# Frontend on port 3000/4002
# Create .env.local in frontend:
REACT_APP_FRONTEND_PORT=3001
```

### **CORS Error**

```
❌ Access to XMLHttpRequest blocked by CORS
```

- Backend has CORS enabled
- Check both servers are running
- Verify correct API URL in axiosConfig

### **Token Expired/Invalid**

- Clear localStorage: Press F12 → Application → LocalStorage → Clear
- Logout and login again

### **Dark Mode Not Working**

- Hard refresh: Ctrl+Shift+R (Windows) or Cmd+Shift+R (Mac)
- Check browser console for errors

### **Tasks Not Loading**

- Check browser console for errors
- Verify backend is running on port 6002
- Check MongoDB connection in backend logs

---

## 🚀 **PRODUCTION DEPLOYMENT**

### **Build Frontend**

```bash
cd frontend
npm run build
```

Creates optimized build in `frontend/build/`

### **Environment Variables for Production**

```env
# backend/.env.production
MONGO_URI=<production-mongodb-uri>
JWT_SECRET=<generate-strong-secret>
PORT=5000
NODE_ENV=production
```

### **Deploy Options**

- **Backend**: Heroku, Railway, Render
- **Frontend**: Vercel, Netlify, GitHub Pages
- **Database**: MongoDB Atlas

---

## 📦 **KEY TECHNOLOGIES USED**

**Backend:**

- Node.js v16+
- Express.js
- MongoDB + Mongoose
- JWT for authentication
- bcryptjs for password hashing
- cors for cross-origin requests

**Frontend:**

- React 19
- TypeScript
- Tailwind CSS
- Axios (API client)
- React Router v7
- React Toastify (notifications)
- date-fns (date formatting)
- Framer Motion (animations)

---

## ✅ **QUICK CHECKLIST**

- [ ] MongoDB running or connected to Atlas
- [ ] Backend .env file created
- [ ] Backend `npm install` completed
- [ ] Backend running on port 6002
- [ ] Frontend `npm install` completed
- [ ] Frontend running on port 3000
- [ ] Can register and login
- [ ] Can create a task
- [ ] Can complete/delete tasks
- [ ] Dark mode toggle works
- [ ] Search/filter works
- [ ] Projects can be created

---

## 🎓 **ADVANCED FEATURES TO ADD**

Want to explore further?

✨ **Drag and Drop** - Install `@hello-pangea/dnd`
✨ **Recurring Tasks** - Add frequency field
✨ **Task Reminders** - Push notifications
✨ **Team Collaboration** - Share projects
✨ **File Attachments** - Cloudinary integration
✨ **Comments** - Task discussion thread
✨ **Analytics** - Productivity dashboard
✨ **Mobile App** - React Native
✨ **Email Sync** - Email to task conversion
✨ **Voice Commands** - Speech recognition

---

## 📞 **NEED HELP?**

Check logs:

```bash
# Backend logs (check TERMINAL 2)
# Shows: MongoDB Connected, Server running, API requests

# Frontend logs (check BROWSER CONSOLE)
# F12 → Console tab for errors

# Check network requests
# F12 → Network tab → See API calls to backend
```

---

## 🎉 **YOU'RE ALL SET!**

Your advanced Todo app is now fully functional and ready to use!

**Happy Tasking! 📝✨**

---

_Last Updated: March 25, 2026_
