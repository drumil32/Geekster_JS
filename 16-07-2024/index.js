// observer the pattern
// have sudo a code
// then write code in js

// We will take a row as input from user
// 1 => 1
// 2 => 3
// 3 => 5
// 4 => 7
// 5 => 9
// println vs print

// const inquirer = require('inquirer');

// const questions = [
//   {
//     type: 'input',
//     name: 'name',
//     message: "What's your name?",
//   },
// ];

// inquirer.prompt(questions).then(answers => {
//   console.log(`Hi ${answers.name}!`);
// });

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

readline.question(`Please give a number : `, row => {
    row = parseInt(row);
    let space = row * 2 - 2;
    for (let i = 1; i <= row; i++) {
        let str = "";
        for (let k = 1; k <= space; k++) {
            str += ' ';
        }
        for (let j = 1; j < 2 * i; j++) {
            str += j + ' ';
        }
        console.log(str);
        space -= 2;
    }
    readline.close()
});

// input: 1
// 1. 1

// input: 2
// 1.   1
// 2. 1 2 3

// input: 3
// 1
// 1 2 3
// 1 2 3 4 5

// // 1. space => 6
// // 2. space => 4
// // 3. space => 2
// // 4. space => 0
// input: 4
// 1
// 1 2 3
// 1 2 3 4 5
// 1 2 3 4 5 6 7

// // 1. space => 8
// input: 5
// 1
// 1 2 3
// 1 2 3 4 5
// 1 2 3 4 5 6 7
// 1 2 3 4 5 6 7 8 9