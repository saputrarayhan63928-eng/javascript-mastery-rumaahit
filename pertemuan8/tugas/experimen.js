// study kasus 1
for (let index = 0; index <= 100; index++) {
    if (index % 3 == 0 && index % 5 == 0){
        console.log(`${index} ini adalah fizzbuss`)
    }
    else if(index % 3 == 0){
        console.log(`${index} ini adalah fizz`);
    }
    else if(index  % 5 == 0){
        console.log(`${index} ini adalah buzz`)
    }
    else{
        console.log(`${index} ini gk ada`);
        
    }
    
}
//  study kasus 2
for (let a = 0;  a <= 50; a++){
    if(a % 2 == 0){
        console.log(`${a} ini adalah angka genap;`);
    }
    else{
        console.log(`${a} ini adalah angka ganjil`);
        
    }
}
//  study kasus 3
const teman = ["Budi", "Sinta", "Ari", "Dewi"];
console.log("Daftar teman saya:");
teman.forEach((v,i,a) => {
  console.log(`${i + 1}. ${v}`);
});
//  study kasus 4
let daftarBelanja = ["Beras", "Telur", "Minyak"];
console.log("Sebelum ditambah:", daftarBelanja);
daftarBelanja.push("Gula");
console.log("Setelah ditambah:", daftarBelanja);
daftarBelanja.splice(1, 1);
console.log("Setelah dihapus:", daftarBelanja);
//  study kasus 5
const harga = [10000, 15000, 20000, 5000];
let total = harga.reduce((a,b) => a + b, 0)
console.log(total);
// study kasus 6
const angka = [1, 2, 3, 4, 5];
const dibalik = angka.reverse();
console.log("Urutan dibalik:", dibalik);

//  study kasus berat ada di file sebelah

