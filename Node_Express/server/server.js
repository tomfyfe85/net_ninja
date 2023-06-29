const http = require("http");

// creates a server and takes in a call back function
const server = http.createServer((req, res) => {
  // console.log("request made");
  // console.log(req.url, req.method)

  // set header content type
  // res.setHeader("Content-Type", "text-plain");
  res.setHeader("Content-Type", "text/html");
  // type of content to send to the browser
  // res.write("hello, TOM!");
  res.write('<head><link rel="stylesheet" href="#"></head>');
  res.write("<p>Hello Ninjas</p>");
  res.write("<p>Hello Again, Ninjas</p>");

  // content
  res.end();
  // response has ended. Send it back to the browser
});

server.listen(3000, "localhost", () => {
  console.log("listening for requests on port 3000");
});
