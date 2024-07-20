"use strict";
//#1 Object
//Basic Syntax of an object literal
//const objectName = {
//key : value
//}
const myCar = {
    name: "Mehran",
    color: "White",
    model: 2022,
    availableColor: ["Black", "Blue", "Red"],
    inStock: true,
};
console.log(myCar); //logs the whole object
console.log("------------------------------");
//Accessing Object Properties
console.log(myCar.color); // logs the value of color
console.log(myCar["model"]); //Another way of accessing object properties
console.log("------------------------------");
//#2
const person = {
    firstName: "John",
    lastName: "Doe",
    country: "USA",
    skinColor: "brown",
    //method
    fullName: function () {
        return this.firstName + " " + this.lastName;
    },
    //SayHello
    sayHello: function () {
        return `Hello, my name is ${this.fullName()}`;
    }
};
console.log(person.fullName()); //object method
console.log(person.sayHello());
console.log("-------------------------------");
//#3 Object in TypeScript
const pet = {
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
let lucky = {
    type: "dog",
    name: "Lucky",
    age: 5,
    color: "brown",
    sayWoof() {
        return "Woof Woof";
    },
};
if (lucky.sayWoof) {
    console.log(lucky.sayWoof());
}
;
const myAge = 28;
console.log(myAge);
console.log("---------------------");
const iqbal = {
    firstName: "Mudassar",
    lastName: "Iqbal",
    sayHello: function () {
        return `Hello, my name is ${this.firstName} ${this.lastName}`;
    }
};
console.log(iqbal.sayHello());
console.log("---------------------------");
const spiderMan = {
    firstName: "Peter",
    lastName: "Parker",
    superPower: "Spider-Sense with web",
    heroName: "Spider-Man",
    sayHello: function () {
        return `Hello, I am ${this.heroName}`;
    }
};
console.log(spiderMan.sayHello());
