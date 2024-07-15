// // const data = prompt("Give a number");

// // // alert(data);
// // // alert(345);


// // console.log(data);

// // console.log(typeof data);
// // console.log("we are here");

// // const num = parseInt(data);
// // console.log(num);
// // console.log(typeof num);

// // const readline = require('readline').createInterface({
// //     input: process.stdin,
// //     output: process.stdout
// // });

// // readline.question('Who are you?', name => {
// //     console.log(`Hey there ${name}!`);
// //     readline.close();
// // });

// // function sum(num1, num2) {
// //     return num1 + num2;
// // }

// // const readline = require('readline').createInterface({
// //     input: process.stdin,
// //     output: process.stdout
// // });
// // stdin => standard input
// // stdout => standard output
// let num1, num2;

// // console.log(process.stdin);

// // readline.question('Give a number : ', function abc(num) {
// //     // num1 = parseInt(num); // Ensure num1 is a number
// //     num1 = parseInt(num);
// //     readline.question('Give another number : ', num => {
// //         // num2 = parseInt(num); // Ensure num2 is a number
// //         num2 = parseInt(num);
// //         readline.close();
// //         console.log(`The sum is: ${sum(num1, num2)}`); // string literal
// //         // `The sum is: ${sum(num1, num2)}`;
// //         console.log('The sum is: ' + sum(num1, num2));
// //     });
// // });


// // const person = {
// //     firstName: 'Shubham',
// //     lastName: 'Singh'
// // }
// // console.log(person.firstName)

// // funcational scope | block scope | global scope

// // var has a functional scope

// // var variable have funcational scope
// // let variable have block scope

// "use strict"; // => it doesn't mean that now its strict type langues

// // fun();
// // function fun() {
// //     console.log(v);
// //     if (true) {
// //         console.log(l); // 
// //     }
// //     console.log(v); // 78
// //     console.log(l); // Refrence Error
// // }
// // console.log(v)
// // var v = 78;
// // var v = 89;
// // let l = 89;
// try {
//     y = 90;
// }catch (e) {
//     console.log(e.message); // ReferenceError: y is not defined
// }
// console.log(y);
// // var a; // => declaration of variable

// // you can use var variables before its declaration but value of that variable will be undefined
// // you can't use let,const before its declaration

// // function abc(){
// //     var g = 34;
// //     function def(){
// //         console.log(g); //
// //     }
// //     return def;
// // }
// // const z = abc();
// // // z();
// y = 78;
// console.log(y);


// "use strict";
x = 3.14;
console.log(x);

function abc() {
    "use strict";
    y = 678;
    console.log(y);
}
try {
    abc();
}catch(e){
    console.log(e.message);
}
 z = 67;
console.log(z);