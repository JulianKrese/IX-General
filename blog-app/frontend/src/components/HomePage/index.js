import React from "react";

import Heading from "../Heading";
import Navbar from "../Navbar";
import BlogGrid from "../BlogGrid";
// import Footer from "../Footer";
import SubHeading from "../SubHeading";
import CategoryList from "../CategoryList";

// Week 1: Import the blogPosts and categories from the dummy-data.json file
// const data = require("../../dummy-data.json");
const data = require("../../dummy_data.json");
let blogs = data.blogPosts.reverse();
const categories = data.categories;
blogs.sort((a, b) => (a.id > b.id ? 1 : -1));  // sort for ordering purposes


export default function HomePage() {
  return (
    <>
      <Navbar />
      <div className="container">
        <Heading />
        <SubHeading subHeading={"Recent Blog Posts"} />
        <BlogGrid blogPosts={blogs}></BlogGrid>
        <SubHeading subHeading={"Categories"} />
        <CategoryList categories={categories}></CategoryList>
        {/* <Footer /> */}
      </div>
    </>
  );
}