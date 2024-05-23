import React from "react";

import Heading from "../../components/Heading";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import SubHeading from "../../components/SubHeading";
import CategoryList from "../../components/CategoryList";

// Week 1: Import the blogPosts and categories from the dummy-data.json file
const data = require("../../dummy_data.json");
const blogs = data.blogPosts;
const categories = data.categories;

export default function CategoriesPage() {
  return (
    <>
      <Navbar />
      <div className="container">
        <Heading />
        <SubHeading subHeading={"Categories"} />
        <CategoryList categories={categories}></CategoryList>
        <Footer />
      </div>
    </>
  );
}