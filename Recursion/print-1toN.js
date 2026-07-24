// Print 1 to N using Recursion
// Problem Description: Given an integer N, write a program to print numbers from 1 to N.

// function print(i, n) {
//     if (i > n) return

//     console.log(i)

//     print(i + 1, n)
// }

// print(1, 5)




// Print N to 1 using Recursion

// Problem Description: Given an integer N, write a program to print numbers from N to 1


// function print(i, n) {
//     if (i < n) return

//     console.log(i)

//     print(i - 1, n)
// }

// print(5, 1)





// Print 1 to N using Recursion  using Backtracking
// Problem Description: Given an integer N, write a program to print numbers from 1 to N.

// function print(i, n) {
//     if (i < n) return

//     print(i - 1, n)

//     console.log(i)

// }

// print(5, 1)




// Print N to 1 using Recursion using Backtracking

// Problem Description: Given an integer N, write a program to print numbers from N to 1


function print(i, n) {
    if (i > n) return

    print(i + 1, n)
    
    console.log(i)

}

print(1, 5)