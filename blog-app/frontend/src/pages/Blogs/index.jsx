import React, { useState } from "react";

import Heading from "../../components/Heading";
import Navbar from "../../components/Navbar";
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
        {/* <div className="scroll-menu">
          <CategoriesList 
            categories={categories}
            categoryId={categorryId}
            setCategoryId={setCategoryId}>
          </CategoriesList>
        </div> */}
        <SubHeading subHeading={"Blog Posts"} />
        <BlogList blogs={blogs}></BlogList>
        <Footer />
      </div>
    </>
  );
}