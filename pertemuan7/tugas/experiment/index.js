let totalHarga = 0; // variabel untuk menyimpan total harga

document.getElementById("ambil").addEventListener("submit", function (e) {
  e.preventDefault();
  const namaBarang = document.getElementById("inputnama").value;
  const hargaBarang = Number(document.getElementById("inputharga").value);
  const outputBarang = document.getElementById("totalbarang");
  const outputHarga = document.getElementById("totalharga");

  outputBarang.innerHTML += `<p>Nama Barang: <b>${namaBarang}</b> dengan harga <b>${hargaBarang}</b></p>`;

  totalHarga += hargaBarang;

  outputHarga.innerHTML = `<p><b>Rp ${totalHarga.toLocaleString("id-ID")}</b></p>`;
  document.getElementById("inputnama").value = "";
  document.getElementById("inputharga").value = "";
});
