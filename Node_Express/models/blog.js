const mongoose = require("mongoose");
const Schema = mongoose.Schema

const blogSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    snippet: {
      type: String,
      required: true,
    },
    body: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const Blog = mongoose.model("Blog", blogSchema);
// will use "Blog" as the name for the collection on mongo db
// ... This will appear as "Blogs"
module.exports = Blog;
