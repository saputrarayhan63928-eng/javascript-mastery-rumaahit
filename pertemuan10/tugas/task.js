let datarandom = ["avanza","kijang","yamaha","honda","toyota"]
let [a,b,c,d] = datarandom
console.log(a,b,c,d);
// 
let mobil = {
    merek:"Kijang",
    tahun: 2013
}
let {merek , tahun} = mobil
console.log(merek);
console.log(tahun);
// 
let array1 = [1,2,3,4,5,6,7,8,9,10]
let array2 = [11,22,33,44,55,66,77,88,99,100]
let gabungan = [...array1,...array2]
console.log(gabungan);
// 
function validasi(...angka) {
   return angka.reduce((a12,b12) => {return a12 + b12})
}
console.table(validasi(1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20))