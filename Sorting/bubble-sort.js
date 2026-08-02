// Bubble Sort Algorithm .
// Problem Statement: Given an array of N integers, write a program to implement the Bubble Sorting algorithm.

function bubbleSort(arr) {
    const n = arr.length;

    // Outer loop: controls how many passes we make
    for (let i = 0; i < n - 1; i++) {
        let swapped = false; // tracks if any swap happened in this pass

        // Inner loop: compares adjacent elements, shrinks range each pass
        for (let j = 0; j < n - 1 - i; j++) {
            if (arr[j] > arr[j + 1]) {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]; // swap
                swapped = true;
            }
        }

        // If no swaps happened, array is already sorted — stop early
        if (!swapped) break;
    }

    return arr;
}

const array = [33, 20, 11, 17, 8];
console.log(bubbleSort(array));

// Time (worst/average case): O(n²)
// Time (best case): O(n)