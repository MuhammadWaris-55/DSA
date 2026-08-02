// Insertion Sort Algorithm
// Problem Statement: Given an array of integers called nums, sort the array in non-decreasing order using the insertion sort algorithm and return the sorted array.

// A sorted array in non-decreasing order is an array where each element is greater than or equal to all preceding elements in the array.

function insertionSort(nums) {
    const n = nums.length;

    // Outer loop: pick each element starting from index 1
    for (let i = 1; i < n; i++) {
        let key = nums[i];   // the element we're trying to place correctly
        let j = i - 1;        // start comparing with the element just before it

        // Shift elements of the sorted portion that are bigger than key
        while (j >= 0 && nums[j] > key) {
            nums[j + 1] = nums[j]; // shift right
            j--;
        }

        // Place key in its correct spot
        nums[j + 1] = key;
    }

    return nums;
}

const array = [5, 4, 3, 2, 1];
console.log(insertionSort(array));

// Time Worst case: O(n²)
// Time Best case: O(n)