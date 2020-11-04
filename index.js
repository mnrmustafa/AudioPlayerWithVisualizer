// Setting the HTML elements in the main page
let nowPlaying = document.querySelector(".now-playing");
let songArt = document.querySelector(".track-art");
let songName = document.querySelector(".track-name");
let songArtist = document.querySelector(".track-artist");

let playpauseBtn = document.querySelector(".playpause-track");
//let nextButtton = document.querySelector(".next-track");
//let prevButtton = document.querySelector(".prev-track");

let seekSlider = document.querySelector(".seek_slider");
let volumeSlider = document.querySelector(".volume_slider");
let currentTime = document.querySelector(".current-time");
let totalDuration = document.querySelector(".total-duration");

// Globally used variables
let songIndex = 0;
let isPlaying = false;
let updateTimer;

// Creating the audio element for the player
let currentSong = document.createElement('audio');

// Initializing the playlist
let playlist = [
{
	name: "See you Again",
	artist:"Wiz Khalifa ft. Charlie Puth",
	//image:"Image URL",
	path:"See you Again.mp3"
},
{
	name:"Sketchers",
	artist:"Tyga ft. OUHBOY",
	//image:"",
	path:"Sketchers.mp3"
},
{
	name: "Bad Guy",
	artist: "Billie Eilish",
	//image: "Image URL",
	path: "BadGuy.mp3"
},
{
	name:"Why this Kolaveri Di",
	artist:"Dhanush",
	//image:"Image URL",
	path:"Why this Kolaveri Di.mp3"
},
{
	name:"Despacito",
	artist:"Luis Fonsi ft. Daddy Yankee",
	//image:"Image URL",
	path:"Despacito.mp3"
},
{
	name: "Still D.R.E.",
	artist: "Dr. DRE ft. Snoop Dogg",
	//image: "Image URL",
	path: "stillDre.mp3"
}
];
