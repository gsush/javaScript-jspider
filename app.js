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
//let demo = document.getElementById("demo");
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


// // adding more than one class name 
// demo.className = "hello"; // override the previous value
// //console.log(demo);
// demo.title = "hello i am title"; // add without set attribute
// demo.setAttribute("class", "byyee"); // another way to add
// // add css classes 
// demo.className = "jspider qspider pyspider cspider"; // not a dom tokenList
// console.log(demo.classList); // creates a tokenlist
// demo.classList.add("bspider", "dspider");
// demo.classList.remove("pyspider");
// demo.classList.toggle("jspider");
// demo.addEventListener("click", e => {
//     demo.classList.toggle("jspider");
// })

// // create element in dom 22 march 2021
//let div = document.createElement("div");
//console.log(div);

// creates an instance of the element for the specified tag

//let form = document.createElement("form");

//div.textContent = "I am div";
//form.textContent = "I am form";
//console.log(form);

//let demo = document.getElementById("demo");
//demo.appendChild(div);
//demo.prepend(div);
//demo.append(div);
//console.log(demo);

// *******************create a form using only javascrit************************
// let form = document.createElement("form");
// form.setAttribute('method', 'GET');
// form.setAttribute('action', '#');

// // input and label
// let lableForUsername = document.createElement('label');
// //lableForUsername.setAttribute('for', 'username');
// lableForUsername.htmlFor('username');

// let lableForPassword = document.createElement('label');
// //lableForPassword.setAttribute('for', 'password');
// lableForPassword.htmlFor('password');

// let inputForUsername = document.createElement("input");
// inputForUsername.setAttribute('type', 'text');
// inputForUsername.placeholder = "enter username";
// inputForUsername.name = "username";
// inputForUsername.id = 'username';
// inputForUsername.type = "text";


// let inputForPassword = document.createElement('input');
// inputForPassword.type = "password";
// inputForPassword.id = "password";
// inputForPassword.name = "password";
// inputForPassword.placeholder = "enter password";

// let divForUsername = document.createElement('div');
// let divForPassword = document.createElement('div');

// divForUsername.appendChild(lableForUsername);
// divForPassword.appendChild(inputForUsername);

// divForPassword.appendChild(lableForPassword);
// divForPassword.appendChild(inputForPassword);

// document.body.appendChild(form)
//----------------------------***********************************

// let form = document.createElement('form');
// form.action = '#';
// form.method = 'GET';

// let divForUsername = document.createElement('div');
// let divForPassword = document.createElement('div');
// let divForButton = document.createElement('div');

// form.appendChild(divForUsername);
// form.appendChild(divForPassword);
// form.appendChild(divForButton);
// // console.log(form);

// let lableForUsername = document.createElement('label');
// let lableForPassword = document.createElement('label');

// lableForUsername.htmlFor = 'username';
// lableForPassword.htmlFor = 'password';

// let inputForUsername = document.createElement('input');
// let inputForPassword = document.createElement('input');

// inputForUsername.type = "text";
// inputForUsername.id = "username";
// inputForUsername.placeholder = "enter you name";
// inputForUsername.name = "username";

// inputForPassword.type = "password";
// inputForPassword.id = "password";
// inputForPassword.name = "password";
// inputForPassword.placeholder = "enter password";

// let button = document.createElement('button');
// button.textContent = "login";

// divForUsername.appendChild(lableForUsername);
// divForUsername.appendChild(inputForUsername);

// divForPassword.appendChild(lableForPassword);
// divForPassword.appendChild(inputForPassword);

// divForButton.appendChild(button);

// document.appendChild(form);

// how to iterate through the anchor tag of different elements using for loop
// let links = document.getElementsByTagName('a');
// // console.log(links);

// for (let i = 0; i < links.length; i++) {
//     //console.log(i);
//     //console.log("links " + i);
//     links[i].style.color = "#fdg";
//     links[i].className = "links link -" + i;
//     console.log(links);
// }


// //Dom events
// let btn = document.getElementById('btn');
// btn.onclick = function () {
//     console.log('btn clicked');
// }

// btn.onmouseenter = function () {
//     console.log("mouse entered");
// }

// btn.onmouseleave = function () {
//     console.log("mouse leave");
// }

// let time = '07:05:45PM';
// time = time.split(":");
// var h = time[0];
// var m = time[1];
// var s = time[2];
// var half = s.slice(2, 4); // slice return the value first start 
// //position and end positin but end is not included

// if (half == "PM" && h != "12") h = h * 1 + 12;
// else if (half == "AM" && h == "12") h = "00";
// console.log(h + ":" + m + ":" + s.slice(0, 2));

// let list = document.querySelectorAll("ul li");
// //loop this li's
// list.forEach(li => {
//     //  click event for all li's
//     li.addEventListener("click", e => {
//         e.preventDefault();
//         //how to get current element
//         let listData = e.target.parentNode.children[1];
//         if (listData === undefined) {
//             console.log("no dropdown");
//         } else {
//             listData.classList.toggle("active");
//             console.log(listData);
//         }
//     });
// });

// let countries = [
//     "java",
//     "javascript",
//     "node",
//     "react",
//     "php",
//     "angular",
//     "react native",
//     "aws",
//     "drupal",
//     "spring",
// ];
let countries = [
    "Afghanistan",
    "Albania",
    "Algeria",
    "American Samoa",
    "Andorra",
    "Angola",
    "Anguilla",
    "Antarctica",
    "Antigua and Barbuda",
    "Argentina",
    "Armenia",
    "Aruba",
    "Australia",
    "Austria",
    "Azerbaijan",
    "Bahamas",
    "Bahrain",
    "Bangladesh",
    "Barbados",
    "Belarus",
    "Belgium",
    "Belize",
    "Benin",
    "Bermuda",
    "Bhutan",
    "Bolivia",
    "Bosnia and Herzegowina",
    "Botswana",
    "Bouvet Island",
    "Brazil",
    "British Indian Ocean Territory",
    "Brunei Darussalam",
    "Bulgaria",
    "Burkina Faso",
    "Burundi",
    "Cambodia",
    "Cameroon",
    "Canada",
    "Cape Verde",
    "Cayman Islands",
    "Central African Republic",
    "Chad",
    "Chile",
    "China",
    "Christmas Island",
    "Cocos (Keeling) Islands",
    "Colombia",
    "Comoros",
    "Congo",
    "Congo, the Democratic Republic of the",
    "Cook Islands",
    "Costa Rica",
    "Cote d'Ivoire",
    "Croatia (Hrvatska)",
    "Cuba",
    "Cyprus",
    "Czech Republic",
    "Denmark",
    "Djibouti",
    "Dominica",
    "Dominican Republic",
    "East Timor",
    "Ecuador",
    "Egypt",
    "El Salvador",
    "Equatorial Guinea",
    "Eritrea",
    "Estonia",
    "Ethiopia",
    "Falkland Islands (Malvinas)",
    "Faroe Islands",
    "Fiji",
    "Finland",
    "France",
    "France Metropolitan",
    "French Guiana",
    "French Polynesia",
    "French Southern Territories",
    "Gabon",
    "Gambia",
    "Georgia",
    "Germany",
    "Ghana",
    "Gibraltar",
    "Greece",
    "Greenland",
    "Grenada",
    "Guadeloupe",
    "Guam",
    "Guatemala",
    "Guinea",
    "Guinea-Bissau",
    "Guyana",
    "Haiti",
    "Heard and Mc Donald Islands",
    "Holy See (Vatican City State)",
    "Honduras",
    "Hong Kong",
    "Hungary",
    "Iceland",
    "India",
    "Indonesia",
    "Iran (Islamic Republic of)",
    "Iraq",
    "Ireland",
    "Israel",
    "Italy",
    "Jamaica",
    "Japan",
    "Jordan",
    "Kazakhstan",
    "Kenya",
    "Kiribati",
    "Korea, Democratic People's Republic of",
    "Korea, Republic of",
    "Kuwait",
    "Kyrgyzstan",
    "Lao, People's Democratic Republic",
    "Latvia",
    "Lebanon",
    "Lesotho",
    "Liberia",
    "Libyan Arab Jamahiriya",
    "Liechtenstein",
    "Lithuania",
    "Luxembourg",
    "Macau",
    "Macedonia, The Former Yugoslav Republic of",
    "Madagascar",
    "Malawi",
    "Malaysia",
    "Maldives",
    "Mali",
    "Malta",
    "Marshall Islands",
    "Martinique",
    "Mauritania",
    "Mauritius",
    "Mayotte",
    "Mexico",
    "Micronesia, Federated States of",
    "Moldova, Republic of",
    "Monaco",
    "Mongolia",
    "Montserrat",
    "Morocco",
    "Mozambique",
    "Myanmar",
    "Namibia",
    "Nauru",
    "Nepal",
    "Netherlands",
    "Netherlands Antilles",
    "New Caledonia",
    "New Zealand",
    "Nicaragua",
    "Niger",
    "Nigeria",
    "Niue",
    "Norfolk Island",
    "Northern Mariana Islands",
    "Norway",
    "Oman",
    "Pakistan",
    "Palau",
    "Panama",
    "Papua New Guinea",
    "Paraguay",
    "Peru",
    "Philippines",
    "Pitcairn",
    "Poland",
    "Portugal",
    "Puerto Rico",
    "Qatar",
    "Reunion",
    "Romania",
    "Russian Federation",
    "Rwanda",
    "Saint Kitts and Nevis",
    "Saint Lucia",
    "Saint Vincent and the Grenadines",
    "Samoa",
    "San Marino",
    "Sao Tome and Principe",
    "Saudi Arabia",
    "Senegal",
    "Seychelles",
    "Sierra Leone",
    "Singapore",
    "Slovakia (Slovak Republic)",
    "Slovenia",
    "Solomon Islands",
    "Somalia",
    "South Africa",
    "South Georgia and the South Sandwich Islands",
    "Spain",
    "Sri Lanka",
    "St. Helena",
    "St. Pierre and Miquelon",
    "Sudan",
    "Suriname",
    "Svalbard and Jan Mayen Islands",
    "Swaziland",
    "Sweden",
    "Switzerland",
    "Syrian Arab Republic",
    "Taiwan, Province of China",
    "Tajikistan",
    "Tanzania, United Republic of",
    "Thailand",
    "Togo",
    "Tokelau",
    "Tonga",
    "Trinidad and Tobago",
    "Tunisia",
    "Turkey",
    "Turkmenistan",
    "Turks and Caicos Islands",
    "Tuvalu",
    "Uganda",
    "Ukraine",
    "United Arab Emirates",
    "United Kingdom",
    "United States",
    "United States Minor Outlying Islands",
    "Uruguay",
    "Uzbekistan",
    "Vanuatu",
    "Venezuela",
    "Vietnam",
    "Virgin Islands (British)",
    "Virgin Islands (U.S.)",
    "Wallis and Futuna Islands",
    "Western Sahara",
    "Yemen",
    "Yugoslavia",
    "Zambia",
    "Zimbabwe",
];
let output = "";
countries.forEach((country) => {
    output += `<option value=${country}>${country}</option>`;
});
document.getElementById("country").innerHTML = output;

//event delegation
let ul = document.getElementById("ul");
ul.addEventListener("click", (e) => {
    console.log(e.target);
})
