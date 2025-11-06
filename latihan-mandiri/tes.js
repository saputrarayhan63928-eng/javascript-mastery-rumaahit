// array
let nama = ["ijul","akhdan","kiwi", "muad","mutil"]
let nama2 = ['nopal',"uka",'hanip',"abil"]
console.log(nama);

nama.push ("botak") // menambah data dari belakang
console.log(nama);

nama.unshift("ujang") // menambah data dari depan
console.log(nama);

nama.pop() //menghapus element terakhi
console.log(nama);

nama.shift() // menghapus element terdepan
console.log(nama);

console.log(nama.length);

// Menyisipkan/Menghapus Elemen di Tengah
//  `splice(index, jumlah, elemenBaru)`: hapus atau tambah elemen

// nama.splice( 3, 1, "kiwi") // ini untuk menambahkan data yg spesifik di urutan ke berapa
// console.log(nama);

// nama.splice(2,1) // ini untuk menghapus data dgn tdk perlu menambah apa apa lagi di dpnnya
// console.log(nama);


// cara memanggil data array secara berurut
for (let hasil = 0; hasil < nama.length; hasil++) {
    console.log(`dia adalah : ${nama[hasil]}`)
}

//  study case yg dari mas el
for (let hasil = 0; hasil < nama.length; hasil++) {
    console.log(`${hasil + 1}.  ${nama[hasil]}`)
}

let hensin = nama.concat(nama2)
console.log(hensin);

console.log(nama.slice(1,3));

let angka = [1, 2, 3];
let dikali2 = angka.map(function(num) {
    return num * 7;
});
console.log(dikali2); // Output: [2, 4, 6]