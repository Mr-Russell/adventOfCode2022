import { readFileSync } from 'node:fs';

const elves = readFileSync("./input.txt", "utf8").split("\n\n")

const calories = elves.map( elf => elf.split("\n").reduce((total,current)=>total+=parseInt(current),0))

//Part 1 Answer:
console.log("Part 1 Answer: ", Math.max(...calories))

//Part 2 Answer:
console.log("Part 2 Answer: ", calories.sort((a,b)=>b-a).slice(0,3).reduce((total,current)=>total+=parseInt(current),0))