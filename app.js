// // 01 April 2021 // new branch has the code for the destructuring and clock
// //window.Math object

// console.log(Math);
// console.log(Math.max(10, 20, 30, 40, 200, 1000)); // max method in math object
// console.log(Math.min(10, 20, 30, 40, 200, 1000)); // min method in math object

// // Difference between data and math is that data is a constructor object whereas math is not a 
// // constructor hence we don't use the new keyword when creating  a new math object

// console.log(Math.floor(1.1)); // floor Returns the greatest integer less than or equal to its
// console.log(Math.floor(1.6)); //  numeric argument
// console.log(Math.floor(-1.1)); // -2

// console.log(Math.ceil(-1.1)); // -1 ceil Returns the smallest integer greater than or 
// console.log(Math.ceil(1.1)); // 2   equal to its numeric argument
// console.log(Math.ceil(0.1)); // 1

// console.log(Math.trunc(5.26)); // takes only the interger part
// console.log(Math.round(5.5666)); // round to next when >0.5 else same same number

// how to generate a randowm number ***********Important**********

// //Math.round //Returns a supplied numeric expression rounded to the nearest integer.
// let random = Math.random() * 100;
// console.log(random);
// // Generating random numbers 
// let btn = document.getElementById('btn');
// btn.addEventListener('click', e => {
//     let random = Math.round(Math.random() * 100 + 1);
//     document.getElementById('template').innerHTML = random;
// })

//****************************web Storage********************* */
// webstorage has two types local storage and session storage
// local storage and session storage properties allow to save key/value pairs in a web brownser.
// The local storage object stores data with no expiration date. The data will not be deleted
// when the browser s closed.(which happens in session storage) , and will be available for week
// year. The local storage property is a read only.

// There are three methods
// 1.setItem();
// 2.getItem();
// 3.removeItem();

// window.localStorage.setItem("languages", "javascript");
// window.localStorage.setItem("frontend", "react");
// // getting the element that we want using getitem()
// document.getElementById('template').innerHTML = window.localStorage.getItem("languages");

let form = document.getElementById("form");
let input = document.getElementById("input");

form.addEventListener("submit", (e) => {
    e.preventDefault();
    let value = input.value;
    //console.log(input.value); value will be there onclick not before that
    let key = input.value;
    window.localStorage.setItem(key, value); // both values taken by the user
});
//document.getElementById("template").innerHTML = window.localStorage.getItem("python");
let languages = window.localStorage;
// console.log(languages);
let output = "";
for (let i in languages) {
    // console.log(i);
    let finalData = localStorage.getItem(i);
    if (finalData === null) {
        console.log("no data ");
    } else {
        console.log(finalData);
        output += `<li>${finalData}</li>`;
    }
    document.getElementById('template').innerHTML = output;
} // refresh so that the data is available on the screen 



//******************************************code sent by ali**************************** */
// let btn = document.getElementById("btn");
// btn.addEventListener("click", (e) => {
//   let randam = Math.round(Math.random() * 100 + 1);
//   document.getElementById("template").innerHTML = randam;
// });

// let btn = document.getElementById("btn");
// btn.addEventListener("click", (e) => {
//   window.localStorage.setItem("lang", "java");
// });

// let form = document.getElementById("form");

// form.addEventListener("submit", (e) => {
//   e.preventDefault();
//   let value = input.value;
//   window.localStorage.setItem("language", value);
// });

// //........to store multiple key and values
// let form = document.getElementById("form");

// form.addEventListener("submit", (e) => {
//   e.preventDefault();
//   let value = input.value;
//   let key = input.value;
//   window.localStorage.setItem(key, value);
// });
// document.getElementById("template").innerHTML = window.localStorage.getItem(
//   "python"
// );

// let form = document.getElementById("form");
// let input = document.getElementById("input");
// form.addEventListener("submit", (e) => {
//   e.preventDefault();
//   let value = input.value;
//   let key = input.value;
//   window.localStorage.setItem(key, value);
// });
// let languages = window.localStorage;
// let output = "";
// for (let i in languages) {
//   let finalData = localStorage.getItem(i);
//   if (finalData === null) {
//     console.log("no data");
//   } else {
//     output += `<li>${finalData}</li>`;
//   }
// }
// document.getElementById("template").innerHTML = output;

