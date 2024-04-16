"use strict";
// Unchanged Magicians: Start with your work from Exercise 42. Call the function make_great() with a copy of the array of magicians’ names. Because the original array will be unchanged, return the new array and store it in a separate array. Call show_magicians() with each array to show that you have one array of the original names and one array with the Great added to each magician’s name
Object.defineProperty(exports, "__esModule", { value: true });
function show_magicians(magicians) {
    magicians.forEach(name => console.log(name));
}
//Modifying the function:
function make_great(magicians) {
    return magicians.map(magicians => `The Great ${magicians}`);
}
//Array of Magicians
let magicians_names = ["Harry Houdini", "David Blaine", "Dough Henning", "Dai Vernon"];
// Making a copy of Magicians names:
let copy_magicians_names = magicians_names.slice();
// Modified the copied array:
let copy_great_magicians = make_great(copy_magicians_names);
// showing both arrays
console.log("\n ------Original Array:------\n");
show_magicians(magicians_names); // Original Array
console.log("\n -------Modified Array:-------\n");
show_magicians(copy_great_magicians); // Copied Array
