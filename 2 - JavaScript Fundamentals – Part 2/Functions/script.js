// Simple Function Topic
console.log("******** Example of Simple Function *********")

//Example Simple Function
function logger(User){
    console.log("My name is Furan", User)
}
let User = "Root"
logger(User)




// Function Declaration Topic
console.log("********** Example of Function Declaration **********")

//Example Function Declaration
function fruitProcessor(apples, oranges){
    console.log(apples, oranges);
    const juice =  `Juice with ${apples} appels and ${oranges} oranges!!!`;
    return juice;
}

const order = fruitProcessor(5,0);
console.log(order);




// Function Expression Topic
console.log("********** Example of Function Expression ********")

//Example Function Expression 
const age = function(birthday) {
    return 2031 - birthday;
}
const age1 = age(1991);
console.log(age1);





// Arrow Function Topic
console.log("********** Example of Arrow Function ********")

// Example Arrow Function 
const calAge = birthday => 2037 - birthday;
const age3 = calAge(1991);
console.log(age3)


// Example Arrow Function 
const retire = birthday => {
    const age = 2031 - birthday;
    const retirement = 65 - age;
    return retirement;
}
const cal = retire(1991);
console.log(cal);


//Example Arrow Function 
const retir = (birthday, firstname) => {
    const age = 2031 - birthday;
    const retirement = 65 - age;
    return `${firstname} age is ${retirement}`;
}
const cl = retir(1991,'Stokes');
console.log(cl);




// Function calling another Function Topic

//Example
const cutpieces = function(fruit) {
    return fruit * 4;
}

function fruitJuice(appels, oranges) {
    const fruitPieces_appel = cutpieces(appels);
    const fruitPieces_orange = cutpieces(oranges);

    const juice = `
    Juice has ${fruitPieces_appel} pieces of ${appels} appels and ${fruitPieces_orange} pieces of ${oranges} oranges
    `;
    return juice;
}


const juice = fruitJuice(3,2);
console.log(juice);




// Challege 

const calcAverage_score = score => {
    const avg_score = (score[0] + score[1] + score[2]) / 3;
    return avg_score;
}




function calcAverage(team) {
    const calAvgteam = calcAverage_score(team)
    return calAvgteam;
}


function checkWinner(team_1, team_2) {
    const team_D = calcAverage(team_1);
    const team_K = calcAverage(team_2);
    if (team_D > team_K) {
        console.log(`Team ${team_D} won with points (${team_D} vs ${team_K})`);
    } else {
        console.log(`Team ${team_K} won with points (${team_K} vs ${team_D})`);
    }
} 

console.log(checkWinner([44,23,71], [65,54,49]))


