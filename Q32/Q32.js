"use strict";
// Checking Usernames: Do the following to create a program that simulates how websites ensure that everyone has a unique username.
// • Make a list of five or more usernames called current_users.
Object.defineProperty(exports, "__esModule", { value: true });
// • Make another list of five usernames called new_users. Make sure one or two of the new usernames are also in the current_users list.
// • Loop through the new_users list to see if each new username has already been used. If it has, print a message that the person will need to enter a new username. If a username has not been used, print a message saying that the username is available.
// • Make sure your comparison is case insensitive. If 'John' has been used, 'JOHN' should not be accepted.
// Array (List) of Current users:
let current_users = ["Ali", "Aslam", "Aamna", "Sadia"];
// Array (List) of New users:
let new_users = ["Seema", "Ali", "Saman", "Kainat", "aamna"];
// Loop through new_users to check for usernames availability
new_users.forEach(new_one_user => {
    // making condition for username already exixts and save in our_condition variable
    let our_condition = current_users.some(current_one_user => current_one_user.toLowerCase() === new_one_user.toLowerCase());
    //print different messages using if-else statements
    if (our_condition) {
        console.log(`Sorry!!!!!! username ${new_one_user} is not available, need to enter a new username`);
    }
    else {
        console.log(` The username ${new_one_user} is available`);
    }
});
