"use strict";
// Question 15: Changing Guest List: 
Object.defineProperty(exports, "__esModule", { value: true });
// One of your guests can't make it to the dinner, so you need to send out a new set of invitations with a replacement guest.
// • Start with your program from Exercise 14. Add a print statement at the end of your program stating the name of the guest who can’t make it.
// • Modify your list, replacing the name of the guest who can’t make it with the name of the new person you are inviting.
// • Print a second set of invitation messages, one for each person who is still in your list.
let guestArray = ["Aroosa", "Saman", "Aamna"];
let canNotAttend = "Saman";
console.log(`${canNotAttend} cannot make it, for dinner`);
let newGuest = [] = "Seema";
guestArray[guestArray.indexOf(canNotAttend)] = newGuest;
console.log(guestArray);
guestArray.map((items) => console.log(`Dear ${items}, you are invited for the dinner`));
