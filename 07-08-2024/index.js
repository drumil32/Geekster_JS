// async function fetchData() {
//     const searchQuery = 'Kalki';

//     try {
//         const response = await fetch(`https://search.imdbot.workers.dev/?q=${searchQuery}`);
//         const data = await response.json();
//         if (data.error_code === 200) {
//             console.log(data.description);
//         } else {
//             console.log('Internal Server Error: Third party api is not working properly. Please try again later.')
//         }
//     } catch (e) {
//         console.log('Internal Server Error: Third party api is not working properly. Please try again later.');
//     }
// }
// fetchData();

const fs = require('fs');

fs.readFile('./abc1.txt', 'utf-8', (err, data) => {
    if (err) {
        console.log(err);
    } else {
        console.log(data);
    }
})