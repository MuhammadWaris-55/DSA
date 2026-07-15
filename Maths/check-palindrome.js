// Problem Statement: Given an integer N, return true if it is a palindrome else return false.

// A palindrome is a number that reads the same backward as forward. For example, 121, 1331, and 4554 are palindromes because they remain the same when their digits are reversed.

function print(n) {
    let revNum = 0
    let originalNum = n

    while (n > 0) {
        let lastDigit = n % 10
        revNum = (revNum * 10) + lastDigit
        n = Math.floor(n / 10)
    }
    if (revNum === originalNum) {
        console.log("Number is Palindrome")
    } else {
        console.log("Number is not a Palindrome")
    }

}

print(111)

// Time Complexity: O(log₁₀ n)