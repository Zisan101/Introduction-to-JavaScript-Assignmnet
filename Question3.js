// Explain JavaScript's dynamic typing and the typeof operator with examples.

// JavaScript is dynamically typed, meaning that variable types are determined at runtime. You don’t need to declare the type of a variable; it can hold any data type and change type later in the code.

// Example of dynamic typing:

let x = 42;    // x is a number
x = "hello";   // now x is a string

// typeof operator
// The typeof operator helps you determine the type of a variable or expression. It returns a string describing the type.

// Examples of typeof:

console.log(typeof 42);          // "number"
console.log(typeof "hello");     // "string"
console.log(typeof true);        // "boolean"
console.log(typeof {});          // "object"

// It’s useful for debugging and type checking during runtime