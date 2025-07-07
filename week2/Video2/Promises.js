// console.log("hello");

// class Rectangle {
//   constructor(width, height, color) {
//     this.width = width;
//     this.height = height;
//     this.color = color;
//   }

//   area() {
//     const area = this.width * this.height;
//     return area;
//   }

//   paint() {
//     console.log(`Painting with color ${this.color}`);
//   }
// }

// const rect = new Rectangle(2, 4, "red");
// const area = rect.area();
// console.log(area);

// //  promise callback

// function logname() {
//   console.log("hello");
// }
// setTimeout(logname, 2000);
// // definhig a promis is heard
// // but using the promis is easy

// function setTimeoutPromisified(ms) {
//   return new Promise((resolve) => setTimeout(resolve, ms));
// }

// function callback() {
//   console.log("3 seconds have passed");
// }

// setTimeoutPromisified(3000).then(callback);

// console.log("timer was started");

// function Wathe3s(resolve) {
//   console.log("Waiting for 3 seconds...");
//   setTimeout(resolve, 3000);
// }

// function setTimeoytPromisfied() {
//   return new Promise(Wathe3s);
// }

// function main() {
//   console.log("Starting the timer...");

// }
// setTimeoytPromisfied().then(main)

function setTimeoutPromisified() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, 1000);
  });
}

function main(){
  console.log("1 second has passed");
  const sum=(a,b)=>{
    console.log("a + b = ", a + b);
  }
  console.log(sum(2,3));
  
}

setTimeoutPromisified().then(main);