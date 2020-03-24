const panels = document.querySelectorAll(".panel");
panels.forEach(panel => panel.addEventListener('click', toggle));

function toggle() {
  panels.forEach(panel => panel.classList.remove('open'));
  this.classList.add('open');
}
