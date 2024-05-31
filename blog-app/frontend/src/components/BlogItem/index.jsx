import React from "react";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";

import BlogItemText from "../BlogItemText";

import "../../App.css";
import "./index.css";

export default function BlogItem({
  index,
  blog,
  imageOrientation,
  onBlogEdit,
  onBlogDelete,
}) {

  const EditButtonsContainer = () => {
    return (
      <EditButtons
        onEdit={() => onBlogEdit(blog)}
        onDelete={() => onBlogDelete(blog)}
      />
    );
  };

  const navigate = useNavigate();
  const navigateToBlog = () => {
    
  }

  if (imageOrientation === "top") {
    return (
      <div
        key={index}
        className="card-1"
        onClick={navigateToBlog}
      >
        <img src={blogPost.image} className="card-img-top" alt="..." />
        <div className="card-text-bottom">
          <BlogItemText
            blogPost={blogPost}
            headerFontSize="20px"
          ></BlogItemText>
        </div>
      </div>
    );
  } else {
    return (
      <div
        key={index}
        className="card-2"
        onClick={navigateToBlog}
      >
        <img src={blogPost.image} className="card-img-left" alt="..." />
        <div className="card-text-right">
          <BlogItemText
            blogPost={blogPost}
            headerFontSize="20px"
          ></BlogItemText>
        </div>
      </div>
    );
  }
}

BlogItem.prototype = {
  index: PropTypes.number.isRequired,
  blogPost: PropTypes.object.isRequired,
  imageOrientation: PropTypes.string
}