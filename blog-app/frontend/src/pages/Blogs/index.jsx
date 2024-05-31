import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

import Navbar from "../../components/Navbar";
import Heading from "../../components/Heading";
import BlogList from "../../components/BlogList";
import Footer from "../../components/Footer";
import SubHeading from "../../components/SubHeading";
import AddEditBlogModal from "../../components/AddEditBlogModal";
import Loading from "../../components/Loading";
import SuccessToast from "../../components/SuccessToast";
import ErrorToast from "../../components/ErrorToast";

import "./index.css";

import blogService from "../../services/blogService";
import categoryService from "../../services/categoriesService";

export default function BlogsPage() {
  const { categoryId } = useParams();

  const [blogs, setBlogs] = useState();
  const [addBlog, setAddBlog] = useState();
  const [categories, setCategories] = useState();

  const [loading, setLoading] = useState(true);
  const [isSuccess, setIsSuccess] = useState();
  const [isError, setIsError] = useState();
  const [message, setMessage] = useState();

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);

      const blogsResult = await blogService.getBlogsByCategoryId(categoryId||null);
      const categoriesResult = await categoryService.getCategories();

      setBlogs(blogsResult);
      setCategories(categoriesResult);
      setLoading(false);
    };

    fetchData();
  }, [categoryId]);

  const onBlogAddClick = () => {
    setAddBlog({
      title: "",
      author: {
        id: 1,
        firstName: "",
        lastName: "",
        bio: "",
        image: ""
      },
      categories: [],
      description: "",
      image: "",
      content: [{
        sectionHeader: "",
        sectionBody: "",
      }]
    })
  }


  const createBlogPost = async (blog) => {
    try {
      const newBlog = await blogService.createBlog(blog);
      setIsSuccess(true);
      setMessage(newBlog.message);
      
      setBlogs((prev) => {
        if (newBlog.data.categories.some((x) => x.id === categoryId)) {
          prev?.unshift(newBlog.data);
        }
        return prev;
      });
    }
    catch (error) {
      setIsError(true);
      setMessage(error);
    }
    setAddBlog(null);
  }


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
    return <Loading />
  }

  return (
    <>
      <Navbar />
      <div className="container">
        <Heading />
        <div className="scroll-menu">
          <CategoriesList categoryId={categoryId} />
        </div>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <SubHeading subHeading={"Blog Posts"} />
          <button
            className="btn btn-outline-dark h-75"
            onClick={onBlogAddClick}
          >
            ADD BLOG
          </button>
        </div>
        <BlogList blogs={blogs} />
        <AddEditBlogModal
          categories={categories}
          addBlog={addBlog}
          createBlogPost={createBlogPost}
        />
      </div>
      <Footer />
      <SuccessToast
        show={isSuccess}
        message={message}
        onClose={() => {
          setIsSucces(false);
        }}
      />
      <ErrorToast
        show={isError}
        message={message}
        onClose={() => {
          setIsError(false);
        }}
      />
    </>
  );
}
