class playpauseSong {
  constructor(){
  // Switching between playing and pausing depending on the current state
  if (!isPlaying)
   new playSong();
  else
   new pauseSong();
}
}

class playSong {
  constructor(){
  // Plays the loaded track
  currentSong.play();
  isPlaying = true;

  // Replaces icon with the pause icon
  playpauseBtn.innerHTML = '<i class="fa fa-pause-circle fa-5x"></i>';
}
}

class pauseSong {
  constructor(){
  // Pauses the loaded track
  currentSong.pause();
  isPlaying = false;

  // Replaces icon with the play icon
  playpauseBtn.innerHTML = '<i class="fa fa-play-circle fa-5x"></i>';
}
}

class nextSong {
  constructor(){
  // Goes back to the first track if the current one is the last in the track list
  if (songIndex < playlist.length - 1)
    songIndex += 1;
  else
    songIndex = 0;

  // Loads and plays the new track
  loadTrack(songIndex);
  new playSong();
}
}

class prevSong {
  constructor(){
  // Goes back to the last track if the current one is the first in the track list
  if (songIndex > 0)
    songIndex -= 1;
  else
    songIndex = playlist.length;

  // Loads and plays the new track
  loadTrack(songIndex);
  new playSong();
}
}
