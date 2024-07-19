// will have input => as argument
// will have output => which we do with return keyword

// function multiplyByTwo(input) {
//     return input * 2;
// }
// console.log(multiplyByTwo(2)); // 


// WAY OF DECLARING FUNCTION
// Function Statement or Traditional Function
// Hoisting means => declaring the function statement and variables(which are declared with variable) are going to be taken at the top of there scope
sum(9, 8);
function sum(num1, num2) {
    return num1 + num2;
}
multiply(1, 2);
// Function Expression
var multiply = function (num1, num2) {
    return num1 * num2;
}
// console.log(multiply(2, 3)); // 6

// function statement are going to be hoisted but function expressions are not.


// types of function
// named function
// annyonoumus function
// arrow function
// IIFE function

const subtraction = (num1, num2) => num1 - num2;

// console.log(subtraction(5, 3)); // 2
// console.log(subtraction(6, 9));

const subtraction1 = (num1, num2) => {
    return num1 - num2;
}

const subtraction2 = num1 => num1 - 10;

// console.log(subtraction1(8, 2)); // 6
// console.log(subtraction1(9, 10));
// console.log(subtraction2(10));

// that if you just have a one line of code in body then its okay to not have curly brackets.

// named function VS arrow function
// will disucss this once you guys are aware about this keyword.

// create a function which takes three arguments and do the summation of it return the final answer.

// what is user pass two arguments only 
// and what if user pass 6 arguments or any random number of args

// function sum(a = 0, b = 0, c = 0) {
//     console.log(a, b, c)
//     return a + b + c;
//     //    2   3   NaN
// }
// console.log(sum(2, 3));

// can we have a function which is adaptive in nature.
// => user can give any number of arguments your funciton should give summation of those arguments.

// rest parameter
// function sum(a, b, ...arr) {
//     // console.log(a)
//     // console.log(b)
//     // console.log(c)
//     // console.log("================================================================")
//     let sum = 0;
//     for (let i = 0; i < arr.length; i++) {
//         sum += arr[i];
//     }
//     console.log(sum);
//     return sum;
// }
// const sum = (...arr) => {
//     let s = 0;
//     for (let i = 0; i < arr.length; i++) {
//         s += arr[i];
//     }
//     console.log(s);
//     return s;
// }
// sum(); sum(1); sum(1, 2); sum(1, 2, 3); sum(1, 2, 3, 4); sum(1, 2, 3, 4, 5);


// IIFE => Imediate Invoke Function Expression

function abc() {
    console.log("Hello from abc function");
}
console.log("before iife");
(function () {
        console.log("Hello from IIFE function");
    }
)();
console.log("after iife")