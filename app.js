// var x = "sashi";
// //console.log(window);
// console.log(global.x);
/*

let p = 10;
function sam(){
    let p = 11;
    console.log(p);    
}
sam();

var s = 10;
function sunil(params) {
    var s = 12;
    console.log(s);
}
sunil();
console.log(s);// here scope is here

var c = 10;
*/
// 25 feb 2021 //
// let spider = function () {
//     console.log("i am funcion");
// };

// spider();

// //IIFE
// (function (params) {
//     console.log("i am iief funcion");
// })();


// var $ = 'jquer';
// var $ = 'reac';
// var $ = 'angular';

// console.log($);//angular all are global scope
// poluing global scope
// iife examples
// (function (params) {
//     var $ = 'jquer';// local var
//     console.log($);
// })();

// (function (params) {
//     var $ = 'reac'; // local var
//     console.log($);
// })();

// (function (params) {
//     var $ = 'angular';
//     console.log($);// local var
// })();


{
    let $ = 'jquer'; 
    console.log($); // anoher wa of expressing local scope
}
{
    let $ = 'reac';
    console.log($);
}
{
    let $ = 'angular';
    console.log($);
}


//funcion declaraion

function jspider(params) {
    console.log('i am naming funcion');
}
jspider();