//#1
//Call Back Function (Simple Function With Parameter)
function myCallBack(text :string){
  console.log("My Call Back Function: " + text);
};
myCallBack("Hello World!");

console.log("////////////////////////////////////////");

//Function that take function as Parameter
function callingFunction(initialText: string , callback: (text: string) => void){
  console.log("WelCome To My World!");
  
  callback(initialText);
};

//invoke function with argument and callback function first way
callingFunction("Hey!",myCallBack);
console.log("///////////////////////////////////////////");


//invoke function with argument second way with arrow function
callingFunction("Hello World", (Text) => {
  console.log("Second way with arrow function callback " + Text);
  
});

console.log("////////////////////////////////");

//invoke function with argument third way with function keyword
callingFunction("Hello World", function (text) {
  console.log("Custom callback with function keyword " + text);
  
});