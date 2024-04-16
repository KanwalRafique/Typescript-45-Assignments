// Favorite Fruit: Make a array of your favorite fruits, and then write a series of independent if statements that check for certain fruits in your array.
// • Make a array of your three favorite fruits and call it favorite_fruits.

// • Write five if statements. Each should check whether a certain kind of fruit is in your array. If the fruit is in your array, the if block should print a statement, such as You really like bananas!

// Array of favorite fruits:

let favorite_fruits: string [] = ["Strawberry", "Water Melon", "Mango", "Orange", "Kiwi"];

// Check if certain fruits are included
if (favorite_fruits.includes("Strawberry")) {
    console.log("I really like Strawberry!");  
}
if (favorite_fruits.includes("Water Melon")){
    console.log("Water Melon is one of my favorite fruit too!");
}
if (favorite_fruits.includes("Orange")){
    console.log("I also like Orange due to its taste");
}
if (favorite_fruits.includes("Mango")){
    console.log("I also enjoy Mango");
}
if (favorite_fruits.includes("Kiwi")) {
    console.log("Same as orange I like Kiwi too...");   
}
else 
{
    console.log("the fruit is not in the list is logged.");
}