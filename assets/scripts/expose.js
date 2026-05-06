// expose.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  // TODO
  // select all elements 
  const hornSelect = document.querySelector('#horn-select');
  const hornImage = document.querySelector('#expose > img');
  const audioEl = document.querySelector('audio');
  const volumeSlider = document.querySelector('#volume');
  const volumeIcon   = document.querySelector('#volume-controls img');
  const playButton = document.querySelector('button');

  // set initial volume 
  audioEl.volume = volumeSlider.value / 100;

  // confetti stuff 
  const confetti = new JSConfetti();

  // Event Listener: user picks a horn from the dropdown menu
  hornSelect.addEventListener('change', function() {
    const val = hornSelect.value; // 'air-horn', 'car-horn', 'party-horn'
    hornImage.src = `assets/images/${val}.svg`;
    audioEl.src = `assets/audio/${val}.mp3`;
  });

  // Event Listener: user changes the volume slider
  volumeSlider.addEventListener('input', function() { 
    const vol = Number(volumeSlider.value);
    audioEl.volume = vol / 100; // convert to 0.0-1.0 for accuracy
    if (vol === 0){
      volumeIcon.src = 'assets/icons/volume-level-0.svg';
    }
    else if (vol < 33){
      volumeIcon.src = 'assets/icons/volume-level-1.svg';
    }
    else if (vol < 67){
      volumeIcon.src = 'assets/icons/volume-level-2.svg';
    }
    else {
      volumeIcon.src = 'assets/icons/volume-level-3.svg';
    }
  });

  // Event Listener: user clicks the play button
  playButton.addEventListener('click', function(){
    if (hornSelect.value === 'select'){
      return; // do nothing if no horn is selected
    }
    audioEl.play();
    if (hornSelect.value === 'party-horn'){
      confetti.addConfetti();
    }
  });

}