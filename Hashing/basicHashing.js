// Number Hashing
// You use a number itself (or a small transformation of it) as the index to store/check data.
// Simple version — using an array as a hash table:

let arr = [1, 2, 2, 3, 4, 4, 4];
let hash = new Array(10).fill(0); // enough size to cover all numbers

for (let num of arr) {
    hash[num]++; // count frequency of each number
}

console.log(hash[4]); // 3 → number 4 appeared 3 times

//If numbers are huge or negative, you use a Map instead of an array:


// let map = new Map();
// for (let num of arr) {
//     map.set(num, (map.get(num) || 0) + 1);
// }


// Character Hashing
// Same idea, but for letters. Since there are only 26 lowercase letters, you can map each character to a fixed index using its position in the alphabet.

// let str = "banana";
// let hash = new Array(26).fill(0);

// for (let ch of str) {
//     hash[ch.charCodeAt(0) - 'a'.charCodeAt(0)]++;
// }

// console.log(hash[0]); // 'a' count → 3
// console.log(hash[1]); // 'b' count → 1