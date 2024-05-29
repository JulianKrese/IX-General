const express = require("express");
const router = express.Router();

const {
  createBlog,
  getBlogs,
  getBlogById,
  updateBlog,
  deleteBlog,
} = require("../controllers/blogs");

/* Create */

router.post("/", (req, res) => {
  createBlog(req, res);
});

/* Read */

router.get("/", (req, res) => {
  getBlogs(req, res);
});

router.get("/:id", (req, res) => {
  getBlogById(req, res);
});

/* Update */

router.put("/:id", (req, res) => {
  updateBlog(req, res);
});

/* Delete */

router.delete("/:id", (req, res) => {
  deleteBlog(req, res);
});

module.exports = router;