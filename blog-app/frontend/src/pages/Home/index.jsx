import React, { useEffect, useState } from "react";

import Heading from "../../components/Heading";
import Navbar from "../../components/Navbar";
import BlogGrid from "../../components/BlogGrid";
import Footer from "../../components/Footer";
import SubHeading from "../../components/SubHeading";
import CategoryList from "../../components/CategoryList";

import blogService from "../../services/blogService";
import categoriesService from "../../services/categoriesService";


export default function HomePage() {

  const [blogs, setBlogs] = useState([]);
  const [categories, setCategories] = useState([]);

  useEffect( () => {
    const fetchBlogs = async () => {
      try {
        const blogsResults = await blogService.getBlogs();
        setBlogs(blogsResults.data);
      }
      catch (error) {
        throw new Error(error);
      }
    }
    fetchBlogs();
  }, [blogs]);

  useEffect( () => {
    const fetchCategories = async () => {
      try {
        const categoriesResults = await categoriesService.getCategories();
        setCategories(categoriesResults.data);
      }
      catch (error) {
        throw new Error(error);
      }
    }
    fetchCategories();
  }, [categories]);


  return (
    <>
      <Navbar />
      <div className="container">
        <Heading />
        <SubHeading subHeading={"Recent Blog Posts"} />
        <BlogGrid blogPosts={blogs}></BlogGrid>
        <SubHeading subHeading={"Categories"} />
        <CategoryList categories={categories}></CategoryList>
        <Footer />
      </div>
    </>
  );
}