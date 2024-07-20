"use strict";
//Class #8
//#1 basic Syntax of for loop
//for (initialization;condition; increment/decrement)
//statement
//}
// Initialization means where the loop starts
// Condition is used to check if the loop should continue
// Increment/decrement is used to update the value of i
for (let i = 0; i <= 5; i++) {
    console.log(i);
}
;
//Done
console.log("-----------------------");
//#2
for (let i = 5; i > 0; i--) {
    console.log(i);
}
;
//Done
console.log("------------------------");
//#3
for (let i = 1; i <= 10; i++) {
    const tableNumber = 3;
    console.log(`${tableNumber} X  ${i} = ${tableNumber * i}`);
}
;
//Done
console.log("------------------------");
//#4 Odd Number
for (let i = 1; i <= 10; i++) {
    if (i % 2 === 0) {
        continue;
    }
    else {
        console.log(i);
    }
}
;
//Done
console.log("-------------------------");
//#5 
for (let i = 1;; i++) {
    if (i > 10) {
        break;
    }
    else {
        console.log(i);
    }
}
;
console.log("-------------------------");
//#6
