const hours = document.querySelector(".timer_hours"),
  minuts = document.querySelector(".timer_minuts"),
  seconds = document.querySelector(".timer_seconds");

const t = setInterval(function countDown() {
  if (+seconds.textContent > 0) {
    seconds.textContent = +seconds.textContent - 1;
  } else if (+minuts.textContent > 0) {
    minuts.textContent = +minuts.textContent - 1;
    seconds.textContent = 59;
  } else if (+hours.textContent > 0) {
    hours.textContent = +hours.textContent - 1;
    minuts.textContent = 59;
    seconds.textContent = 59;
  }

  if (
    +hours.textContent == 0 &&
    +minuts.textContent == 0 &&
    +seconds.textContent == 0
  ) {
    clearInterval(t);
  }
}, 1000);

countDown();
