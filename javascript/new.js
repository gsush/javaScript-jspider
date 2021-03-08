// setTimeout(function () { console.log("hi") }, 1000)
// setTimeout(function () { console.log("hi") }, 1000)
// setTimeout(function () { console.log("hi") }, 1000)
// setTimeout(function () { console.log("hi") }, 1000)
// setTimeout(function () { console.log("hi") }, 1000)

// arra lieral wa
// let me = ["sashi", "manu", "nadhu", "java"];
// console.log(me.length);
// console.log(me[2]);

// // consrucor way not recommended

// let lang = new Array("javascrip", "nodejs", "reacjs", "angular");
// console.log(lang);
// console.log(typeof lang); // will reurn object

// let sr = 'snehangshu';
// console.log(typeof sr);

// // whether array or not check it
// console.log(Array.isArray(lang));
// console.log(Array.isArray(me));
// console.log(Array.isArray(sr));

// // insert values into empty array
// // insance way
// let array = [];
// array[0] = "snehangshu";
// array[1] = "Ghosh";
// array[2] = "name";
// array[3] = "sameer";

// console.log(array);

// // consrucor wa

// let me = new Array();
// me[0] = "sashi";
// me[1] = "madhu";
// me[2] = "rahul";
// console.log(me);
// console.log(Array.isArray(me));


// // combine 2 or more arrays
// let sum = ["ram", "sam"];
// let sum1 = ["reacjs", "angular"];
// let sum2 = ["sun", "moon"];

// let sum3 = [sum, sum1, sum2];// not a recommeneded way
// console.log(sum3);
// // combime wih array helper methods
// //Array.prototype.concat();
// let combinewihArra = sum.concat(sum1);
// let output = sum.concat(sum1, sum2);

// console.log(combinewihArra);
// console.log(output);

// let sr = "hello world";
// let array = ["sashi"];
// let combime = sr.concat(array);
// console.log(combime);// sring concat method
// console.log(typeof combime);// string
// console.log(Array.isArray(combime));

// let resul = array.concat(sr);
// console.log(resul);
// console.log(typeof resul); // object
// console.log(Array.isArray(resul));// array concat

// convert string into array
// let sr = "hello world";
// console.log(sr.length);//11
// console.log(typeof sr);// sring

// let conversringInoArra = sr.split("");
// console.log(conversringInoArra);
// console.log(typeof conversringInoArra);// object

// let sa = sr.split(" ");// one space for word by word 
// let se = sr.split("  "); // 2 space for one value or single string
// console.log(sa);
// console.log(se);

// var str = "ghosh";
// var num = "200";
// var nuew = Number(str);
// var su = Number(num);
// console.log(typeof nuew);
// console.log(typeof su);

// // another method using from method of array
// let fromMethod = Array.from(sr);
// console.log(fromMethod);

// IIFE function immediate invoke function expression
// (function () {
//     var $ = 0090;
//     console.log($);
// })();


// let displey = function show() {
//     console.log("message displayed");
// }
// displey();
// show();

// var name = "ghosh";
// function display() {
//     var bew = "same";
//     console.log(name);
//     console.log(bew);
// }
// display();
// console.log(name);

