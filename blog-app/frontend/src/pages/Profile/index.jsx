import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import Navbar from "../../components/Navbar";
import BlogList from "../../components/BlogList";
import Footer from "../../components/Footer";
import Loading from "../../components/Loading";
import EditProfileModal from "../../components/EditProfileModal";
import SuccessToast from "../../components/SuccessToast";
import ErrorToast from "../../components/ErrorToast";
import EditProfileButton from "../../components/EditProfileButton";

import blogService from "../../services/blogService";
import authService from "../../services/authService";

export default function ProfilePage() {
  const user = JSON.parse(localStorage.getItem("user"));
  const { authorId } = useParams();

  const [author, setAuthor] = useState();
  const [blogs, setBlogs] = useState([]);
  const [isError, setIsError] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isEditModalVisible, setIsEditModalVisible] = useState(false); // New state

  useEffect(() => {
    const fetchAuthorBlogs = async () => {
      try {
        setIsLoading(true);
        const author = await authService.getUser(authorId);
        const blogs = await blogService.fetchBlogsByAuthorId(authorId);
        setBlogs(blogs.data);
        setAuthor(author.data);
        setIsLoading(false);
      } catch (error) {
        setIsError(true);
        setIsLoading(false);
        setMessage(error.message || error);
      }
    };
    fetchAuthorBlogs();
  }, [authorId]);

  const onEdit = () => {
    setIsEditModalVisible(true);
  }

  const closeEditModal = () => {
    setIsEditModalVisible(false);
  }

  const resetSuccess = () => {
    setIsSuccess(false);
    setMessage("");
  };

  const resetError = () => {
    setIsError(false);
    setMessage("");
  };

  const AuthorDetails = () => {
    return (
      <div className="col-md-8 col-lg-6 col-xl-4 mx-auto">
        <div className="position-sticky my-5" style={{ top: "2rem" }}>
          <div className="p-4 mb-3 bg-light rounded">
            <h4 className="fst-italic">
              {author.firstName} {author.lastName}
            </h4>
            <img src={author.image} className="avatar" alt="..." />
            <p>{author.bio.substring(0, 100)}...</p>
            {user && user._id === author._id && (
              <EditProfileButton onEdit={onEdit} />
            )}
          </div>
        </div>
      </div>
    );
  };

  if (isLoading || !author || !blogs) {
    return <Loading />;
  }

  return (
    <>
      <Navbar />
      <div className="container">
        <AuthorDetails />
        <p className="page-subtitle">Author Blog Posts</p>
        <BlogList blogs={blogs} />
        <Footer />
      </div>
      <EditProfileModal show={isEditModalVisible} onClose={closeEditModal} />
      <SuccessToast show={isSuccess} message={message} onClose={resetSuccess} />
      <ErrorToast show={isError} message={message} onClose={resetError} />
    </>
  );
}
