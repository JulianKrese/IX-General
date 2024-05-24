import React from "react";
import PropTypes from "prop-types";

export default function CategoriesList({
    categories,
    categoryId,
    setCategoryId
}) {

    return categories.map((category, index) => {
      return categoryId === category.id? (
        <button
          key={index}
          onClick={() => setCategoryId(category.id)}
          style={{ color: "blue" }}
        >
          <p key={index}>{category.title}</p>
        </button>
      ) : (
        <button
          key={index}
          onClick={() => setCategoryId(category.id)}
          style={{ color: "black" }}
        >
          <p key={index}>{category.title}</p>
        </button>
      );
    });
  }

CategoriesList.PropTypes = {
    categories: PropTypes.array.isRequired,
    categoryId: PropTypes.string.isRequired,
    setCategoryId: PropTypes.func.isRequired
};