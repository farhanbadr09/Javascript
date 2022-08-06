"use strict";
const restaurant = {
  name: "Classico Italiano",
  location: "Via Angelo Tavanti 23, Firenze, Italy",
  categories: ["Italina", "Pizzeria", "Vegitarian", "Organic"],
  startMenu: ["Focaccia", "Bruschetta", "Garlic", "Bread", "Caprese Salad"],
  mainMenu: ["Pizza", "Pasta", "Risotto"],
  openingHours: {
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
  },
  orderDelivery: function (obj) {
    console.log(obj);
  },
  orderPasta: function (ing1, ing2, ing3) {
    console.log(
      `Here is your delicious pasta with ${ing1},${ing2} and ${ing3}`
    );
  },
};

const arr = [7, 8, 9, 4];
const badNewArr = [1, 3, arr[0], arr[1], arr[2]];
console.log(badNewArr);

// using spread operator (ES6)
const newArr = [1, 2, ...arr];
console.log(newArr);

const newMenu = [...restaurant.mainMenu, "Gnocci"];
console.log(newMenu);

// Copy Array
const mainMenuCopy = [...restaurant.mainMenu];

// Concat Array
const menu = [...restaurant.startMenu, ...restaurant.mainMenu];
console.log(menu);

// Iterables : arrays, strings, maps, sets, Not Objects
const str = "Jonas";
const letters = [...str, " ", ".S"];
console.log(letters);

const ingredients = [
  prompt("Let's make pasta! Ingredient 1?"),
  prompt("Ingredient 2?"),
  prompt("Ingredient 3?"),
];

console.log(ingredients);

// Simple method to parse paramters to a function vs Spread operator method
restaurant.orderPasta(ingredients[0], ingredients[1], ingredients[2]);
restaurant.orderPasta(...ingredients);

// Objects
const newResautrant = { foundedIn: 1998, ...restaurant, founder: "Glepsi" };
console.log(newResautrant);

const restaurantCopy = { ...restaurant };
restaurantCopy.name = "Ristornate Rome";
console.log(restaurantCopy.name);
console.log(restaurant.name);
