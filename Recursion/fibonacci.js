function print(n){
    //base case

    if (n <= 1) return n

    return print(n -1) + print(n - 2)
}

console.log(print(6))

// Time complexity: O(2ⁿ)