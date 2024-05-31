const express = require("express");
const router = express.Router();

const categoryController = require("../controllers/categories");


/* Create */

router.post("/", (req, res) => {
  categoryController.createCategory(req, res);
});

/* Read */

router.get("/", (req, res) => {
  categoryController.getCategories(req, res);
});

router.get("/:id", (req, res) => {
  categoryController.getCategoryById(req, res);
});

/* Update */

router.put("/:id", (req, res) => {
  categoryController.updateCategoryByID(req, res);
});

/* Delete */

router.delete("/:id", (req, res) => {
  categoryController.deleteCategoryByID(req, res);
});

module.exports = router;