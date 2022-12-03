import { readFileSync } from 'node:fs';

const contents = readFileSync("./input.txt", "utf8").split("\n")

let sum = 0

for (const i of contents){
    const ruck1 = i.slice(0, i.length/2)
    const ruck2 = i.slice(i.length/2)

    for (const x in ruck1){
        if (ruck2.includes(ruck1[x])){
            if (ruck1[x]===ruck1[x].toUpperCase()){
                sum += (ruck1.charCodeAt(x) - 38)
            }
            else {
                sum += (ruck1.charCodeAt(x) - 96)
            }
            break
        }
    }
}

console.log(sum)