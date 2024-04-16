"use strict";
// No Users: Add an if test to Exercise 30 to make sure the list of users is not empty.
// • If the list is empty, print the message We need to find some users!
Object.defineProperty(exports, "__esModule", { value: true });
// • Remove all of the usernames from your array, and make sure the correct message is printed.
// Array from Exercise 30
let usernames = ["Aroosa", "Seema", "Aamna", "Admin", "Ishmal"];
usernames = [];
if (usernames.length === 0) {
    console.log("We need to find some users");
}
else {
    // Using ForEach loop on Array:
    usernames.forEach(username => {
        if (username === "Admin") {
            console.log("Hello Admin, Would you like to see a status report?");
        }
        else {
            console.log(`Hello ${username}, thank you for logging in again.`);
        }
    });
}
