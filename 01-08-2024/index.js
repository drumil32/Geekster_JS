// var myVar = 'foo';
// (function () {
//     console.log('Original value was: ' + myVar); // foo
//     var myVar = 'bar';
//     console.log('New value is: ' + myVar); // bar
// })();

// after hoisting your code looks like this:
// var myVar = 'foo';
// (function () {
//     var myVar;
//     console.log('Original value was: ', myVar); // undefined
//     myVar = 'bar';
//     console.log('New value is: ', myVar); // bar
// })();

// let val = "foo";
// (function() {
//     console.log("This old" + val);
//     let val;
//     console.log("This new " + val);
// })();


// console.log(y);
// let y = 1;
// -------------------
// console.log(y);
// var y = 2;
// // -------------------
// y = 3;
// console.log(y);
// var y;

// var z = 1;
// let z;
// console.log(z);
// // -----------------
// console.log(z);
// let z = 1;

// function hoistExample() {
//     let a;
//     console.log("Before: ", a);
//     // a = 10;
//     console.log("After: ", a);
// }
// hoistExample();

// hoisting of var
// variable which are declared with var are going to be hoisted 
// MEANS, it's declaration are going to be at the top of their scope and initialized with undefined.
// hoisting of let
// variable which are declared with let are going to be hoisted
// MEANS, it's declaration going to be at the top of their scope but they are not going to be initialized due to this they will a part of TDZ until their actual declaration comes.
// hoisting of function statement
// function statement are going to be hoisted
// MEANS, it's declaration/defination are going to be at the top of their scope
// function expression are not going to be hoisted

// function hoistingExample() {
//     console.log("Value of a in local scope: ", a); // 1
// }
// console.log("Value of a in global scope: ", a); // undefined
// let a = 1;
// hoistingExample();

// after hoisting your code looks like this:
// function hoistingExample() {
//     console.log("Value of a in local scope: ", a); // 1
// }
// var a;
// console.log("Value of a in global scope: ", a);
// a = 1;
// hoistingExample();