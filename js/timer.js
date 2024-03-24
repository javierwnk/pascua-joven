// Set the date we're counting down to
var countDownDate = new Date("Apr 11, 2025 16:00:00").getTime();

        
// Update the count down every 1 second
var x = setInterval(function() {

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
  document.getElementById("dias").innerText =  days
  document.getElementById("horas").innerText =  hours
  document.getElementById("minutos").innerText =  minutes
  document.getElementById("segundos").innerText =  seconds


  // If the count down is finished, write some text
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("timer").innerHTML = `<div class="count" style="width: fit-content;">
                                                    <p id="dias">¡ES HOY!</p>
                                                  </div>`;
  }
}, 1000);