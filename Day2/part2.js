import { readFileSync } from 'node:fs';

const strategy = readFileSync("./input.txt", "utf8").split("\n")

const opponent = {
    A: "rock",
    B: "paper",
    C: "scissors"
}

const me = {
    X: "lose",
    Y: "draw",
    Z: "win"
}

const winners = {
    "rock": "paper",
    "paper": "scissors",
    "scissors": "rock"
}

const losers = {
    "rock": "scissors",
    "paper": "rock",
    "scissors": "paper"
}

const values = {
    "rock": 1,
    "paper": 2,
    "scissors": 3
}

const stratPairs = strategy.map(pair=>pair.split(" "))

let score = 0

for (const pair of stratPairs){
    const theirChoice = pair[0]
    const outcome = pair[1]

    if (me[outcome] === "lose"){
        score += values[losers[opponent[theirChoice]]]
    } 
    else if (me[outcome] === "draw"){
        score += 3
        score += values[opponent[theirChoice]]
    } 
    else if (me[outcome] === "win"){
        score += 6
        score += values[winners[opponent[theirChoice]]]
    }
}

console.log("Part 2 Answer: ", score)