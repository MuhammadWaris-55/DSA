// Sum of first N Natural Numbers

// Problem Statement: Given a number ‘N’, find out the sum of the first N natural numbers .

function print(n){
    if (n === 1) {
        return 1
    }

    return n + print(n - 1)
}

console.log(print(5))

// Time Complexity: O(N)