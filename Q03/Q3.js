"use strict";
// Question 3,Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.
Object.defineProperty(exports, "__esModule", { value: true });
let personName = "kanwal rafiqe";
// In Lower case
console.log(`"Personname in Lowercase:"`, personName.toLowerCase());
// In Upper case
console.log(`"Personname in Uppercase:"`, personName.toUpperCase());
// In Title case
console.log(`"Personname in Titlecase:"`, personName.replace(/\b\w/g, c => c.toUpperCase()));
