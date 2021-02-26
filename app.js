// function users(name) {
//     return name;
// }
// console.log(users("hello"));

// //funcion wih parameer

// function emploee(emp_id,emp_name,emp_sal,emp_desg) {
//     return {emp_id,emp_name,emp_sal,emp_desg}
// }

// let emp1 = emploee("one","sam",12000,"devloper");
// let emp2 = emploee("four","ross",15000,'scienis'); 
// console.log(emp1,emp2);

// function Users(name,age,salar,compan) {
//     return {
//         name,age,salar,compan
//     };// removing reurn saemen will cause undefined
// }
// let user1 = Users("sam",20,20000,"dlf");
// console.log(user1);


// function Users() {
//     return arguments; // return values wih emp parameters built in array like object only available in normal func.
// } // not available in arrow funcion

// let emp = Users("manu",20,"ghosh");
// console.log(emp[2]);

// function jspider(...rest){
//     return rest
// }

// console.log(jspider("fer","jaca","hjof"));

function courses(course,rainer, ...rest) {
    return{course,rainer,rest};
}

console.log(courses("java","c","cpp","gho","ghj"));