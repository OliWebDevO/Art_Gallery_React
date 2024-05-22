import './app.scss'
import React from 'react';
import { Navigate } from "react-router-dom";
import Login from './pages/login/Login'
import Register from './pages/register/Register'
import RightBar from './components/rightBar/RightBar';
import LeftBar from './components/leftBar/LeftBar';
import NavBar from './components/navbar/NavBar';
import Home from './pages/home/Home';
import Profile from './pages/profile/Profile';
// React Router DOM functions
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Outlet,
} from "react-router-dom";

// THE APP
function App() {

// For design part, user cant be set to false
const currentUser = true;

// Layout of components
const Layout = () => {
  
  return (
    <div>
      <NavBar/>
      <div className='app' style={{display: "flex"}}>
        <LeftBar/>
        <Outlet/>
        <RightBar/>
      </div>
    </div>
  )
}

// If the user is not loggedin, send to login page, otherwise load the children
const ProtectedRoute = ({children}) => {
  if (!currentUser){
    return <Navigate to ="/login"/>
  }
  return children
}

// React Router DOM paths
  const router = createBrowserRouter([
    {
      path:"/",
      element: (
      <ProtectedRoute>
        <Layout/>
      </ProtectedRoute>
      ),
      children: [
        {
          path:"/",
          element:<Home/>
        },
        {
          path:"/profile/:id",
          element:<Profile/>
        }
      ]
    },
    {
      path: "/login",
      element: <Login/>
    },
    {
      path: "/register",
      element: <Register/>
    },
  ]);

  // The App launch
  return (
  <div className='app'>
      <RouterProvider router={router} />
  </div>
  );
}

export default App;
