// JavaScript Strict Mode
"use strict";
x = 3.14;
























// let and const for Variable Declarations
let a = 10;
const PI = 3.14159;























// Arrow Functions

const add = (a, b) => a + b;
console.log(add(1,2))





















// Template Literals

let MyName = "John";
let greeting = `Hello, ${MyName}!`;
console.log(greeting)

















//Array Destructuring

const arr = [1, 2, 3, 4, 5];
const [first, second, third,fourth,fifth] = arr;
console.log(first);
console.log(second);
console.log(third);
console.log(fourth);
console.log(fifth);






// Object Destructuring
const person = {
    name: "Alice",
    age: 25,
    location: "Wonderland"
};

const { name, age, location } = person;
console.log(name);
console.log(age+40);
console.log(location);







// Nested Destructuring

const user = {
    name: "Bob",
    age: 30,
    parent: {
        father: "Charlie",
        mother: "Eve"
    }
};

const {name,age, parent: { father, mother } } = user;
console.log(name);
console.log(age);
console.log(father);
console.log(mother);












// Default Parameters


function greet(name = 'Guest') {
    console.log(`Hello, ${name}!`)
    return `Hello, ${name}!`;
  }

greet("OSTAD");














// Rest Parameters


function sumAll(...numbers) {
    let total = 0;
    for (let number of numbers) {
      total += number;
    }
    return total;
  }

 console.log(sumAll(1, 2, 3));
 console.log(sumAll(10, 20, 30, 40));
console.log(sumAll(10, 20, 30, 40,60,60));
