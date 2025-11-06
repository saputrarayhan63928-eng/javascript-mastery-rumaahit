//  soal 1
let nama = ["ijul","akhdan","rido", "muad","mutil"]
console.log(nama [0]);
console.log(nama [4]);
console.log(nama.length);
//  soal 2
let nama1 = []
nama1.push("programer")
console.log(nama1);
nama1.push("bola")
console.log(nama1);
nama1.push("tidur")
console.log(nama1);
// soal 3
let nama2 = ["mtk","ipa","ips","pkn"]
nama2.pop()
console.log(nama2);
// soal 4
let nama3 = [77,88,99,22,55]
for(let a = 0; a < nama3.length; a++){
    console.log(`${a + 1}. ini adalah nilai : ${nama3} dan perilangan ke ${a + 1}`); 
}
// soal 5
// let nama4 = ["kalimantan","Balikpapan","bontang","bengalon","berau"] // blm di mengerti atau pas di coba dia error
// let tes = nama4.indexOf("Kalimantan")
// console.log(tes);
//  soal 6
let nama5 = ["iron man", "insidius","Sword Art Online", "Shangri-La Frontier"]
console.log(nama5)
nama5.splice(1,1,"Re:zero")
console.log(nama5)
//  soal 7
let nama6 = ["basket","padel","voli"]
nama6.unshift("bola")
console.log(nama6);
//  soal 8
let nama7 = ["juni","juli","maret","april","mei"]
let blnygdihapus = nama7.shift()
console.log(blnygdihapus);
console.log(nama7);
//  soal 9
let mknringan = ["taro","roti"]
let mknberat = ["nasi","mie"]
let penggabungan = mknringan.concat(mknberat)
console.log(penggabungan);
//  soal 10
let huruf = ["A","B","C","D","E"]
huruf.reverse()
console.log(huruf);
//  soal 11
let namatmn = ["ijul","akhdan","rido", "muad","mutil","nopal"]
console.log(namatmn)
namatmn.sort()    
console.log(namatmn)
//  soal 12
let mapel = ["mtk","ipa","ips","pkn","sbdp"]
function cekmaple() {
    let check = mapel.includes("pkn")
    console.log(check)
}
cekmaple()
//  soal 13
let hari = ["senin","selasa","rabu","kamis","jumat","sabtu","ahad"]
let harikerja = hari.slice(0,4)
console.log(harikerja);
//  soal 14
// let skor = [85, 90, 78];
// skor.forEach(function(nilai, index) {
//     console.log(`Skor ${index + 1}: ${nilai}`); // ini saya gk ngerti
// });
//  soal 15

//  soal 16

//  soal 17

//  soal 18 

//  soal 19

//  soal 20