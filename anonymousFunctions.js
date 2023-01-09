// 1. Using the built-in map array function and an anonymous function, square all items in a number array

let a = function (arr) {
  return arr.map(el => el * el);
};

console.log(a([1, 2, 3]));


// 2. Write an IIFE function using an anonymous function which sums two numbers and logs the sum out to the console 

(function (a, b) {
  let c = a + b;
  console.log(c);
})(4, 8);


// 3. Make this function an arrow function:
// function timesTwo(number) {
//    return number * 2
// }

let timesTwo = number => number * 2;
        
console.log(timesTwo(4));