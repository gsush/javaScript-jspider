// array and iterating throught it
// uncomment the methods that you want to run on your local environment
let array = ["java", "python", "javaScript", "node.js", "php"];
// for (let i = 0; i < array.length; i++) {
//     console.log(array[i]);// this is how the for loop is used for iterating through the loop in array.
// }

// EcmaScript 6 introduced new way for the above loop
// which is called as iterator object
// for of loop
// for (let x of array) {
//     console.log(x);
// }

// // iterating over an Array
// const iterable = [10, 20, 30];
// for (const value of iterable) {
//     console.log(value);
// }

// // for iterable object with the help of function
// let args = function () {
//     for (let i of arguments) {
//         console.log(i);
//     }
// }
// args("sameer", "rahul");

// There are more than 33 array helper methods
// array.prototype.forEach only works with array looping over
// also using only callback function the for.each method works
// the return statement does not work with for each method
// array.forEach(function (value, index, array) {
//     console.log(array);
//     console.log(`${index} of the position ${value}`);
// })

//using arrow function the for.each method
// array.forEach(element => console.log(element));
// array.forEach((value, index, array) => console.log(value, index, array));

// Array helper method called as map
// array.prototype.map(callback function)
// advantage of using map method it return value as well as it is fast
// in react we prefer to use map method over foreach
//array.map((value, index, array) => console.log(value, index, array));
// let array_new = [10, 20, 30, 40, 50, 60];
// // for each is a Array method
// // no return type in for each method

// var x = array_new.forEach(function (value) {
//     //console.log(value);// print the value
//     return value; // undefined
// })
// console.log(x);

// //Array.prototype.map(callback function)
// //map is an array helper method
// var y = array_new.map(function (value) {
//     return value;// map return statement is valid
// })
// console.log(y);

// // channing process in map method only works in map
// function getX(...rest) {
//     return [rest].map(x => x);
// }
// console.log(getX('rahil', "sameer", `sam`));

// channing process of map method
function gety(...rest) {
    return [rest].map(x => x).join("");//map channing
}

console.log(gety('sum', 'raum', 'rahul', 'south', 'north', 'east'));

// looping and returning
var x = [10, 20, 30, 40, 50];
let xclone = x.map(x => x);
console.log(xclone);

// Inserting new values at the last index in array using push method
var index = ["sashi", "madhu", "snehangshu", "Ghosh", "ali"];
index.push("sunil");
console.log(index);
// Deleting new values at the last index in array using pop method
index.pop();
console.log(index);
// Inserting new value at the first index in array using unshift method
index.unshift("Raman");
console.log(index);
// Deleting new value at the first index in array using shift method
index.shift();
console.log(index);