const express = require("express");
const Blog = require("../models/blog");

const router = express.Router();
// replace app. with instances of the router
// at the bottom export the router
router.get("/blogs/create", (req, res) => {
  res.render("create", { title: "New Blog" });
});

// blog routes
router.get("/blogs", (req, res) => {
  Blog.find()
    .sort({ createdAt: -1 })
    .then((result) => {
      res.render("index", { title: "All Blogs", blogs: result });
    })
    .catch((err) => {
      console.log(err);
    });
});

router.post("/blogs", (req, res) => {
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
});

router.get("/blogs/:id", (req, res) => {
  const id = req.params.id;
  console.log(id);
  Blog.findById(id)
    .then((result) => {
      console.log(res.body);
      res.render("details", { blog: result, title: "Blog details" });
    })
    .catch((err) => {
      console.log(err);
    });
});

router.delete("/blogs/:id", (req, res) => {
  const id = req.params.id;
  console.log(id);
  Blog.findByIdAndDelete(id)
    .then((result) => {
      res.json({ redirect: "/blogs" });
    })
    .catch((err) => {
      console.log(err);
    });
});

// mongoose and mongo sandbox routes
// router.get("/add-blog", (req, res) => {
//   const blog = new Blog({
//     title: "new blog 3",
//     snippet: "about my new blog",
//     body: "this is the other blog",
//   });
//   blog
//     .save()
//     .then((result) => {
//       res.send(result);
//     })
//     .catch((err) => console.log(err));
// });
// // creates a new instance of Blog. When /add-blog is entered blog.save saves to the db
// // ... .get then gets the data from the db as result and res.send(result) sends response to the browser.
// router.get("/all-blogs", (req, res) => {
//   Blog.find()
//     .then((result) => {
//       res.send(result);
//     })
//     .catch((err) => {
//       console.log(err);
//     });
// });
// // find all blogs

// router.get("/single-blog", (req, res) => {
//   Blog.findById("64a2f417c7093d9e5b602d40")
//     .then((result) => {
//       res.send(result);
//     })
//     .catch((err) => {
//       console.log(err);
//     });
// });
// // find a single blog by ID

module.exports = router;
