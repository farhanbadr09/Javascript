"use strict";

const openingHours = {
  thu: {
    open: 12,
    close: 22,
  },
  fri: {
    open: 11,
    close: 23,
  },
  sat: {
    open: 0,
    close: 24,
  },
};
const restaurant = {
  name: "Classico Italiano",
  location: "Via Angelo Tavanti 23, Firenze, Italy",
  categories: ["Italina", "Pizzeria", "Vegitarian", "Organic"],
  startMenu: ["Focaccia", "Bruschetta", "Garlic", "Bread", "Caprese Salad"],
  mainMenu: ["Pizza", "Pasta", "Risotto"],
  openingHours,
  orderDelivery: function (obj) {
    console.log(obj);
  },
  // Modern way of ES6 version to intialize function in objects
  orderPasta(ing1, ing2, ing3) {
    console.log(
      `Here is your delicious pasta with ${ing1},${ing2} and ${ing3}`
    );
  },
  order(a, b) {
    console.log(this.startMenu[a], this.startMenu[b]);
  },
};

const question = new Map([
  ["question", "what is the best programming language in the world"],
  [1, "C++"],
  [2, "Java"],
  [3, "Javascript"],
  ["correct", 3],
  [true, "Correct"],
  [false, "Try Again!"],
]);
console.log(question);

// Convet Objects to Map
console.log(Object.entries(openingHours));
const hoursMap = new Map(Object.entries(openingHours));
console.log(hoursMap);

// Quizz App
console.log(question.get("question"));
for (const [key, value] of question) {
  if (typeof key === "number") console.log(`Answer ${key} : ${value}`);
}
const answer = Number(prompt("Your answer"));
console.log(typeof answer);

console.log(question.get("correct") === answer);

console.log(question.get(question.get("correct") === answer));

// OR

const c = question.get("correct") === answer;
console.log(question.get(c));

// Convert Map to Array
console.log([...question]);
// console.log(question.entries());
console.log([...question.keys()]);
console.log([...question.values()]);
