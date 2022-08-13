"use strict";
// Split and Join
console.log("a+very+nice+string".split("+"));
console.log("Jack Shaun".split(" "));

const [firstname, lastname] = "Micheal Jackson".split(" ");
console.log(firstname, lastname);

const newName = ["Mr.", firstname, lastname.toUpperCase()].join(" ");
console.log(newName);
console.log(typeof newName);

console.log("**********************");
// Real Example
const capitalizeName = function (name) {
  const names = name.split(" ");
  const nameUpper = [];
  const nameUpper2 = [];
  for (let nam of names) {
    let perfect_name = nam[0].toUpperCase() + nam.slice(1);
    nameUpper.push(perfect_name);
    console.log(perfect_name); // first way
    nameUpper2.push(nam.replace(nam[0], nam[0].toUpperCase())); // second way
  }
  console.log(nameUpper2);
  console.log(nameUpper.join(" "));
};

console.log(capitalizeName("jessica ann smith davis"));
console.log(capitalizeName("jonas schmedtman"));

// Padding
const message = "Go to gate 23!";
console.log(message.padStart(25, "+"));
console.log(message.padEnd(30, "+"));
console.log(message.padStart(25, "+").padEnd(30, "+"));
// console.log("Jonas".padStart(23, "+"));

// Real Example (Mask credit)
const maskCreditCard = function (number) {
  const str = number + "";
  // console.log(typeof str);
  const last = str.slice(-4);
  return last.padStart(str.length, "+");
};
console.log(maskCreditCard(31211231231231));
console.log(maskCreditCard(4132454568546456));

// Repeat
const message2 = "Bad weather... All Departues Delayed... ";
console.log(message2.repeat(5));

const planesInline = function (n) {
  console.log(`There are ${n} planes in line ${"^".repeat(n)}`);
};
planesInline(3);
planesInline(5);
planesInline(7);
