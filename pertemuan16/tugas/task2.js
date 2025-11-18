// harga barang pertama
function harga1(){
    return new Promise(function(resolve){
        setTimeout(() =>{
            let hargabarang = 20000
            resolve(`Barang Sendal Harga (${hargabarang})`)
        },1000)
    })
}
// harga barang ke dua
function harga2() {
    return new Promise(function(resolve){
        setTimeout(()=>{
            let hargabarang2 = 15000
            resolve(`Barang Sarung Tangan Harga (${hargabarang2})`)
        },1000)
    })
}
//  Menjumlah harga
function total() {
    return new Promise(function(resolve){
        setTimeout(()=>{
            let hasil = 20000 + 15000
            resolve(`Total Harga ${hasil}`)
        },1500)
    })
}
//  hasil
harga1()
.then((result) =>{
    console.log(`Mengenali Produk ${result}`);
    return harga2()
})
.then((result)=>{
    console.log(`Mengenali Produk ${result}`);
    return total()
})
.then((result)=>{
    console.log(result);
    
})