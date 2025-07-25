function updateClock() {
  const timeElem = document.getElementById("time");
  const now = new Date();
  let hours = now.getHours();
  const minutes = now.getMinutes();
  const seconds = now.getSeconds();
  const ampm = hours >= 12 ? "PM" : "AM";

  hours = hours % 12 || 12;

  const formatTime = (val) => String(val).padStart(2, '0');

  timeElem.textContent = `${formatTime(hours)}:${formatTime(minutes)}:${formatTime(seconds)} ${ampm}`;
}

setInterval(updateClock, 1000);
updateClock();
