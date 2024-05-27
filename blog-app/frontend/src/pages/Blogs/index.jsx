import React, {useState, useEffect} from "react";

import Heading from "../../components/Heading";
import Navbar from "../../components/Navbar";
import BlogList from "../../components/BlogList";
import Footer from "../../components/Footer";
import SubHeading from "../../components/SubHeading";
import CategoriesList from "../../components/CategoriesList";

import blogService from "../../services/blogService";
import categoriesService from "../../services/categoriesService";


export default function BlogsPage() {

  const [blogs, setBlogs] = useState([]);
  const [categoryId, setCategoryId] = useState([]);
  const [categories, setCategories] = useState([]);

  const fetchBlogs = async () => {
    try {
      const blogsResults = await blogService.getBlogs();
      setBlogs(blogsResults);
    }
    catch (error) {
      throw new Error(error);
    }
  }
  fetchBlogs();

  useEffect( () => {
    const fetchCategories = async () => {
      try {
        const categoriesResults = await categoriesService.getCategories();
        setCategories(categoriesResults);
      }
      catch (error) {
        throw new Error(error);
      }
    }
    fetchCategories();
  }, [categories]);

  useEffect( () => {
    if (categoryId) {
      const filteredBlogs = blogs.filter((blog) => {
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
            categories={categories}
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