// const fs = require('fs');

// // ============ read input ============
// let input = fs.readFileSync('input.txt', 'utf8').trim();
// let lines = input.split('\n');
// let n = Number(lines[0]);

// let output = "";

// for (let i = 0; i < n; i++) {
//     let row = "";
//     for (let j = 0; j <= i; j++) {
//         row += "*";
//     }
//     output += row + "\n";
// }

// // ============ write output ============
// fs.writeFileSync('output.txt', output);

function printStars(n) {

    for (let i = 0; i < n; i++) {
        let row = "";
        for (let j = 0; j <= i; j++) {
            row += "*";
        }
        console.log( row);
    }
}

printStars(5)