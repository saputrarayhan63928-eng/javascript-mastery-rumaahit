// //  1 
// let angka = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]
// let hasil = angka.reduce((a,b,c) => {a + b 
//    console.log(`${a} ini hasil penjumlahan sebelumnya yaitu ${b} dan di urutan data yg ke ${c}`)
//    return a + b
// } )
// console.log(hasil);

// // 2
// let data = {
//     nama : "ujang",
//     age : 20,
//     hobi : ["bola"]
// }
// console.log(data.hobi);

// console.log(data.nama);
// console.log(data.age);
// data.kota = "kalimantan"
// data.hobi.push("voli")
// console.log(data.kota);
// console.log(data.hobi);
// data.nama = "udin"
// console.log(data.nama);
// delete data.age
// console.log(data);

// // 3
// let  identitas = {
//     nama : "Ujang",
//     adek : "siti",
//     kakak : "leo",
//     tinggal : "jawa",
//     lahir : "papua",
//     ortu : "ada",
//     umur : 19
// }
// let count = 0
// for (let key in identitas){
//     count++
// }
// console.log(`di dalam identitas ada ${count} key object`);
// //  4
// let scores = [40,20,44,69,200]
// let terbesar = scores.sort((a,b) => b - a)
// console.log(terbesar);
// let terkecil = scores.sort() // dia gk berurutan karena sort itu mengurutkan secara alfaber
// console.log(terkecil);
// let terkesil2 = scores.sort((a,b) => a - b)
// console.log(terkesil2)
// //  5 
let datasantri = [
    {nama:"raihan",tinggal:"kalimantan"},
    {nama:"nopal",tinggal:"jambi"},
    {nama:"amin",tinggal:"kalimantan"},
    {nama:"padil",tinggal:"tangerang"},
    {nama:"yudis",tinggal:"jambi hama"},
    {nama:"dien",tinggal:"jambi"},
    {nama:"uka",tinggal:"tangerang"},
    {nama:"hanip",tinggal:"jambi"}
]
let sircle = datasantri.reduce((hasil,asal) =>{
    let suku = asal.tinggal;
    if (!hasil[suku]) {
        hasil[suku] = []
    }
    hasil[suku].push(asal);
    return hasil
}, {})
console.log(sircle);
