// What are the differences and similarities between null and undefined in JavaScript?

// Similarities:
// Both null and undefined represent the absence of a value.

// Both are primitive data types in JavaScript.

// Comparing null and undefined with == results in true because they are loosely equa

console.log(null == undefined);  // true

// Differences:
// undefined:

// Represents the absence of value because a variable has not been initialized.
// Automatically assigned by JavaScript to uninitialized variables.

let x;
console.log(x);  // undefined

// null:

// Represents the intentional absence of any value, typically assigned by the programmer to indicate "no value."

let y = null;
console.log(y);  // null

// Additionally, null and undefined behave differently with strict equality (===), where they are not equal:

console.log(null === undefined);  // false



