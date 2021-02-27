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


// don't change this code
// emotions() function definition
function emotions(myString, myFunc) {
    console.log("I am " + myString + ", " + myFunc(2));
}



// your code goes here
// Call the emotions() function with two arguments
// Argument 1 - "happy" string
// Argument 2 - an inline function expression
emotions("happy",function(num){
   var sound = "";
   for (var i = 0;i <=num; i++){
       sound += 'ha';
   }
   sound += '!';
   return sound;
});