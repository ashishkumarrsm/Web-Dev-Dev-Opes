// console.log("hello we will learn dom ");

const { createElement } = require("react");

// const addTodo = () => {
//   const inputEl = document.querySelector("input");
//   const value = inputEl.value;
//   console.log(value);
// };

// let ctr = 0;
// function callback() {
//   document.querySelectorAll("h4")[1].innerHTML = ctr;
//   ctr = ctr + 1;
// }

// // setInterval(callback,1000)
let ctr = 1;
function addTodo() {
  const todoEl = document.querySelector("input");
  const curentValue = todoEl.value;

  const newDev = document.createElement("div");
  newDev.setAttribute("id", ctr);
  ctr = ctr + 1;
  newDev.innerHTML = `<div> ${curentValue} </div>
   
  <button onclick='deleteTodo()'>delet!!</button>`;

  document.querySelector("body").appendChild(newDev);
}

function deleteTodo() {
  console.log("delete calll");
//   const deleteEl = document.getElementById(this.ctr);
//   console.log(deleteEl);
}
