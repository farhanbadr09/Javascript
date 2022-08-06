'use strict';
// Array Lecture 1
const friends = ['Michael','Steven','Peter'];
console.log(friends);

const years = new Array(1991,1984,2008,2020);
console.log(years[0]);
console.log(years.length);
console.log(years[years.length - 1]);

friends[2] = "Jay";
console.log(friends);

const username = "Jones";
const user = [username, 'Crickter', 2037-1991, 'teacher',friends, {"fa": "as"}];
console.log(user);

const calcAge = function (birthday) {
    return 2037 - birthday;
}

console.log(calcAge(years[0]));


//Array Lecture 2 (Methods)

// Add Element

friends.push("Jay")
const a = friends.push("Steven")
console.log(friends);
console.log(a);

friends.unshift("John"); // add element in begnning/start
console.log(friends);


// Remove Elements

friends.pop(); // last element
const popped = friends.pop(); // last element
console.log(popped);
console.log(friends);

friends.shift() // remove element in begnning/start
console.log(friends);

// Find Elements
console.log(friends.indexOf('Steven'));
console.log(friends.indexOf('Bob'));

friends.push(23);
console.log(friends.includes('Steven'));
console.log(friends.includes('Bob'));
console.log(friends.includes('23'));
console.log(friends.includes(23));


if (friends.includes("Michael")) {
    console.log("you have a friend named Michael ");
}





// Challenge

const calcTip = function(bill) {
    return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
} 
console.log(calcTip(1000));

const bills = [60,100,1000];
const tips = [calcTip(bills[0]),calcTip(bills[1]),calcTip(bills[2])];
console.log(bills,tips);
