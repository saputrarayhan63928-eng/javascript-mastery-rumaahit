let buku = {
    judul : "Attack On Titan",
    pengarang : "isayama hajime",
    tahunterbit : 2013
}
console.log(buku);
buku.penerbit = "Mappa"
console.log(buku.penerbit);
buku.tahunterbit = 2015
console.log(buku.tahunterbit);
delete buku.pengarang
console.log(buku);
for (let key in buku) {
    console.log(`${key}nya adalah ${buku[key]}`);
}

