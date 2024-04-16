"use strict";
//Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests.
// • Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite only two people for dinner.
Object.defineProperty(exports, "__esModule", { value: true });
// • Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from your list, print a message to that person letting them know you’re sorry you can’t invite them to dinner.
// • Print a message to each of the two people still on your list, letting them know they’re still invited.
// • Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have an empty list at the end of your program.
//According to Exercise 16.
let guestArray = ["Aroosa", "Saman", "Aamna"];
let canNotAttend = "Saman";
console.log(`${canNotAttend} cannot make it, for dinner`);
let newGuest = [] = "Seema";
guestArray[guestArray.indexOf(canNotAttend)] = newGuest;
console.log(guestArray);
//Adding New Guest at the beginning
guestArray.unshift("Ishmal");
console.log(guestArray);
//Adding New Guest at the middle of an Array.
let middleGuest = "Asma";
let middleIndex = guestArray.length / 2;
guestArray.splice(middleIndex, 0, middleGuest);
console.log(guestArray);
//Adding New Guest at the end of an Array.
guestArray.push("Kinza");
console.log(guestArray);
//Task # 1: Printing message for the invitation of 2 people:
console.log("BAD LUCK!!!! Bigger dinner table not arrived I can only invite 2 people");
// Task # 2: Removing guest more than 2.
while (guestArray.length > 2) {
    let removedGuest = guestArray.pop();
    console.log(`Extremly Sorry, ${removedGuest}, "Unfortunately, I won't be able to invite you for dinner.`);
}
//Task # 3: Printing invitation to the remaining 2 guests.
guestArray.forEach(guest => {
    console.log(`Dear ${guest}, I have invited some of my selected BEST FRIENDS, Kindly joins us... :) `);
});
guestArray.splice(0, guestArray.length);
//Task # 4: Removing the last two guests from the list (Shows empty array)
guestArray.pop();
console.log("Final guestlist =", guestArray);
