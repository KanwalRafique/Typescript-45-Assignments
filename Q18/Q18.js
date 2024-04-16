"use strict";
//Seeing the World: Think of at least five places in the world you’d like to visit.
// • Store the locations in a array. Make sure the array is not in alphabetical order.
// • Print your array in its original order.
// • Print your array in alphabetical order without modifying the actual list.
// • Show that your array is still in its original order by printing it.
// • Print your array in reverse alphabetical order without changing the order of the original list.
// • Show that your array is still in its original order by printing it again.
// • Reverse the order of your list. Print the array to show that its order has changed.
// • Reverse the order of your list again. Print the list to show it’s back to its original order.
// • Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.
// • Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.
console.log("I would like to visit the following Places:");
//Task # 1: Storing location in an Array)
let places = ["Paris", "Turkey", "Azerbaijan", "France", "Behrin"];
//Task # 2: (Array in Oroginal order):
console.log("Original order:", places);
//Task # 3: (Array in Alphabetical order):
console.log("Alphabetical order:", [...places].sort());
//Task # 4: (Still in Original order):
console.log("Original order:", places);
//Task # 5: (Array in Reverse Albhabetical order):
console.log("Reverse alphabetical order:", [...places].sort().reverse());
//Task # 6: (Still in Original order):
console.log("Original order:", places);
//Task # 7: (Reverse order):
places.reverse();
console.log("Reversed order:", places);
//Task # 8: (Still in Original order):
places.reverse();
console.log("Original order:", places);
//Task # 9 
places.sort();
console.log("Alphabetical order:", places);
places.reverse();
console.log("Reverse alphabetical order:", places);
