import { readFileSync } from 'node:fs';

const sections = readFileSync("./input.txt", "utf8").split(/[\n,]/)

let overlaps = 0

for (let i = 0; i < sections.length; i += 2){
    //Without parseInt, code produces wrong answer due to type-coercion 
    const elf1 = sections[i].split("-").map(num=>parseInt(num))
    const elf2 = sections[i+1].split("-").map(num=>parseInt(num))

   if ((elf1[0] <= elf2[0] && elf1[1] >= elf2[1]) || (elf2[0] <= elf1[0] && elf2[1] >= elf1[1])){
    overlaps++
   }
}

console.log(overlaps)