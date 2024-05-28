import React, {useState, useEffect} from "react";

import Heading from "../../components/Heading";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import SubHeading from "../../components/SubHeading";
import CategoryList from "../../components/CategoryList";

import categoriesService from "../../services/categoriesService";


export default function CategoriesPage() {

  const [categories, setCategories] = useState([]);

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