"use strict";
//Understanding callbacks hell
//callback hell happens when multiple callbacks are nested,
//making the code hard to read and maintain.
function checkWeather(callback) {
    console.log("Checking the Weather..............");
    setTimeout(() => {
        console.log("Weather is awesome best for Picnic!!");
        callback();
    }, 6000);
}
function cookBiryani(callback) {
    console.log("Preparing Biryani.........");
    setTimeout(() => {
        console.log("Biryani Is Ready!!");
        callback();
    }, 3000);
}
function packBegs2(callback) {
    console.log("Packing Stuff like Water Bottles , etc.");
    setTimeout(() => {
        console.log("Begs Are Packed!");
        callback();
    }, 10000);
}
function loadCar(callback) {
    console.log("Loading the Car.....");
    setTimeout(() => {
        console.log("Car is Loaded!");
        callback();
    }, 2000);
}
//invoking the function with multiple callbacks or callback hell
checkWeather(() => {
    cookBiryani(() => {
        packBegs2(() => {
            loadCar(() => {
                console.log("Happy Picnic!!");
            });
        });
    });
});
