import React from "react";

import Heading from "../../components/Heading";
import Navbar from "../../components/Navbar";
import BlogsNavbar from "../../components/BlogsNavbar";
import BlogList from "../../components/BlogList";
import Footer from "../../components/Footer";
import SubHeading from "../../components/SubHeading";

// Week 1: Import the blogPosts and categories from the dummy-data.json file
const data = require("../../dummy_data.json");
const blogs = data.blogPosts;
const categories = data.categories;

export default function BlogsPage() {
  return (
    <>
      <Navbar />
      <div className="container">
        <Heading />
        {/* <BlogsNavbar /> */}
        <SubHeading subHeading={"Blog Posts"} />
        <BlogList blogs={blogs}></BlogList>
        <Footer />
      </div>
    </>
  );
}