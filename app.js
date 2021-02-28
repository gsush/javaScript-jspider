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
// emotions("happy",function(num){
//    var sound = "";
//    for (var i = 0;i < num; i++){
//        sound += 'ha';
//    }
//    sound += '!';
//    return sound;
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
 
var prices = [1.23, 48.11, 90.11, 8.50, 9.99, 1.00, 1.10, 67.00];

// your code goes here
// console.log(prices[0]);

for(var i = 0;i < prices.length; i++){
   // console.log(prices[i]+ "");
    
     //change the value of first element
    if(i===0){
        prices[i]=11;
    }
    //change the value of third element
    else if(i===2){
        prices[i]=33;
    }
    //change the value of seventh element
    else if(i===6){
        prices[i]=77;
    }
}
console.log(prices);