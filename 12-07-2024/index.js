// let num1 = 6, num2 = 8;
// let ans1 = num1 + num2;
// console.log(ans1);
// let num3 = 89, num4 = 90;
// let ans2 = num3 + num4;
// console.log(ans2);

// function sum(num1, num2) {
//     return num1 + num2;
// }
// function subtract(num1, num2) {
//     return num1 - num2;
// if number to string
// '6'-'2'
// if string to number
// 6-2
// }

// type Conversion
// Implict
// Explicit
// type Coercion
// console.log(sum('6', 2)); // 62
// console.log(subtract('6', 2));  // 4
// console.log(subtract('abc', 56));
// console.log(subtract('7', '8'));
// console.log(1 + 2 + "2")

// 'abc' - 56 => NaN - 56 => NaN

// let ans3 = sum(num1, num2);
// let ans4 = sum(num3, num4);
// let ans5 = sum("Tamir", "Alam")
// let ans6 = sum('abc',6);

// console.log(ans3);
// console.log(ans4);
// console.log(ans5);

// // js => loosely typed language
// // java => strictly typed language

// // int a;
// // Intgerer a;


// How Variables are going to be stored in side a memory

// let student = {
//     'firstName': 'Kunal',
//     'lastName': 'Mittal'
// }

// console.log(student);
// console.log(student.firstName);
// console.log(student.lastName);

// function first() {
//     let num1, num2;
//     num2 = 56;
//     num1 = 560;
//     let obj = {
//         firstName: 'Rohit',
//         lastName: 'Yadav'
//     }
//     console.log('First : Before invoking second');
//     second(num1, num2, obj);
//     console.log('First : After invoking second');
// }
// function second(a, b, c) {

//     console.log('Second : execution is going on');
// }

// first();


// LOOPS
for (let i = 0; i < 10; i++) {
    console.log(i);
}
let i = 0;
while (i < 10) {
    console.log(i);
    i++;
}
i = 0;
do {
    console.log(i);
} while (i < 10);

let a = 6, b = 0;
while (b < a) {
    b++;
    console.log(b);
}