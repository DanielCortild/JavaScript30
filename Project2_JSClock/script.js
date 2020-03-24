const SecondHand = document.querySelector('#SecondHand');
const MinuteHand = document.querySelector('#MinuteHand');
const HourHand = document.querySelector('#HourHand');

function setTime() {
  var time = new Date();

  var seconds = time.getSeconds() * 6;
  SecondHand.style.transform = `translateX(3px) rotate(${seconds}deg)`;

  var minutes = time.getMinutes() * 6 + seconds / 60;
  MinuteHand.style.transform = `translateX(3px) rotate(${minutes}deg)`;

  var hours = ( time.getHours() % 12 ) * 30 + minutes / 12;
  HourHand.style.transform = `translateX(3px) rotate(${hours}deg)`;
}

setInterval(setTime, 1000);
