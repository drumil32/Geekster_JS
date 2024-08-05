// function buyCheez() {
//     return new Promise(function (resolve, reject) {
//         setTimeout(resolve, 3_000);
//     });
// }

// buyCheez().then(() => console.log('call drumil'));
// console.log('boil water');
// console.log('open packet');
// console.log('wait for a min to become a water hot');
// console.log('put a meeggi inside that');



// reading a file in js => is a heavy task 

const fs = require('fs');


const filePath = './abc.txt';
fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
        console.log(err);
    } else {
        console.log(data);
    }
});
console.log('after making a call to read file');
console.log('after making a call to read file');
console.log('after making a call to read file');
for (let i = 0; i < 10_00000_00_000; i++) { } // heavy syncronous task