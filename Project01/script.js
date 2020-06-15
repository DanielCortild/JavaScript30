var audio_files = {
  65: 'sounds/Clap.wav',
  83: 'sounds/Ride.wav',
  68: 'sounds/Snare.wav',
  70: 'sounds/Cymbal.wav',
  71: 'sounds/Openhat.wav',
  72: 'sounds/Kick.wav',
  74: 'sounds/Hihat.wav',
}

function playSound (e) {
  var code = e.keyCode;
  try{

    var audio = new Audio( audio_files[code] );
    audio.currentTime = 0;
    audio.play();

    var key = document.querySelector(`.key[data-key="${code}"]`);
    key.classList.add("key-pressed");

    new Promise((resolve) => setTimeout(resolve, 500)).then(() => {
      key.classList.remove("key-pressed");
    });

  } catch {}
}

window.addEventListener('keydown', playSound);
