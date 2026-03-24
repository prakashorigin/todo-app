# 🔧 TROUBLESHOOTING GUIDE

## **BACKEND ISSUES**

### ❌ Error: "Cannot find module 'mongoose'"

**Solution:**

```bash
cd backend
npm install
```

### ❌ Error: "connect ECONNREFUSED 127.0.0.1:27017"

**Problem:** MongoDB not running

**Solution:**

1. Start MongoDB:

```bash
mongod
```

2. Wait for: `Waiting for connections on port 27017`
3. Keep it running in separate terminal

**OR connect to MongoDB Atlas (Cloud):**

1. Go to https://www.mongodb.com/cloud/atlas
2. Create free account
3. Create cluster
4. Get connection string
5. Update `.env`:

```env
MONGO_URI=mongodb+srv://username:password@cluster.mongodb.net/todo-app
```

### ❌ Error: "listen EADDRINUSE :::6002"

**Problem:** Port 6002 already in use

**Solution:**

```bash
# Find what's using port 6002
lsof -i :6002

# Kill the process
kill -9 <PID>

# Then start backend again
npm start
```

### ❌ Error: "Cannot read property 'email' of undefined"

**Problem:** User not authenticated

**Solution:**

1. Check request has Bearer token in header
2. Verify token is valid:

```javascript
// In browser console
localStorage.getItem("token");
```

3. If empty, user not logged in
4. Login again with valid credentials

### ❌ Error: "ValidationError: email: Path `email` is required"

**Problem:** Missing required field in request

**Solution:**

- Ensure request body includes all required fields:

```json
{
  "email": "user@example.com",
  "password": "password123"
}
```

### ❌ Backend starts but crashes after few seconds

**Problem:** Missing .env variables

**Solution:**

```bash
# Create backend/.env
MONGO_URI=mongodb://localhost:27017/todo-app
JWT_SECRET=your_secret_key_here
PORT=6002
NODE_ENV=development
```

### ❌ "SyntaxError" in server.js

**Problem:** JavaScript syntax error

**Solution:**

```bash
# Check syntax
node -c backend/server.js

# View error details
npm start
# Look at line numbers in error
```

---

## **FRONTEND ISSUES**

### ❌ Error: "Cannot get /home"

**Problem:** Frontend not connected to backend

**Solution:**

1. Ensure backend is running on port 6002
2. Check axiosConfig.ts has correct baseURL:

```typescript
baseURL: "http://localhost:6002/api";
```

3. Check .env if you created one:

```env
REACT_APP_API_URL=http://localhost:6002/api
```

### ❌ "TypeScript error - Property 'X' does not exist"

**Problem:** TypeScript type mismatch

**Solution:**

1. Check if you're using correct type
2. In VS Code, hover over red squiggly line for fix suggestion
3. Click "Quick Fix" (Cmd+.)
4. Accept suggested fix

### ❌ "Module not found: Can't resolve 'date-fns'"

**Problem:** Missing dependency

**Solution:**

```bash
cd frontend
npm install date-fns
```

### ❌ "Compiled with problems"

**Problem:** TypeScript/ESLint errors

**Solution:**

1. Check browser console (F12 → Console tab)
2. Look for red error messages
3. Go to file mentioned in error
4. Fix syntax or missing types
5. Save file (auto-refresh)

### ❌ White screen after login

**Problem:** HomePage component error

**Solution:**

1. Open DevTools (F12)
2. Check Console tab for red error
3. Common issues:
   - API endpoint wrong
   - Todos response not array
   - Missing map/filter

**Fix:**

```typescript
// In HomePage.tsx
console.log("Todos:", todos); // Check data structure
console.log("Error:", error); // Check API error
```

### ❌ Dark mode not working

**Problem:** Context not provided

**Solution:**

1. Check App.tsx has DarkModeProvider:

```typescript
<DarkModeProvider>
  <BrowserRouter>
    {/* routes */}
  </BrowserRouter>
</DarkModeProvider>
```

2. Check DarkModeToggle component:

```typescript
const { isDark, toggleDarkMode } = useDarkMode();
```

3. Check HTML element has "dark" class:

```javascript
// In browser console
document.documentElement.classList;
```

### ❌ "Cannot find ProtectedRoute"

**Problem:** ProtectedRoute not exported

**Solution:**

1. Check App.tsx exports ProtectedRoute
2. Import correctly:

```typescript
import { ProtectedRoute } from "./App";
```

### ❌ 401 error after login

**Problem:** Token not being sent

**Solution:**

1. Check axios interceptor in axiosConfig.ts:

```typescript
instance.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});
```

2. Check token exists:

```javascript
// Browser console
localStorage.getItem("token");
```

3. If empty, login again
4. Check backend has `protect` middleware:

```javascript
router.get("/", protect, async (req, res) => {
  // ...
});
```

### ❌ Tasks not loading / blank page

**Problem:** API request failing silently

**Solution:**

1. Add error handling:

```typescript
useEffect(() => {
  const fetchTodos = async () => {
    try {
      const res = await axios.get("/todos");
      setTodos(res.data);
    } catch (err) {
      console.error("Fetch error:", err);
      toast.error("Failed to load todos");
    }
  };
  fetchTodos();
}, []);
```

2. Check Network tab (F12 → Network)
3. Look for failed requests (red)
4. Click request, view Response tab
5. Check error message from backend

### ❌ "Port 3000 already in use"

**Solution:**

```bash
# Find what's using port 3000
lsof -i :3000

# Kill process
kill -9 <PID>

# Start frontend again
npm start
```

### ❌ Localhost not accessible

**Problem:** Firewall or ports blocked

**Solution:**

1. Check ports are listening:

```bash
# Terminal 1
lsof -i :27017  # MongoDB
lsof -i :6002   # Backend
lsof -i :3000   # Frontend
```

2. Try localhost vs 127.0.0.1:

```
http://127.0.0.1:3000
http://localhost:3000
```

3. Check firewall isn't blocking ports

---

## **DATABASE ISSUES**

### ❌ "MongoServerError: E11000 duplicate key error"

**Problem:** Email already exists

**Solution:**

- Use different email for registration
- OR delete user from MongoDB:

```javascript
db.users.deleteOne({ email: "test@example.com" });
```

### ❌ "Cannot connect to MongoDB Atlas"

**Problem:** Connection string wrong or IP not whitelisted

**Solution:**

1. Get connection string from Atlas:
   - Go to Database → Connect
   - Copy connection string
   - Replace `<password>` with your password
   - Replace `<dbname>` with `todo-app`

2. Add IP to whitelist:
   - Atlas Dashboard → Network Access
   - Add Current IP Address
   - Or allow access from anywhere (0.0.0.0/0)

3. Update `.env`:

```env
MONGO_URI=mongodb+srv://username:password@cluster.mongodb.net/todo-app
```

### ❌ Data persisting but not showing

**Problem:** Query filter wrong

**Solution:**

```javascript
// Check all data exists
db.todos.find();

// Count todos for user
db.todos.countDocuments({ user: ObjectId("user_id") });

// Check user ID matches
// In browser console
localStorage.getItem("token");
// Decode JWT to see user ID
```

---

## **AUTHENTICATION ISSUES**

### ❌ "Invalid token" error

**Problem:** Token expired or corrupted

**Solution:**

1. Clear localStorage:

```javascript
localStorage.clear();
```

2. Logout and login again
3. Check JWT_SECRET matches:
   - `backend/.env` - JWT_SECRET value
   - `backend/server.js` - Used to sign token
   - Must be exactly same

### ❌ "Unauthorized" on all requests

**Problem:** Token not in header

**Solution:**

1. Check axiosConfig.ts interceptor running:

```typescript
// Add console.log to verify
instance.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  console.log("Token being sent:", token); // Debug
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});
```

2. Remove line if token is null
3. After login, check localStorage:

```javascript
localStorage.getItem("token"); // Should not be null
```

### ❌ Can't logout

**Solution:**

1. Add logout function:

```typescript
const handleLogout = () => {
  localStorage.removeItem("token");
  localStorage.removeItem("user");
  navigate("/login");
};
```

2. Clear all localStorage:

```javascript
localStorage.clear();
```

---

## **PERFORMANCE ISSUES**

### 🐢 App is slow

**Problem:** Too many API calls or large dataset

**Solution:**

1. Implement pagination:

```typescript
const [page, setPage] = useState(1);
const res = await axios.get(`/todos?page=${page}&limit=20`);
```

2. Debounce search:

```typescript
import { debounce } from "lodash";
const debouncedSearch = debounce((query) => {
  handleSearch(query);
}, 300);
```

3. Memoize components:

```typescript
export default memo(TodoItem);
```

### 🐢 Dark mode toggle slow

**Problem:** Re-rendering entire app

**Solution:**

1. Use useCallback:

```typescript
const toggleDarkMode = useCallback(() => {
  setIsDark(!isDark);
}, [isDark]);
```

2. Split context:

```typescript
// Separate state and dispatch contexts
const [state, dispatch] = useReducer(darkModeReducer, initial);
```

---

## **DEPLOYMENT ISSUES**

### ❌ Frontend build fails

**Solution:**

```bash
cd frontend
npm run build

# Check for TypeScript errors
# Fix issues
# Try again
```

### ❌ "process is not defined" in production

**Problem:** Using Node.js variables in browser

**Solution:**

- Use REACT*APP* prefix for env vars:

```env
REACT_APP_API_URL=your_backend_url
```

- Access via:

```typescript
process.env.REACT_APP_API_URL;
```

### ❌ CORS error in production

**Solution:**

1. Update backend CORS:

```javascript
const cors = require("cors");
app.use(
  cors({
    origin: process.env.FRONTEND_URL || "http://localhost:3000",
    credentials: true,
  }),
);
```

2. Add to `.env`:

```env
FRONTEND_URL=https://yourdomain.com
```

---

## **📞 GETTING HELP**

**Check these first:**

1. ✅ MongoDB running? (`mongod` visible)
2. ✅ .env file exists? (`backend/.env`)
3. ✅ npm install done? (`node_modules` folders exist)
4. ✅ Backend running? (Terminal shows port 6002)
5. ✅ Frontend running? (Browser opened to localhost:3000)

**If still stuck:**

1. Check error message carefully
2. Search GitHub issues for similar error
3. Check logs in all 3 terminals
4. Try restarting all services
5. Clear cache: `npm cache clean --force`
6. Delete node_modules and reinstall

**Common fixes:**

```bash
# Nuclear option - full restart
mongod &
cd backend && npm install && npm start &
cd frontend && npm install && npm start
```

---

**Still stuck? Check SETUP_AND_RUN_GUIDE.md for detailed walkthrough!** 📖
