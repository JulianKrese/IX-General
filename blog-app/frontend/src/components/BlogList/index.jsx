import React from "react";
import PropType from "prop-types";
import BlogItem from "../BlogItem";

import "./index.css";

export default function BlogList({blogs}) {

  if (!blogs && !blogs?.length) {
    return null;
  }

  return (
    <div className="d-flex flex-wrap">
      {blogs.map((blog, index) => {
        return (
          <div style={{margin: "1vw", width: "28vw"}}>
            <BlogItem
              key={index}
              index={index}
              blogPost={blog}
              setBlog={() => {}}
              imageOrientation={"top"}
              />
          </div>
        );
      })}
    </div>
  );
}

BlogList.prototype = {
    blogs: PropType.array.isRequired
}