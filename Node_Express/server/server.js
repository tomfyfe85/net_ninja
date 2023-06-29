const http = require("http");

// creates a server and takes in a call back function
const server = http.createServer((req, res) => {
  console.log("request made");
  console.log(req.url, req.method)
});

server.listen(3000, "localhost", () => {
  console.log("listening for requests on port 3000");
});
