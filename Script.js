// JavaScript to collapse the navbar after a link is clicked
document.querySelectorAll('.navbar-nav .nav-link').forEach(function (element) {
  element.addEventListener('click', function (event) {
      var navbarToggler = document.querySelector('.navbar-toggler');
      var bsCollapse = new bootstrap.Collapse(document.querySelector('#navbarSupportedContent'), {
          toggle: false
      });
      if (window.getComputedStyle(navbarToggler).display !== 'none') {
          bsCollapse.toggle();
      }
      // Allow default behavior to proceed after a slight delay
      setTimeout(function() {
          var target = element.getAttribute('href');
          window.location = target;
      }, 350);
  });
});

//Counter
var enddateTime = new Date("2024-07-14T06:55:00");
// Set the date we're counting down to
var countDownDate = new Date(enddateTime).getTime();

// Update the count down every 1 second
var x = setInterval(function () {
  // Get today's date and time
  var now = new Date().getTime();

  // Find the distance between now and the count down date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the result in the element with id="demo"
  document.getElementById("timeToGo").innerHTML =
    "noch " +
    days +
    " Tage " +
    hours +
    " Stunden " +
    minutes +
    " Minuten " +
    seconds +
    " Sekunden ";

  // If the count down is finished, write some text
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("timeToGo").innerHTML = "Wir sind unterwegs!";
  }
  if (now > countDownDate) {
    clearInterval(x);
    document.getElementById("timeToGo").innerHTML = "Leider ist die Reise schon vorbei!";
  }
});
// ************************************************************
