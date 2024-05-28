const createBlog = (req, res) => {
    res.status(200).json( {
        message: "blog created!",
        data: []
    })
}

const getAllBlogs = (req, res) => {
    res.status(200).json( {
        message: "get all blogs!",
        data: []
    })
}

const createBlogsById = (req, res) => {
    res.status(200).json( {
        message: "get blog by id!",
        data: []
    })
}

const createBlogsByCategoryId = (req, res) => {
    res.status(200).json( {
        message: "get blog by category id!",
        data: []
    })
}

const udpateBlogById = (req, res) => {
    res.status(200).json( {
        message: "updating blog b id!",
        data: []
    })
}

const deleteBlogById = (req, res) => {
    res.status(200).json( {
        message: "deleting blog by id!",
        data: []
    })
}