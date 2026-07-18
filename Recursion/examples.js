//Recursion: When a function calls itself unitl a specified condition is met

//Example
function countDown(n) {
  if (n <= 0) {         // base case: stop here
    console.log("Done!");
    return;
  }
  console.log(n);
  countDown(n - 1);     // recursive case: call myself with a smaller number
}

countDown(3);


//Example of infinite recursion

// function countDown(n) {
//   console.log(n);
//   countDown(n); // bug: still passing n, never n - 1
// }

// countDown(3);