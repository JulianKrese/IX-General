import React, { useEffect, useState } from "react";
import Navbar from "../../components/Navbar";
import Heading from "../../components/Heading";
import BlogList from "../../components/BlogList";
import Footer from "../../components/Footer";
import SubHeading from "../../components/SubHeading";

import { useParams, Link } from "react-router-dom";

import "./index.css";

import blogService from "../../services/blogService";
import categoryService from "../../services/categoriesService";

export default function BlogsPage() {
  const { categoryId } = useParams();

  const [blogs, setBlogs] = useState();
  const [categories, setCategories] = useState();

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const blogsRes = await blogService.getBlogsByCategoryId(categoryId||null);
      const categoriesRes = await categoryService.getCategories();

      setBlogs(blogsRes);
      setCategories(categoriesRes);
      setLoading(false);
    };

    fetchData();
  }, [categoryId, loading]);

  const CategoriesList = ({ categoryId }) => {
    if (!categories && !categories?.length) {
      return null;
    }

    return categories.map((category) => {
      return categoryId === category.id ? (
        <Link
          className="link "
          key={category.id}
          to={"/blogs/" + category.id}
          style={{ color: "blue"}}
          onClick={() => setLoading(true)}
        >
          <p key={category.id}>{category.title}</p>
        </Link>
      ) : (
        <Link
          className="link"
          key={category.id}
          to={"/blogs/" + category.id}
          style={{ color: "black" }}
          onClick={() => setLoading(true)}
        >
          <p key={category.id}>{category.title}</p>
        </Link>
      );
    });
  };

  if (loading) {
    return (
      <div className="d-flex justify-content-center align-items-center mt-5">
        <div class="spinner-border" role="status">
          <span class="visually-hidden">Loading...</span>
        </div>
      </div>
    );
  }

  return (
    <>
      <Navbar />
      <div className="container">
        <Heading />
        <div className="scroll-menu">
          <CategoriesList categoryId={categoryId} />
        </div>
        <SubHeading subHeading={"Blog Posts"} />
        <BlogList blogs={blogs} />
      </div>

      <Footer />
    </>
  );
}
