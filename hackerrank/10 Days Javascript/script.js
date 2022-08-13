"use strict";
// let voel = ["a", "e", "i", "o", "u"];
// function vowelsAndConsonants(s) {
//   for (const [a, c] in s) {
//     console.log("aaaaaaaa", );
//   }
// }
// console.log(vowelsAndConsonants("javascriptloops"));
// const text = "Hello StackOverflow";
// for (let i = 0; i < text.length; i++) {
//   const character = text.charAt(i);
//   console.log(i, character);
// }
console.log("%%%%%%%%%%%%%%%%%%%%%");

// let strVoel = "aeiou";
// let vov_match = [];
// let vov_not_match = [];
// function vowelsAndConsonants(s) {
//   for (let i = 0; i < s.length; i++) {
//     if (s[i] == strVoel[i]) {
//       console.log(s[i]);
//     } else {
//       console.log("aaaaaaaaaaaaaaaa", s[i]);
//     }
//     // console.log(characters.match(character));
//   }
// }
// console.log(vowelsAndConsonants("javascriptloops"));

// console.log("javascriptloops".match("/a/e"));

// let z = "nbc";
// let x = "bnc";
// for (let j = 0; j < z.length; j++) {
//   if (z.charAt(j).match(x.charAt(j))) {
//     console.log("a", z.charAt(j));
//   } else {
//     console.log(",");
//   }
// }

const vowelsAndConsonants = (str) => {
  const vowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];
  // Check for vowels

  var letters = str.split("");
  var vowelsFound = [],
    consonantsFound = [];

  for (var i in letters) {
    if (vowels.includes(letters[i])) {
      vowelsFound.push(letters[i]);
    } else {
      consonantsFound.push(letters[i]);
    }
  }
  let com = [...new Set(vowelsFound.join("") + consonantsFound.join(""))];
  for (const jum of com) {
    console.log(jum);
  }
};
console.log(vowelsAndConsonants("javascriptloops"));
