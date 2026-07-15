// You are given an integer n. You need to return the number of digits in the number.
// The number will have no leading zeroes, except when the number is 0 itself.

function print(n) {
    let count = 0
    while (n > 0) {
        count = count + 1
        n = Math.floor(n / 10)
    }
    console.log(count)
}

print(123456)

// Time complexity : O(log₁₀ n)
// space complexity: Object(1)
