// Print Name N times using Recursion
// Problem Description: Given an integer N, write a program to print your name N times.

function print(i, n){
    if(i > n) return 
    console.log("Waris")

    print(i + 1, n)
}

print(1, 5)

// Time Complexity: O(n)
// Space Complexity: O(n)