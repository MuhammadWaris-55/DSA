// Find the highest/lowest frequency element

// Problem Statement: Problem Statement: Given an array of size N. Find the highest and lowest frequency element.

// Goal: Find which element appears the most times, and which appears the least times.

// Example 1:
// Input: array[] = {10,5,10,15,10,5};
// Output: 10 15
// Explanation: The frequency of 10 is 3, i.e. the highest and the frequency of 15 is 1 i.e. the lowest.


function print(arr) {
    let freq = new Map();

    // Step 1: Count frequency of each element
    for (let num of arr) {
        freq.set(num, (freq.get(num) || 0) + 1);
    }

    let maxFreq = -Infinity;
    let minFreq = Infinity;
    let highestElement, lowestElement;

    // Step 2: Go through the map once to find max & min
    for (let [num, count] of freq) {
        if (count > maxFreq) {
            maxFreq = count;
            highestElement = num;
        }
        if (count < minFreq) {
            minFreq = count;
            lowestElement = num;
        }
    }

    console.log(highestElement, lowestElement);
}

print([10, 5, 10, 15, 10, 5])

// O(n) time, O(n) space