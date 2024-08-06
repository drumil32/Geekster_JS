const fs = require('fs');

const firstFilePath = './first.txt';
const secondFilePath = './second.txt';
const thirdFilePath = './third.txt';
const fourthFilePath = './fourth.txt';

// fs.readFile(firstFilePath, 'utf8', (err, firstFileData) => {
//     if (err) {
//         console.log(err);
//     } else {
//         fs.appendFile(secondFilePath, firstFileData, (err) => {
//             if (err) {
//                 console.log(err);
//             } else {
//                 fs.readFile(secondFilePath, 'utf8', (err, secondFileData) => {
//                     if (err) {
//                         console.log(err);
//                     } else {
//                         fs.appendFile(thirdFilePath, secondFileData, (err) => {
//                             if (err) {
//                                 console.log(err);
//                             } else {
//                                 fs.readFile(thirdFilePath, 'utf8', (err, thirdFileData) => {
//                                     if (err) {
//                                         console.log(err);
//                                     } else {
//                                         fs.appendFile(fourthFilePath, thirdFileData, (err) => {
//                                             if (err) {
//                                                 console.log(err);
//                                             } else {
//                                                 fs.readFile(fourthFilePath, 'utf-8', (err, fourthFileData) => {
//                                                     if (err) {
//                                                         console.log(err);
//                                                     } else {
//                                                         console.log('All files have been merged successfully.');
//                                                         console.log(fourthFileData);
//                                                     }
//                                                 });
//                                             }
//                                         });
//                                     }
//                                 });
//                             }
//                         });
//                     }
//                 });
//             }
//         })
//     }
// });

// Promise => this is a one class in java script.

async function readFile(filePath) {
    return new Promise((resolve, reject) => {
        fs.readFile(filePath, 'utf8', (err, data) => {
            if (err) {
                reject(err);
            } else {
                resolve(data);
            }
        });
    });
}

// const promise = readFile(firstFilePath);
// promise.then((data) => {
//     console.log(data);
// })
// promise.catch(err => {
//     console.log(err);
// });

async function appendFile(filePath, data) {
    return new Promise((resolve, reject) => {
        fs.appendFile(filePath, data, (err) => {
            if (err) {
                reject(err);
            } else {
                resolve();
            }
        });
    });
}

// readFile(firstFilePath)
//     .then(firstFileData => {
//         appendFile(secondFilePath, firstFileData)
//             .then(() => {
//                 readFile(secondFilePath)
//                     .then(secondFileData => {
//                         appendFile(thirdFilePath, secondFileData)
//                             .then(() => {
//                                 readFile(thirdFilePath)
//                                     .then(thirdFileData => {
//                                         appendFile(fourthFilePath, thirdFileData)
//                                             .then(() => {
//                                                 readFile(fourthFilePath)
//                                                     .then(fourthFileData => {
//                                                         console.log(fourthFileData);
//                                                     })
//                                             })
//                                     })
//                             })
//                     })
//             })
//     }).catch((err) => {
//         console.log(err);
//     });
async function helper() {
    const firstFileData = await readFile(firstFilePath);
    const secondFileAppendResponse = await appendFile(secondFilePath, firstFileData);
    const secondFileData = await readFile(secondFilePath);
    const thirdFileAppendResponse = await appendFile(thirdFilePath, secondFileData);
    const thirdFileData = await readFile(thirdFilePath);
    const fourthFileAppendResponse = await appendFile(fourthFilePath, thirdFileData);
    const fourthFileData = await readFile(fourthFilePath);
    console.log(fourthFileData);
    console.log(6);
}
console.log("1")
helper();
console.log("2");
// function helper() {

// }

// const firstFileReadPromise = readFile(firstFilePath);
// firstFilePath.then((firstFileData) => {
//     const seconFileAppendPromise = appendFile(secondFilePath, firstFileData);
//     seconFileAppendPromise.then(() => {
//         const secondFileReadPromise = readFile(secondFilePath);
//         secondFileReadPromise.then((secondFileData) => {
//             const thirdFileAppendPromise = appendFile(thirdFilePath, secondFileData);
//             thirdFileAppendPromise.then(() => { });
//             thirdFileAppendPromise.catch((err) => {
//                 console.log(err);
//             })
//         });
//         seconFileAppendPromise.catch((err) => {
//             console.log(err);
//         });
//     });
//     seconFileAppendPromise.catch(err => {
//         console.log(err);
//     });
// });



function fetchData1(callback) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Fetched data 1");
            resolve("data1");
        }, 1000);
    });
}

function fetchData2(data1, callback) {
    setTimeout(() => {
        console.log("Fetched data 2 using " + data1);
        callback(null, "data2");
    }, 1000);
}

function fetchData3(data2, callback) {
    setTimeout(() => {
        console.log("Fetched data 3 using " + data2);
        callback(null, "data3");
    }, 1000);
}

fetchData1((error, data) => {
    if (error) {
        console.error(error);
    } else {
        fetchData2(data, (error, data2) => {
            if (error) {
                console.error(error);
            } else {
                fetchData3(data2, (error, data3) => {
                    if (error) {
                        console.error(error);
                    } else {
                        console.log(data3);
                    }
                });
            }
        });
    }
});

// PROMPT FOR CHATGPT
// I want to practice solving interview questions.
// The interviewer will present me with a "callback hell" problem, and I am expected to solve it first using promises and then with async/await.
// So, please act as my interviewer and ask me the following questions.
// Please refrain from providing the solution for now. I will ask if I need it.