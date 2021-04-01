// // 01 April 2021
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

//Math.round //Returns a supplied numeric expression rounded to the nearest integer.
let random = Math.random() * 100;
console.log(random);
// Generating random numbers 
let btn = document.getElementById('btn');
btn.addEventListener('click', e => {
    let random = Math.round(Math.random() * 100 + 1);
    document.getElementById('template').innerHTML = random;
})
