// Count frequency of each element in the array
// Problem Statement: Given an array, we have found the number of occurrences of each element in the array.

// Example 1:
// Input: arr[] = {10,5,10,15,10,5};
// Output: 10  3
// 	       5  2
//         15  1
// Explanation: 10 occurs 3 times in the array
// 	            5 occurs 2 times in the array
//              15 occurs 1 time in the array


function print(arr) {
    let freq = new Map();

    for (let num of arr) {
        freq.set(num, (freq.get(num) || 0) + 1);
    }

    for (let [key, value] of freq) {
        console.log(key, value);
    }
}


print([10, 5, 10, 15, 10, 5])

// Time Complexity: O(n)
// Space Complexity: O(n)