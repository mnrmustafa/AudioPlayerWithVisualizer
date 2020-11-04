function seekTo() {
  // Calculating the seek position by the percentage of the seek slider and getting the relative duration to the track
  seekto = currentSong.duration * (seekSlider.value / 100);

  // Setting the current track position to the calculated seek position
  currentSong.currentTime = seekto;
}

function setVolume() {
  // Setting the volume according to the percentage of the volume slider set
  currentSong.volume = volumeSlider.value / 100;
}

function seekUpdate() {
  let seekPosition = 0;

  // Checking if the current track duration is a legible number
  if (!isNaN(currentSong.duration)) {
    seekPosition = currentSong.currentTime * (100 / currentSong.duration);
    seekSlider.value = seekPosition;

    // Calculating the time left and the total duration
    let currentMinutes = Math.floor(currentSong.currentTime / 60);
    let currentSeconds = Math.floor(currentSong.currentTime - currentMinutes * 60);
    let durationMinutes = Math.floor(currentSong.duration / 60);
    let durationSeconds = Math.floor(currentSong.duration - durationMinutes * 60);

    // Adding a zero to the single digit time values
    if (currentSeconds < 10) { currentSeconds = "0" + currentSeconds; }
    if (durationSeconds < 10) { durationSeconds = "0" + durationSeconds; }
    if (currentMinutes < 10) { currentMinutes = "0" + currentMinutes; }
    if (durationMinutes < 10) { durationMinutes = "0" + durationMinutes; }

    // Displaying the updated duration
    currentTime.textContent = currentMinutes + ":" + currentSeconds;
    totalDuration.textContent = durationMinutes + ":" + durationSeconds;
  }
}
