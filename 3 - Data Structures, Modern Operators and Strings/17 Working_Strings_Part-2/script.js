"use strict";
const airline = "TAP Air Portugal";
console.log(airline.toLowerCase());
console.log(airline.toUpperCase());

// Fix capitalization in name
const passenger = "jOnAS"; //Jonas
const passengerLower = passenger.toLowerCase();
console.log(passengerLower);
const firstLetter = passengerLower[0].toUpperCase() + passengerLower.slice(1);
console.log(firstLetter);

// Emails Cleansing
const email = "hello@jonas.io";
const loginEmail = " Hello@jonas.Io \n";
// removing space from string
const lowerEmail = loginEmail.toLowerCase();
const trimmedEmail = loginEmail.trim();
console.log(trimmedEmail.toLowerCase());
// Replacing
const priceGB = "28,97$";
const priceUSD = priceGB.replace("$", "USD").replace(",", ".");
console.log(priceUSD);

const announcement =
  "All passengers come to boarding door 23. Boarding door 23!";
console.log(announcement.replaceAll("door", "gate"));

// regular expression for replacing all occurance
console.log(announcement.replaceAll(/door/g, "gate")); //g stands for Global

//Booleans
const plane = "Airbus A320neo";
console.log(plane.includes("A320"));
console.log(plane.includes("Boeing"));
console.log(plane.startsWith("Air"));

if (plane.startsWith("Airb") && plane.endsWith("neo"))
  console.log("Part of the New Airbus Faimly");

// Practice Excercise

const checkBaggage = function (items) {
  const baggage = items.toLowerCase();
  if (baggage.includes("knife") || baggage.includes("gun")) {
    console.log("Sorry you are not allowed to Board");
  } else {
    console.log("Welcome to Abroad");
  }
  // Another way to do
  const test =
    baggage.includes("knife") || baggage.includes("gun")
      ? "Not allowed!!!!!!"
      : "Allowed";
  console.log(test);
};
checkBaggage("I have a laptop, some Food and a pocket with Knife");
checkBaggage("Socks and Camera");
checkBaggage("Got some snacks and a gun for protection");
