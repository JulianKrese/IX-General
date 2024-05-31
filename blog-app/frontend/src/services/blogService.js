const createBlog = async (blog) => {
    try {
        const data = await fetch(
            "https://ix-blog-app-2d5c689132cd.herokuapp.com/api/blogs", 
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(blog),
            });
        const blogsAPIData = await data.json();
        return blogsAPIData.data;
    }
    catch (error) {
        throw new Error(error);
    }
}


const getBlogs = async () => {
    try {
        const data = await fetch(
            "https://ix-blog-app-2d5c689132cd.herokuapp.com/api/blogs", 
            {
                method: "GET",
                headers: {
                    "Content-Type": "application/json"
                },
            });
        const blogsAPIData = await data.json();
        return blogsAPIData.data;
    }
    catch (error) {
        throw new Error(error);
    }
}

const getBlogsById = async (blogId) => {
    try {
        const data = await fetch(
            "https://ix-blog-app-2d5c689132cd.herokuapp.com/api/blogs/category/"+blogId,
            {
                method: "GET",
                headers: {
                    "Content-Type": "application/json"
                },
            });
        const blogsByIdAPIData = await data.json();
        return blogsByIdAPIData.data;
    }
    catch (error) {
        throw new Error(error);
    }
}

const getBlogsByCategoryId = async (categoryId) => {
    try {
        const data = await fetch(
            "https://ix-blog-app-2d5c689132cd.herokuapp.com/api/blogs/category/"+categoryId,
            {
                method: "GET",
                headers: {
                    "Content-Type": "application/json"
                },
            });
        const blogsByIdAPIData = await data.json();
        return blogsByIdAPIData.data;
    }
    catch (error) {
        throw new Error(error);
    }
}

const updateBlogById = async (blogId) => {
    try {
        const data = await fetch(
            "https://ix-blog-app-2d5c689132cd.herokuapp.com/api/blogs/category/"+blogId,
            {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json"
                },
            });
        const blogsByIdAPIData = await data.json();
        return blogsByIdAPIData.data;
    }
    catch (error) {
        throw new Error(error);
    }
}

const deleteBlogById = async (blogId) => {
    try {
        const data = await fetch(
            "https://ix-blog-app-2d5c689132cd.herokuapp.com/api/blogs/category/"+blogId,
            {
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json"
                },
            });
        const blogsByIdAPIData = await data.json();
        return blogsByIdAPIData.data;
    }
    catch (error) {
        throw new Error(error);
    }
}

const blogService = {
    createBlog,
    getBlogs,
    getBlogsById,
    getBlogsByCategoryId,
    updateBlogById,
    deleteBlogById
}

export default blogService;