/* Create */

const createBlog = (req, res) => {
    res.status(200).json({ message: "Create new blog!", data: [] });
};

/* Read */

const getBlogs = (req, res) => {
    res.status(200).json({ message: "Return all blogs!", data: [] });
};
  
const getBlogById = (req, res) => {
    res.status(200).json({ message: "Return blog by ID!", data: [] });
};

/* Update */
  
const updateBlog = (req, res) => {
    res.status(200).json({ message: "Update blog by ID!", data: [] });
};
  
/* Delete */

const deleteBlog = (req, res) => {
    res.status(200).json({ message: "Delete blog by ID!", data: [] });
};
  
module.exports = {
    getBlogs,
    getBlogById,
    createBlog,
    updateBlog,
    deleteBlog,
};