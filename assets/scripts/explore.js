// explore.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  // TODO

  const textArea = document.querySelector('#text-to-speak');
  const voiceSelect = document.querySelector('#voice-select');
  const playButton = document.querySelector('button');
  const faceImage = document.querySelector('#explore > img');

  let voices = [];

  // populate the voice dropdown menu
  function populateVoices() {
    voices = speechSynthesis.getVoices();
    for (const voice of voices){
      const option = document.createElement('option');
      option.textContent = voice.name;
      voiceSelect.appendChild(option);
    }
  }

  speechSynthesis.addEventListener('voiceschanged', populateVoices);
  populateVoices();

  // play button 
  playButton.addEventListener('click', function() {
    const utterance = new SpeechSynthesisUtterance(textArea.value);
    utterance.voice = voices[voiceSelect.selectedIndex - 1]; // -1 because the first option is "Select a voice"
    
    utterance.onstart = function() {
      faceImage.src = 'assets/images/smiling-open.png';
    };
    utterance.onend = function() {
      faceImage.src = 'assets/images/smiling.png';
    };
    speechSynthesis.speak(utterance);
  });


}