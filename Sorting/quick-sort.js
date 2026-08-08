function quickSort(arr, low = 0, high = arr.length - 1) {
    if (low < high) {
        // Partition the array and get the pivot's final index
        const pivotIndex = qs(arr, low, high);

        // Recursively sort left part (before pivot)
        quickSort(arr, low, pivotIndex - 1);

        // Recursively sort right part (after pivot)
        quickSort(arr, pivotIndex + 1, high);
    }

    return arr;
}

function qs(arr, low, high) {
    const pivot = arr[high]; // choosing last element as pivot
    let i = low - 1; // boundary for smaller elements

    for (let j = low; j < high; j++) {
        if (arr[j] <= pivot) {
            i++;
            [arr[i], arr[j]] = [arr[j], arr[i]]; // swap
        }
    }

    // place pivot in its correct position
    [arr[i + 1], arr[high]] = [arr[high], arr[i + 1]];

    return i + 1; // pivot's final index
}

// Usage
const arr = [38, 27, 43, 3, 9];
console.log(quickSort(arr));

// Time Complexity: Best: O(n log n)   Worst Case: O(n²)
// Space Complexity: O(log n)