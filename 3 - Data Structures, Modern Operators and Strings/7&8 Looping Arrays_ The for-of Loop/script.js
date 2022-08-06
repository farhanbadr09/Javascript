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

const menu = [...restaurant.startMenu, ...restaurant.mainMenu];
// In "for of loop", we can't access index of entire element
for (const item of menu) console.log(item);
for (const iatem in menu) console.log(iatem);

// To get element with Index, use Entries with Iterator
for (const i of menu.entries()) {
  console.log(i[0], i[1]);
}

// OR
for (const [i, el] of menu.entries()) {
  console.log(`index ${i} of element ${el}`);
}

// Iterator Example
console.log([...menu.entries()]);
