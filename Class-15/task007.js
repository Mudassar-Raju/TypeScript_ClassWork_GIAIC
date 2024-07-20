"use strict";
//#Animal class
class Animal {
    type;
    name;
    age;
    color;
    description;
    completed;
    constructor(type, name, age, color, description, completed) {
        this.type = type;
        this.name = name;
        this.age = age;
        this.color = color;
        this.description = description;
        this.completed = completed;
    }
    complete() {
        this.completed = true;
    }
    incomplete() {
        this.completed = false;
    }
}
const lucky = new Animal("dog", "lucky", 2, "Black & White", "lucky playing in Park with ball.", false);
console.log(lucky);
lucky.complete();
console.log(lucky);
