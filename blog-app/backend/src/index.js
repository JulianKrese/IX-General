const express = require("express");
const cors = require("cors");
require("dotenv").config();

const connectDB = require("./database/db");
connectDB();

const blogRoutes = require("./routes/blogs");
const categoryRoutes = require("./routes/categories");

const port = process.env.PORT || 3000;
const app = express();

app.use(cors());
app.use(express.json());
app.use("/blogs", blogRoutes);
app.use("/categories", categoryRoutes);


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});