let player = document.querySelector(".player");

let video = player.querySelector(".viewer");
let progress = player.querySelector(".progress");
let progress_bar = player.querySelector(".progress__filled");
let toggle = player.querySelector(".toggle");
let skipButtons = player.querySelectorAll("[data-skip]");
let ranges = player.querySelectorAll(".player__slider");

togglePlay = () => {
  if(video.paused) {
    video.play();
  } else {
    video.pause();
  }
}

updateToggle = () => {
  let icon = video.paused ? '▶' : '⏸';
  toggle.textContent = icon;
}

function skip() {
  video.currentTime += parseFloat(this.dataset.skip);
}

function handleRangeChange() {
  video[this.name] = this.value;
}

handleProgress = () => {
  progress_bar.style.flexBasis = `${100*video.currentTime/video.duration}%`;
}

handleProgressClick = (e) => {
  video.currentTime = e.offsetX*video.duration/progress.offsetWidth
}

video.addEventListener('click', togglePlay);
video.addEventListener('play', updateToggle);
video.addEventListener('pause', updateToggle);
video.addEventListener('timeupdate', handleProgress);

toggle.addEventListener('click', togglePlay);

skipButtons.forEach(skipButton => skipButton.addEventListener('click', skip));

ranges.forEach(range => range.addEventListener('change', handleRangeChange));
ranges.forEach(range => range.addEventListener('mousemove', handleRangeChange));

let mouseDown = false;
progress.addEventListener('click', handleProgressClick);
progress.addEventListener('mousedown', () => mouseDown = true);
progress.addEventListener('mouseup', () => mouseDown = false);
progress.addEventListener('mousemove', (e) => mouseDown && handleProgressClick(e));