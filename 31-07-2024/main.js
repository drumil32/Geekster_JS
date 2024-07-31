// function foo() {
//     function bar() {
//         return 3;
//     }
//     return bar();
//     console.log("how are you")
//     function bar() {
//         return 8;
//     }
// }
// console.log(foo());

// // after hoisting your code looks like this:
// // function foo() {
// //     function bar() {
// //         return 3;
// //     }
// //     function bar() {
// //         return 8;
// //     }
// //     return bar();

// // }

// function parent() {
//     var hoisted = "I'm a variable";
//     function hoisted() {
//         return "I'm a function";
//     }
//     return hoisted;
// }
// console.log(parent());
// after hoisting your code looks like this:
// function parent() {
//     var hoisted;
//     function hoisted() {
//         return "I'm a function";
//     }
//     hoisted = "I'm a variable";
//     return hoisted;
// }
// console.log(parent());

// foo();
// function foo() {
//     var bar = function () {
//         console.log(3);
//     };
//     return bar();
//     function bar() {
//         console.log(8);
//     };
//     bar();
// }
// // after hoisting your code looks like this:
// function foo() {
//     var bar;
//     function bar() {
//         console.log(8);
//     }
//     bar = function () {
//         console.log(3);
//     }
//     return bar();
//     bar();
// }
