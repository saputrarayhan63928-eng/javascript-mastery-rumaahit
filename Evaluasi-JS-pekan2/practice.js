// contoh variable kode scope
var a1 = "aku1"
let a2 = "aku2"
const a3 = "aku3"

function kodescope(){
    var a1 = "aku4"
    let a2 = "aku5" // ini udh menjadi variable yg berbeda
    const a3 = "aku6" // ini udh menjadi variable yg berbeda
    a1 = "aku10"
    a2 = "aku11"
    // a3 = "aku12" dia error krn data const tdk bisa di ubah
    if(true){
        var a1 = "aku7" 
        let a2 = "aku8" // ini udh menjadi variable yg berbeda
        const a3 = "aku9"  // ini udh menjadi variable yg berbeda
        a1 = "aku13"
        a2 = "aku14"
        // a3 = "aku15"  dia error krn data const tdk bisa di ubah
    }
}
a1 = "aku17"
a2 = "aku18"
// a3 = "aku19" dia error krn data const tdk bisa di ubah 
kodescope()
console.log(a1)
console.log(a2)
console.log(a3)

//  type data
var b1 = "string" // ini data string
var b2 = 99 // ini data integer
var b3 = true // ini data boolean
var b4 = // ini data null atau undifined


console.log(b1)
console.log(b2)
console.log(b3)
console.log(b4)

// aritmatika 
var c1 = 10 + 10
var c2 = 1 - 10
var c3 = 10 / 2
var c4 = 10 * 10
var c5 = 10 ** 10
var c6 = 10 % 3

console.log(c1);
console.log(c2);
console.log(c3);
console.log(c4);
console.log(c5);
console.log(c6);

// Perbandingan
var d1 = 10 == 10
var d2 = "10" === "10"
var d3 = 10 != 10
var d4 = "10" !== "10"
var d5 = 20 > 10
var d6 = 10 < 2
var d7 = 13 >= 10
var d8 = 10 <= 2

console.log(d1)
console.log(d2)
console.log(d3)
console.log(d4)
console.log(d5)
console.log(d6)
console.log(d7)
console.log(d8)

//  Logika
var e1 = 20 > 10 && 10 < 2
var e2 = 20 > 10 || 10 < 2
var e3 = !true

console.log(e1)
console.log(e2)
console.log(e3)

// function
 function contoh (a, b){
   let  result = a + b
   return result 
}
console.log(contoh(1000,2000)) // hasil : 3000

// looping for
for (let f1 = 0; f1 > 10; f1++) {
    console.log(`ini perulangan ke ${f1}`)
}
// 