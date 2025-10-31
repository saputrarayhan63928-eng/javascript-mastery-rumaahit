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

// let w = "10"
// console.log(w);
// console.log(typeof w);
// // let ww = Number(w);
// let ww = + w
// console.log(ww);
// console.log(typeof ww);

// OPERATOR PERBANDINGAN 

let m = 10;
let n = 10 ;

// > | < | == | != | >= | <= | === | !== 

let v = m !== n;

// (&&) | (||) | (!) | 

// && hanya true apabila kondisi sama sama true 
// console.log(true && true); // TRUE
// console.log(5 > 4 && 9 < 10 )
// console.log(false && true); // FALSE
// console.log(12 != 12 && "45" !== 45);
// console.log(true && false); // FALSE

// (||) BISA TRUE APABILA SALAH SATU KONDISI TRUE
// console.log(true || false); // TRUE
// console.log(false || true); // TRUE
// console.log(false || false); // FALSE
// console.log(true || true); // TRUE

// (!) BISA MEMBALIKAN FAKTA
let data = "Santri";

if(data != "Santri" ) {

}

// console.log(!true);


let x = m == n && m >= n ; // TRUE 
//


// console.log(typeof x);
// console.log(x);

// OPERATOR COMPARASION FOR >> GREATER THEN (>)
// console.log(5 > 5); // False
// console.log(6 > 5); // True 
// console.log(6 > 90); // False 
// console.log(5 >= 5); // True

// OPERATOR COMPARASION FOR >> LESS THEN (<)
// console.log(5 < 5); // False
// console.log(5 <= 5); // True


function checkUmur(){
    let data = prompt("Santri Mana ?")
    // let result = + umur 

    if(data != "PIT") {
       console.log("Anda Bukan Santri");
       console.log(data != "PIT");
    } else {
        console.log("Oke Santri");
        console.log(data != "PIT");
    }

    if(data == "PIT") {
        console.log("Oke Santri");
        console.log(data != "PIT");
    } else {
       console.log("Anda Bukan Santri");
       console.log(data != "PIT");
    }

    if(!data){
        console.log(!data);
        console.log(data);
        console.warn("Anda Belom Ngisi Data");
    } else {
        console.log(!data);
        console.log(data);
        console.log("Oke Data Di terima");
    }
}

console.log(70 > 90 && 23 < 90 && !true || 87 > 67 && 54 < 90 && !true); // 