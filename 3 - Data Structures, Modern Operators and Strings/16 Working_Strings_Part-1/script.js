"use strict";

const airline = "TAP Air Portugal";
const plane = "A320";

// Fundamentals of Slice Method
console.log(airline[0]);
console.log(airline[1]);
console.log(airline[2]);
console.log("B737"[0]);

console.log(airline.length);
console.log("B373".length);

console.log(airline.indexOf("r"));
console.log(airline.lastIndexOf("r"));
console.log(airline.indexOf("Portugal"));

console.log(airline.slice(4));
console.log(airline.slice(4, 7));

console.log(airline.slice(0, airline.indexOf(" ")));
console.log(airline.slice(airline.lastIndexOf(" ")));
console.log(airline.slice(airline.lastIndexOf(" ") + 1));

console.log(airline.slice(-2));
console.log(airline.slice(1, -1));

const checkMiddleSeat = function (seat) {
  // B and E are middle Seat
  const s =
    seat.slice(-1) === "E" || seat.slice(-1) === "B"
      ? "Yes middle"
      : "Not middle";
  console.log(s);
  //OR
  console.log("Other way to do same problem");

  const ss = seat.slice(-1);
  if (ss === "B" || ss === "E") {
    console.log("you got middle seat");
  } else {
    console.log("you could not get middle seat");
  }
};

console.log(checkMiddleSeat("11B"));
console.log(checkMiddleSeat("23C"));
console.log(checkMiddleSeat("3E"));

// When we call slice method, it converts into object behind the scene this is called "Boxing"
// For example
console.log(new String("Jonas"));
console.log(typeof new String("Jonas"));
// When the operation is done the object back to regular string primitive
// All String Methods return primitive

// Demonstration
console.log(typeof new String("Jonas").slice(1));
