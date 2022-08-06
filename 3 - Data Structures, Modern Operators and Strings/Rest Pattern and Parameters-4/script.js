"use strict";
// SPREAD, because on Right side of =
const arr = [1, 2, 3, ...[4, 5]];
console.log(...arr);

// REST, because on left side of =
const [a, b, ...others] = [1, 3, 4, 5, 6];
console.log(a, b, others);

const restaurant = {
  name: "Classico Italiano",
  location: "Via Angelo Tavanti 23, Firenze, Italy",
  categories: ["Italina", "Pizzeria", "Vegitarian", "Organic"],
  startMenu: ["Focaccia", "Bruschetta", "Garlic", "Bread", "Caprese Salad"],
  mainMenu: ["Pizza", "Pasta", "Risotto", "Biryani"],
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
  orderPizza: function (mainIngredient, ...otherIngredient) {
    console.log(mainIngredient);
    console.log(otherIngredient);
  },
};

const [pizza, rastio, ...other] = [
  ...restaurant.mainMenu,
  ...restaurant.startMenu,
];
console.log(pizza, rastio, other);

//Objects
const { fri, ...weekdays } = restaurant.openingHours;
console.log(fri);
console.log(weekdays);

// Functions
const add = function (...numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) sum += numbers[i];
  console.log(sum);
};
add(1, 3, 4);
add(3, 4, 5);
add(4, 1, 4, 5, 6);

const [j, ...f] = [23, 0, 7];
add(...f);

restaurant.orderPizza("mashroom", "onion", "olives", "spinach");
restaurant.orderPizza("mashroom");
