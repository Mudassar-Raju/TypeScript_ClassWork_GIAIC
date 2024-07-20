"use strict";
const task = {
    id: 1,
    tittle: "Coding Preparation",
    description: "task 1 description",
    completed: false,
    complete: function () {
        this.completed = true;
    }
};
console.log(task);
task.complete();
console.log(task);
const task1 = {
    id: 1,
    tittle: "Exam Preparation",
    description: "task 2 description",
    completed: false,
    compete: function () {
        this.completed = true;
    }
};
console.log(task1);
task1.compete();
console.log(task1);
