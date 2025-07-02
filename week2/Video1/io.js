// console.log("hello");

// I/O heavy operations
// I/O (Input/Output) heavy operations refer to tasks in a computer program that involve a lot of data transfer between the program and external systems or devices. These operations usually require waiting for data to be read from or written to sources like disks, networks, databases, or other external devices, which can be time-consuming compared to in-memory computations.
// Examples of I/O Heavy Operations:
// 1 Reading a file
// 2 Starting a clock
// 3 HTTP Requests
// 4 Database Queries
// 5 Network Operations
// 6 File System Operations
// 7 User Input/Output
// 8 Printing to a Printer
// 9 Sending/Receiving Data over a Network

// 💡
// We’re going to introduce imports/requires next. A require statement lets you import code/functions export from another file/module.

// in that aproch we can task one by one
// const fs = require("fs");

// const contents = fs.readFileSync("a.txt", "utf-8");
// console.log(contents);

// const contents2 = fs.readFileSync("b.txt", "utf-8");
// console.log(contents2);

// now we can use asyncrownize way to do that same aproch

// const fs = require("fs");

// fs.readFile("a.txt", "utf-8", function (err, contents) {
//   console.log(contents);
// });

// fs.readFile("b.txt", "utf-8", function (err, contents) {
//   console.log(contents);
// });

// fs.readFile("a.txt", "utf-8", function (err, contents) {
//   console.log(contents);
// });

function timeout() {
  console.log("Click the button!");
}

console.log("Hi!");

setTimeout(timeout, 5000);

console.log("Welcome to loupe.");

let c = 0;
for (let i = 0; i < 1000000; i++) {
  c = c + 1;
}
console.log("this is the output");
