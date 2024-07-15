// "Introducing Arrays
// Difference between Arrays Concept in Java and Javascript
// length Property
// Array Methods like
// toString()
// join and split
// push()
// pop()
// shift()
// unshift()
// Slice() 
// Splice()
// reverse()
// some()
// every()
// find()
// delete()
// sort(), sort with comparator"

// Java discussion 
// int arr[90];
// ArrayList<>

// Can we have an array with different data types in java?
// Ans : Yes, with the help of Wrapper classes.

// Array inside js
// const arr1 = [1,2,3];
// console.log(arr1);

// const arr2 = [1,2,"5,6","how are you",undefined,null,{},false,true];
// console.log(arr2);
// arr2.push("what are you doing"); // use to push the data at the end of the array
// console.log(arr2);
// arr2.push(99);
// console.log(arr2);
// console.log(arr2.length); // length property 
// arr2.pop(); // use to remove the last element and it will return the removed element
// console.log(arr2);
// console.log(arr2.length);

// shift and unshift
// const temp = arr2.shift(); // use to remove the first element and it will return the removed element
// console.log(temp)
// console.log(arr2);
// console.log(arr2.length);

// arr2.unshift(0); // use to add the element at the starting of the array
// console.log(arr2);
// console.log(arr2.length);


// const arr3 = [1, 2, 3, "how are you", { fistName: "Aman", lastName: "Kumar" }];
// arr3 = [1, 2, 3, 4]; // not allowed
// const updatedLength = arr3.push(99); // return the length of the array
// console.log(updatedLength);
// console.log(arr3);
// const updatedLengthFromStart = arr3.unshift(0);
// console.log(updatedLengthFromStart);
// console.log(arr3);
// pop & shift will return removed element
// push & unshift will return you length of updated array


// const str = arr3.toString(); // will return the data of the array with division of comma and data of returned value is string
// console.log(arr3);
// console.log(str);
// console.log(5+5);

// const arr4 = [1, 2, 3, 4,{},undefined,null];
// const arr5 = arr4.join('A');
// console.log(arr4);
// console.log(arr5);

// const str = "How are you? What are you doing??";
// const arr5 = str.split('you');
// console.log(str);
// console.log(arr5);

// Slice
// The slice() method can be used to create a copy of an array or return a portion of an array. It is important to note that the slice() method does not alter the original array but instead creates a shallow copy.

// const arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const arr1 = arr.slice(2, 5);
// console.log(arr1);
// console.log(arr);
// arr1[0] = 99;
// console.log(arr);


// const arr2 = [1,2,3];
// const arr3 = arr2;
// arr3[0] = 99;
// console.log(arr3);
// console.log(arr2);

// const arr = [1,2,3,4,4,5];
// const arr1 = arr.reverse(); // it will reverse the original array as well as return the updated array
// console.log(arr)
// console.log(arr1);


// 1 => 000...1
// &
// 3 => 000..10

// 32 => 0 & 0 => 0
// 31,30,29 ...
//  0 & 1 => 0
//  1 & 0 => 0
const arr = [0,1, 2, 3, 4, 4, 5];
const flag = arr.some(function isOdd(val) {
    console.log(val);
    // return (val & 1);
});
console.log(arr, flag);

