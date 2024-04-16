"use strict";
// Great Magicians: Start with a copy of your program from Exercise 41. Write a function called make_great() that modifies the array of magicians by adding the phrase the Great to each magician’s name. Call show_magicians() to see that the list has actually been modified.
Object.defineProperty(exports, "__esModule", { value: true });
// function to show magicians' names
function show_magicians(magicians) {
    magicians.forEach(name => console.log(name));
}
//Modifying the function:
function make_great(magicians) {
    return magicians.map(magicians => `The Great ${magicians}`);
}
//Array of Magicians
let magicians_names = ["Harry Houdini", "David Blaine", "Dough Henning", "Dai Vernon"];
let great_magicians = make_great(magicians_names);
//calling function 
show_magicians(great_magicians);
