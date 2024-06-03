const express = require("express");
const router = express.Router();

const blogController = require("../controllers/blogs");

/* Create */

router.post("/", (req, res) => {
  blogController.createBlogs(req, res);
});

/* Read */

router.get("/", (req, res) => {
  blogController.getBlogs(req, res);
});

router.get("/:id", (req, res) => {
  blogController.getBlogById(req, res);
});

router.get("/categories/:id", (req, res) => {
  blogController.getBlogsByCategoryID(req, res);
});

router.get("/author/:id", (req, res) => {
  blogController.getBlogsByAuthorID(req, res);
});

/* Update */

router.put("/:id", (req, res) => {
  blogController.updateBlog(req, res);
});

/* Delete */

router.delete("/:id", (req, res) => {
  blogController.deleteBlog(req, res);
});

module.exports = router;