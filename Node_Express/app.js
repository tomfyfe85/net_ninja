const express = require("express");
const app = express();
const mongoose = require("mongoose");
const Blog = require("./models/blog");
const dbURI = require("./URI");
// 3rd party middleware
const morgan = require("morgan");

// connect to mongoDB

mongoose
  .connect(dbURI)
  .then((result) => app.listen(3000), console.log("connected to db"))
  .catch((err) => console.log(err));
// app.listen(3000)  is only listening for requests then the data has been retrieved from the db
// register view engine
app.set("view engine", "ejs");

// middleware and static files -
app.use(express.static("public"));

app.use(express.urlencoded({ extended: true }));
// express.urlencoded - this will allow for req.body
app.use(morgan("dev"));
// logs activity in the console rather than using code such as:

// app.use((req, res, next) => {
//   console.log("new request made:");
//   console.log("host: ", req.hostname);
//   console.log("path: ", req.path);
//   console.log("method: ", req.method);
//   next();
// });

// mongoose and mongo sandbox routes
// app.get("/add-blog", (req, res) => {
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
// app.get("/all-blogs", (req, res) => {
//   Blog.find()
//     .then((result) => {
//       res.send(result);
//     })
//     .catch((err) => {
//       console.log(err);
//     });
// });
// // find all blogs

// app.get("/single-blog", (req, res) => {
//   Blog.findById("64a2f417c7093d9e5b602d40")
//     .then((result) => {
//       res.send(result);
//     })
//     .catch((err) => {
//       console.log(err);
//     });
// });
// // find a single blog by ID

app.get("/", (req, res) => {
  // res.send("<p>home page</p>");
  // res.sendFile("./views/index.html", { root: __dirname });
  res.redirect("/blogs");
});

app.get("/about", (req, res) => {
  // res.sendFile("./views/about.html", { root: __dirname });
  res.render("about", { title: "About" });
});

// blog routes
app.get("/blogs", (req, res) => {
  Blog.find()
    .sort({ createdAt: -1 })
    .then((result) => {
      res.render("index", { title: "All Blogs", blogs: result });
    })
    .catch((err) => {
      console.log(err);
    });
});

app.post("/blogs", (req, res) => {
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

app.get("/blogs/:id", (req, res) => {
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


// redirects
// app.get("/about-us", (req, res) => {
//   res.redirect("/about");
// });

// 404 page
app.use((req, res) => {
  // res.status(404).sendFile("./views/404.html", { root: __dirname });
  res.status(404).render("404", { title: 404 });
});
// use runs for every type of request
