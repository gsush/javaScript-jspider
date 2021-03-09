// // 9th march 2021
// // splice method is for inserting value at any position in array
// // splice (position,delete count,add)
// let users = ["sashi", "manu", "kartik", "sashi", "rahul"];
// users.splice(2, 1, "sam", "exam");
// console.log(users);
// // // there the zero used for removing all the elements from the array
// // let deleteValue = users.splice(0);
// // console.log(deleteValue);
// // console.log(users);

// // index method used to find out the index element of the array
// console.log(users.indexOf("sashi")); // start from the start of the array
// // return -1 when there is no matching is done
// console.log(users.lastIndexOf("sashi"));
// // String.prototype.match() for finding all the array

let languages = ["java", "python", "javascript", "java", "javascript", "java"];
let filteredContent = languages.filter((value, index, array) => {
    if (array.indexOf(value) === index) {
        return value;
    }
});
console.log(filteredContent);
let filteredLength = languages.filter(word => word.length > 4);
console.log(filteredLength);// word length than 4 will return

let ages = [10, 40, 50, 60, 80, 90, 100, 500, 600];
let filteredAges = ages.filter((value) => value >= 55);
console.log(filteredAges);
console.log(ages);

// sorting method uses UTF - 16 algorithms
let users = ["sashi", "manu", "kartik", "sashi", "rahul", "Arun", "babul", "chinmay"];
let sortIt = users.sort();// by default ascending order
console.log(sortIt);
// but this will not work if the array is a list of numbers;
let num = [50, 60, 10, 80, 70, 55, 11, 2, 3,];
let numsort = num.sort();
console.log(numsort);// output is coming but it is wrong.
// this is fixed using a compare function
let sortNum = num.sort((a, b) => {
    //return a - b;// sort by ascending 
    return b - a;// sort by descending
});
console.log(sortNum);

// reverse method to print array in backword direction
let reverseString = users.reverse();
console.log(reverseString);

// reverse a string into array as string does not have a reverse method.
// step 1 : first convert the string into an array
let str = "snehangshu";
// let convertStringIntoArray = [...str];
let convertStringIntoArray = str.split("");
// now reverse the array using reverse method of array
let reverseIt = convertStringIntoArray.reverse();
// now the reverse of the array is there 
// need to convert the array into string
let convertToString = reverseIt.join("");
console.log(convertToString);

// using function this can be done in fewer steps
function ReverseString(str) {
    return [...str].reverse().join("");
}
console.log(ReverseString("ghosh"));

let giveUserInto = prompt("please enter you name");
document.write(ReverseString(giveUserInto));
document.write(`<h1>${ReverseString(giveUserInto)}</h1>`)