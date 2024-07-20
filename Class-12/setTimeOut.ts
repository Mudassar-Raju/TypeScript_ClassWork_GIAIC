//Understanding setTimeOut and Web APIs
//Web APIs is a set of APIs that are provided by the browser to JavaScript

//setTimeout is a function that is used to schedule a function to be executed
//after a specified time.

console.log("One");

console.log("Two");

//Basic syntax: setTimeout(callback, delay)

setTimeout(function () {
  console.log("Three");
  
},6000);

console.log("Four");


