// Selection Sort Algorithm
// Problem Statement: Given an array of N integers, write a program to implement the Selection sorting algorithm.

// Example:
// Input: N = 6, array[] = {13,46,24,52,20,9}
// Output: 9,13,20,24,46,52
// Explanation: After sorting the array is: 9, 13, 20, 24, 46, 52

function selectionSort(arr) {
    const n = arr.length;

    // Outer loop: boundary of the sorted portion
    for (let i = 0; i < n - 1; i++) {
        let minIndex = i; // assume current index holds the minimum

        // Inner loop: scan the unsorted portion to find the real minimum
        for (let j = i + 1; j < n; j++) {
            if (arr[j] < arr[minIndex]) {
                minIndex = j; // found a smaller element, update tracker
            }
        }

        // Only swap if a smaller element was actually found elsewhere
        if (minIndex !== i) {
            [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
        }
    }

    return arr;
}

const array = [13, 46, 24, 52, 20, 9];
console.log(selectionSort(array)); 


// Time Complexity: O(n²)