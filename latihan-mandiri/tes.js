// array
let nama = ["ijul","akhdan","muad","mutil"]
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

// cara memanggil data array secara berurut
for (let hasil = 0; hasil < nama.length; hasil++) {
    console.log(`dia adalah : ${nama[hasil]}`)
}

//  study case yg dari mas el
for (let hasil = 0; hasil < nama.length; hasil++) {
    console.log(`${hasil + 1}.  ${nama[hasil]}`)
}