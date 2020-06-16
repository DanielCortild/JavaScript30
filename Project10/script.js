const checkBoxes = document.querySelectorAll("input[type='checkbox'");
let lastCheckedIndex = 0;
let shiftDown = false;

checkBoxes.forEach((checkBox, index) => {
  checkBox.addEventListener('click', e => {
    if(checkBox.checked) {
      if(e.shiftKey) {
        if(index < lastCheckedIndex) {
          for(let i = index; i <= lastCheckedIndex; i++){
            checkBoxes[i].checked = true;
          }
        } else {
          for(let i = index; i >= lastCheckedIndex; i--){
            checkBoxes[i].checked = true;
          }
        }
      }
      lastCheckedIndex = index;
    }
  });
})

document.addEventListener('keydown', e => { if(e.keyCode === 16) shiftDown = true });
document.addEventListener('keyup', e => { if(e.keyCode === 16) shiftDown = false });