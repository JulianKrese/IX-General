const express = require("express");
const router = express.Router();
const blogController = require("../controllers/blogs");


/* Create */

router.post("/", (req, res) => {
    blogController.createBlogs(req, res);
})


/* Read */

router.get("/", (req, res) => {
    
})


/* Update */

router.put("/", (req, res) => {

})


/* Delete */

router.delete("/", (req, res) => {

})


module.exports = router;