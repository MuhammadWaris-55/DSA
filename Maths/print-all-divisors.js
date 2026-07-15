// Problem Statement: Given an integer N, return all divisors of N.

// A divisor of an integer N is a positive integer that divides N without leaving a remainder. In other words, if N is divisible by another integer without any remainder, then that integer is considered a divisor of N.

// Input: N = 12
// Output: [1, 2, 3, 4, 6, 12]
// Explanation: The divisors of 12 are 1, 2, 3, 4, 6, 12.

// function print(n) {
//     for (let i = 1; i <= n; i++) {
//         if (n % i === 0) {
//             console.log(i)
//         }
//     }
// }

// print(36)

// Time Complexity: O(N)


//With better approach
function print(n) {
    let divisors = []

    for (let i = 1; i * i <= n; i++) {
        if (n % i === 0) {
            divisors.push(i)

            if (i !== n / i) {
                divisors.push(n / i)
            }
        }
    }

    divisors.sort((a, b) => a - b)
    console.log(divisors)
}

print(36)


// Time Complexity: O(√n)