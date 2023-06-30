const http = require("http");
const fs = require("fs");
const _ = require("lodash");

// creates a server and takes in a call back function
const server = http.createServer((req, res) => {
  // lodash
  // lodash provides utility methods IE

  const num = _.random(0, 39);
  console.log(num);

  const greet = _.once(() => {
    console.log("hello");
  });

  greet();
  greet();
  greet();
  // console.log("request made");
  // console.log(req.url, req.method)

  // set header content type
  // res.setHeader("Content-Type", "text-plain");
  res.setHeader("Content-Type", "text/html");
  // type of content to send to the browser
  // res.write("hello, TOM!");
  // res.write('<head><link rel="stylesheet" href="#"></head>');
  // res.write("<p>Hello Ninjas</p>");
  // res.write("<p>Hello Again, Ninjas</p>");

  let path = "../views/";
  switch (req.url) {
    case "/":
      path += "index.html";
      res.statusCode = 200;
      break;
    case "/about":
      path += "about.html";
      res.statusCode = 200;
      break;
    case "/about-me":
      path += "about.html";
      res.statusCode = 301;
      res.setHeader("Location", "/about");
      // 301 means that there has been a permanent change.
      // ...We want about-me to link to about.html.
      res.end();
      break;
    default:
      path += "404.html";
      res.statusCode = 404;
      break;
  }

  fs.readFile(path, (err, data) => {
    if (err) {
      console.log(err);
      res.end();
    } else {
      // res.write(data);
      // if using write once data can be in .end IE
      res.end(data);
    }
  });

  // response has ended. Send it back to the browser
});

server.listen(3000, "localhost", () => {
  console.log("listening for requests on port 3000");
});
