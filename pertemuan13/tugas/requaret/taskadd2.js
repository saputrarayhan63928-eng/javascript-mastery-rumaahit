//  soal 1
export function penjumlahan(angka) {
    let hasil = angka.reduce((a,b) => a + b , 0)
    return hasil
}
//  soal 2 
export function memisahkandata (infomaba){
    const namamaba =  infomaba.nama
    const datanim = infomaba.nim
    const datajurusan =  infomaba.jurusan 
    console.log(namamaba);
    console.log(datanim);
    console.log(datajurusan);
}
// soal 3
export default function totalscore(angka) {
    let hasil = angka.reduce((a,b) => a + b,0)
    return hasil
}
export const POIN_MAKSIMAL = 1000
export const POIN_BONUS = 50
//  soal 4
export const pisah = (namadata) => namadata.split(', ');
export const  gabung = ( nama, kontak) => nama + ', ' + kontak;
//  soal 5
export function hitungJumlah (buku){
    return buku.length
}
export function cariBuku (buku){
    let judulbuku = buku.map((v) => {
        return v.judul
    })
    return judulbuku
}
export function bukuTebal(buku){
    let halamanbuku = buku.map((v)=>{
        return v.halaman
    })
    return halamanbuku
}
// soal 6
export function cariProduk (Produk,ygingindicari){
    let pencarian = Produk.find((v) => ygingindicari === v)
    return pencarian
}
//  soal 7 
export const daftarmenu = (menu) => {
    let isimenu = menu.sort((a,b) => a.harga - b.harga)
    return isimenu
}