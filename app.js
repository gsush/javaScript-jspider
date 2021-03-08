// var sound = "";
// var laugh = function(num){
//     for (var i = 1; i <=num ; i++){
//         sound += 'ha';
//     }
//     sound += '!';
//     return sound;
// }

// console.log(laugh(10));// print the times of ha from calling the function


/*
 * Programming Quiz: Inline Functions (5-6)
 */

/*
* QUIZ REQUIREMENTS
* - Your code should have an `emotions()` function
* - Your code should call the `emotions()` function
* - Your `emotions()` function call should have an inline function expression passed as the second parameter
* - Your function expression should return the expected output
*/


// // don't change this code
// // emotions() function definition
// function emotions(myString, myFunc) {
//     console.log("I am " + myString + ", " + myFunc(2));
// }



// // your code goes here
// // Call the emotions() function with two arguments
// // Argument 1 - "happy" string
// // Argument 2 - an inline function expression
// emotions("happy", function (num) {
//     var sound = "";
//     for (var i = 0; i < num; i++) {
//         sound += 'ha';
//     }
//     sound += '!';
//     return sound;
// });


/*
 * Programming Quiz: UdaciFamily (6-1)
 */

// /*
//  * QUIZ REQUIREMENTS
//  * - Your code should have a variable `udaciFamily`
//  * - The variable `udaciFamily` should be an array containing the values `"Julia"`, `"James"`, and one other name
//  * - Your code should print `udaciFamily` to the console
//  * - BE CAREFUL ABOUT THE EXACT WORDS TO BE PRINTED.
//  */


// // your code goes here
// var udaciFamily = ["Julia","james","snehangshu"];
// //console.log(udaciFamily[0]);

// for(var i = 0;i <udaciFamily.length;i++){
//     console.log(udaciFamily[i]);
// }

/*
 * Programming Quiz: Building the Crew (6-2)
 */

// /*
//  * QUIZ REQUIREMENTS
//  * - Your code should have a variable `crew`
//  * - The variable `crew` should be an array containing the Serenity\'s crew
//  * - Your code should print `crew` to the console as an array. Do not iterate over the elements. 
//  * - BE CAREFUL ABOUT THE PUNCTUATION AND THE EXACT WORDS TO BE PRINTED.
//  */

// var captain = "Mal";
// var second = "Zoe";
// var pilot = "Wash";
// var companion = "Inara";
// var mercenary = "Jayne";
// var mechanic = "Kaylee";

// // your code goes here
// var crew = [captain,second,pilot,companion,mercenary,mechanic];
// console.log(crew);

// var rcrew = new Array(captain, second, pilot, companion, mercenary, mechanic);

// // Another method
// // var crew = [captain, second, pilot, companion, mercenary, mechanic];

// // Print
// console.log(rcrew);

/*
 * Programming Quiz: The Price is Right (6-3)
 */
/*
 * QUIZ REQUIREMENTS
 * - Your code should have a variable `prices`
 * - The variable `prices` should be an array having different values for the 1st, 3rd, and 7th elements
 * - Your code should print `prices` to the console as an array. Do not iterate over the elements.
 */

// var prices = [1.23, 48.11, 90.11, 8.50, 9.99, 1.00, 1.10, 67.00];

// // your code goes here
// // console.log(prices[0]);

// for(var i = 0;i < prices.length; i++){
//    // console.log(prices[i]+ "");

//      //change the value of first element
//     if(i===0){
//         prices[i]=11;
//     }
//     //change the value of third element
//     else if(i===2){
//         prices[i]=33;
//     }
//     //change the value of seventh element
//     else if(i===6){
//         prices[i]=77;
//     }
// }
// console.log(prices);





// funcion hoising
// x();// calling // function expression is not supporting during function expression hoising
// //cannot access'x' before iniializaion
// let x = function () {
//     console.log('i am x');
// }; //called part

// work();
// function work() { // function hoisting works only with function declaration
//     console.log('funcion hoising is working ');
// }




// function sam(x, z) {
//     return { x, z };
// }
// console.log(sam('hello', 'bee'));

// function ram(x = "hello", z = "jee") {// default parameterswill print
//     return { x, z };
// }
// console.log(ram());
// console.log(ram('bye', 'wow'));// default values are edited

//arrow function works only with anonymous and function expression only
// arrow function syntax
// ()=> {
// code to be executed
//}


// let normalFuncion = function () { // function expression 
//     console.log('i am normal function');
// };
// normalFuncion();

// // convert function expression/normal function into arrow function
// let arrowFuncion = () => {
//     console.log('i am arrow function');
// };
// arrowFuncion();


// function ghs() {
//     console.log('i am funcion declaraion');
// }

// ghs();

// // arrow function
// // arrow function dosen't work with function declaration
// qsiper() => {
//     console.log("yes i have arrow func with no use");
// }
// qsiper();


// let x = function () {
//     return 'i am x';// normal function where 3 line are required 
// }// removing return will give o/p undefined
// // removing curly braces will give unexpected string

// console.log(x());

// let z = () => 'i am z';// in case one line need to be return
// console.log(z());

// // only one line we can remove parenthesis with underscore
// let p = _ => 'i am z';
// console.log(p());

// let b = function (name) {
//     return name;
// }
// console.log(b("hews"));

// //using arrow function
// let d = name => name; // one parameter remove parenthesis
// console.log(d("hello "));


// let q = () => { let z = 10; console.info(z) }; // more han one line curl braces are required
// q();

// let x = function (name) {
//     return name;
// }
// console.log(x("sashi"));

// let z = name => name;
// console.log(z("snehangshu"));

// let c = _ => 'i am new';
// console.log(c());


// array with arrow function
// let normalfuncionwihmuliplevalue = function (x, z) {
//     // if arra
//     return ['shubma', 'shshi'];//arra lieral in javascrip
//     // var x = 'shuma';
//     // var z = 'dinesh';
//     // return [x, z];
// }

// console.log(normalfuncionwihmuliplevalue("shubham", "dinedash"));


// let arrowwihArra = (x, z) => [x, z];
// console.log(arrowwihArra('shubam', 'dinesh'));



// let normalFuncionwihObjec = function (name, sal) {
//     return {
//         name: "dinesh",
//         compan: "jspider",
//         designaion: "developer",
//         sal: Infinity,
//     }; //object literals

//     return { name, sal }
// }

// console.log(normalFuncionwihObjec('dinesh', 222));

// ****************arrow function returning object ******
// let ArrowihObjec = (name, sal) => ({ name, sal });
// console.log('sashi', 1000);

// (a, b) => a + b + 100;
// console.log((3, 4));


// // normal funcion is having array like  argument object
// // arrow funcion dosen't; have arguemnt object

// let normalFunction = function () {
//     return arguments;
// };
// console.log(normalFunction("sashi", "name", "madhu"));

//02/03/2021

// let ArrowFunction = _ =>
//     console.log(ArrowFunction("sasih", "name", "helo"));
// ArrowFunction();
// getting uncaught rangeError

// no this binding in arrow function

// let users = {
//     name: `madhu`,
//     company: `jspider`,
//     getinfo: function () {
//         console.log(this);
//         console.log(`my name is ${this.name} i work for ${this.company}`);
//     }
// }
// console.log(users.getinfo());

// let usersWithArrow = {
//     name: `vinay`,
//     company: `testyantra`,
//     getinfo: () => {
//         console.log(this);// window object
//         console.log(`my name is ${this.name} i work for ${this.company}`);
//     }
// }
// //console.log(users.getinfo());
// console.log(usersWithArrow.getinfo());


// // call back function
// function child() {
//     console.log('hello');
// }// called part

// function java() {
//     console.log('i am java');
// }

// function javascript() {
//     console.log('i am javascript');
// }

// function parent(callback) {
//     //console.log('hello world');
//     return callback;
// }
// console.log(parent(child()));
// console.log(parent(java()));
// console.log(parent(javascript()));

// function greeting(name) {
//     alert('Hello ' + name);
// }

// function processUserInput(callback) {
//     var name = prompt('Please enter your name.');
//     callback(name);
// }

// processUserInput(greeting);

// function car() {
//     console.log('i am car');// calling function will print this
// };

// function carObject(carname) {
//     return carname();// call back is used to return the object whatever is given
// };
// carObject(function () {
//     console.log('i am car Object');// this is i am car object print
// });
// car(function () {
//     console.log('why is this');// this will print the i am car not why is this
// })

// let add = function (a, b) {
//     return a + b;
// }
// let add = (a, b) => a + b;
// let multiply = (a, b) => a * b;

// function calculation(num1, num2, callback) {
//     return callback(num1, num2);
// }// here the num1 and num2 are arguments passed inside the callback function

// console.log(calculation(10, 10, add));
// console.log(calculation(12, 12, multiply));


// //function closure

// var outertext = 'I am outertext lik i am global variable';

// function outerBlock() {
//     var innertext = ' i am innertext within outerBlock';//local/function scope
//     console.log(outertext);
//     console.log(innertext);
//     function innerBlock() {
//         var x = ' iam x only available inside innerBlock';
//         console.log(x);
//         console.log(innerBlock);
//         console.log(outerBlock);
//     }
//     innerBlock();
// }
// outerBlock();

// closure scope chain
// constructor function
// create object using constructor

// function users(name) {
//     console.log(this);// current object
//     this.name = name;
// }

// new users();// without new window object and with new current object
// let sashi = users("sashi");
// console.log(sashi);

// 3/3/21


// let languages = ["javascrip", "java", "phon", "php"]; // array literals
// console.log(languages.length); // length of values
// console.log(typeof languages); // object
// console.log(languages[1]); // array index start from 0.

// let sring = "java,javascrip,php,c#";
// console.log(sring.length); //lengh of he characer

// console.log(typeof sring); //sring

// //constructor function
// function user() {
//     console.log(this);
// }
// new user();

// function users(emp_name, emp_id, emp_salary, emp_designation) {
//     // return { emp_name, emp_id, emp_salary, emp_designation };
//     this.emp_name = emp_name; // this refer to window or current object
//     this.emp_id = emp_id;
//     this.emp_salary = emp_salary;
//     this.emp_designation = emp_designation;
// }// constructor function always have this function
// // console.log(users('sam', 'jsp1', 10000, 'manager')); // window object undefined
// // console.log(new users('sam', 'jsp1', 10000, 'manager')); // refers to current object

// let dinesh = new users('dinesh', 'type1', 30000, 'nodejs dev');// this is instances for the constructor function
// console.log(dinesh);
// let sashi = new users("sashi", "thpe2", 12345, "javascript");
// console.log(sashi);



var name = "snehangshu";
var place = `bangalore`;
var result = `my name is ${name} and i live in ${place}`;
console.log(result);