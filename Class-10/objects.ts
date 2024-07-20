//#1 Object

//Basic Syntax of an object literal
//const objectName = {
  //key : value
//}
const myCar  = {
  name: "Mehran",
  color: "White",
  model: 2022,
  availableColor: ["Black","Blue","Red"],
  inStock: true,
};
console.log(myCar);//logs the whole object
console.log("------------------------------");


//Accessing Object Properties
console.log(myCar.color);// logs the value of color
console.log(myCar["model"]);//Another way of accessing object properties
console.log("------------------------------");


//#2
const person = {
  firstName: "John",
  lastName : "Doe",
  country: "USA",
  skinColor: "brown",
  //method
  fullName : function() {
    return this.firstName + " " + this.lastName;
  },
  //SayHello
sayHello: function (){
  return `Hello, my name is ${this.fullName()}`
}
};

console.log(person.fullName());//object method
console.log(person.sayHello());

console.log("-------------------------------");


//#3 Object in TypeScript
const pet: {
  type: string,
  name: string,
  age: number,
  color: string,
  sayMeow: () => string
}={
  type: "cat",
  name: "Tom",
  age: 4,
  color: "Black & White",
  sayMeow: function () {
    return "Meow Meow";
  }
};
console.log(pet);
console.log(pet.sayMeow());
console.log("---------------------------------");

//Type Alias
type pet = {
  type: string,
  name: string,
  age: number,
  color: string,
  sayMeow?: () => string,
  sayWoof?: () => string

};

let lucky: pet = {
  type: "dog",
  name: "Lucky",
  age: 5,
  color: "brown",
  sayWoof() {
    return "Woof Woof";
  },
};
if (lucky.sayWoof){
  console.log(lucky.sayWoof());
  
};

//custom type or Union or type Alias
type age = number | string;

const myAge: age = 28;
console.log(myAge);

console.log("---------------------");



//#4 Interface in Typescript
interface Person {
  firstName: string,
  lastName: string,
  sayHello: () => string
}
const iqbal: Person = {
  firstName: "Mudassar",
  lastName: "Iqbal",
  sayHello: function () {
    return `Hello, my name is ${this.firstName} ${this.lastName}`
  }
}
console.log(iqbal.sayHello());
console.log("---------------------------");

interface SuperHero extends Person {
  superPower: string,
  heroName: string
}
const spiderMan : SuperHero = {
  firstName: "Peter",
  lastName: "Parker",
  superPower: "Spider-Sense with web",
  heroName: "Spider-Man",
  sayHello: function () {
    return `Hello, I am ${this.heroName}`
  }
};
console.log(spiderMan.sayHello());
