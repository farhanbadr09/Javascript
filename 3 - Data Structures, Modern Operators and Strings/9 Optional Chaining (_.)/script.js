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

if (restaurant.openingHours.mon) console.log(restaurant.openingHours.mon.open);
if (restaurant.openingHours.fri) console.log(restaurant.openingHours.fri.open);

// With Circuting conditional method (AND)
if (restaurant.openingHours && restaurant.openingHours.mon)
  console.log(restaurant.openingHours.mon.open);

// With Optional Chaining
if (restaurant.openingHours.mon?.open) console.log(openingHours.mon.open);
if (restaurant.openingHours?.fri?.open) console.log(openingHours.fri.open);

// Example
const days = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];
for (const day of days) {
  const open = restaurant.openingHours[day]?.open ?? "closed";
  console.log(`on day ${day}, we openn at ${open}`);
}

// Methods
console.log(restaurant.order?.(1, 2) ?? "method");
console.log(restaurant.orderAA?.("a", "b", "c") ?? "method does not exist");

// Array
const users = [{ name: "jonas", email: "jonas@merio.io" }];
const user = users[0]?.name ?? "user is empty";
console.log(user);

// Without using optional chaining method, it's looks like this example (more code to write)
const names = [];
if (names.length > 0) console.log(users[0].name);
else {
  console.log("Hey user is empty");
}
