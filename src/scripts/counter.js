function animateBaseCounter(cot, start, end, duration) {
  let startTimestamp = null;
  const count = (timestamp) => {
    if (!startTimestamp) startTimestamp = timestamp;
    const progress = Math.min((timestamp - startTimestamp) / duration, 1);
    cot.innerHTML = Math.floor(progress * (end - start) + start);
    if (progress < 1) {
      window.requestAnimationFrame(count);
    }
  };
  window.requestAnimationFrame(count);
}

const cot = document.getElementById("baseCounter");

animateBaseCounter(cot, 80, 10, 8000); // Jika ingin mengganti counter berhenti di angka berapa, ubah angka di tengah
