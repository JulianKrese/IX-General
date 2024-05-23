import React from "react";

export default function Categories({ blogPost }) {
  return (
    <div className="flex-wrap">
      {blogPost.categories.map((category, index) => {
        return (
          <p
            key={index}
            className="category-tag"
            style={{
              color: category.color,
              backgroundColor: category.color + "33",
              borderRadius: "10px",
            }}
          >
            {category.title}
          </p>
        );
      })}
    </div>
  );
}