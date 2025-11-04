//  kata kunci block scope, re-declaration , reassign di luar scope
function blockscope(){
    var block = "halo"
    if(true){
        var block = "yaho "
        block = "ini variable var" // ini variable var bisa di gunakan untuk re-declaration, reassign  
    } 
    return block
}
console.log(blockscope()); // Outputnya : ini variable var
//  kata kunci block scope pada let
function blockscope1(){
let block1 = "halo"
if(true){
    let block1 = "yaho"
    // [ini tidak bisa ] karena variable let tidak bisa meng re-declaration dlm pada 1 block scope kecuali dgn reassign yaitu
    block1 = "adadad"
}
block1 = "ini variable let"
return block1
}
console.log(blockscope1()); // Outputnya : ini variable let

function blockscope2(){
    const block3 = "ini variable const"
    // if(true){
    //     const block3 = "jkl"    // variable const tibak bisa di ubah karena valuenya absolut
    //     block3 = "hjk" 
    // }
    // block3 = "uiio"
    return block3
}

console.log(blockscope2()); // Outputnya : ini variable const

//  ini study kasus closure
function harga1(saldo1 = ``) {
    return function (saldo2 = ``) {
        result = Number(saldo1) + Number(saldo2)
        console.log(`${saldo1} telah menambah ${saldo2} . Total ${result} `)
        return
    }
}

harga1(8000)(400000) //Output : 8000 telah menambah 400000 . Total 408000

//  ini study kasus hoisting
console.log(ab) //hasilnya undefined
var ab = "halo"

// ini study kasus global scope 
var x1 = "pkl1"
let x2 = "pkl2"
const x3 = "pkl3"

x1 = "aabc"
x2 = "aabc2"
// x3 = "aabc3" //ini gk bisa 

console.log(x1); // Output : aabc
console.log(x2); // Output : aabc2
console.log(x3); //Output : pkl3
