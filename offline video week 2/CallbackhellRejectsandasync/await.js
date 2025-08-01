console.log("hello");

setTimeout(() => {
  console.log("1s pass away");
  setTimeout(() => {
    console.log("3s pass");
    setTimeout(() => {
      console.log("10 sec pass");
    }, 10000);
  }, 3000);
}, 1000);
