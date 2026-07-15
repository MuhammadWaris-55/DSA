// Problem Statement: Given an integer N return the reverse of the given number.

// Note: If a number has trailing zeros, then its reverse will not include them. For e.g , reverse of 10400 will be 401 instead of 00401.

function print(n) {
    let revNum = 0

    while (n > 0) {
        let lastDigit = n % 10
        revNum = (revNum * 10) + lastDigit
        n = Math.floor(n / 10)
    }
    console.log(revNum)
}

print(3456)

// Time complexity : O(log₁₀ n) , any number that divides by n will be base of log
// space complexity: O(1)