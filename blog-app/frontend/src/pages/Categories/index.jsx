import React, { useEffect, useState } from "react";

import Navbar from "../../components/Navbar";
import Heading from "../../components/Heading";
import CategoryList from "../../components/CategoriesList";
import Footer from "../../components/Footer";
import Loading from "../../components/Loading";
import SuccessToast from "../../components/SuccessToast";
import ErrorToast from "../../components/ErrorToast";
import AddEditCategoryModal from "../../components/AddEditCategoryModal";
import DeleteCategoryModal from "../../components/DeleteCategoryModal";

import {
  fetchCategories,
  setAddCategory,
  resetSuccessAndError,
} from "../../features/categoriesSlice";

export default function CategoriesPage() {
  const user = JSON.parse(localStorage.getItem("user"));
  const dispatch = useDispatch();
  const { categoryId } = useParams();

  const {
    categories,
    isError: isCategoriesError,
    isSuccess: isCategoriesSuccess,
    isLoading: isLoadingCategories,
    message: categoriesMessage,
  } = useSelector((state) => {
    return state.categories;
  });

  useEffect(() => {
    try {
      dispatch(fetchCategories());
    } catch (err) {
      console.error(err);
    }
  }, []);

  const onCategoryAdd = () => {
    dispatch(
      setAddCategory({
        title: "",
        description: "",
        color: "#000000",
      })
    );
  };

  const AddButton = () => {
    if (!user || !user.token) return null;
    return (
      <button className="btn btn-outline-dark m-3" onClick={onCategoryAdd}>
        ADD CATEGORY
      </button>
    );
  };

  if (loading) {
    return <Loading />;
  }

  return (
    <>
      <Navbar />
      <div className="container">
        <Heading />
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <p className="page-subtitle">Categories</p>
          <AddButton />
        </div>
        <CategoryList
          categories={categories}
          onEdit={onCategoryUpdate}
          onDelete={onCategoryDelete}
        ></CategoryList>
      </div>
      <Footer />
      <AddEditCategoryModal />
      <DeleteCategoryModal />
      <SuccessToast
        show={isSuccess}
        message={message}
        onClose={() => {
          resetSuccessAndError();
        }}
      />
      <ErrorToast
        show={isError}
        message={message}
        onClose={() => {
          resetSuccessAndError();
        }}
      />
    </>
  );
}