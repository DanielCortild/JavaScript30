const HourHand = document.querySelector('#HourHand');

function setTime() {
  var time = new Date();

  const SecondHand = document.querySelector('#SecondHand');
  var seconds = time.getSeconds() * 6;
  SecondHand.style.transform = `translateX(3px) rotate(${seconds}deg)`;
  console.log(seconds);

  const MinuteHand = document.querySelector('#MinuteHand');
  var minutes = time.getMinutes() * 6 + seconds / 60;
  MinuteHand.style.transform = `translateX(3px) rotate(${minutes}deg)`;

  const HourHand = document.querySelector('#HourHand');
  var hours = time.getHours() * 15 + minutes / 60;
  HourHand.style.transform = `translateX(3px) rotate(${hours}deg)`;
}

setInterval(setTime, 1000);
