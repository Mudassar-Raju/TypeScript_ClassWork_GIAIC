//Basic syntax of functions
//function functionName(parameter1,parameter2,parameter3){
 // function body
//}
//#1
function myInfo(){
  console.log("Hi! My name is Mudassar Iqbal");
  console.log("I am from Pakistan.");
  console.log("i am a Software Engineer.");
};

myInfo();//invoke function

//#2
//Function with Parameter
function myInfoWithParameters(name:string,country:string,job:string):void{
console.log("My name is ",name);//Argument pass log
console.log(`I Am From ${country}`);//template
console.log("I Am a " + job);//concatenation
};

myInfoWithParameters("iqbal","Pakistan","Software Engineer.")

//#3
//Function that hoisted
logDateTime();
function logDateTime(): void{
  const date: Date = new Date();
  console.log(date);
    
};

//#4

//function with return type
function myFunctionWithReturnType(num1: number,num2: number):number{
  return num1 + num2;
};
const answer: number = myFunctionWithReturnType(12,12);
console.log(answer);

//#5
//function expression
const myInfoWithFunctionExpression = function():void{
  console.log("My name is Iqbal.");
  console.log("I am from Pakistan.");

};
myInfoWithFunctionExpression();

//#6
//Arrow function with rest parameters
const totalNumbers =(...numbers: number[]):number =>{
  console.log(numbers);
  console.log(typeof numbers);

  let total:number = 0;
  for(const number of numbers){
    total += number;
  }
  return total
};
const sum :number = totalNumbers(12,10,5,7);
console.log(sum);

//#7
//Arrow function with multiple parameters
const myInfoWithArrowFunction = (name:string,country:string,job:string) => {
  //function Body
  console.log("Hi! My name is",name);//Argument Pass Log
  console.log("I am from " + country);//concatenation
  console.log(`I am a ${job}`);//template string

};
myInfoWithArrowFunction("Amir","india","Marketer")
