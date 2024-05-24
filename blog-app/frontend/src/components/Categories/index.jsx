import React from "react";
import PropTypes from "prop-types";

export default function Categories({ blogPost }) {
  return (
    <div className="flex-wrap d-flex">
      {blogPost.categories.map((category, index) => {
        return (
          <p
            key={index}
            className="category-tag rounded-pill py-1 m-1 text-center"
            style={{
              color: category.color,
              backgroundColor: category.color + "33",
              paddingLeft: "10px",
              paddingRight: "10px"
            }}
          >
            {category.title}
          </p>
        );
      })}
    </div>
  );
}

Categories.PropTypes = {
  blogPost: PropTypes.array.isRequired
}