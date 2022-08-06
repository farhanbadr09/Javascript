"use strict";

for (let rep = 1; rep <= 10; rep++) {
  console.log(rep);
}

const teacher = ["Afzal", "Ali", "2nd year", "ABC", 1991, true];

const types = [];

for (let i = 0; i < teacher.length; i++) {
  console.log(teacher[i], typeof teacher[i]);
  // Filling type Array
  // types[i] = typeof(teacher[i]);
  types.push(typeof teacher[i]);
}
console.log(types);

const test = {
  name: "Afzal",
  last: "Ali",
};

let res = 1;
while (res <= 10) {
  console.log("Javascript");
  res++;
}

// const users = [];

// function user() {
//   const details = {};
//   const username = prompt("Enter username");
//   const email = prompt("Enter username");
//   const password = prompt("Enter username");
//   details["username"] = username;
//   details["email"] = email;
//   users.push(details);
//   return 1;
// }

// user();
// console.log(users);

// Challenge

const bills = [100, 300, 550, 190, 50];
const tips = [];
const totals = [];

const calAge = function (bill) {
  return bill >= 50 && bill >= 300 ? bill * 0.15 : bill * 0.2;
};

for (let i = 0; i <= bills.length; i++) {
  const tipe_per = calAge(bills[i]);
  tips.push(tipe_per);
  console.log("dasdadasdasdadad", tipe_per);
  const grand_total = Number(tipe_per) + Number(bills[i]);
  // console.log("gggggggg", grand_total);
  totals.push(grand_total);
}

console.log(bills, tips, totals);
