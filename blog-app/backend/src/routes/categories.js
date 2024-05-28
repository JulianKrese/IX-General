const express = require("express");
const router = express.Router();

const {
    createCategory,
    getCategories,
    getCategoryById,
    updateCategoryById,
    deleteCategoryById,
  } = require("../controllers/categories");


/* Create */

router.post("/", (req, res) => {
  createCategory(req, res);
});

/* Read */

router.get("/", (req, res) => {
  getCategories(req, res);
});

router.get("/:id", (req, res) => {
  getCategoryById(req, res);
});

/* Update */

router.put("/:id", (req, res) => {
  updateCategoryById(req, res);
});

/* Delete */

router.delete("/:id", (req, res) => {
  deleteCategoryById(req, res);
});

module.exports = router;