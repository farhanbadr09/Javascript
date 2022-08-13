"use strict";

const ordersSet = new Set([
  "Pasta",
  "Pizza",
  "Pizza",
  "Risotto",
  "Pasta",
  "Pizza",
]);

const rest = new Map();
rest.set("name", "Classico Italiano");
rest.set(1, "Firenze, Italy");
console.log(rest.set(2, "Lisbo, Portugal"));

rest
  .set("categories", ["Italiano", "Pizzeria", "Vegetarian", "Organic"])
  .set("open", 11)
  .set("close", 23)
  .set(true, "We are open :D")
  .set(false, "We are closed :(");
console.log(rest.get("name"));
console.log(rest.get(true));

// Example
const time = 8;
rest.get(time > rest.get("open") && time < rest.get("close"));

const mob = new Map();
mob.set("sumsung", "S1");
mob.set("Oppo", "A1");
mob.delete("sumsung");
const ar = [...new Set(mob)];
console.log(ar);

let myMap = new Map().set("a", 1).set("b", 2);
const bn = [];
for (const [name, value] of myMap) {
  bn.push({ name, value });
}
console.log(bn);
