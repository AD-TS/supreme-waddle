let minutes = 25;
let seconds = '00';

function template() {
  document.getElementById("minutes").innerHTML = minutes;
  document.getElementById("seconds").innerHTML = seconds;
}; 

function start () {
 minutes = 24;
 seconds = 59;  

 document.getElementById("minutes").innerHTML = minutes;
 document.getElementById("seconds").innerHTML = seconds;

 let minutes_interval = setInterval(minutesTimer, 60000);
 let seconds_interval = setInterval(secondsTimer, 1000);

 function minutesTimer() {
  minutes = minutes - 1;
  document.getElementById("minutes").innerHTML = minutes; 
 }

 function secondsTimer() {
  seconds = seconds - 1;
  document.getElementById("seconds").innerHTML = seconds; 

  if (seconds <=0) {
    seconds = 60; 
  }
 }

}