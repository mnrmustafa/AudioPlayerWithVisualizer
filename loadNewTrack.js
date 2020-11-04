loadTrack(0);

function loadTrack(songIndex) {

  // class to reset all values to their default
  class songReset {
    constructor(){
      currentTime.textContent = "00:00";
      totalDuration.textContent = "00:00";
      seekSlider.value = 0;
    }
  }

  // Getting a random number between 64 to 256 (for getting lighter colors)
  class random_bg_color {
  constructor(){
  this.red = Math.floor(Math.random() * 256) + 64;
  this.green = Math.floor(Math.random() * 256) + 64;
  this.blue = Math.floor(Math.random() * 256) + 64;

  // Creating a color withe the given values
  var bgColor = "rgb(" + this.red + ", " + this.green + ", " + this.blue + ")";

  // Changing the background to a new color
  document.body.style.background = bgColor;
  }
  }

// Clearing the previous seek timer
clearInterval(updateTimer);
new songReset();

// Loading a new track
currentSong.src = playlist[songIndex].path;
currentSong.load();

// Update details of the song
//songArt.style.backgroundImage = "url(" + playlist[trackIndex].image + ")";
songName.textContent = playlist[songIndex].name;
songArtist.textContent = playlist[songIndex].artist;
nowPlaying.textContent = "PLAYING " + (songIndex + 1) + " OF " + playlist.length;

// Setting an interval of 1000 milliseconds  for updating the seek slider
updateTimer = setInterval(seekUpdate, 1000);

// Moving to the next song if the current finishes playing using the 'ended' event
currentSong.addEventListener("ended", nextSong);

// calling the random function to get a random background color
new random_bg_color();
}
