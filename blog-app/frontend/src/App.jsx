import HomePage from "./pages/Home/index";
import CategoriesPage from "./pages/Categories/";
import BlogsPage from "./pages/Blogs/";
import AboutPage from "./pages/About/"
import BlogPage from "./pages/Blog/"

import { createBrowserRouter, RouterProvider } from "react-router-dom";
// import { Link, useNavigate, useParams } from "react-router-dom";
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
    path: "/blog:blogId?",
    element: <BlogPage />,
  },
  {
    path: "/blogs/:categoryId?",
    element: <BlogsPage />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;