# ⚡ QUICK REFERENCE CHEAT SHEET

## 🚀 START APP IN 30 SECONDS

```bash
# Terminal 1
mongod

# Terminal 2
cd backend && npm start

# Terminal 3
cd frontend && npm start
```

✅ Open: http://localhost:3000

---

## 🔧 Before First Run

```bash
# Create backend/.env
echo "MONGO_URI=mongodb://localhost:27017/todo-app
JWT_SECRET=your_secret_key
PORT=6002
NODE_ENV=development" > backend/.env
```

---

## 📝 First Time Setup

| Step | Command                      | Purpose                    |
| ---- | ---------------------------- | -------------------------- |
| 1    | `mongod`                     | Start database             |
| 2    | `cd backend && npm install`  | Install backend            |
| 3    | `npm start`                  | Start backend (port 6002)  |
| 4    | `cd frontend && npm install` | Install frontend           |
| 5    | `npm start`                  | Start frontend (port 3000) |

---

## 🎯 URLs

| Service  | URL                       | Purpose    |
| -------- | ------------------------- | ---------- |
| Frontend | http://localhost:3000     | React app  |
| Backend  | http://localhost:6002     | API server |
| MongoDB  | mongodb://localhost:27017 | Database   |

---

## 🔐 First Task

1. **Register**: Click "Register" → Fill form → Submit
2. **Login**: Use email/password → Click "Login"
3. **Create Task**: Click "+ Add Task" → Fill → "Create"
4. **Complete**: Click checkbox
5. **Edit**: Click "Edit" → Modify → "Update"
6. **Delete**: Click "Delete"

---

## 🎨 Features at a Glance

| Feature             | How To                                  |
| ------------------- | --------------------------------------- |
| **Search**          | Type in search box                      |
| **Filter Priority** | Use dropdown (High/Medium/Low)          |
| **Filter Category** | Use dropdown (Work/Personal/etc)        |
| **Sort Tasks**      | Use Sort dropdown                       |
| **Change View**     | Click in sidebar (Inbox/Today/Upcoming) |
| **Dark Mode**       | Click ☀️/🌙 button                      |
| **Create Project**  | Click + in "MY PROJECTS"                |
| **Logout**          | Click profile → "Logout"                |

---

## 🐛 Quick Fixes

| Problem             | Fix           | Command                              |
| ------------------- | ------------- | ------------------------------------ |
| MongoDB not running | Start MongoDB | `mongod`                             |
| Port in use         | Kill process  | `lsof -i :6002` then `kill -9 <PID>` |
| Blank screen        | Check token   | `localStorage.getItem('token')`      |
| Module error        | Reinstall     | `npm install`                        |
| Cache issue         | Clear cache   | `npm cache clean --force`            |

---

## 📊 API Quick Ref

### All Endpoints Need Token:

```
Authorization: Bearer <token_from_login>
```

### Login Response:

```json
{
  "token": "eyJhbGciOi...",
  "user": { "id": "...", "email": "..." }
}
```

### Create Todo:

```json
POST /api/todos
{
  "title": "Buy milk",
  "priority": "high",
  "category": "shopping",
  "dueDate": "2024-03-26"
}
```

### Response:

```json
{
  "_id": "...",
  "user": "...",
  "title": "Buy milk",
  "completed": false,
  "createdAt": "..."
}
```

---

## 🗂️ Project Layout

```
fullstack-todo-app/
├── backend/                 # Node + Express
│   ├── server.js           # Main file
│   ├── models/             # Schemas
│   ├── routes/             # Endpoints
│   ├── .env                # Secrets
│   └── package.json
├── frontend/               # React
│   ├── src/
│   │   ├── App.tsx         # Routes
│   │   ├── Pages/          # Screens
│   │   ├── components/     # UI parts
│   │   └── context/        # State
│   └── package.json
└── docs/                   # This folder
```

---

## 🎮 Keyboard Shortcuts

| Key               | Action         |
| ----------------- | -------------- |
| Ctrl+C            | Stop server    |
| Cmd+K (Mac)       | Clear terminal |
| Cmd+Shift+C (Mac) | Copy full line |
| F12               | Open DevTools  |
| Cmd+Shift+I (Mac) | Open DevTools  |

---

## 💾 Important Files

| File                          | Purpose     | Edit?  |
| ----------------------------- | ----------- | ------ |
| `backend/.env`                | Secrets     | ✅ YES |
| `backend/server.js`           | Start point | ❌ NO  |
| `frontend/src/App.tsx`        | Routes      | ❌ NO  |
| `frontend/src/axiosConfig.ts` | API setup   | ❌ NO  |

---

## 📱 Responsive Design

| Device  | Size         |
| ------- | ------------ |
| Mobile  | <768px       |
| Tablet  | 768px-1024px |
| Desktop | >1024px      |

---

## 🔄 Common Tasks

### Add New Feature

1. Create component in `frontend/src/components/`
2. Import in Page/Component
3. Add to JSX

### Add API Endpoint

1. Create route in `backend/routes/`
2. Call with axios in frontend
3. Handle response

### Debug

1. Open DevTools (F12)
2. Check Network tab for API calls
3. Check Console for JS errors

---

## 🆘 Emergency Commands

```bash
# Force restart everything
killall node mongod
sleep 2
mongod &
cd backend && npm start &
cd frontend && npm start &

# Full reset (WARNING: deletes data)
rm -rf backend/node_modules frontend/node_modules
npm cache clean --force
npm install  # in both dirs

# Check what's running
ps aux | grep node
ps aux | grep mongod
```

---

## 🔍 Debug Tips

### Browser Console:

```javascript
// Check token
localStorage.getItem("token");

// Check all localStorage
localStorage;

// Clear all
localStorage.clear();
```

### Check API Response:

1. Open DevTools (F12)
2. Go to Network tab
3. Make request (create task)
4. Click request
5. See Response tab

### MongoDB Check:

```javascript
// In MongoDB shell
use todo-app
db.todos.count()
db.users.find()
```

---

## 📚 Doc Quick Links

| Doc                        | When             | Size     |
| -------------------------- | ---------------- | -------- |
| QUICK_START.md             | First time       | 2 pages  |
| SETUP_AND_RUN_GUIDE.md     | Detailed help    | 5 pages  |
| COMPLETE_CODE_REFERENCE.md | Code details     | 10 pages |
| TROUBLESHOOTING.md         | Something broken | 8 pages  |
| README.md                  | Overview         | 6 pages  |

---

## ✅ Pre-Launch Checklist

- [ ] Created `.env` file
- [ ] Started MongoDB (`mongod` visible)
- [ ] Started backend (port 6002)
- [ ] Started frontend (port 3000)
- [ ] Browser opened to localhost:3000
- [ ] Can register new account
- [ ] Can login
- [ ] Can create task
- [ ] Can toggle dark mode

---

## 💡 Pro Tips

**Use VS Code Terminal:**

- Open multiple terminals
- Run all 3 services in one window
- Easy to see logs

**Use MongoDB Compass:**

- Visual database manager
- See data in real-time
- Run queries easily

**Use Postman:**

- Test API endpoints
- Send custom requests
- Check responses

**DevTools Network Tab:**

- See all API calls
- Check request/response
- Debug CORS issues

---

## 🎯 Success Criteria

- ✅ Can register account
- ✅ Can login
- ✅ Can create task
- ✅ Can edit task
- ✅ Can delete task
- ✅ Can search
- ✅ Can filter
- ✅ Can toggle dark mode
- ✅ Dark mode persists
- ✅ Can create project

**If all checked → App works perfectly!** 🎉

---

## 🚀 Deploy Checklist (Later)

- [ ] Update JWT_SECRET to secure value
- [ ] Update MongoDB to Atlas (production)
- [ ] Set NODE_ENV=production in .env
- [ ] Build frontend: `npm run build`
- [ ] Test build locally
- [ ] Deploy backend to hosting
- [ ] Deploy frontend to CDN
- [ ] Update API_URL in frontend

---

**Bookmark this for quick reference!** ⭐
