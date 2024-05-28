import React, {useState, useEffect} from "react";
import {useParams} from "react-router-dom";

import Heading from "../../components/Heading";
import Navbar from "../../components/Navbar";
import BlogList from "../../components/BlogList";
import Footer from "../../components/Footer";
import SubHeading from "../../components/SubHeading";
import CategoriesList from "../../components/CategoriesList";

import blogService from "../../services/blogService";
import categoriesService from "../../services/categoriesService";


export default function BlogsPage() {

  const {categoriesId} = useParams();

  const [blogs, setBlogs] = useState([]);
  const [categoryId, setCategoryId] = useState([]);
  const [categories, setCategories] = useState([]);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAll = async () => {
      try {
        const blogsResults = await blogService.getBlogsByCategoryId(categoryId);
        const categoriesResults = await categoriesService.getCategories();
        setBlogs(blogsResults);
        setCategories(categoriesResults);
        setLoading(false);
      }
      catch (error) {
        throw new Error(error);
      }
    }
    fetchAll();
  }, [categoryId]);

  // const CategoriesList = (category) => {
  //   if (!categories && !categories?.length) {
  //     return null;
  //   }
  
  //   return (
  //     <div className="category-list">
  //       {categories.map((category) => {
  //         return (
  //           <button
  //             key={category.id}
  //             className="card"
  //             style={{ borderRadius: "0px", border: "none" }}
  //             onClick={() => {
  //               console.log("TODO: Navigate to categories page");
  //             }}
  //           >
  //             <div
  //               className="card-body w-100"
  //               style={{
  //                 backgroundColor: category.color + "33",
  //                 position: "relative",
  //                 zIndex: 0,
  //                 width: 100
  //               }}
  //             >
  //               <h5 className="card-title">{category.title}</h5>
  //             </div>
  //             <div className="card-body">
  //               <p className="card-text">
  //                 {category.description.substring(1, 100)} ...
  //               </p>
  //             </div>
  //           </button>
  //         );
  //       })}
  //     </div>
  //   );
  // }

  if(loading) {
    <>
      <div class="d-flex justify-content-center">
        <div class="spinner-border" role="status">
          <span class="visually-hidden">Loading...</span>
        </div>
      </div>
    </>
  }

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