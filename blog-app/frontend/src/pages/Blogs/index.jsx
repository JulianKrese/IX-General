import React, {useState, useEffect} from "react";

import Heading from "../../components/Heading";
import Navbar from "../../components/Navbar";
import BlogList from "../../components/BlogList";
import Footer from "../../components/Footer";
import SubHeading from "../../components/SubHeading";
import CategoriesList from "../../components/CategoriesList";

// Week 1: Import the blogPosts and categories from the dummy-data.json file
const data = require("../../dummy_data.json");
const blogsDummy = data.blogPosts;
const categoriesDummy = data.categories;

export default function BlogsPage() {

  const [blogs, setBlogs] = useState(blogsDummy);
  // const [displayBlogs, setDisplayBlogs] = useState(blogsDummy);
  const [categoryId, setCategoryId] = useState();

  useEffect( () => {
    if (categoryId) {
      const filteredBlogs = blogsDummy.filter((blog) => {
        return blog.categories.some((category) => category.id === categoryId)
      });
      setBlogs(filteredBlogs);
    }
  }, [categoryId]);

  return (
    <>
      <Navbar />
      <div className="container">
        <Heading />
        <div className="scroll-menu">
          <CategoriesList 
            categories={categoriesDummy}
            categoryId={categoryId}
            setCategoryId={setCategoryId}
            >
          </CategoriesList>
        </div>
        <SubHeading subHeading={"Blog Posts"} />
        <BlogList blogs={blogs}></BlogList>
        <Footer />
      </div>
    </>
  );
}