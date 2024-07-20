"use strict";
//#1
class Task {
    id;
    tittle;
    description;
    completed;
    constructor(id, tittle, description, completed) {
        this.id = id;
        this.tittle = tittle;
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
;
const taskOne = new Task(1, "walk", "walk to School", false);
console.log(taskOne);
taskOne.complete();
console.log(taskOne);
//#2
//access Modifiers
//public
//private
//protected
class Animal1 {
    name;
    age;
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    eat() {
        console.log(this.name + " is eating.");
    }
}
const Entertainment = new Animal1("Entertainment", 2);
Entertainment.eat();
console.log(Entertainment.name);
