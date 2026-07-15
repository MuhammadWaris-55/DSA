// Problem Statement: Given an integer N, check whether it is prime or not. A prime number is a number that is only divisible by 1 and itself and the total number of divisors is 2.. it has exactly 2 factors 1 & itself

function print(n) {
    let counter = 0

    for (let i = 1; i <= Math.sqrt(n); i++) {
        if (n % i === 0) {
            counter++

            if (n/i !== i) {
                counter++
            }
        }
    }
    if (counter === 2) {
        console.log("This is a prime number")
    }else {
        console.log("This is not a prime number")
    }
}

print(11)

// Time Complexity: O(√n)