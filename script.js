function updateClock() {
  const now = new Date();
  //    time update

  const time = now.toLocaleTimeString("bn-BD");
  document.getElementById("clock").innerText = time;

  // date updated
  const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  const date = now.toLocaleDateString("bn-BD", options);
  document.getElementById("date").innerText = date;
}

setInterval(updateClock, 1000);
updateClock();
