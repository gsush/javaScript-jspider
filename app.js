// 10 march 2021
// Array.prototype.reduce(callbackfn)
// retrun the sum of the array elements
// let num = [10, 20, 30, 40, 50, 60, 70, 400];
// let total = num.reduce(function (accumulator, currentValue) {
//     console.log(accumulator);
//     console.log(currentValue);
//     return accumulator + currentValue;
// });
// console.log(total);

// // single output value using all the elements of the array
// let reduceData = ["s", "n", "e", 'h', 'a', 'n', 'g', 's', 'h', 'u'];
// let newResult = reduceData.reduce((accumulator, currentValue) => accumulator + currentValue);
// console.log(newResult);

// let newarray = [1, 2, 3, 4, 5];
// const reducer = (accumulator, currentValue) => accumulator + currentValue;
// console.log(newarray.reduce(reducer));

// // reverse a string and print it
// // first this is convert the string into an array and then use the reverse method and join to make it string
// // again
// let arr = ["s", "n", "e", 'h', 'a', 'n', 'g', 's', 'h', 'u'];
// let res = arr.reduce((accumulator, currentValue) => {
//     let x = accumulator + currentValue;
//     console.log(typeof x);
//     let reverstIt = [...x].reverse().join("");
//     return reverstIt;
// });

// console.log(res);// There is a problem with this method hence we use reduceRight method
// let res2 = arr.reduceRight((accumulator, currentValue) => accumulator + currentValue);
// console.log(res2);

// // two dimentional array 

let twodarr = [[1, 2], [2, 2], [3, 3], [4, 4], [5, 5]];
// let twodarray = [[1, 2], ['sam', 'ram', 'game', 'rani'], [3, 3], [4, 4]];
// //console.log(twodarr[0][1]);

// let neew = twodarr[2].forEach(x => x); // for each method no
// console.log(neew);

// return a single value array 
let outpt = twodarr.reduce((accumulator, currentValue) => {
    console.log(currentValue);
    return accumulator.concat(currentValue);
});
console.log(outpt);

// // for the sum of the result outpt
// let resultd = outpt.reduce((accumulator, currentValue) => accumulator + currentValue);
// console.log(resultd);

// // multidimentional array
// let arra = [[1, 1, 1], [1, 1, 1], [1, 1, 1], [1, 1, 1], [[[[[[[[[[[[[[[[1, 1, 1]]]]]]]]]]]]]]]]];
// // instead of using reduce method we can use the flat method
// let result = arra.flat(Infinity);
// console.log(result);

// let output = [...result].reduce((accumulator, currentValue) => accumulator + currentValue);
// console.log(output);

// Array.prototype.flat() this is the method used instead of using reduce method

// `//Array.prototype.find(callbackfn) method
// let num = [10, 30, 50, 60, 100, 30, 20, 300, 400,];
// let result = num.find(element => element > 60);// the next number will print
// let result1 = num.findIndex(element => element > 60); // index of the next number will print
// console.log(result);
// console.log(result1);`

