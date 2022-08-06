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
};

// Parsing multiple arguments as an parameter to a function
restaurant.orderDelivery({
  time: 22.3,
  address: "Via del Sole, 21",
  mainIndex: 2,
  starterIndex: 2,
});

const { name, openingHours, categories } = restaurant;
console.log(name, openingHours, categories);

// Define new property names of object (restuarant)
// For Example
const {
  name: restaurantName,
  openingHours: hours,
  categories: tags,
} = restaurant;
console.log("@@@@@@@@@@");
console.log(restaurantName, hours, tags);

// Set default values if property's value does not exist in object
// Note: This is specially helpful,when you are getting calling an Api and it has not property
// and value, we can set it defualt in this way

// For Example
const { menu = [], startMenu: starter = [] } = restaurant;
console.log(menu, starter);

// Mutating Variables
let a = 111;
let b = 999;
const obj = { a: 23, b: 32, c: 43 };
({ a, b } = obj);
console.log(a, b);

// Nested Object Destructing
const {
  fri: { open: o, close: c },
} = openingHours;
console.log(o, c);
