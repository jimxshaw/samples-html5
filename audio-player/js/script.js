var audio = new Audio('media/artist - firstSong.mp3');

// Hide Pause button
$('#pause').hide();

// Play button hides and Pause button shows
// while the song is playing
$('#play').click(function() {
  audio.play();
  $('#play').hide();
  $('#pause').show();
});

// Pause button hides and Play button shows
// while the song is paused
$('#pause').click(function() {
  audio.pause();
  $('#play').show();
  $('#pause').hide();
});

// Stop functionality doesn't exist in jQuery
// thus pause used in conjunction with setting
// the song timer to zero will serve as "stop"
$('#stop').click(function() {
  audio.pause();
  audio.currentTime = 0;
});















