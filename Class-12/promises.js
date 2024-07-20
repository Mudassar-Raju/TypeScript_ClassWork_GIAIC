"use strict";
function checkWeather3() {
    return new Promise((resolve, reject) => {
        console.log("Checking the Weather....");
        setTimeout(() => {
            console.log("Weather is Clear.");
            resolve();
        }, 4000);
    });
}
function prepareBurger() {
    return new Promise((resolve, reject) => {
        console.log("Preparing Burger.............");
        setTimeout(() => {
            console.log("Burger is ready!");
            resolve();
        }, 4000);
    });
}
function packBegs3() {
    return new Promise((resolve, reject) => {
        console.log("Packing stuff like drinks, Snack and Water Bottle etc.........");
        setTimeout(() => {
            console.log("Begs are packed!");
            resolve();
        }, 3000);
    });
}
function loadCar3() {
    return new Promise((resolve, reject) => {
        console.log("Loading the Car.....");
        setTimeout(() => {
            console.log("Car is Loaded!");
            resolve();
        }, 5000);
    });
}
//invoking checkWeather3() which return a Promise so we can use .then()
checkWeather3()
    .then(prepareBurger)
    .then(packBegs3)
    .then(loadCar3)
    .then(() => {
    console.log("Picnic Preparation are complete! here we go!");
})
    .catch((error) => {
    console.log("Failed to prepare for the Picnic:", error);
});
