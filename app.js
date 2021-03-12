// objects in javascript
//let object = {}; // object literals

// object.name = "manu";
// object.age = 20;
// object.company = "jspider";

// let arr = [];// array literals
// arr["name"] = "namu";
// console.log(object);

// Object way to create objects

// let users = new Object();
// users.name = "dinesh";
// users.company = "qspider";
// users.salary = 20000;
// users.designation = "fullstack developer";
// console.log(users);

// // function constructor way
// let users = function (name, age, company, salary, designation) {
//     this.name = name;
//     this.age = age;
//     this.company = company;
//     this.salary = salary;
//     this.designation = designation;
// }

// // console.log(users);
// // console.log(new users);// with new users is a custom constructor

// let nami = new users("main", 20, "qspider", 200000, "developer");
// let sam = new users("sam", 24, "wopro", 299999, "devops");
// console.log(nami);
// console.log(sam);

// // new object(); // built in constructor

// let user = { username: "manu", username: "sashi", password: "ras@123" };
// let pass = { password: "pass@123" };

// //let combineObject = user.concat(password);// not work in object only in case of array
// //console.log(combineObject);

// console.log(Array.isArray(user));

// // Object.assign method
// let combineObject = Object.assign(user, pass);
// console.log(combineObject);

// // loop over an object 
// let user = {
//     username: "andy",
//     age: 25,
//     company: "qspider",
//     salary: 50000,
//     designation: "developer"
// }
// // for in loop for object iteration
// for (let i in user) {
//     // console.log(i);// key in the objects
//     // console.log(user[i]);// values for the respective keys
//     console.log(`${i} => ${user[i]}`);
// }

// store multiple objects
let employees = [{
    emp_id: "typ1",
    emp_photo: "https://images.unsplash.com/photo-1553984658-d17e19aa281a?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mnx8ZmFzaGlvbiUyMG1vZGVsfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    emp_name: "rani",
    emp_salary: 20000,
    emp_designation: "developer",
    emp_city: "delhi",
    emp_educaton: "B.Tech"
}, {
    emp_id: "typ1",
    emp_photo: "https://images.unsplash.com/photo-1583167461820-d79d51f89d7a?ixid=MXwxMjA3fDB8MHxzZWFyY2h8M3x8ZmFzaGlvbiUyMG1vZGVsfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    emp_name: "rani",
    emp_salary: 20000,
    emp_designation: "developer",
    emp_city: "delhi",
    emp_educaton: "B.Tech"
}, {
    emp_id: "typ1",
    emp_photo: "https://images.unsplash.com/photo-1563993297290-609c9406efcd?ixid=MXwxMjA3fDB8MHxzZWFyY2h8N3x8ZmFzaGlvbiUyMG1vZGVsfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    emp_name: "rani",
    emp_salary: 20000,
    emp_designation: "developer",
    emp_city: "delhi",
    emp_educaton: "B.Tech"
}]

let output = "";
for (let emp of employees) {
    output += `
    <section>
    <article>
    <div>
    <img src=${emp.emp_photo} alt = ${emp.emp_name}/>
    <h2> employee_name : ${emp.emp_name}</h2>
    <p> emp_id : ${emp.emp_id}</p>
    <p> salary : ${emp.emp_salary}</p>
    <p> designation : ${emp.emp_designation}</p>
    <p> city : ${emp.emp_city}</p>
    <p> education : ${emp.emp_educaton}</p>
    </div>
    </article>
    </section>`
}

document.write(output);

