"use strict";
//Basic syntax of for in loop
//for (variable in loop){
//statement
//}
const groceryItems = ["bread", "milk", "apple", "juice"];
for (const item in groceryItems) {
    console.log(`i have purchase ${groceryItems[item]}`);
}
;
