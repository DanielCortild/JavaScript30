const checkBoxes = document.querySelectorAll("input[type='checkbox'");
let lastCheckedIndex = 0;

checkBoxes.forEach((checkBox, index) => {
  checkBox.addEventListener('click', e => {
    if(checkBox.checked) {
      if(e.shiftKey) {
        let inBetween = false;
        checkBoxes.forEach((box, i) => {
          if((i === index && lastCheckedIndex) || i === lastCheckedIndex) inBetween = !inBetween;
          if(inBetween) box.checked = true;
        });
      }
      lastCheckedIndex = index;
    } else lastCheckedIndex = null
  });
});