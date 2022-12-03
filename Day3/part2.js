import { readFileSync } from 'node:fs';

const contents = readFileSync("./input.txt", "utf8").split("\n")

let sum = 0

for (let i = 0; i < contents.length; i += 3){
    const elf1 = contents[i]
    const elf2 = contents[i+1]
    const elf3 = contents[i+2]

    for (const x in elf1){
        if (elf2.includes(elf1[x]) && elf3.includes(elf1[x])){
            if (elf1[x]===elf1[x].toUpperCase()){
                sum += (elf1.charCodeAt(x) - 38)
            }
            else {
                sum += (elf1.charCodeAt(x) - 96)
            }
            break
        }
    }
}

console.log(sum)