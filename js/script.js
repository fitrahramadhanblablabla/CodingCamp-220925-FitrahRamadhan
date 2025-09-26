// Ambil elemen-elemen
const form = document.getElementById("message-form");
const outputBox = document.querySelector(".output");

form.addEventListener("submit", function (e) {
  e.preventDefault(); // biar ga reload halaman

  // Ambil value input
  const nama = document.getElementById("nama").value;
  const tglLahir = document.getElementById("tgl").value;
  const gender = document.querySelector("input[name='gender']:checked")?.value;
  const pesan = document.getElementById("pesan").value;

  // Ambil waktu sekarang
  const currentTime = new Date().toString();

  // Tampilkan ke box output
  outputBox.innerHTML = `
    <p><b>Current time :</b> ${currentTime}</p>
    <p><b>Nama :</b> ${nama}</p>
    <p><b>Tanggal Lahir :</b> ${tglLahir}</p>
    <p><b>Jenis Kelamin :</b> ${gender || "-"}</p>
    <p><b>Pesan :</b> ${pesan}</p>
  `;
  
  // Reset form
  form.reset();
});


const hamburger = document.querySelector('.hamburger');
const navbar = document.querySelector('.navbar');

hamburger.addEventListener('click', () => {
  navbar.classList.toggle('active');
});
