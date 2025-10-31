let nama = "BAMBANG";

// variable adalah sebuah tempat untuk menempatkan data dan memiliki 3 jenis yaitu let , var , const
// type data variable ada 5 yaitu String ("") , integer (1,2,3,4,5), boolean(true,false), null (), undifined
// aritmarika ad 5 + 1 yaitu pertambahan (+), pengutangan (-), perkalian (*) , pembagian (/) , modulus (%), perpangkatan (**)
// kalau ingin ngelihant type data di dlm sebuah variable itu menggunakan (typeof) contoh console.log(typeof a)
// parsefloat itu gunanaya untuk type data integer untuk memiliki koma/titik contoh (50 -> 50.0)
// com Number bisa di ganti dgn + untuk mebgubah type data 
// Perbandingan itu ada 8 yaitu  ((>) =lebih besar dari ) ((<) = lebih kecil dari) ((==) = sama dengan)((!=) = tidak sama dgn)
// ((>=) = lebih besar, sama dengan), ((<=) = lebih kecil, sama dengan),
// ((===) = sama dengan & tipe sama dan akam menghasilkan true jika sama dan akan menghasilkan false jika beda)
// ((!==) = tidak sama & tipe berbeda dan akan menghasilkan true jika beda dan jika sama maka akan false)
// (&&) hanya true apabila ke 2 kondisi sma2 true dan sebaliknnya jk slah 1 kondisi false maka yg muncul akan menjadi false
// ( || ) bisa  true apabila salah satu kondisi true  dan akan false ketika ke duanya false
// ( ! ) dia membalikkan fakta 


// String
let namaVar = "Ini Value String";
let namaVar1 = 'String';
// Number / Integer
let namaVar2 = 100;
// Boolean 
let namaVar3 = true ;
let namaVar4 = false ;
// Null 
let namaVar5 = null;
// Undifined 
let namaVar6 = undefined; 
let namaVarr5;


// console.log("Check Value: " +namaVar2);
// console.log("Check Type Data: " + typeof namaVar2);



function namaFunction() {
    console.log("Si "+ nama + " Telah ngisi nama");
    confirm("Oh kamu namanya adalah "+ nama +" kah?")
    namaF2()
}

function namaF2(){
    console.log("Ini Function 2 Berjalan");
}

// 3 OPSI 
// LET - VAR - CONST

// let alamat = prompt("Masukan Alamat Anda");

let a = 90;
let b = a;
let c = b + a;
let d = a + b * c ;

var e = "Halo ";
const f = "Nama ";
let g = "Saya ";
let h = "Bambang ";

let result = e + f + g + h;

console.log(result);
// console.log((90*180)+90);


function add(){
    let a = prompt("Masukan Angka Pertama");
    let b = prompt("Masukan Angka Kedua");
    let result = Number(a) + Number(b)
    console.log("Hasil dari "+ a +"+"+ b +" Adalah " + result);
}

function minus(){
    let a = prompt("Masukan Angka Pertama");
    let b = prompt("Masukan Angka Kedua");
    let result = Number(a) - Number(b)
    console.log("Hasil dari "+ a +"-"+ b +" Adalah " + result);
}

function multiply(){
    let a = prompt("Masukan Angka Pertama");
    let b = prompt("Masukan Angka Kedua");
    let result = Number(a) * Number(b)
    console.log("Hasil dari "+ a +"x"+ b +" Adalah " + result);
}

function devide(){
    let a = prompt("Masukan Angka Pertama");
    let b = prompt("Masukan Angka Kedua");
    let result = Number(a) / Number(b)
    console.log("Hasil dari "+ a +"/"+ b +" Adalah " + result);
}

function modulus(){
    let a = prompt("Masukan Angka Pertama");
    let b = prompt("Masukan Angka Kedua");
    let result = Number(a) % Number(b)
    console.log("Sisa Bagi dari "+ a +" Di Bagi "+ b +" Sisanya " + result);
}

function exponen(){
    let a = prompt("Masukan Angka Pertama");
    let b = prompt("Masukan Angka Kedua");
    let result = Number(a) ** Number(b)
    console.log("Hasil dari "+ a +" Pangkat "+ b +" Adalah " + result);
}