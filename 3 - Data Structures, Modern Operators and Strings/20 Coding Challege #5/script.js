"use strict";

// Challege Number 2
const flights =
  "_Delayed_Departure;fao93766109;txl2133758440;11:35\
                 +_Arrival;bru0943384722;fao93766109;11:45 \
                +_Delayed_Arrival;hel7623123123;fao93123131;12:05 \
                +_Departure;fao9323123123;lis93123131;12:30 \
                  ";
console.log(flights.split("+"));

const getCode = (str) => str.slice(0, 3).toUpperCase();
for (const flight of flights.split("+")) {
  const [type, from, to, time] = flight.split(";");
  const output = `${type.startsWith("_Delayed") ? "*" : ""} ${type.replaceAll(
    "_",
    " "
  )} ${getCode(from)} ${getCode(to)} (${time.replace(":", "h").trim()})`;
  console.log(output);
}
