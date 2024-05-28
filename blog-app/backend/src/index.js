const express = require("express");
const cors = require("cors");

const blogsRoutes = require("./routes/blogs");
const categoriesRoutes = require("./routes/categories");

const port = 8000;
const app = express();

app.use(cors());
app.use(express.json());
app.use("/blogs", blogRoutes);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});