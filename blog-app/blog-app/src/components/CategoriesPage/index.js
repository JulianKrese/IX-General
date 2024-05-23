import React from "react";

import Heading from "../Heading";
import Navbar from "../Navbar";
// import Footer from "../Footer";
import SubHeading from "../SubHeading";
import CategoryList from "../CategoryList";

// Week 1: Import the blogPosts and categories from the dummy-data.json file
// const data = require("../../dummy-data.json");
const data = require("./dummy_data.json");
const blogs = data.blogPosts.reverse();
const categories = data.categories;

export default function CategoriesPage() {
  return (
    <>
      <Navbar />
      <div className="container">
        <Heading />
        <SubHeading subHeading={"Categories"} />
        <CategoryList categories={categories}></CategoryList>
        {/* <Footer /> */}
      </div>
    </>
  );
}