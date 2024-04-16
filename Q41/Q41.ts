// Magicians: Make an array of magician’s names. Pass the array to a function called show_magicians(), which prints the name of each magician in the array.

// let magicians: string [] = ["Harry Houdini", "David Blaine", "Dough Henning", "Dai Vernon"];

// function show_magicians (magicians:string[]) {
//     magicians.forEach(magician => {
//         console.log(magician);
        
//     });
// }
// show_magicians(magicians)

function show_magicians(magicians:string[]) {
    magicians.forEach(magicians => console.log(magicians)
    );
}
let magician_names = ["Harry Houdini", "David Blaine", "Dough Henning", "Dai Vernon"];

//calling function for printing names of Magicians
show_magicians(magician_names);