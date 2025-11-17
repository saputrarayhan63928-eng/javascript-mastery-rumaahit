//  study case 1
function perulangan(a, b){
    for(let i = 0; i < a ; i++){
        console.log(`ini perulangan ke - ${i + 1}`);
        
    }
    b()
}

perulangan(5, () => console.log("perulangan selesai"))
// study case 2
function simpanData(data, callback) {
  if (!data.nama) {
    console.log("Nama tidak boleh kosong");
    return;
  }
  callback(data);
}

simpanData({ nama: "Rayhan" }, (obj) => {
  console.log("Data berhasil disimpan:", obj);
});
//  study case 3
function perkalian (a, b){
    let total = b(a)
    console.log(`hasil : ${total}`);
    
}
perkalian([1,2,3,4], (a) => a.reduce((a,b) => {return a + b},0) )
//  study case 4
console.log("Kode berjalan");

setTimeout(() => {
    console.log('ini berjalan setelah 5 detik kode berjalan');
    
},5000)
setTimeout(() => {
    console.log('selesai');
    
},5000)
//  study case 5
function ambilUser(a) {
  setTimeout(() => {
    a({ id: 1, nama: "Rayhan", tinggal:"kalimantan" });
  }, 3000);
}

ambilUser((user) => console.log("User diterima:", user));
//  +++
// let score1 = [40, 50, 20];
// score1.unshift(30);
// localStorage.setItem("score1", JSON.stringify(score1));       // ini hanya berhasil di browser
// let totalscore = JSON.parse(localStorage.getItem("score1"));
// let hasil = totalscore.map(v => v + 5);
// console.log(hasil); 
