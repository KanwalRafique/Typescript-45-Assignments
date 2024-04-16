//Animals: Think of at least three different animals that have a common characteristic. Store the names of these animals in a list, and then use a for loop to print out the name of each animal.

// • Modify your program to print a statement about each animal, such as A dog would make a great pet. 

// • Add a line at the end of your program stating what these animals have in common. You could print a sentence such as Any of these animals would make a great pet!

let animals: string [] = ["eagle","falcon","hawk","owl","vulture"]; // Array of 3 animals 

let commonTrait: any = "birds of prey";

animals.forEach(animal =>{
    console.log(`The ${animal} is a ${commonTrait}`);
     
});
// Additional line which states that the above animals share common characteristic
console.log(`\nAll these animals kills and eats other birds and animals `);
