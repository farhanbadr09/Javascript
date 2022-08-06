"use strict";
const game = {
  team1: "Bayern Munich",
  team2: "Borrusia Dortrmund",
  player: [
    [
      "Neuer",
      "Pavard",
      "Martinez",
      "Alaba",
      "Davies",
      "Kimmich",
      "Goretzka",
      "Coman",
      "Muller",
      "Gnarby",
      "Lawandowski",
    ],
    [
      "Burki",
      "Schulz",
      "Hummels",
      "Akanji",
      "Hakimi",
      "Weigl",
      "Witsel",
      "Hazard",
      "Brandt",
      "Sancho",
      "Gotze",
    ],
  ],
  score: "4:0",
  scored: ["Lewandowski", "Gnarby", "Lewandowski", "Hummels"],
  date: "Nov 9th, 2037",
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

// 1
const a = game.scored;
for (const [goal_number, player] of game.scored.entries()) {
  console.log(`Goal ${goal_number + 1} : ${player}`);
}

// 2

const odds = Object.entries(game.odds);

let average = 0;
for (const [a, b] of odds.values()) {
  average += b;
}
average /= odds.length;
console.log(average);

// 3
const od = Object.entries(game.odds);
console.log(od);
for (const [team, point] of od) {
  console.log(`Odd of victory ${game[team]} : ${point}`);
}

// OR
for (const [team, odd] of Object.entries(game.odds)) {
  const teamStr = team === "x" ? "draw" : `Victories ${game[team]}`;
  console.log(`Odd of ${teamStr} ${odd}`);
}
