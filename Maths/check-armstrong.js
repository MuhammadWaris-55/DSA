// Problem Statement:Given an integer N, return true it is an Armstrong number otherwise return false.

// An Amrstrong number is a number that is equal to the sum of its own digits each raised to the power of the number of digits.
// Its the summation of cubes of its digits

// Input:N = 153
// Output:True
// Explanation: 1^3+5^3+3^3 = 1 + 125 + 27 = 153

function print(n){
    let revNum = 0
    let originalNum = n
    let sum = 0

    while (n > 0) {
        let lastDigit = n % 10
        revNum = (revNum * 10) + lastDigit
        sum = sum + (lastDigit*lastDigit*lastDigit)
        n = Math.floor(n / 10)
    }
    if (sum === originalNum) {
        console.log("Number is Armstrong")
    } else {
        console.log("Number is not a Armstrong")
    }
}

print(153)
