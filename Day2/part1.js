import { readFileSync } from 'node:fs';

const strategy = readFileSync("./input.txt", "utf8").split("\n")

const opponent = {
    A: "rock",
    B: "paper",
    C: "scissors"
}

const me = {
    X: ["rock", 1],
    Y: ["paper", 2],
    Z: ["scissors", 3]
}

const winners = {
    "rock": "scissors",
    "paper": "rock",
    "scissors": "paper"
}

const stratPairs = strategy.map(pair=>pair.split(" "))

let score = 0

for (const pair of stratPairs){
    const theirChoice = pair[0]
    const myChoice = pair[1]
    const myChoicePoints = me[myChoice][1]

    score += myChoicePoints

    if (opponent[theirChoice] === me[myChoice][0]){
        score += 3
    } else if (opponent[theirChoice] === winners[me[myChoice][0]]){
        score += 6
    }

}

//Part 1 Answer
console.log("Part 1 Answer: ", score)