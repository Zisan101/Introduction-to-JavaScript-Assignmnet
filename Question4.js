// How can you manipulate strings in JavaScript? Provide examples of common methods

// JavaScript provides various methods to manipulate strings. Here are some common ones:

// concat(): Combines two or more strings.

let str1 = "Hello";
let str2 = "World";
console.log(str1.concat(" ", str2));  // "Hello World"

// toUpperCase() / toLowerCase(): Converts a string to uppercase or lowercase.

let str = "Hello World";
console.log(str.toUpperCase());  // "HELLO WORLD"
console.log(str.toLowerCase());  // "hello world"

// slice(): Extracts a section of a string and returns it as a new string.

let str = "JavaScript";
console.log(str.slice(0, 4));  // "Java"

// replace(): Replaces a specified value with another value in a string.

let str = "Hello World";
console.log(str.replace("World", "JavaScript"));  // "Hello JavaScript"

// split(): Splits a string into an array of substrings based on a delimiter.

let str = "apple,banana,cherry";
console.log(str.split(","));  // ["apple", "banana", "cherry"]

// trim(): Removes whitespace from both ends of a string.

let str = "  Hello World  ";
console.log(str.trim());  // "Hello World"
