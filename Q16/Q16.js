"use strict";
// More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.
Object.defineProperty(exports, "__esModule", { value: true });
// • Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.
// • Add one new guest to the beginning of your array.
// • Add one new guest to the middle of your array. 
// • Use append() to add one new guest to the end of your list.
// • Print a new set of invitation messages, one for each person in your list.
// 1st Task: 
let guestArray = ["Aroosa", "Saman", "Aamna"];
let canNotAttend = "Saman";
console.log(`${canNotAttend} cannot make it, for dinner`);
let newGuest = [] = "Seema";
guestArray[guestArray.indexOf(canNotAttend)] = newGuest;
console.log(guestArray);
//Informing guest about new table.
guestArray.map((items) => console.log(`Dear ${items}, there is a GOOD NEWS!!!!!!I found a BIGGER DINNER TABLE, So I am inviting more people.`));
//2nd Task: Adding New Guest at the beginning of an Array.   
guestArray.unshift("Ishmal");
console.log(guestArray);
//3rd Task: Adding New Guest at the middle of an Array.
let middleGuest = "Asma";
let middleIndex = guestArray.length / 2;
guestArray.splice(middleIndex, 0, middleGuest);
console.log(guestArray);
//4th Task:By using append() / Push() Adding New Guest at the end of an Array.
guestArray.push("Kinza");
console.log(guestArray);
//5th Task: Printing New Invitation.
guestArray.map((item) => console.log(`Dear ${item}, You are invited to dinner at My Home`));
