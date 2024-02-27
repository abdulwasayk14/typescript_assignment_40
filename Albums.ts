// Define an interface for the album object
interface Album {
    artist: string;
    title: string;
    tracks?: number; // Optional property
}

// Function to create a music album object
function make_album(artist: string, title: string, tracks?: number): Album {
    let album: Album = { artist: artist, title: title };
    if (tracks !== undefined) {
        album.tracks = tracks;
    }
    return album;
}

// Create three dictionaries representing different albums
let album1 = make_album('Taylor Swift', '1989');
let album2 = make_album('Ed Sheeran', '÷', 16);
let album3 = make_album('Adele', '25', 11);

// Print each return value to show that objects are storing the album information correctly
console.log(album1);
console.log(album2);
console.log(album3);