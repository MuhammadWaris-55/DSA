// Problem Statement: Given two integers N1 and N2, find their greatest common divisor.

// Input: N1 = 9, N2 = 12
// Output: 3
// Factors of 9: 1, 3, 9
// Factors of 12: 1, 2, 3, 4, 6, 12
// Common Factors: 1, 3
// Greatest common factor: 3 (GCD)

//Brute Force approach

// function print(n1, n2) {
//     let gcd = 1

//     for (let i = 1; i <= Math.min(n1, n2); i++) {
//         if (n1 % i === 0 && n2 % i === 0) {
//             gcd = i
//         }
//     }
//     console.log(gcd)
// }

// print(20, 40)

// Time Complexity: O(min(N1, N2))


//With better approach

// function print(n1, n2) {
//     let gcd = 1

//     for (let i = Math.min(n1, n2);i>=1; i--) {
//         if (n1 % i === 0 && n2 % i === 0) {
//             gcd = i
//             break
//         }
//     }
//     console.log(gcd)
// }

// print(30, 60)

// Time Complexity: O(min(N1, N2))


//optimal approach (Euclidean Algorithm)

// The Euclidean Algorithm is a method for finding the greatest common divisor (GCD) of two numbers. It operates on the principle that the GCD of two numbers remains the same even if the smaller number is subtracted from the larger number.
// gcd(a, b) = gcd(a - b, b) where a > b


function print(a, b) {
    while (a > 0 && b > 0) {
        if (a > b) a = a % b
        else b = b % a
    }
    if (a === 0) console.log(b)
    else console.log(a)
}

print(52, 10)

// Time Complexity: O(logφ(min(a, b)))