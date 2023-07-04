const Blog = require("../models/blog");

const blog_index = (req, res) => {
  Blog.find()
    .sort({ createdAt: -1 })
    .then((result) => {
      res.render("blogs/index", { title: "All Blogs", blogs: result });
    })
    .catch((err) => {
      console.log(err);
    });
};

const blog_details = (req, res) => {
  const id = req.params.id;
  console.log(id);
  Blog.findById(id)
    .then((result) => {
      console.log(res.body);
      res.render("blogs/details", { blog: result, title: "Blog details" });
    })
    .catch((err) => {
      console.log(err);
    });
};

const blog_create_get = (req, res) => {
  res.render("blogs/create", { title: "Create a New Blog" });
};

const blog_create_post = (req, res) => {
  let blog = new Blog(req.body);
  // req.body is an object with the form data IE
  //   title: "new blog 3",
  //     snippet: "about my new blog",
  //     body: "this is the other blog",
  blog
    .save()
    .then((result) => {
      console.log(result);
      res.redirect("/blogs");
    })
    .catch((err) => console.log(err));
};

const blog_delete = (req, res) => {
  const id = req.params.id;
  console.log(id);
  Blog.findByIdAndDelete(id)
    .then((result) => {
      res.json({ redirect: "/blogs" });
    })
    .catch((err) => {
      console.log(err);
    });
};

module.exports = {
  blog_index,
  blog_details,
  blog_create_get,
  blog_create_post,
  blog_delete,
};
