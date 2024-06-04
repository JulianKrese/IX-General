import React from "react"
import {useParams} from "react-router-dom";

import blogService from "../../services/blogService";

export default function BlogPage() {

    // const {blogId} = useParams();
    let blog = blogService.fetchBlogByID("665dd1d28e83e136842e2295");
    console.log(blog);

    return (
        <>
            <img src={blog.image} alt="..." />
            <div id="header">
                <div className="d-flex">
                    <h2 id="title"> {blog.title} </h2>
                    <h6 id="author"> {blog.date} by {blog.author} </h6>
                </div>
                <p id="description"> {blog.description} </p>
            </div>
            {/* map every item in the content array out */}
        </>
    )
}
