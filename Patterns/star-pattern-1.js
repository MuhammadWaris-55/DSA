// let n = 5
// for(let i = 0; i < n; i++){
//     let row = ""
//     for(let j = 0; j < n; j++){
//         row += "*"
//     }
//     console.log(row)
// }

const fs = require('fs');

let n = Number(fs.readFileSync('input.txt', 'utf8').trim());
let output = "";

for (let i = 0; i < n; i++) {
    let row = "";
    for (let j = 0; j < n; j++) {
        row += "*";
    }
    output += row + "\n";
}

fs.writeFileSync('output.txt', output);