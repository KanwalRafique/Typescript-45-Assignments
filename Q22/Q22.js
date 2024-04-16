"use strict";
// Intentional Error: If you haven’t received an array index error in one of your programs yet, try to make one happen. Change an index in one of your programs to produce an index error. Make sure you correct the error before closing the program.
Object.defineProperty(exports, "__esModule", { value: true });
//  Array of colors
let colors = ["Blue", "red", "green", "blue", "Purple"];
// Try to access an element at an invalid index (out of bounds)
console.log("Attempting to access an element at index 5:", colors[6]); // This will produce an error
// Correction of Error with a valid index
console.log("Accessing the first element:", colors[0]); // Accessing the first element
