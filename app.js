// // 01 April 2021 // new branch has the code for the destructuring and clock
// img for difference between the local storage,session and cache is there
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

// let form = document.getElementById("form");
// let input = document.getElementById("input");

// form.addEventListener("submit", (e) => {
//     e.preventDefault();
//     let value = input.value;
//     //console.log(input.value); value will be there onclick not before that
//     let key = input.value;
//     window.localStorage.setItem(key, value); // both values taken by the user
// });
// //document.getElementById("template").innerHTML = window.localStorage.getItem("python");
// let languages = window.localStorage;
// // console.log(languages);
// let output = "";
// for (let i in languages) {
//     // console.log(i);
//     let finalData = localStorage.getItem(i);
//     if (finalData === null) {
//         console.log("no data ");
//     } else {
//         console.log(finalData);
//         output += `<li>${finalData}</li>`;
//     }
//     document.getElementById('template').innerHTML = output;
// } // refresh so that the data is available on the screen 

// function person() {
//     this.name = 'rahul';
// }
// function obj() {
//     obj.call(this)
// }
// obj.prototype = Object.create(person.prototype);
// const app = new obj();
// console.log(app.name);

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

//************************2 april */

// In javascript there are no classes inbuilt but they are actually functions which are used for the
// the behaviour of a class which is required. in simple words they are syntatical sugar and 
// nothing else and were introduced because of the famous java classes.

// declarition of a class in javascript
// class UserwithClass {
//     constructor() {
//         console.log("i am class");
//     }
// }

// // invoking / calling a the : Class constructor UserwithClass cannot be invoked without 'new'
// new UserwithClass(); // without new through error as typeerror 

// function userWithFunction() {
//     console.log("i am function");
// }

// userWithFunction();

// console.log(typeof userWithFunction); // function
// console.log(typeof UserwithClass);  // function.


// how to create object by using classes
// a class can only have one constructor and not more than that.

// when a variable is declared and not assigned a value error is know as undefined

// class Employee {
//     constructor(Emp_id, Emp_sal, Emp_name, Emp_designation) {
//         this.Emp_id = Emp_id;
//         this.Emp_name = Emp_name;
//         this.Emp_sal = Emp_sal;
//         this.Emp_designation = Emp_designation;
//     }
// }

// let mani = new Employee("type1", "mani", 200000, "developer");
// let sashi = new Employee("type2", "sashi", 100000, "react developer");

// console.log(mani);
// console.log(sashi);


// // How to create  method inside class
// class Employee {
//     constructor(Emp_id, Emp_sal, Emp_name, Emp_designation) {
//         this.Emp_id = Emp_id; // order should be same as it is defined in the ()
//         this.Emp_sal = Emp_sal;
//         this.Emp_name = Emp_name;
//         this.Emp_designation = Emp_designation;
//     }
//     getDetails() {
//         console.log(`My name is ${this.Emp_name}`);
//     }
// }
// let mani = new Employee("type1", 200000, "mani", "developer");
// let sashi = new Employee("type2", 100000, "sashi", "react developer");

// sashi.getDetails();
// mani.getDetails();

// using static will execute without constructor 
// hence static property will also be used
// with class after the constructor

// static username = " i am snehangshu ghosh";
// static details(){                              /////////find the problem with this code
//     console.log("i am details block");
// }

// Another important concept of oops is Inheritance

class UserObject {
    constructor(username, password) {
        this.username = username;
        this.password = password;
    }
}

// now the inheritance 

class User extends UserObject {
    constructor(username, password, profile) {
        super(username, password, profile); //Uncaught ReferenceError: Must call super constructor in
        //derived class before accessing 'this' or returning from derived constructor
        this.profile = profile;
    }
}

let sashi = new User("mani", "mani@123", "maniprofile");
console.log(sashi);
// Another important thing is that one should only be able to inherit from class to class and
// not from an interface to class

// classes are a template for  creating objects. They encapsulate data with code to work on that data.
// class in javascript are built on prototype but also have some syntax and sematics that are not 
// shared with ES5 class like semantics

// class are infact "special Functions" and just as you can define function expression and fuction
// declarations the class syntax has two components: class expression and class declaration.

// One major difference between the class declaraion and function declaration is that of the hoisting.
//function declaration are hoisted but class declaration are not hoisted.