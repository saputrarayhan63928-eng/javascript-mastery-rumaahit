// no 1
var a = 1
let b = 2
const c = 3
function fungsi(){
    a = "4"
    b = "5"
    // c = "6" [ini gk bisa]
    return a + b + c
}
console.log(fungsi());


// no 2
console.log(ab) //hasilnya undefined
var ab = "halo"

// console.log(ac)  // ini gak bisa, dia akan error
// let ac = "halo halo"

// console.log(ad);       // ini gak bisa ,dia akan error
// const ad = "halo halo halo"  

// no 3
function harga1(saldo1 = ``) {
    return function (saldo2 = ``) {
        result = Number(saldo1) + Number(saldo2)
        console.log(`${saldo1} telah menambah ${saldo2} . Total ${result} `)
        return
    }
}

harga1("10000")("20000")
