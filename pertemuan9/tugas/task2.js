let buku = {
    judul : "Attack On Titan",
    pengarang : "isayama hajime",
    tahunterbit : 2013
}
for (let key in buku){
    console.log(`${key}nya adalah ${buku[key]}`);
    
}
console.log(`========================`);

buku.kategori = "pemograman"
buku.tahunterbit = 2010
delete buku.pengarang
for (let key in buku){
    console.log(`${key}nya adalah ${buku[key]}`);
    
}
