const express = require("express");
const app = express();
const mongoose = require("mongoose");

// 3rd party middleware
const morgan = require("morgan");

// connect to mongoDB
const dbURI =
  "mongodb+srv://tomfyfe85:Batdad66696@netninjanodejs.br8fpun.mongodb.net/node-tutorial?retryWrites=true&w=majority";
mongoose
  .connect(dbURI)
  .then((result) => app.listen(3000), console.log("connected to db"))
  .catch((err) => console.log(err));
// app.listen(3000)  is only listening for requests then the data has been retrieved from the db
// register view engine
app.set("view engine", "ejs");

// middleware and static files -
app.use(express.static("public"));
// setting up static files in public folder
app.use(morgan("dev"));
// logs activity in the console rather than using code such as:

// app.use((req, res, next) => {
//   console.log("new request made:");
//   console.log("host: ", req.hostname);
//   console.log("path: ", req.path);
//   console.log("method: ", req.method);
//   next();
// });

app.get("/", (req, res) => {
  // res.send("<p>home page</p>");
  // res.sendFile("./views/index.html", { root: __dirname });
  const blogs = [
    {
      title: "Yoshi finds eggs",
      snippet: "Lorem ipsum dolor sit amet consectetur",
    },
    {
      title: "Mario finds stars",
      snippet: "Lorem ipsum dolor sit amet consectetur",
    },
    {
      title: "How to defeat bowser",
      snippet: "Lorem ipsum dolor sit amet consectetur",
    },
  ];
  res.render("index", { title: "Home", blogs });
});

app.get("/about", (req, res) => {
  // res.sendFile("./views/about.html", { root: __dirname });
  res.render("about", { title: "About" });
});

app.get("/blogs/create", (req, res) => {
  res.render("create", { title: "Create a new blog" });
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
