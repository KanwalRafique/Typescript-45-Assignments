"use strict";
// Album: Write a function called make_album() that builds a Object describing a music album. 
Object.defineProperty(exports, "__esModule", { value: true });
// The function should take in an artist name and an album title, and it should return a Object containing these two pieces of information. Use the function to make three dictionaries representing different albums. Print each return value to show that Objects are storing the album information correctly. Add an optional parameter to make_album() that allows you to store the number of tracks on an album. If the calling line includes a value for the number of tracks, add that value to the album’s Object. Make at least one new function call that includes the number of tracks on an album.
// function make_album(artist:string, title: string):{artist : string; title : string} {
//    const dictionaries = {
//     artist: artist.charAt(0).toUpperCase() +artist.slice(1),
//     title: title.charAt(0).toUpperCase() +title.slice(1)
//     };
//     return dictionaries
// }
// let album = make_album ("Ali","light" )
// console.log(album);
// album = make_album ("Hamza","red wave" )
// console.log(album);
// album = make_album ("Asma","Deep thoughts" )
// console.log(album);
function make_album(artist_name, album_title, tracks) {
    let album = {
        artist: artist_name,
        title: album_title,
    };
    if (tracks !== undefined) {
        album.tracks = tracks;
    }
    return album;
}
// Example albums
let album1 = make_album('Abbey Road', 'The Beatles');
let album2 = make_album('Thriller', 'Michael Jackson');
let album3 = make_album('Back in Black', 'AC/DC');
console.log(album1);
console.log(album2);
console.log(album3);
