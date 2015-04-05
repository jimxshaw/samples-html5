function updateTextInput(val) {
  document.getElementById('textInput').value = val;
}

var myVideo = document.getElementById('ad');

function playPause() {
  if (myVideo.paused) {
    myVideo.play();  
  }
  else {
    myVideo.pause();
  }
}

function makeBig() {
  myVideo.width = 640;
}

function makeSmall() {
  myVideo.width = 360;
}

function makeNormal() {
  myVideo.width = 480;
}


























