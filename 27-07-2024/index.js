// const person = {
//     firstName: 'John',
//     lastName: 'Doe',
//     age: 30,
//     address: {
//         street: '123 Main St',
//         city: 'New York',
//         state: 'NY',
//         zipCode: '12345'
//     },
//     faviourateFruits: ["apple", "watermelon"],
//     increaseAgeByOne: function () {
//         this.age += 1;
//     },
//     greet: function () {
//         console.log(`Hello, my name is ${this.firstName} ${this.lastName}`);
//     }
// }

// const person1 = person; // shallow copy

// console.log(person1);
// person.gender = 'male';
// console.log(person1);
// person.firstName = "John32";
// console.log(person1);

// object desctructing
// const person2 = { ...person } 
// person2.firstName = "person2";
// console.log(person);
// person.firstName = "John32";
// console.log(person2);
// console.log(person2.address);
// person.address.city = "ABD";
// console.log(person2.address);
// it will make a deep copy of premitive data type and shallow copy of non primitive types
// const { firstName, lastName } = person;
// console.log(person1);
// console.log(firstName + ' ' + lastName);

// js will take declaration of a vaiable at the top its scope
// console.log(a);
// var a = 10;

// ===== before interator run the code
// var a;
// console.log(a);
// a = 10;

// function fun() {
//     console.log(b);
//     var b = 56;
// }

// console.log(b);

// before interator run the code
// function fun() {
//     var b;
//     console.log(b);
//     b = 56;
// }

// TDZ
// let,const,var => are going to be hoisted
// but 

// console.log(a);
// let a;

// ReferenceError: Cannot access 'a' before initialization

// ReferenceError: a is not defined

// function statement are going to be hoisted
// but function expression are not going to be hoisted
// fun();
// function fun() {
//     console.log("function statement");
// }
console.log(funVar)
funVar();
var funVar = function () {

}

// TypeError & ReferenceError