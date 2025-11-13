//  soal 1 
import { cariProduk, penjumlahan, POIN_BONUS, POIN_MAKSIMAL } from "./requaret/taskadd2.js";
console.log(penjumlahan([15000, 25000, 8000, 12000]))
// soal 2
import { memisahkandata } from "./requaret/taskadd2.js";
const maba = {nama: "Sari Dewi", nim: "2024001", jurusan: "Informatika", ipk: 3.8}
memisahkandata(maba)
//  soal 3
import datascore ,{POIN_BONUS as bonus, POIN_MAKSIMAL as maksimal} from "./requaret/taskadd2.js"
let jumlahscore = [200, 150, 300, 180, 120]
console.log(datascore(jumlahscore));
console.log(`poin bonus ${bonus}`);
console.log(`poin maksimal ${maksimal}`);
//  soal 4
import { pisah as pisahNamaKontak, gabung as gabungDataKontak } from "./requaret/taskadd2.js";
console.log(pisahNamaKontak("Nopal"));
console.log(gabungDataKontak("Nopal","082234578690"));
//  soal 5
import { hitungJumlah, cariBuku, bukuTebal} from "./requaret/taskadd2.js";
let listbuku = [
    {
    judul: "Laskar Pelangi",
    pengarang: "Andrea Hirata",
    halaman: 529
  },
  {
    judul: "Bumi Manusia",
    pengarang: "Pramoedya Ananta Toer",
    halaman: 535
  },
  {
    judul: "Dilan 1990",
    pengarang: "Pidi Baiq",
    halaman: 332
  },
  {
    judul: "Negeri 5 Menara",
    pengarang: "Ahmad Fuadi",
    halaman: 418
  },
  {
    judul: "Ayat-Ayat Cinta",
    pengarang: "Habiburrahman El Shirazy",
    halaman: 420
  }
]
console.log(hitungJumlah(listbuku));
console.log(cariBuku(listbuku));
console.log(bukuTebal(listbuku));
// soal 6
// export {cariProduk} from "./requaret/utils.js"; // gk bisa
export {cariProduk} from "./requaret/taskadd2.js";
console.log(cariProduk(["sendal","baju","celana","sepatu","kaos kaki"],"baju"));
//  soal 7
// import { daftarmenu } from "./requaret/utils.js" // gk bisa lagi
import { daftarmenu } from "./requaret/taskadd2.js";
let listmenu = [
  { nama: "Nasi Goreng", harga: 20000 },
  { nama: "Ayam Bakar", harga: 25000 },
  { nama: "Mie Ayam", harga: 15000 },
  { nama: "Sate Ayam", harga: 18000 }
];

let hasil = daftarmenu(listmenu)
console.log(hasil);
// soal 8
