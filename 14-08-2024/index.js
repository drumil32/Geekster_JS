// console.log(this);
// function helper(){
//     console.log(this);
// }
// helper();
// Constructor Function
// function Person(fn, ln) {
//     console.log(this);
//     this.firstName = fn;
//     this.lastName = ln;
//     this.age = 21;
//     this.sayHello = function abc() {
//         console.log(`Hello, my name is ${this.firstName} ${this.lastName}`);
//     }
//     console.log(this)
//     return this;
// }
// const person = new Person("Pradnya", "Dilip");
// console.log(person);
// person.sayHello();

// When you call any function with the new kw
// then that function will create an empty object and inside that function this will point
// to that empty object.

// const obj = {
//     firstName: 'John',
//     lastName: 'Doe',
//     sayHello: function () {
//         console.log(firstName + ' ' + lastName);
//         // console.log(this.firstName + ' ' + this.lastName);
//         console.log(`Hello, my name is ${this.firstName} ${this.lastName}`);
//     }
// }
// obj.sayHello("drumil", "akhenia");
// inside a object this will point to itself(that object)

// var obj = {
//     a: 25,
//     abc: function () {
//         return this.a;
//     }
// }
// console.log(obj.abc());
// obj.b = {
//     a:98,
//     fun: function () {
//         console.log("How are you?");
//         console.log(this.a); // 
//     },
//     a: 99
// };
// obj.b.fun();


// const person = {
//     firstName: 'John',
//     lastName: 'Doe',
//     sayHello: function () {
//         console.log(`Hello, my name is ${this.firstName} ${this.lastName}`);
//     }
// }
// person.sayHello();
// person.sayHello.call({ firstName: 'drumil', lastName: 'Akhenia' });
// person.sayHello();

// const resizedFunction = person.sayHello.bind({ firstName: 'drumil', lastName: 'akhenia' });
// resizedFunction();
// person.sayHello();
// resizedFunction();



function greeting(mood, msg) {
    console.log(`Hello, my name is ${this.firstName} ${this.lastName}`);
    console.log(`your mood is ${mood}`);
    console.log(`here is the msg ${msg}`)
}
// greeting.call({ firstName: 'John', lastName: 'doe' }, "happy", "this is john msg");
// greeting.call({ firstName: 'drumil', lastName: 'akhenia' }, "excited");

const resizedFunction = greeting.bind({ firstName: 'John', lastName: 'doe' },"Happy");
resizedFunction("happy","this is john msg");