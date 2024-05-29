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


const blogService = {
    getBlogs,
    getBlogsByCategoryId
}

export default blogService;