const fs = require("fs");
//  core module - file system

// reading files
fs.readFile("./docs/blog1.txt", (err, data) => {
  if (err) {
    console.log(err);
  }
  console.log(data.toString());
});

// console.log("last line");

//  writing files
fs.writeFile("./docs/blog1.txt", "hello world", () => {
  console.log("file was written");
});

fs.writeFile("./docs/blog2.txt", "hello world again", () => {
  console.log("file was written again");
});

// // directories
if (!fs.existsSync("./assets")) {
  // checks if folder (doesn't) exist(s)
  fs.mkdir("./assets", (err) => {
    // async creates folder. make directory
    if (err) {
      console.log(err);
    }
    console.log("folder created");
  });
} else {
  fs.rmdir("./assets", (err) => {
    // removes directory if it already exists
    if (err) {
      console.log(err);
    }
    console.log("folder deleted");
  });
}

// deleting files
if (fs.existsSync("./docs/deleteme.txt")) {
  fs.unlink("./docs/deleteme.txt", (err) => {
    // fs.unlink for deleting files - async
    if (err) {
      console.log(err);
    }
    console.log("file deleted");
  });
}
