// ===========================
// Bagian Munculin inputnya
// ===========================
function togglePopup(no) {
    document.getElementById(`popupModal${no}`).classList.toggle("hidden");
}

// =========================================
//  Bagian Login
//  ========================================
const namauser = document.getElementById("namaKasir")
const hasilpesanuser = document.getElementById("pesanKasir")
const user = {
    nama: ""
}


function simpandata (){
    let namauserdata = namauser.value.trim()
    if ( namauserdata === ""){
        alert ("nama user belum di isi")
    }
    //  else if (namauserdata == "admin"){
    //    const admin = namauserdata
    //     user.nama = namauserdata
    //     hasilpesanuser.innerText = `Selamat datang ${user.nama} silahkan bekerja dengan baik`
    //     return admin
    // } 
    user.nama = namauserdata
    hasilpesanuser.innerText = `Selamat datang ${user.nama} silahkan bekerja dengan baik`
}
// ===========================================
//  Bagian penyimpanan Barang
//  ==========================================
const inputdaftarproduk = document.getElementById("daftarProduk")
const isiproduk = [
    {id: 1 ,nama:"Mie Ayam", harga: 8000},
    {id: 2 ,nama:"Bakso", harga: 10000},
    {id: 3 ,nama:"Es Cekek", harga: 2000}
]
function formatRupiah(angka) {
    return angka.toLocaleString("id-ID",  {
  style: "currency",
  currency: "IDR"
})
}

function tampilkanProduk(){
    let isi = ""
    for(let i = 0; i < isiproduk.length; i++){
        const item = isiproduk[i]
        isi +=  '<div class="item-produk">';
        isi += '<button class="button-kontrol" onclick="hapusProduk(\'' + item.id + '\')">-</button>';
        isi += '<div><h3>' + item.nama + '</h3><p> ' + formatRupiah(item.harga) + '</p></div>';
        isi += '<button class="button-kontrol" onclick="tambahKeranjang(\'' + item.id + '\')">>></button>';
        isi += '</div>';
    }
inputdaftarproduk.innerHTML = isi
}
// ==================================
// bagian hapus produk
// ==================================

function hapusProduk (idProduk){
    const index = isiproduk.findIndex((v,i,a) =>{
        return v.id == idProduk
    })
    if(index !== -1) {
        isiproduk.splice(index, 1);
        tampilkanProduk()
    }
}

tampilkanProduk()

// ==================================
// Bagian add produk
// ==================================
const inputidproduk = document.getElementById("productId")
const inputnamaproduk = document.getElementById("productName")
const inputhargaproduk = document.getElementById("productPrice")

function tambahproduck (){
let idbarang = inputidproduk.value.trim()
let namabarang = inputnamaproduk.value.trim()
let hargabarang = parseInt(inputhargaproduk.value, 10)

if (!idbarang || !namabarang || isNaN(hargabarang) || hargabarang <= 1000) {
        alert("Harap isi data yg benar atau harga barang di bawah 1000")
        return
}
isiproduk.unshift({id:idbarang,nama:namabarang,harga:hargabarang})
tampilkanProduk()
togglePopup(1)
}
// ==================================
// Bagian tambah keranjang
// ==================================
const isibelanja = []

function tambahKeranjang(produk){
    let adaisi = false
    for(let a = 0; a <isibelanja.length; a++ ){
        if(isibelanja[a].id === produk){
            isibelanja[a].jumlah += 1
            adaisi = true
        }
    }
    if(!adaisi){
        for(let b = 0; b < isiproduk.length; b++){
            if(isiproduk[b].id == produk){
                isibelanja.push({
                    id:isiproduk[b].id,
                    nama:isiproduk[b].nama,
                    harga:isiproduk[b].harga,
                    jumlah:1
                })
            }   
        }
    }
    tampilkanKeranjang()
}
// ===========================
// bagian menampilkan keranjang
// ===========================
const isiKeranjang = document.getElementById("ringkasanKeranjang");
const totalBelanja = document.getElementById("totalBelanja");

function tampilkanKeranjang(){
   if(isibelanja.length == 0){
    isiKeranjang.innerHTML ="<p>Keranjang masih kosong.</p>";
     totalBelanja.innerText = "Total: Rp 0";
     return
   }

   let isi = ""
   for( let c = 0; c <isibelanja.length; c++){
    const item1 = isibelanja[c]
    const subtotal = item1.harga * item1.jumlah
      isi += '<div class="item-keranjang">';
        isi += '<strong>' + item1.nama + '</strong>';
        isi += '<span>Jumlah: ' + item1.jumlah + ' x Rp ' + formatRupiah(item1.harga) + '</span>';
        isi += '<p>Subtotal: Rp ' + formatRupiah(subtotal) + '</p>';
        isi += '<div class="kontrol">';
        isi += '<button class="button-kontrol" onclick="ubahJumlah(\'' + item1.id + '\', \'tambah\')">+</button>';
        isi += '<button class="button-kontrol" onclick="ubahJumlah(\'' + item1.id + '\', \'kurang\')">-</button>';
        isi += '</div>';
        isi += '</div>';
   }
   isiKeranjang.innerHTML = isi

   const total = hitungTotal()
   totalBelanja.innerText = `Total ${formatRupiah(total)}`
}
function hitungTotal(){
    let total = 0
    for(let i = 0; i < isibelanja.length; i++){
        total += isibelanja[i].harga * isibelanja[i].jumlah
    }
    return total
}
tambahKeranjang()
// ================================
// bagian menjumlah barang dlm keranjang
// ================================

function ubahJumlah(id, aksi) {
  for (let i = 0; i < isibelanja.length; i++) {
    if (isibelanja[i].id == id) { 
      if (aksi === "tambah") {
        isibelanja[i].jumlah += 1;
      } else if (aksi === "kurang") {
        isibelanja[i].jumlah -= 1;
        if (isibelanja[i].jumlah <= 0) {
          isibelanja.splice(i, 1); 
        }
      }
    }
  }
  tampilkanKeranjang(); 
}
// ===============================
// Buat kosongkan isi belanja
// ===============================
function kosongkanKeranjang(){
    isibelanja.length = 0
    tampilkanKeranjang()
}
// ===============================
// Pembayaran
// ===============================
const pesanRingkasan = document.getElementById("pesanRingkasan");
const pesanPembayaran = document.getElementById("pesanPembayaran");
const strukPembelian = document.getElementById("strukPembelian");
const inputUangBayar = document.getElementById("uangBayar");

const teksStrukKosong = "<p>Belum ada struk penjualan.</p>";

pesanKasir.innerText = "📝✨ Tuliskan nama Anda sebagai kasir agar pelayanan tercatat.";
ringkasanKeranjang.innerHTML = "<p>Keranjang masih kosong.</p>";
totalBelanjaElemen.innerText = "Total: Rp 0";
pesanRingkasan.innerText = "Belum ada ringkasan yang disimpan.";
pesanPembayaran.innerText = "Masukkan jumlah uang yang diterima.";
strukPembelian.innerHTML = teksStrukKosong;

const now = new Date();
const tanggal = now.toLocaleDateString('id-ID', { day: '2-digit', month: 'long', year: 'numeric' });
const jam = now.toLocaleTimeString('id-ID', { hour: '2-digit', minute: '2-digit' });


function prosesPembayaran() {
    const total = hitungTotal();
    if (isibelanja.length === 0) {
        pesanPembayaran.innerText = "Tambahkan produk terlebih dahulu.";
        strukPembelian.innerHTML = teksStrukKosong;
        return;
    }

    const uangMasuk = parseInt(inputUangBayar.value, 10);
    if (isNaN(uangMasuk)) {
        pesanPembayaran.innerText = "Masukkan angka uang yang diterima.";
        strukPembelian.innerHTML = teksStrukKosong;
        return;
    }

    if (uangMasuk < total) {
        const selisih = total - uangMasuk;
        pesanPembayaran.innerText = "Uang kurang Rp " + formatRupiah(selisih) + ".";
        strukPembelian.innerHTML = teksStrukKosong;
        return;
    }

    const kembalian = uangMasuk - total;

    pesanPembayaran.innerText = "Transaksi selesai. Kembalian Rp " + formatRupiah(kembalian) + ".";
    let isiStruk = "<strong>Struk Penjualan</strong>";
    const namaKasir = user.nama === "" ? "Empty Name" : user.nama;
    isiStruk += "<p>" + tanggal + " - " + jam + "</p>";
    isiStruk += "<p>Kasir: " + namaKasir + "</p>";
    isiStruk += "<br>"
    isiStruk += "<p>Daftar produk:</p>";
    const listItem = []
    for (let i = 0; i < isibelanja.length; i++) {
        const item = isibelanja[i];
        const subtotal = item.harga * item.jumlah;
        listItem.unshift({ item: item.nama, harga: item.harga, jumlah: item.jumlah, total: formatRupiah(subtotal) })
        isiStruk += '<p>- ' + item.nama + ' (' + item.jumlah + ') = Rp ' + formatRupiah(subtotal) + '</p>';
    }
    isiStruk += "<br>"
    isiStruk += "<p>Total: Rp " + formatRupiah(total) + "</p>";
    isiStruk += "<p>Uang diterima: Rp " + formatRupiah(uangMasuk) + "</p>";
    isiStruk += "<p>Kembalian: Rp " + formatRupiah(kembalian) + "</p>";

    strukPembelian.innerHTML = isiStruk;

 
// ================================================
// Tambah download pdf
// ================================================
    const btnDownload = document.createElement('button');
    btnDownload.innerText = "Download PDF";
    btnDownload.style.marginTop = "10px";
    btnDownload.onclick = () => {
        const { jsPDF } = window.jspdf;
        const doc = new jsPDF();
        let yPos = 10;

        doc.setFontSize(16);
        doc.text("Struk Penjualan", 10, yPos);
        yPos += 10;

        const now = new Date();
        const dateStr = now.toLocaleDateString('id-ID', { day: '2-digit', month: 'long', year: 'numeric' });
        const timeStr = now.toLocaleTimeString('id-ID', { hour: '2-digit', minute: '2-digit' });
        doc.text(`${dateStr} - ${timeStr}`, 10, yPos);
        yPos += 10;

        doc.setFontSize(12);
        doc.text("Kasir: " + namaKasir, 10, yPos);
        yPos += 10;

        doc.text("Daftar produk:", 10, yPos);
        yPos += 6;

        listItem.forEach(item => {
            doc.text(`- ${item.item} Rp ${formatRupiah(item.harga)}  (${item.jumlah}) = Rp ${formatRupiah(item.total)}`, 10, yPos);
            yPos += 6;
        });

        yPos += 4;
        doc.text("Total: Rp " + formatRupiah(total), 10, yPos);
        yPos += 6;
        doc.text("Uang diterima: Rp " + formatRupiah(uangMasuk), 10, yPos);
        yPos += 6;
        doc.text("Kembalian: Rp " + formatRupiah(kembalian), 10, yPos);

        doc.save("struk_penjualan.pdf");
    };

    // Hapus tombol lama jika ada sebelumnya
    const existingBtn = strukPembelian.querySelector('button');
    if (existingBtn) existingBtn.remove();

    strukPembelian.appendChild(btnDownload);

    keranjang.length = 0;
    tampilkanKeranjang();
    inputUangBayar.value = "";
}

tampilkanProduk(); 