import HomePage from "./components/HomePage";
import CategoriesPage from "./components/CategoriesPage";
import BlogsPage from "./components/BlogsPage";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      <CategoriesPage />
      <BlogsPage />
      <HomePage />
    </div>
  );
}

export default App;