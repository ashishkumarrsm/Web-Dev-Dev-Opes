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

// function addTask() {
//   const taskInput = document.getElementById("taskInput");
//   const taskText = taskInput.value.trim();

//   if (taskText === "") {
//     alert("Please enter a task.");
//     return;
//   }

//   const taskList = document.getElementById("taskList");

//   // Create list item
//   const li = document.createElement("li");
//   li.textContent = taskText;

//   // Create delete button
//   const deleteBtn = document.createElement("button");
//   deleteBtn.textContent = "Delete";
//   deleteBtn.onclick = () => li.remove();

//   li.appendChild(deleteBtn);
//   taskList.appendChild(li);

//   taskInput.value = "";
// }

function addTask() {
  const input = document.querySelector("input");
  const inputValue = input.value.trim();

  // if thay add nothing

  if (inputValue === "") {
    alert("Plese enter thr task ");
    return;
  }
  const taskList = document.getElementById("taskList");

  // creating list item
  const li = document.createElement("li");
  li.textContent = inputValue;

  // creating delete button
  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "Delete";

  deleteBtn.onclick = () => {
    li.remove();
  };

  li.appendChild(deleteBtn);
  taskList.appendChild(li);
  input.value = " ";
}
