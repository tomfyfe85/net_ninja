const fs = require("fs");

const readStream = fs.createReadStream("./docs/blog3.txt", {
  encoding: "utf8",
});
// creates read stream
// where we are streaming from as argument
// {encoding: 'utf8'} - meaning it will encode it to readable text as it comes in, otherwise  console.log(chunk.toString())

readStream.on("data", (chunk) => {
  console.log("---new chunk");
  console.log(chunk);
});
// .on is an event listener
// listening for a chunk of data in the buffer
// 'data' is a data event. The the data can be used as the chunk argument in the call back function.
