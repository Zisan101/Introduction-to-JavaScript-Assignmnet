// Compare var, let, and const in JavaScript. When would you use each
var:

// Function-scoped (available within the function).
// Can be re-declared and updated within the same scope.
// Does not respect block scope, so it can lead to unexpected behavior.
// Use case: Older JavaScript code or if function scoping is needed.

// let:

// Block-scoped (only available within the block {} where it's defined).
// Can be updated but not re-declared in the same scope.
// Avoids issues with variable hoisting that can occur with var.
// Use case: Use for variables that need to be updated within a block or loop but not re-declared.

// const:

// Block-scoped like let, but cannot be updated or re-declared once assigned.
// Ideal for values that shouldn’t change, though object and array contents can still be modified.
// Use case: Use for constants or values that shouldn't be reassigned after their initial definition.