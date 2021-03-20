//17TH MARCH 2021
// BOM (BROWSER OBJECT MODEL)(ONLY FOR FRONTEND)
// BUILT IN OBJECTS ARE DOCUMENT , NAVIGATOR ,SCREEN ,HISTORY ,LCOCATION.
// console.log(window.document);
// console.log(window.navigator);
// console.log(window.screen);
// console.log(window.history);
// console.log(window.location);

// // now how to get latitude and longitude. 
// console.log(window.navigator.platform); // detect which platform it is win32 or win 64 or linux flavour.
// console.log(window.navigator.geolocation.getCurrentPosition); // current position.

// we have to define the function for accessing the location.
// in the images a screen shot is there 
// function getCurrentLocation() {
//     if (window.navigator.geolocation) {
//         window.navigator.geolocation.getCurrentPosition(function (position) {
//             console.log(position);
//             document.write(`
//             My current latitude<h1> ${position.coords.latitude}</h1>
//              and my current longitude <h1> ${position.coords.longitude}</h1>`);
//         });
//     } else {
//         console.log("location is not supported by browser");
//     }
// }


// getCurrentLocation();

// // how to use online and offline thing in browser like fb status

// console.log(window.navigator.onLine);

// if (window.navigator.onLine == true) {
//     document.write(`hey i am here <h1 style= "color:green" >online</h1>`)
// } else {
//     document.write(`hello world <h1 style = "color:red">offline</h1> please try later`);
// }

// how to get the video of the user

// window.navigator.getUserMedia = window.navigator.getUserMedia || window.navigator.webKitGetUserMedia;

// if (window.navigator.getUserMedia) {
//     window.navigator.getUserMedia(
//         { audio: true, video: { height: 768, width: 1466 } },
//         (stream) => {
//             let video = document.querySelector("video");
//             video.srcObject = stream;
//             video.onloadedmetadata = function () {
//                 video.play();
//             };
//         }, // success callback
//         (err) => {
//             console.log(err.name); // error callback
//         }
//     );
// } else {
//     console.log("not supported");
// }


// // the useragent property returns the value of the user-agent header sent by the browser to the server.
// console.log(window.navigator.userAgent); // read only property


// // return a string representing the platform of the browser. it will always return something 
// console.log(window.navigator.appVersion);

// console.log(window.navigator.appCodeName);// it comes as mozilla as it was a part of netscape and still it is used.
// // irrespective of the platform.

// console.log(window.navigator.product);// gecko a compatibility purpose

// console.log(window.navigator.vendor); // google
// console.log(window.navigator.language); // gb-En
// console.log(window.navigator.cookieEnabled); // true
// console.log(window.navigator.javaEnabled()); // false 


//****************18/3/2021**********************

//screen object and its properties

// console.log(window.screen);
// console.log(window.screen.width);
// console.log(window.screen.height);
// console.log(window.screen.colorDepth);
// console.log(window.screen.pixelDepth);
// console.log(window.screen.availWidth);
// console.log(window.screen.availHeight);


// let screenObj = window.screen;
// console.log(screenObj);

// if (screen.pixelDepth < 8) {
//     console.log("low resolution");
// } else {
//     console.log("normal resolution");
// }

// // history object 

// console.log(window.history.back());
// console.log(window.history.forward());

// console.log(window.location.href); // location of the link
// console.log(window.location.protocol); // return a file // or https etc
// if (window.location.protocol) {
//     console.log("web server");
// } else {
//     console.log("not a webserver");
// }

// console.log(window.location.hostname);
// console.log(window.location.host);
// console.log(window.location.port);
// console.log(window.location.hash);

// console.log(window.location.origin);
// console.log(window.location.pathname);

// console.log(window.location.assign);

// // using a click button and only using javascript

// console.log(window.location.assign("https://www.google.com"));
// document.getElementById("btn").addEventListener("click",
//     e => {
//         window.location.assign("https://facebook.com");
//     });