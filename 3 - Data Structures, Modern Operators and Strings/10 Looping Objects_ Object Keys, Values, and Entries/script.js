"use strict";
const weekdays = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];

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

// Property Names

const properties = Object.keys(openingHours);
console.log(properties);
console.log(`We are open on ${properties.length} days in a week`);

let openStr = `We are open on ${properties.length} days in a week: `;
// const me = ``;
for (const d of properties) {
  openStr += `${d},`;
}
console.log(openStr);

for (const day of Object.keys(openingHours)) {
  console.log(day);
}

// Propert Values
const values = Object.values(openingHours);
console.log(values);

// Entire objects
const entries = Object.entries(openingHours);
// Values are also object, so destruct values
for (const [key, { open, close }] of entries) {
  console.log(`On ${key} we open at ${open} and closed around at ${close}`);
}
