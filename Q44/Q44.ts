// Sandwiches: Write a function that accepts an array of items a person wants on a sandwich. The function should have one parameter that collects as many items as the function call provides, and it should print a summary of the sandwich that is being ordered. Call the function three times, using a different number of arguments each time.

function make_sandwich(...items: string[] ){

console.log("Making a Sandwich with the following items:");

items.forEach(singleItem => console.log("-" + singleItem));
console.log("Now enjoy your Sandwich!!!!!!\n");
}

// Calling function with 3 different Arguments:
make_sandwich("Chicken", "Cheese", "Mayo", "Egg");
make_sandwich("Bread", "Chicken spread", "Cucumber" );
make_sandwich("Vegetales", "Mayo", "Blackpaper", "Ketchup")