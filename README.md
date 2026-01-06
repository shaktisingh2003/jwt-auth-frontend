# JWT Authentication Frontend

A modern, responsive React application for user authentication with JWT tokens, featuring role-based access control and a beautiful UI.

## 🚀 Live Demo

**Live Application:** https://jwt-auth-frontend-sigma.vercel.app

## 📋 Features

- ✅ User Registration with role selection
- ✅ User Login with credential validation
- ✅ JWT token-based authentication
- ✅ Automatic token attachment via Axios interceptors
- ✅ Protected routes with route guards
- ✅ Role-based access control (User & Admin)
- ✅ Admin dashboard with user management
- ✅ Responsive and modern UI design
- ✅ Context API for global state management
- ✅ Token persistence with localStorage
- ✅ Automatic logout on token expiration

## 🛠️ Tech Stack

- **Framework:** React 18
- **Routing:** React Router DOM v6
- **HTTP Client:** Axios
- **State Management:** Context API
- **Styling:** Custom CSS with gradients and animations
- **Deployment:** Vercel

## 📦 Installation

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn
- Backend API running (see [backend repository](https://github.com/shaktisingh2003/jwt-auth-backend))

### Steps

1. Clone the repository:
```bash
git clone https://github.com/shaktisingh2003/jwt-auth-frontend.git
cd jwt-auth-frontend
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env` file in the root directory:
```env
REACT_APP_API_URL=http://localhost:5000/api
```

For production, use your deployed backend URL:
```env
REACT_APP_API_URL=https://your-backend-url.onrender.com/api
```

4. Start the development server:
```bash
npm start
```

The application will open at `http://localhost:3000`

5. Build for production:
```bash
npm run build
```

## 🔑 Environment Variables

| Variable | Description | Example |
|----------|-------------|---------|
| `REACT_APP_API_URL` | Backend API base URL | `http://localhost:5000/api` |

## 📱 Application Features

### 1. **Home Page**
- Landing page with feature highlights
- Links to Login and Register pages
- Modern gradient design

### 2. **Registration**
- User registration form with validation
- Role selection (User or Admin)
- Password strength requirement (min 6 characters)
- Error handling with user-friendly messages
- Automatic redirect to dashboard on success

### 3. **Login**
- Email and password authentication
- Remember user with token persistence
- Error handling for invalid credentials
- Automatic redirect to dashboard on success

### 4. **Dashboard (Protected)**
- Welcome message with user information
- Display user role with badge
- Feature cards for quick access
- Admin panel button (admin only)
- Logout functionality

### 5. **Admin Dashboard (Admin Only)**
- View all registered users
- User information table with:
  - Name
  - Email
  - Role
  - Registration date
- User count statistics
- Protected route with role verification

## 🏗️ Project Structure

```
frontend/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   └── ProtectedRoute.js      # Route guard component
│   ├── context/
│   │   └── AuthContext.js         # Authentication state management
│   ├── pages/
│   │   ├── Home.js                # Landing page
│   │   ├── Login.js               # Login page
│   │   ├── Register.js            # Registration page
│   │   ├── Dashboard.js           # User dashboard
│   │   └── AdminDashboard.js      # Admin panel
│   ├── styles/
│   │   ├── Auth.css               # Login/Register styles
│   │   ├── Dashboard.css          # Dashboard styles
│   │   └── Home.css               # Home page styles
│   ├── utils/
│   │   └── axios.js               # Axios instance with interceptors
│   ├── App.js                     # Main app component
│   ├── App.css                    # Global styles
│   └── index.js                   # Entry point
├── .env.example                   # Environment variables template
├── .gitignore                     # Git ignore file
├── package.json                   # Dependencies
└── README.md                      # Documentation
```

## 🔒 Security Features

- **JWT Token Storage:** Secure token storage in localStorage
- **Automatic Token Injection:** Axios interceptors add Bearer token to all requests
- **Protected Routes:** Route guards prevent unauthorized access
- **Role-Based Access:** Admin routes restricted to admin users only
- **Token Expiration Handling:** Automatic redirect to login on token expiration
- **Password Validation:** Minimum length requirements
- **XSS Protection:** React's built-in XSS protection

## 🎨 UI/UX Features

- **Responsive Design:** Works on desktop, tablet, and mobile
- **Modern Gradient UI:** Beautiful purple gradient theme
- **Loading States:** Loading indicators during API calls
- **Error Handling:** User-friendly error messages
- **Form Validation:** Client-side validation for all forms
- **Smooth Transitions:** CSS animations and transitions
- **Role Badges:** Visual indicators for user roles
- **Hover Effects:** Interactive button and card effects

## 🛣️ Routes

| Route | Access | Description |
|-------|--------|-------------|
| `/` | Public | Home/Landing page |
| `/login` | Public | Login page |
| `/register` | Public | Registration page |
| `/dashboard` | Protected | User dashboard |
| `/admin` | Protected (Admin) | Admin dashboard |

## 🧪 Testing the Application

### Local Testing

1. Ensure backend is running
2. Start the frontend: `npm start`
3. Navigate to `http://localhost:3000`

### Test Accounts

You can create test accounts or use these demo credentials:

**Admin Account:**
- Email: `prodadmin@example.com`
- Password: `admin123456`

**User Account:**
- Email: `prodtest@example.com`
- Password: `test123456`

### Testing Flow

1. **Register:** Create a new account (select admin role to access admin panel)
2. **Login:** Login with your credentials
3. **Dashboard:** View your user information
4. **Admin Panel:** (If admin) Click "Admin Panel" to view all users
5. **Logout:** Click logout to clear session

## 🚀 Deployment

### Deploy to Vercel

1. Push code to GitHub
2. Go to [Vercel Dashboard](https://vercel.com)
3. Click "New Project"
4. Import your GitHub repository
5. Configure:
   - **Framework Preset:** Create React App
   - **Build Command:** `npm run build`
   - **Output Directory:** `build`
   - **Environment Variable:**
     - Key: `REACT_APP_API_URL`
     - Value: `https://your-backend-url.onrender.com/api`
6. Click "Deploy"

### Deploy to Netlify

1. Build the project: `npm run build`
2. Drag and drop the `build` folder to Netlify
3. Set environment variables in Netlify dashboard

## 📝 Scripts

```json
{
  "start": "react-scripts start",
  "build": "react-scripts build",
  "test": "react-scripts test",
  "eject": "react-scripts eject"
}
```

## 🔧 Configuration

### API Configuration

The application uses environment variables for API configuration. Update `.env` file:

```env
# Development
REACT_APP_API_URL=http://localhost:5000/api

# Production
REACT_APP_API_URL=https://jwt-auth-backend-1-51dh.onrender.com/api
```

### Axios Interceptors

Automatic token injection is configured in `src/context/AuthContext.js`:

```javascript
axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
```

## 🎯 Key Components

### AuthContext

Manages global authentication state:
- User information
- JWT token
- Loading state
- Login/Register/Logout functions
- Authentication status

### ProtectedRoute

Route guard component that:
- Checks authentication status
- Verifies user roles
- Redirects unauthorized users
- Shows loading state

## 🐛 Troubleshooting

### CORS Errors
- Ensure backend CORS is configured correctly
- Check if API URL is correct in `.env`

### Token Expiration
- Tokens expire after 30 days by default
- Logout and login again to refresh

### Build Issues
- Clear `node_modules` and reinstall: `rm -rf node_modules && npm install`
- Clear build cache: `rm -rf build`

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License.

## 👨‍💻 Author

**Shakti Singh**
- GitHub: [@shaktisingh2003](https://github.com/shaktisingh2003)

## 🔗 Related

- **Backend Repository:** [jwt-auth-backend](https://github.com/shaktisingh2003/jwt-auth-backend)
- **Live Backend API:** https://jwt-auth-backend-1-51dh.onrender.com

## 🙏 Acknowledgments

- React team for the amazing framework
- Vercel for free hosting
- MongoDB Atlas for database hosting

## 📞 Support

For issues or questions, please open an issue on GitHub.

---

Made with ❤️ by Shakti Singh
