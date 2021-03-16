// // objects in javascript
// //let object = {}; // object literals

// // object.name = "manu";
// // object.age = 20;
// // object.company = "jspider";

// // let arr = [];// array literals
// // arr["name"] = "namu";
// // console.log(object);

// // Object way to create objects

// // let users = new Object();
// // users.name = "dinesh";
// // users.company = "qspider";
// // users.salary = 20000;
// // users.designation = "fullstack developer";
// // console.log(users);

// // // function constructor way
// // let users = function (name, age, company, salary, designation) {
// //     this.name = name;
// //     this.age = age;
// //     this.company = company;
// //     this.salary = salary;
// //     this.designation = designation;
// // }

// // // console.log(users);
// // // console.log(new users);// with new users is a custom constructor

// // let nami = new users("main", 20, "qspider", 200000, "developer");
// // let sam = new users("sam", 24, "wopro", 299999, "devops");
// // console.log(nami);
// // console.log(sam);

// // // new object(); // built in constructor

// // let user = { username: "manu", username: "sashi", password: "ras@123" };
// // let pass = { password: "pass@123" };

// // //let combineObject = user.concat(password);// not work in object only in case of array
// // //console.log(combineObject);

// // console.log(Array.isArray(user));

// // // Object.assign method
// // let combineObject = Object.assign(user, pass);
// // console.log(combineObject);

// // // loop over an object 
// // let user = {
// //     username: "andy",
// //     age: 25,
// //     company: "qspider",
// //     salary: 50000,
// //     designation: "developer"
// // }
// // // for in loop for object iteration
// // for (let i in user) {
// //     // console.log(i);// key in the objects
// //     // console.log(user[i]);// values for the respective keys
// //     console.log(`${i} => ${user[i]}`);
// // }

// // store multiple objects
// let employees = [{
//     emp_id: "typ1",
//     emp_photo: "https://images.unsplash.com/photo-1553984658-d17e19aa281a?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mnx8ZmFzaGlvbiUyMG1vZGVsfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
//     emp_name: "rani",
//     emp_salary: 20000,
//     emp_designation: "developer",
//     emp_city: "delhi",
//     emp_educaton: "B.Tech"
// }, {
//     emp_id: "typ1",
//     emp_photo: "https://images.unsplash.com/photo-1583167461820-d79d51f89d7a?ixid=MXwxMjA3fDB8MHxzZWFyY2h8M3x8ZmFzaGlvbiUyMG1vZGVsfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
//     emp_name: "rani",
//     emp_salary: 20000,
//     emp_designation: "developer",
//     emp_city: "delhi",
//     emp_educaton: "B.Tech"
// }, {
//     emp_id: "typ1",
//     emp_photo: "https://images.unsplash.com/photo-1563993297290-609c9406efcd?ixid=MXwxMjA3fDB8MHxzZWFyY2h8N3x8ZmFzaGlvbiUyMG1vZGVsfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
//     emp_name: "rani",
//     emp_salary: 20000,
//     emp_designation: "developer",
//     emp_city: "delhi",
//     emp_educaton: "B.Tech"
// }]

// let output = "";
// for (let emp of employees) {
//     output += `
//     <section>
//     <article>
//     <div>
//     <img src=${emp.emp_photo} alt = ${emp.emp_name}/>
//     <h2> employee_name : ${emp.emp_name}</h2>
//     <p> emp_id : ${emp.emp_id}</p>
//     <p> salary : ${emp.emp_salary}</p>
//     <p> designation : ${emp.emp_designation}</p>
//     <p> city : ${emp.emp_city}</p>
//     <p> education : ${emp.emp_educaton}</p>
//     </div>
//     </article>
//     </section>`
// }

// document.write(output);

//15-03-2021
// how to store variable into object literal
// var usrname = "manu";
// var age = 20;
// var company = "qspider";
// var salary = 10000;

// let obj = {
//     usrname: usrname,
//     age: age,
//     company: company,
//     salary: salary,
// };
// console.log(obj);

// // In ES 6. If we have same key and value name we can remove the value and will get the same output.
// let obj1 = {
//     usrname,
//     age,
//     company,
//     salary,
// }
// console.log(obj1);

// let obj = { // object property  we can use reserved keyword as key.
//     for: "sashi",
//     if: "if",
//     while: "while",
//     switch: "switch"
// }
// if we declare a var then it will throw error as it is reserved keyword.
// in object literal we can use javascript reserved keyword as key.
// let user = {
//     user-name : "manu",// throw error
// }

// let createserver = {
//     "content-type": "application" // if we want to write hypen in the key we have to do it using quotes
// }

//console.log(user);
// console.log(createserver);

// let obj1 = { name: 'manu', name: 'rahul' }; //putting another value will print the latest value
// let obj2 = { age: 20 };

// let combine = Object.assign(obj1, obj2);
// console.log(combine);

// // this result can be achieved using spread operator
// let combineWithSpreadoperator = { ...obj1, ...obj2 };
// console.log(combineWithSpreadoperator);

// object properties are mutable and two methods are there to stop it
// using strict and freeze methods.

// const user = {
//     username: "manu"
// }
// user.username = "sashi";// object username is mutable
// console.log(user);

// 'use strict';// can not update the values
// let users = {
//     username: "anu",
//     age: 39,
//     salary: 30000,
//     company: "qspider"
// };

// users.username = "snehangshu";
// console.log(users);

// Object.freeze(users); // freeze will save the last save code and will not update.
// users.username = "rahul";
// users.age = 55;
// console.log(users);

// let user = {
//     username: "anu",
//     company: "qspider",
//     designamtion: "developer"
// };
// for (let i in user) { // iterating through keys and values
//     console.log(i);
//     console.log(user[i]);
// };

// // built-in methods for iterations
// let keys = Object.keys(user);
// let value = Object.values(user);
// console.log(keys);
// console.log(value);// return in the array forms
// value.forEach(x => console.log(x));// iterating through values

// objects into arrays
// let result = Object.entries(user);
// console.log(result);
// console.log(result.flat(1));
// console.log(Array.isArray(result));


// if it is a normal function with object this keyword goes to current object. and if it is arrow function
// within object this keyword goes to window object.

// let user1 = {
//     username: "manu",
//     company: "qspider",
//     userdetails: function () {
//         console.log(`My name is ${this.username} and i work for ${this.company}`);
//     }
// };

// let user2 = {
//     username: "arun",
//     company: "jspider",
// };

// let user3 = {
//     username: "madhu",
//     company: "qspider"
// };

// console.log(user1.username);
// console.log(user1.company);
// console.log(user1.userdetails());

// console.log(user2.username);
// console.log(user2.company);

// // here we are using call method only
// let total = user1.userdetails.call(user2);
// console.log(total);

// console.log(user1.userdetails.call(user3));
// console.log(user1.userdetails());

// // Another example for the call method and apply method
// let employee = {
//     firstname: "mahu", lastname: "kumar"
// };
// let employee1 = {
//     firstname: "rahul", lastname: "jha"
// };
// let employee2 = {
//     firstname: "sameer", lastname: "jammwad"
// };

// function getFullName(salary, designation) {
//     return this.firstname + this.lastname + " " + salary + " " + designation;
// };

// console.log(getFullName.call(employee));
// console.log(getFullName.call(employee1, 20000, "developer"));

// now apply method instead of call and see the difference
// apply only works on array.
// and call works on string

// throw error CreateListFromArrayLike called on non-object
// console.log(getFullName.apply(employee, 2000, "devd"));
// console.log(getFullName.apply(employee2, [20000, "dev"]));

// apply binder method Advanced topic ********************************
let course = {
    course_name: "java",
    duration: "4months"
};

let course2 = {
    course_name: "javascript",
    duration: "4months"
}

function getCourse(trainer, ...skills) {
    return this.course_name + `course-name is ${this.course_name}
    duration ${this.duration} + trainer name ${trainer}+ skills are ${skills}`;
}

let java = getCourse.call(course);
console.log(java);

let javascript = getCourse.call(
    "mernStack", "sashi", "javascript", 'htm', 'css', 'ecmascript'
);

let javaWtihApply = getCourse.apply(course, ["madhu", "java", "sql", "j2ee", "spring", "hibernate"]);
let javascriptwithapply = getCourse.apply(course2, ["sashi", "javascript", "htm", "nodejs", "expressjs"]);

console.log(javascript);
console.log(javaWtihApply);
console.log(javascriptwithapply);

// Bind method
let bound = getCourse.bind(course2, "sashi", "html", "css");
console.log(bound());

let numbers = { num1: 10 }
function calculate(num2, num3) {
    return this.num1 + num2 + num3;
}
let result = calculate.call(numbers, 10, 10);// if num3 is undefined output will be NAN
console.log(result);

let resultwithapply = calculate.apply(numbers, [20, 30]);
let resultwithbind = calculate.bind(numbers, 10, 10);
console.log(resultwithapply);
console.log(resultwithbind()); // return a new bound function