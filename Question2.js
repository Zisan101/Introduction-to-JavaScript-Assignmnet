//  What is hoisting in JavaScript? How does it affect var, let, and const?

// Hoisting is JavaScript's default behavior of moving variable and function declarations to the top of their scope before code execution. This means variables can be referenced before they are declared, though their values are not hoisted.

// How hoisting affects var, let, and const:
// var: Declarations are hoisted, and variables are initialized with undefined. This can lead to undefined values if a var is used before initialization [1].

// Example:

// js
// Copy code
console.log(x); // undefined
var x = 10;
// let: Declarations are hoisted but not initialized. Accessing a let variable before its declaration results in a ReferenceError due to the temporal dead zone between hoisting and initialization [4].

// const: Similar to let, const declarations are hoisted but not initialized. It will also throw a ReferenceError if accessed before declaration.