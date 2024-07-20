"use strict";
//Switch case
const dayNumber = 4;
switch (dayNumber) {
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("tuesday");
        break;
    case 3:
        console.log("wednesday");
        break;
    case 4:
        console.log("thursday");
        break;
    case 5:
        console.log("friday");
        break;
    case 6:
        console.log("saturday");
        break;
    case 7:
        console.log("sunday");
        break;
    default:
        console.log("Invalid day");
}
//Create a variable with myAnswer type
const isClassMonday = "No";
//Use Switch case with myAnswer type
switch (isClassMonday) {
    case "Yes":
    case "Haan":
        console.log("There is Class.");
        break;
    case "No":
        console.log("There Is no Class");
        break;
    default:
        console.log("Invalid input");
}
