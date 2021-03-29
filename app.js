// // promises 29/03/2021 ****************holi *********
// // Example one for promise
// let promise = new Promise((resolve, reject) => {
//     // console.log(resolve);
//     // console.log(reject);
//     let isAvailable = false; // true and false value will give the required output
//     if (isAvailable) {
//         resolve("yes i am available");
//     } else {
//         reject("sorry not available");
//     }
// })

// promise.then(function (data) {
//     console.log(data);
// })

// promise.catch(function (error) {
//     console.log(error);
// })

// Example two for promise 

// let room = new Promise((resolve, reject) => {
//     let cleaned = false;
//     if (cleaned) {
//         resolve("yes room is cleaned");
//     } else {
//         reject("do something to clean");
//     }
// })
// room.then(data => console.log(data)).catch(err => console.log(err));

// single thereaded event loop object used for the time delay perupose - setTimeout Function.

// setTimeout(function () {
//     console.log("hello i am timeout function"); //time is specified in ms 
// }, 2000);

// let user = "snehangshu";
// console.log(user);
// window.clearInterval();

// promises are used to call api and connecting to AJAX calls

// let promise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve("connect to uber")
//     }, 1201) // resolve part
//     setTimeout(() => {
//         reject("ubable to connect to internet");
//     }, 1200) // reject part
// })

// promise.then(data => console.log(data)).catch(err => console.log(err));

//Methods in promises
// 1. all()
// 2. any()
// 3. race()

// let promise1 = new Promise((resolve, reject) => {
//     let isJavaScriptGood = false;
//     if (isJavaScriptGood) {
//         resolve("yes i like javas")
//     } else {
//         reject("i don't like javascrpt")
//     }
// });

// let promise2 = new Promise((resolve, reject) => {
//     let isJavaScriptGood = false;
//     if (isJavaScriptGood) {
//         resolve("yes i like javast")
//     } else {
//         reject("i don't like javascrpt")
//     }
// });

// let promise3 = new Promise((resolve, reject) => {
//     let isJavaScriptGood = false;
//     if (isJavaScriptGood) {
//         resolve("yes i like javascript")
//     } else {
//         reject("i don't like javascrpt")
//     }
// });

// // Promise.all([promise1, promise2, promise3])
// //     .then(data => console.log(data))
// //     .catch(err => console.log(err));



// Promise.any([promise1, promise2, promise3])
//     .then(data => console.log(data))  // when all are false
//     .catch(err => console.log(err)); //AggregateError: No Promise in Promise.any was resolved

let sashi = new Promise((resolve, reject) => {
    setTimeout(() => { resolve("sashi won") }, 2000)
})
let mani = new Promise((resolve, reject) => {
    setTimeout(() => { resolve("main won") }, 2000)
})
let dinesh = new Promise((resolve, reject) => {
    setTimeout(() => { resolve("dinesh won") }, 3000)
})
Promise.race([sashi, mani, dinesh]).then(data => console.log(data)).catch(err => console.log(err));