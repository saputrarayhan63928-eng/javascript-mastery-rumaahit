//  Soal 1
//  callback adalah function yg di panggil dlm paramsnya function 
// contoh
function sayhalo(a,b){
    let hasil = b("Salah Satu Contoh function Callback")
    console.log(`halo ${a}, ini adalah ${hasil}`);
}
function xyz(a) {
 return a
}
sayhalo("Rayhan", xyz)
// soal 2
function sapauser(nama,santri) {
    let a = santri("halo santri")
    console.log(`Assalamualaikum ${nama}, ${a}`);
    
}
function sapa(a){
    return a
}
sapauser("Rayhan",sapa)
// soal 3
function tambah(a, b, callback) {
  const hasil = a + b;
  callback(hasil); 
}
tambah(5, 7, function(hasil) {
  console.log("Hasil penjumlahan:", hasil);
});
// soal 4 ========================================
// karena localstorage hanya menerima data string
// soal 5 ========================================
// localStorage.setItem("Type","Belajar JS")   // dia gk bisa di jlnkan di node js
// soal 6 ========================================
// localStorage.getItem("Type") // ini juga sama
//  soal 7 ========================================
// let array = [1,2,3]
// localStorage.setItem("array",JSON.stringify(array)) // ini juga sama
// soal 8 ======================================================
// let array2 = JSON.parse(localStorage.getItem("array"))
// console.log(array2);
// soal 9 ===============================================
//  JSON adalah sebuah sintask untuk mengubah data  variable maupun array/object menjadi string dan juga bisa membalikannya dgn parse
// soal 10 ===========================================
// let object = {
//     nama:"Rayhan",
//     kelas:12,
//     nilai:100
// }
// localStorage.setItem("User",JSON.stringify(object))
// soal 11 ===========================================
// function validasi (a,b){
//     let data = JSON.parse(localStorage.getItem("User"))
//     if(!data){
//         console.log("tolong di isi datanya");
//     } 
//     console.log(data);    
// }
// soal 12 ===========================================
function penundaan(b) {
    let callback = b("ini penjedaan selama 1 detik")
    console.log("Program di mulai");
    setTimeout(() =>{
        console.log(callback)
    },1000)
}
function cb1(a){
    return a
}
penundaan(cb1)
// soal 13
let dataarray = ["baju","Celana","Kaos Kaki","Topi","Cincin"]
function f2 (a,b) {
    let f3 = b()
    let peritem = a.map((v) =>{
        console.log(`${f3} yg ke ${v}`);
    })
}
function f3 (){
    return `ini adalah item`
}
f2(dataarray,f3)
//  soal 14
function hapus(){
    localStorage.clear()
}
// soal 15
// const semuaKey = Object.keys(localStorage);
// console.log(semuaKey);

// ===================================================================================
// soal 16
const absensi = [
  {
    nama: "Rayhan",kelas: "XI RPL", absen: [true, true, true, true, false, true, true]
  },
  {
    nama: "Aqila",kelas: "XI RPL",absen: [true, false, true, true, true, true, false]
  },
  {
    nama: "Naufal",kelas: "XI RPL",absen: [false, true, true, false, true, true, true]
  },
  {
    nama: "Hafidz",kelas: "XI RPL", absen: [true, true, false, true, true, false, true]
  }
];
function kehadiran(a,b){
    let pemasukan = b(a)
    console.log(pemasukan);
    
}
function validasi(a){
    let perlebar = a.map((v) =>{
        let hadir = v.absen.filter((v1) =>  v1 == true)
        let bolos = v.absen.filter((v1) => v1 == false)
        return [{nama:v.nama,kelas:v.kelas,hadir:hadir.length,bolos:bolos.length}]
    })
    return perlebar
}
kehadiran(absensi,validasi)
// soal 17
