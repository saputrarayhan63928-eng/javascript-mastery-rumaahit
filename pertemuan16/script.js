// const janji = new Promise(function (resolve, reject) {
//   let sukses = true;
//   if (sukses) {
//     resolve("berhasil menjalankan");
//   } else {
//     reject("gagal menjalankan");
//   }
// });

// janji
//   .then(function (result) {
//     let angka = 5;

//     console.log(`${result} dan menampilkan ${5} `);
//     return angka * 2;
//   })
//   .then(function (result) {
//     console.log(` ini lanjutan dari then sebelumnya ${result}`);
//     return result * 2;
//   })
//   .then(function (result) {
//     console.log(`ini adalah lanjutan dari then sebelumnya ${result}`);
//     return result;
//   })
//   .then(function (result) {
//     console.log(`ini adalh yg terakhir ${result}`);
//     console.log(`Program telah selesai`);
//   })

//   .catch(function (result) {
//     console.log(`${result} Mohon Maaf, Silahkan coba lagi`);
//   });


// study case 
/*Seorang pelanggan datang dan meminta developer membuatkan fitur JavaScript untuk:

Mengecek apakah produk tersedia

Memproses pembayaran

Mengirim bukti transaksi

Menangani error jika ada langkah yang gagal
 */

// cek stok
function cekstok(){
    return new Promise(function(resolve,reject){
        setTimeout(()=>{
        let stoktersedia = true
        if(stoktersedia){
            resolve(`Stok Redy`)
        } else{
            reject(`Stok Habis`)
        }
    },1000)
    })
}
//  proses pembayaran 
function transaksi(){
    return new Promise (function(resolve,reject){
        setTimeout(()=>{
            let pembayaran = true
            if(pembayaran){
                resolve("Transaksi Berhasil")
            } else{
                reject("Transaksi Gagal")
            }
        },1500)
    })
}
//  bukti transaksi
function bukti(){
    return new Promise (function(resolve){
        setTimeout(()=>{
            console.log("Bukti transaksi telah di kirim");
            resolve("Transaksi Selesai")
            
        },1000)
    })
}

cekstok()
.then((result) =>{
    console.log(`Lanjut Proses Setelah : ${result}`);
    return transaksi()
})
.then((result) => {
    console.log(`Lanjut Proses Setelah : ${result}`);
    return bukti()
})
.then((result)=>{
    console.log(`${result}`);
})
.catch((result)=>{
    console.log("Terjadi Kesalah Error Code " + result );
    
})