"use strict";
// Alien Colors #2: Choose a color for an alien as you did in Exercise 25, and write an if-else chain.
// • If the alien’s color is green, print a statement that the player just earned 5 points for shooting the alien.
Object.defineProperty(exports, "__esModule", { value: true });
// • If the alien’s color isn’t green, print a statement that the player just earned 10 points.
// • Write one version of this program that runs the if block and another that runs the else block.
let alien_color = "green";
//------------ Runs if block------------
if (alien_color === "green") {
    console.log("\n The Player just earned 5 points for shooting the alien. ");
}
else {
    console.log("\n  The Player just earned 10 points.");
}
//-------------Runs else block------------
alien_color = "red";
if (alien_color === "green") {
    console.log("\n The player just earned 5 points.");
}
else {
    console.log("\n The player just earned 10 points.");
}