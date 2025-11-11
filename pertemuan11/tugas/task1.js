const dataSiswa = [
  { nama: "Aqila", nilai: 85, jurusan: "IPA" },
  { nama: "Hanz", nilai: 90, jurusan: "IPS" },
  { nama: "Naufal", nilai: 78, jurusan: "IPA" },
  { nama: "Rizky", nilai: 88, jurusan: "Bahasa" },
  { nama: "Hafidz", nilai: 92, jurusan: "IPA" },
];

let jurusanipa = dataSiswa.filter((v,i,a) => v.jurusan === "IPA")
console.log(jurusanipa);

let ambilnilaisiswa = dataSiswa.filter((v,i,a) => v.nilai >= 80)
console.log(ambilnilaisiswa);

let totalnilaisiswa = dataSiswa.reduce((a,b) => a + b.nilai, 0)
let ratarata = totalnilaisiswa / dataSiswa.length
console.log(ratarata);
 
