const Blog = require("../models/Blog");

/* Create */

const createBlog = async (req, res) => {
    try {
        
        const newBlog = new Blog({
            title: req.body.title,
            description: req.body.description,
            image: req.body.image,
            content: req.body.content,
            authorId: req.body.authorId,
            categoryIds: req.body.categoryIds,
        });
        await newBlog.save();

        res.status(200).json({ message: "Blog created!", data: [newBlog] });
    }
    catch (error) {
        res.status(500).json({message: error.message, data: []});
    }
};

/* Read */

const getBlogs = async (req, res) => {
    try {
        const blogs = await Blog.find();
        if (blogs) {
            res.status(200).json({ message: "Returned all blogs!", data: [blogs] });
        } else {
            res.status(404).json({ message: "No blogs found!", data: [] });
        }
    }
    catch (error) {
        res.status(500).json({message: error.message, data: []})
    }
};
  
const getBlogById = async (req, res) => {
    try {
        const blog = await Blog.findById(req.params.id);
        if (blog) {
            res.status(200).json({ message: "Returned blog by ID!", data: [blog] });
        } else {
            res.status(404).json({ message: "Blog by id not found!", data: [] });
        }
    }
    catch (error) {
        res.status(500).json({message: error.message, data: []})
    }
};

/* Update */
  
const updateBlog = async (req, res) => {
    try {
        const blog = await Blog.findById(req.params.id);
        if (blog) {
        
            blog.title = req.body.title || blog.title;
            blog.description = req.body.description || blog.description;
            blog.image = req.body.image || blog.image;
            blog.content = req.body.content || blog.content;
            blog.authorId = req.body.authorId || blog.authorId;
            blog.categoryId = req.body.categoryId || blog.categoryId;

            const updatedBlog = await blog.save();
            res.status(200).json({ message: "Blog updated!", data: [updatedBlog] });
        }
        else {
            res.status(404).json({message: "Blog not found by Id", data: []})
        }
    }
    catch (error) {
        res.status(500).json({message: error.message, data: []});
    }
};
  
/* Delete */

const deleteBlog = async (req, res) => {
    try {
        const blog = await Blog.findByIdAndDelete(req.params.id);
        if (blog) {
            res.status(200).json({ message: "Blog deleted!", data: [blog] });
        } else {
            res.status(404).json({ message: "Blog by id not found!", data: [] });
        }
    }
    catch (error) {
        res.status(500).json({message: error.message})
    }
};

module.exports = {
    getBlogs,
    getBlogById,
    createBlog,
    updateBlog,
    deleteBlog,
};