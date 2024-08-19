function animateValue(obj, start, end, duration) {
  let startTimestamp = null;
  const step = (timestamp) => {
    if (!startTimestamp) startTimestamp = timestamp;
    const progress = Math.min((timestamp - startTimestamp) / duration, 1);
    const counter = Math.floor(progress * (end - start) + start);
    obj.innerHTML = counter.toLocaleString();
    if (progress < 1) {
      window.requestAnimationFrame(step);
    }
  };
  window.requestAnimationFrame(step);
}

const obj = document.getElementById("counter");

animateValue(obj, 2, 10000, 8000); // Jika ingin mengganti counter berhenti di angka berapa, ubah angka di tengah
