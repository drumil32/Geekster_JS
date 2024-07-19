// Q.2
// function isEmpty(obj) {
//     // let flag = false;
//     // for( const key in obj ){
//     //     flag = true;
//     // }
//     // return flag;
//     return (Object.keys(obj).length == 0);
// }

// let person = {
//     firstName: 'John',
// }

// let person1 = {
//     lastName: 'John',
// }
// let person2 = {
//     age: 1,
//     name: 'John Doe',

// }

// isEmpty(person);
// isEmpty(person1);
// isEmpty(person2);

// Q.3
// let salaries = {
//     John: 100,
//     Ann: 160,
//     Pete: 130
// }
// let sum = Object.values(salaries).reduce((curr, seed) => curr + seed,0);
// console.log(sum);

// for (const key in salaries) {
//     sum += salaries[key];
// }
// const values = Object.values(salaries);
// for(let i=0 ; i<values.length; i++) {
//     sum += values[i];
// }
// console.log(sum);

// Q.4
const calculator = {
    num1: 0,
    num2: 0,
    read: function () {
        let num = prompt("Please enter first number");
        this.num1 = parseInt(num);
        num = prompt("Please enter second number");
        this.num2 = parseInt(num);
    },
    mul: function () {
        return this.num1 * this.num2;
    },
    sum: function () {
        return this.num1 + this.num2;
    }
}
calculator.read();
console.log(calculator.mul());
console.log(calculator.sum());