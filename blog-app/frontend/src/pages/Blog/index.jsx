import React from "react"
import {useParams} from "react-router-dom";

export default function BlogPage() {

    const {blogId} = useParams();

    return (
        <div>
        To be blog
        </div>
    )
}
