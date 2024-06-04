const express = require("express");
const router = express.Router();

const {protect} = require("../middleware/authMiddleware");
const blogController = require("../controllers/blogs");

const logMiddleware = (req, res, next) => {
  console.log(req.body);
  next();
}

/* Create */

router.post("/", logMiddleware, protect, (req, res) => {
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

router.put("/:id", logMiddleware, protect, (req, res) => {
  blogController.updateBlog(req, res);
});

/* Delete */

router.delete("/:id", logMiddleware, protect, (req, res) => {
  blogController.deleteBlog(req, res);
});

module.exports = router;