const express = require("express");
const blogController = require("../controllers/blogController");
const router = express.Router();
// replace app. with instances of the router
// at the bottom export the router

// blog routes
router.get("/", blogController.blog_index);

router.get("/create", blogController.blog_create_get);

router.post("/", blogController.blog_create_post);

router.get("/:id", blogController.blog_details);

router.delete("/:id", blogController.blog_delete);

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
