"use strict";
//Understanding async/await
//async/await is a syntax that allows you to write asynchronous code
//without using callbacks or promises.
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
//async/await makes working with promises easier by allowing us to 
//write asynchronous code that looks like synchronous code.
function checkWeather4() {
    return new Promise((resolve, reject) => {
        console.log("Checking the Weather.......");
        setTimeout(() => {
            console.log("Weather is Clear!");
            resolve();
        }, 3000);
    });
}
function prepareBurger4() {
    return new Promise((resolve, reject) => {
        console.log("Preparing Burger...");
        setTimeout(() => {
            console.log("Burger is Ready!");
            resolve();
        }, 2000);
    });
}
function packBegs4() {
    return new Promise((resolve, reject) => {
        console.log("Packing Stuff.............");
        setTimeout(() => {
            console.log("Begs are Packed!");
            resolve();
        }, 3000);
    });
}
function loadCar4() {
    return new Promise((resolve, reject) => {
        console.log("Loading the Car.........");
        setTimeout(() => {
            console.log("Car is Loaded!");
            resolve();
        }, 2000);
    });
}
console.log("Before Picnic function");
function preparePicnic() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            yield checkWeather4();
            yield prepareBurger4();
            yield packBegs4();
            yield loadCar4();
            console.log("Picnic Preparations are complete! Here we go!!");
        }
        catch (error) {
            console.error("Failed to Prepare for  the Picnic:", error);
        }
    });
}
preparePicnic();
console.log("After Picnic Function");
