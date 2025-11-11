let transaksi = [
  { namaBarang: "Laptop", jumlah: 1, hargaSatuan: 7000000 },
  { namaBarang: "Headset", jumlah: 3, hargaSatuan: 200000 },
  { namaBarang: "Mouse", jumlah: 2, hargaSatuan: 150000 },
  { namaBarang: "Keyboard", jumlah: 1, hargaSatuan: 300000 },
  { namaBarang: "Flashdisk", jumlah: 10, hargaSatuan: 60000 },
];

let validasi = transaksi.filter(v => v.jumlah * v.hargaSatuan > 500000);
console.log(validasi);
// Total dari semua array
let tolalhargasemua = transaksi.reduce((a,b) => a + b.jumlah * b.hargaSatuan, 0 )
console.log(tolalhargasemua);
//  Total dari array yg sudah di filter tadi
let totalvalidasi = validasi.reduce((a,b) => a + b.jumlah * b.hargaSatuan, 0)
console.log(totalvalidasi);
//  membuat array baru
let arraybaru = transaksi.map((v) =>{
    return {namaBarang: v.namaBarang,totalBelanja: v.jumlah}
} )
console.log(arraybaru);
