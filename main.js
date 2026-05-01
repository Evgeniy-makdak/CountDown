const hours = document.querySelector(".timer_hours"),
      minuts = document.querySelector(".timer_minuts"),
      seconds = document.querySelector(".timer_seconds"),
      milliseconds = Date.now();
 
seconds.textContent = milliseconds;      