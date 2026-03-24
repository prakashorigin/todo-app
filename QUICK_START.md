# ⚡ QUICK START GUIDE - 5 MINUTES TO RUNNING APP

## **Step 1: Create .env File** (2 minutes)

Create `backend/.env`:

```env
MONGO_URI=mongodb://localhost:27017/todo-app
JWT_SECRET=your_super_secret_jwt_key_change_in_production
PORT=6002
NODE_ENV=development
```

---

## **Step 2: Start MongoDB** (1 minute)

**Open Terminal 1 and run:**

```bash
mongod
```

Wait until you see: `Waiting for connections on port 27017`

---

## **Step 3: Start Backend** (1 minute)

**Open Terminal 2 and run:**

```bash
cd backend
npm install  # Only first time
npm start
```

Wait until you see: `✓ Server running on port 6002`

---

## **Step 4: Start Frontend** (1 minute)

**Open Terminal 3 and run:**

```bash
cd frontend
npm install  # Only first time
npm start
```

Browser will automatically open to http://localhost:3000

---

## **Step 5: Test the App!** ✨

1. **Register** - Create new account
2. **Login** - Sign in
3. **Add Todo** - Click "Add Task" button
4. **Try Features:**
   - Toggle dark mode (moon/sun icon)
   - Filter by priority
   - Search by title
   - Try different views (Inbox, Today, Upcoming)

---

## **🆘 If Something Goes Wrong**

### Backend won't start

```bash
# Check if port 6002 is in use
lsof -i :6002
# Kill it if needed: kill -9 <PID>

# Check MongoDB is running
ps aux | grep mongod

# Check .env file exists
cat backend/.env
```

### Frontend won't start

```bash
# Clear cache
cd frontend
rm -rf node_modules
npm install
npm start
```

### 401 Errors

- Make sure you're logged in
- Check token in localStorage: `localStorage.getItem('token')`
- Try logging out and in again

### MongoDB connection error

```bash
# Make sure MongoDB is running
mongod

# Or connect to cloud MongoDB
# Update MONGO_URI in .env to your connection string
MONGO_URI=mongodb+srv://user:password@cluster.mongodb.net/todo-app
```

---

## **📞 Terminal Cheat Sheet**

| Task               | Command                    |
| ------------------ | -------------------------- |
| Start MongoDB      | `mongod`                   |
| Start Backend      | `cd backend && npm start`  |
| Start Frontend     | `cd frontend && npm start` |
| Stop all           | `Ctrl+C` in each terminal  |
| Check port 6002    | `lsof -i :6002`            |
| Check port 3000    | `lsof -i :3000`            |
| View MongoDB logs  | Check Terminal 1           |
| View Backend logs  | Check Terminal 2           |
| View Frontend logs | Check Terminal 3           |

---

## **🎯 You're All Set!**

Your advanced todo app is now running with:

- ✅ User authentication (register/login)
- ✅ Create/Edit/Delete tasks
- ✅ Dark mode with persistence
- ✅ Advanced filtering and sorting
- ✅ Project organization
- ✅ Priority and categories
- ✅ Tags support

**Enjoy!** 🎉
