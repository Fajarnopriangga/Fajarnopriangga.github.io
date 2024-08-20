// Set countdown time contoh dibawah ini (1 hari, 1 jam, 10 menit, 10 detik) ubah sesuai kebutuhan
var countdownTime =
  1 * 24 * 60 * 60 * 1000 + 1 * 60 * 60 * 1000 + 10 * 60 * 1000 + 10 * 1000;

function setCountDownDate() {
  return new Date(new Date().getTime() + countdownTime).getTime();
}

var countDownDate = setCountDownDate();

var x = setInterval(function () {
  var now = new Date().getTime();

  var distance = countDownDate - now;

  var hari = Math.floor(distance / (1000 * 60 * 60 * 24));
  var jam = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var menit = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var detik = Math.floor((distance % (1000 * 60)) / 1000);

  if (distance >= 0) {
    document.getElementById("countdown").innerHTML =
      `<div class="time-container">${hari}<br>hari</div>` +
      `<div class="time-container">${jam}<br>jam</div>` +
      `<div class="time-container">${menit}<br>menit</div>` +
      `<div class="time-container">${detik}<br>detik</div>`;
  } else {
    document.getElementById("countdown").innerHTML =
      `<div class="time-container">0<br>hari</div>` +
      `<div class="time-container">0<br>jam</div>` +
      `<div class="time-container">0<br>menit</div>` +
      `<div class="time-container">0<br>detik</div>`;
    countDownDate = setCountDownDate();
  }
}, 1000);
