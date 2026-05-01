const hours = document.querySelector(".timer_hours"),
  minuts = document.querySelector(".timer_minuts"),
  seconds = document.querySelector(".timer_seconds");

const t = setInterval(function countDown() {
  if (+hours.textContent == 0 && +minuts.textContent == 0 && +seconds.textContent == 0) {
    clearInterval(t);
  } else {
    if (+seconds.textContent > 0) {
      seconds.textContent = +seconds.textContent - 1;
    } else if (+minuts.textContent > 0) {
      minuts.textContent = +minuts.textContent - 1;
      seconds.textContent = 59;
    } else {
      hours.textContent = +hours.textContent - 1;
      minuts.textContent = 59;
    }
  }
}, 1000);

countDown();
