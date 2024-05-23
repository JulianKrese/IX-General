import React from "react";

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg">
      <div style={{ margin: "0px 5%" }} className="container-fluid">
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="src/components/HomePage/">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="src/components/BlogsPage/">
                Blogs
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="src/components/CategoriesPage/">
                Categories
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">
                About
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
} 