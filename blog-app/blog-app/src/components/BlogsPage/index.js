import React from "react";

import Heading from "../Heading";
import Navbar from "../Navbar";
import BlogList from "../BlogList";
import BlogsNavbar from "../BlogsNavbar";
// import Footer from "../Footer";
import SubHeading from "../SubHeading";

// Week 1: Import the blogPosts and categories from the dummy-data.json file
// const data = require("../../dummy-data.json");
const data = require("../../dummy_data.json");
let blogs = data.blogPosts.reverse();
const categories = data.categories;
blogs.sort((a, b) => (a.id > b.id ? 1 : -1));  // sort for ordering purposes

export default function BlogsPage() {
  return (
    <>
      <Navbar />
      <div className="container">
        <Heading />
        <BlogsNavbar />
        <SubHeading subHeading={"Blog Posts"} />
        {/* <BlogList blogPosts={blogs}></BlogList> */}
        {/* <Footer /> */}
      </div>
    </>
  );
}