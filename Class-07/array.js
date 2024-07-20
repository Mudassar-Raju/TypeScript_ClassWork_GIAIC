"use strict";
//Basic Array Syntax
//const shoppingLists : Array<string | number> = ["5","Apples","Milk","Eggs"]; //#1
//console.log(shoppingLists);
//const shoppingList : (string | number)[] = ["Apples","Milk","Eggs",5];   //#2
const shoppingList = ["Apples", "Milk", "Eggs"]; //#3
console.log(shoppingList);
shoppingList.forEach(lists => {
    console.log(lists);
});
shoppingList.push("grapes"); //#4
console.log(shoppingList);
//access array element using index number
const shoppingList1 = ["Apples", "Milk", "Eggs"]; //#5
let shopping = shoppingList1[1];
console.log(shopping);
let shopping1 = shoppingList[1];
console.log(shoppingList.length);
console.log(shoppingList.length);
//const cars = ["Saab ","Volvo","BMW"]; //#6
//console.log(cars[-1]);
//Readonly 
const shoppingList2 = ["Apples", "Milk", "Eggs"]; //#7
// shoppingList.push
const number = [1, 2, 3];
//number.push("4"); //error
number.push(4);
console.log(number);
