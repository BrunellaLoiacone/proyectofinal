const $days = document.querySelector("#days"),
  $hours = document.querySelector("#hours"),
  $minutes = document.querySelector("#minutes"),
  $seconds = document.querySelector("#seconds"),
  $finalMessage = document.querySelector(".sms-final"),
  $reloj = document.querySelector(".counter"),
  $faltan = document.querySelector(".missing");

//Fecha a futuro
const countdownDate = new Date("Nov 04, 2023 21:30:00").getTime();


let interval = setInterval(function () {
  //Obtener fecha actual y milisegundos
  const now = new Date().getTime();

  // Distancia entre ambas fechas
  let distance = countdownDate - now;

  // Calculos a Dias - horas - minutos - segundos
  let days = Math.floor(distance / (1000 * 60 * 60 * 24));
  let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Resultados
  $days.innerHTML = days;
  $hours.innerHTML = hours;
  $minutes.innerHTML = minutes;
  $seconds.innerHTML = ("0" + seconds).slice(-2);

  // Cuando llegue a 0
  if (distance < 0) {
    clearInterval(interval);
    $finalMessage.style.display = "flex";
    $reloj.style.display = "none";
    $faltan.style.display = "none";
  }
}, 1000);

//Popup
var btnAbrirPopup = document.getElementById("button-gift"),
  overlay = document.getElementById("overlay"),
  popup = document.getElementById("popup"),
  btnCerrarPopup = document.getElementById("icono");

btnAbrirPopup.addEventListener("click", function () {
  overlay.classList.add("active");
  popup.classList.add("active");
});

btnCerrarPopup.addEventListener("click", function () {
  overlay.classList.remove("active");
  popup.classList.remove("active");
});
