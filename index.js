function initApp() {
  var min = 60;
  var handle = setInterval(function() {
    min--;
    document.getElementById("hit").textContent = min + " seconds left";
  }, 1000);
  function alarmMe() {
    window.navigator.vibrate([
      200,
      100,
      200,
      100,
      200,
      100,
      200,
      100,
      200,
      100,
      200,
      100
    ]);
    document.getElementById("hit").textContent = "TimeOut!";
    clearInterval(handle);
  }
  setTimeout(alarmMe, 1000 * 60);
}

document.addEventListener("DOMContentLoaded", initApp);
