import HomePage from "./pages/Home/";
import CategoriesPage from "./pages/Categories/";
import BlogsPage from "./pages/Blogs/";
import AboutPage from "./pages/About/";
import BlogPage from "./pages/Blog/";
import ProfilePage from "./pages/Profile";
import LoginPage from "./pages/Login";
import RegisterPage from "./pages/Register";
import AuthorPage from "./pages/Author";

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
    path: "/auth/login",
    element: <LoginPage />,
  },
  {
    path: "/auth/register",
    element: <RegisterPage />,
  },
  {
    path: "/author/:authorId?",
    element: <AuthorPage />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;