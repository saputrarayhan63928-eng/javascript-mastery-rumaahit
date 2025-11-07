//  soal 1
let a = [1,2,3,4,5,6,7,8,9,10]
//  soal 2
let kali5 = a.map((v,i,a) =>{
    return v * 5;
})
console.log(kali5)
//  soal 3
let genap = a.filter((v,i,a) => {
    return v % 2 == 0 ;
})
console.log(genap)
//  soal 4
let penggabungan = a.reduce((a,b) => a + b, 0)
console.log(penggabungan);
//  soal 5
let pencarian = a.find((v) =>{ 
    return v > 8;
 } )
 console.log(pencarian);
 