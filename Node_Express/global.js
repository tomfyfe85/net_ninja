// Global Object

setTimeout(() => {
  console.log("in the timeout");
  clearInterval(interval);
}, 3000);

let num = 0;

const interval = setInterval(() => {
  console.log(num++);
}, 1000);

console.log(__dirname);
// gets the absolute path of the current folder this file is in.
// IE /Users/tomfyfe/codes/projects/net_ninja/Node_Express

console.log(__filename);
// gets the absolute path of the current file.
// IE /Users/tomfyfe/codes/projects/net_ninja/Node_Express/global.js
