console.log("hello");
// Write a function that takes a user as an input and greets them with their name and age

let greet = (user) => {
  console.log("hello " + user.name + "and you age is " + user.age);
};
// The function is not working as expected because:
// 1. The logic is reversed: it should be age >= 18 to be able to vote.
// 2. The function expects an age, but you are passing a user object (user2) when calling canVote(user2).
// 3. There is a typo in the output: "you can't vot" should be "you can't vote".

// Corrected function:
let canVote = (user) => {
  if (user.age >= 18) {
    console.log("You can vote");
  } else {
    console.log("You can't vote");
  }
};

let user = [
  {
    name: "Harkirat",
    age: 19,
  },
  {
    name: "Ashi",
    age: 25,
  },
  {
    name: "Ashu",
    age: 21,
  },
];

greet(user);

// Also tell the user if they are legal to vote or not
