import HomePage from "./pages/Home/";
import CategoriesPage from "./pages/Categories/";
import BlogsPage from "./pages/Blogs/";
import AboutPage from "./pages/About/";
import BlogPage from "./pages/Blog/";
import ProfilePage from "./pages/Profile";
import LoginPage from "./pages/Login";
import RegisterPage from "./pages/Register";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/home",
    element: <HomePage />,
  },
  {
    path: "/categories",
    element: <CategoriesPage />,
  },
  {
    path: "/blogs",
    element: <BlogsPage />,
  },
  {
    path: "/about",
    element: <AboutPage />,
  },
  {
    path: "/blog/:blogId?",
    element: <BlogPage />,
  },
  {
    path: "/cateory/:Id?",
    element: <BlogsPage />,
  },
  {
    path: "/profile",
    element: <ProfilePage />,
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/register",
    element: <RegisterPage />,
  },
  {
    path: "/author/:authorId?",
    element: <RegisterPage />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;