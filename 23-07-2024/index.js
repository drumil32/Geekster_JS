// HOF
//  a function which can take another function ar argument or return another function 

// function helper(fun) {
//     fun();
//     return function () {

//     }
// }

// function fun1() {

// }

// helper(fun1);

// map is HOF
// const arr = [1, 2, 3];
// const doubleArray = [];

// for (let i = 0; i < arr.length; i++) {
//     doubleArray.push(arr[i] * 2);    
// }
// console.log(doubleArray)
// const doubleArray2 = arr.map((currentElement, index, actulArray) => {
//     console.log("value : " + currentElement);
//     console.log("index : " + index);
//     console.log("actualArray : " + actulArray);
//     return currentElement * 2;
// });
// console.log(doubleArray2);
// map will run your function for each element and your function should return a value each time which will be become part of your output array

// function myMap(arr, callback) {
//     const result = [];
//     for (let i = 0; i < arr.length; i++) {
//         result.push(callback(arr[i], i, arr));
//     }
//     return result;
// }
// Array.prototype.myMapArray = function (callback) {
//     const arr = this;
//     const result = [];
//     for (let i = 0; i < arr.length; i++) {
//         result.push(callback(arr[i], i, arr));
//     }
//     return result;
// }
// const doubleArray3 = arr.myMapArray((currentElement, index, actulArray) => {
//     console.log("value : " + currentElement);
//     console.log("index : " + index);
//     console.log("actualArray : " + actulArray);
//     return currentElement * 2;
// });
// const doubleArray3 = myMap(arr, (currentElement, index, actulArray) => {
//     console.log("value : " + currentElement);
//     console.log("index : " + index);
//     console.log("actualArray : " + actulArray);
//     return currentElement * 2;
// });
// console.log(doubleArray3)

// fillter will have one callback function
// filter will run this callback function for each element of our array
// if this callback function returns true then that element will be filtered otherwise it will not filtered

// const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

// const filteredArray = arr.filter((currentElement, index, array) => {
//     return currentElement & 1;
// });

// console.log(filteredArray);

// function myFilter(arr, callback) {
//     const result = [];
//     for (let i = 0; i < arr.length; i++) {
//         if (callback(arr[i], i, arr)) {
//             result.push(arr[i]);
//         }
//     }
//     return result;
// }

// const filteredArray2 = myFilter(arr, (currentElement, index, array) => {
//     return currentElement & 1;
// });
// console.log(filteredArray2);


// reduce will have two arguments (accumulator, currentValue) and one callback function

const arr = [1, 2, 3];
// let sum = 0;
// for (let i = 0; i < arr.length; i++) {
//     sum += arr[i];
// }
// console.log(sum);

// let sum1 = arr.reduce((accumulator, currentValue, index, actualArray) => {
//     console.log("accumulator : " + accumulator);
//     console.log("currentValue : " + currentValue);
//     console.log("index : " + index);
//     console.log("actualArray : " + actualArray);
//     return accumulator + currentValue;
// }, 5);
// console.log(sum1);

// High performing students
// You are given an array of objects representing a group of students, each with a name and an array of test scores.Your task is to use map, filter, and reduce to calculate the average test score for each student, and then return an array of objects containing only the students who have an average score above 90.

// task 1 => calculate the average test score for each student
// task 2 => if average score of the student is above 90 then we are going to filter it out

// Input:
// const students = [
//     { name: "Alice", scores: [90, 85, 92] },
//     { name: "Bob", scores: [75, 80, 85] },
//     { name: "Charlie", scores: [90, 95, 85] },
//     { name: "Jack", scores: [100, 100, 100] }
// ];

// const excellentStudents = students.filter(student => {
//     const totalScore = student.scores.reduce((acc, score) => {
//         return acc + score;
//     }, 0);
//     const averageScore = totalScore / student.scores.length;
//     console.log(student);
//     console.log(averageScore);
//     return averageScore > 90;
// });
// console.log(excellentStudents);


                            // ARROW FUNCTION vs TRADITIONAL FUNCTION

// arrow function can not be used as constructor function
// but tradional function can be used as constructor function

// arrow function do not have arguments object
// traditional function have arguments object

// const person1 = {
//     firstName: 'Pradnya',
//     lastName: 'Dilip'
// }
// // object litteral
// const person2 = {
//     firstName: 'Nilesh',
//     lastName: 'Tiwari'
// }

// constructor function
// function Person(firstName, lastName) {
//     this.firstName = firstName;
//     this.lastName = lastName;
//     return this;
// }

// const Person = (firstName, lastName) => {
//     this.firstName = firstName;
//     this.lastName = lastName;
//     return this;
// }

// const person3 = new Person("Kunal", "Mittal");

// const persons = [];

// for (let i = 0; i < 500; i++) {
//     persons.push(new person("John", "Doe"));
// }



// function calculateSum() {
//     console.log(arguments);
//     let sum = 0;
//     for (const key in arguments) {
//         sum += arguments[key];
//     }
//     return sum;
//     // let sum = 0;
//     // for (let i = 0; i < num.length; i++) {
//     //     sum += num[i];
//     // }
//     // return sum;
// }
// // const sum = calculateSum(1, 2, 3, 4, 5, 6);
// // console.log(sum);
// console.log("============================================================");
// console.log(arguments);
// console.log("============================================================")
// const calculateMultiplication = () => {
//     console.log(arguments);
//     let ans = 1;
//     for (const key in arguments) {
//         ans *= arguments[key];
//     }
//     return ans;
// }
// const ans = calculateMultiplication(1,2,3,4,5,6);
// console.log(ans);