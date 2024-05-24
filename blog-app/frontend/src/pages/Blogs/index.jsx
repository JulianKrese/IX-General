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

  // const CategoriesList = () => {
  //   return categories.map((category, index) => {
  //     return categoryId === category.id.toString() ? (
  //       <button
  //         key={index}
  //         onClick={() => setCategoryId(category.id)}
  //         style={{ color: "blue" }}
  //       >
  //         <p key={index}>{category.title}</p>
  //       </button>
  //     ) : (
  //       <button
  //         key={index}
  //         onClick={() => setCategoryId(category.id)}
  //         style={{ color: "black" }}
  //       >
  //         <p key={index}>{category.title}</p>
  //       </button>
  //     );
  //   });
  // }


  return (
    <>
      <Navbar />
      <div className="container">
        <Heading />
        <div className="scroll-menu">
          <CategoriesList />
        </div>
        <SubHeading subHeading={"Blog Posts"} />
        <BlogList blogs={blogs}></BlogList>
        <Footer />
      </div>
    </>
  );
}