//19 march 2021
// DOM document object model is an interface for html and xml to add additional feature. 
// the program can change the document structure,style and content.


// console.log(document); // 
// console.log(window.document.all); // html collection is an array like object 

// let allElements = document.all;
// console.log(allElements[5]); // array like object and not a array

// console.log(Array.isArray(allElements)); // false
// // allElements.forEach(x => console.log(x)); //Uncaught TypeError: allElements.forEach is not a function

// // using spread operator to convert into array and apply for each method

// [...allElements].forEach(x => console.log(x));

// how to get all the properties.
// console.dir(document);
// console.log(document.links);

// for (let a of document.links) { // html href*10
//     console.log(a);
//     a.style.background = "green";
//     a.style.background = "white";
//     a.style.display = "black";
//     a.style.padding = "10px";
//     a.style.margin = "10px";
// }


// let demo = document.getElementById("demo"); // id is unique for everyone
// console.log(demo); // div id demo
// let template = document.getElementById("template");
// console.log(template); //html div id template

// //document.getElementsByClassName;// can access multiple elements and returns html collections
// let block = document.getElementsByClassName("block");
// // console.log(block); //  html div.block*10
// for (let i of block) {
//     console.log(i);
// }

// getElementbyTagName

// let block = document.getElementsByTagName("div");
// console.log(block); // collection of all the html elements and index can also be used

// let demo = document.querySelector("#demo"); // return only the selected element single one.
// console.log(demo);

// let allElements = document.querySelectorAll("div");// all means node list act as a array but not array itself.
// console.log(allElements);
// allElements.forEach(x => console.log(x)); // nodelist support foreach method key value

// // using tagname we can't use foreach method first convert in into array spread and use foreach
// let allElementswithHtml = document.getElementsByTagName("div");
// //allElementswithHtml.forEach(x => console.log(x)); // allElementswithHtml.forEach is not a function
// [...allElementswithHtml].forEach(x => console.log(x));

// // html div id demo ,div class block , div hello
// let hello = document.querySelector("#demo .block div");
// console.log(hello);

// let str = "cde";
// var place = 2;
// var strarr = str.split("");

// //console.log(strarr);

// for (let i = 0; i < strarr.length; i++) {
//     //console.log(strarr[i]);
//     let newstr = strarr[i].charCodeAt(0) - place;
//     //console.log(newstr);
//     let finalstr = String.fromCharCode(newstr);
//     //console.log(finalstr.join());

// }


// // inserting text html div id demo
// let demo = document.getElementById("demo");
// demo.textContent = "we are learning dom ...";
// // inserting using dom

// //demo.innerHTML = "<h1> we are learning javascript using dom...</h1>";
// //demo.innerText = "<h1> hello there </h1>";

// // connecting css using javascript
// demo.style.background = "crimson";
// demo.style.color = "white";
// demo.style.textTransform = "upperCase";
// demo.style.transform = "scale(1)";


// how to add attributes in html
let demo = document.getElementById("demo");
// demo.setAttribute("class", "jspider");
// demo.setAttribute("title", "we are adding attributes");
// demo.setAttribute("disabled", true);
// demo.innerHTML = "<h1>hello there </h1>";
// console.log(demo);


// // getting attributes
// let id = demo.getAttribute("id");
// let css = demo.getAttribute("class");
// console.log(id);
// console.log(css);


// adding more than one class name 
demo.className = "hello"; // override the previous value
//console.log(demo);
demo.title = "hello i am title"; // add without set attribute
demo.setAttribute("class", "byyee"); // another way to add
// add css classes 
demo.className = "jspider qspider pyspider cspider"; // not a dom tokenList
console.log(demo.classList); // creates a tokenlist
demo.classList.add("bspider", "dspider");
demo.classList.remove("pyspider");
demo.classList.toggle("jspider");
demo.addEventListener("click", e => {
    demo.classList.toggle("jspider");
})
