var days = 0, seconds = 0, minutes = 0, hours = 0;

setInterval(function() {
  secondPlay();
}, 1000);

setInterval(function() {
  minutePlay();
}, 10000);

setInterval(function() {
  hourPlay();
}, 60000); // Update every hour (60000 milliseconds)

function secondPlay() {
  $('body').addClass('play');
  $('.secondPlay li').toggleClass('active before');
  seconds = (seconds + 1) % 10;

  if (seconds === 0) {
    minutePlay();
  }

  $('.secondPlay .active .inn').text(seconds);
}

function minutePlay() {
  $('.minutePlay li').toggleClass('active before');
  minutes = (minutes + 1) % 10;

  if (minutes === 0) {
    hourPlay();
  }

  $('.minutePlay .active .inn').text(minutes);
}

function hourPlay() {
  $('.hourPlay li').toggleClass('active before');
  hours = (hours + 1) % 10;

  if (hours === 0) {
    days += 1;
    updateDayCounter();
  }

  $('.hourPlay .active .inn').text(hours);
}

function updateDayCounter() {
  $('.dayCounter .inn').text(days);
}