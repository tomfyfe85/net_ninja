const http = require("http");
const fs = require("fs");

// creates a server and takes in a call back function
const server = http.createServer((req, res) => {
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
      break;
    case "/about":
      path += "about.html";
      break;
    default:
      path += "404.html";
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
