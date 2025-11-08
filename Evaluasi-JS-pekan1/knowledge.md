=== Yang saya pahami  dlm 1 pekan in ===

## Klarifikasi ##
Saya minta maaf  kalo penjelasannya kurang, karena saya itu orgnya itu tipe paham tapi gk terlalu bisa buat jelasin

# Mekanisme Program Js #
Program Js itu sendiri adalah sebuah bahasa pemograman yg bertujuan untuk membuat sebuah html menjadi interaktif
dan Mekanismenya sendiri itu dia membaca kode kodenya itu dari atas ke bawa dan dari kiri ke kanan

# Variable # 
Variable terbagi menjadi 3 jenis yaitu : 
- [var] = ini dia versi lamanya let dia memiliki kode scope atau bisa di bilang data yg ada dalam var itu bisa di ubah dengan apa saja contoh : {var a = "udin"}[data.asli] => {var a = "ujang"} atau bisa juga dgn memanggil nama variablenya saja {a = "ujang"} maka hasil akhirnya adalah ujang
- [let] = ini adalah jenis variable yg hanya bisa di ubah dgn menulis ulang isinya dgn memanggil nama variablenya aja contoh {let a = "ijul"}[data.asli] => di ubah dgn {a = "siti"} maka hasil akhirnya adalah siti
- [const] = ini adalah jenis variable yg constan, yg tidak bisa di ubah sama sekali ketika isinya sudah di isi

# Jenis-Jenis Data #
Jenis - Jenis Data itu ada 5 yaitu : 
- [string] data yg di isi dgn ("")
- [integer] data yg di isi dgn angka
- [bolean] data yg di isi dgn (true/flase)
- [null] data yg isinya gk ada
- [undified] data yg gk ada

# Code scope # 
Code scope sendiri itu bisa di bilang ada yg namanta kurung kurawal ({}) yg bisa jadi dari function dan if,else,switch,for, dan yg semisalnya dan di js itu bisa di bilang ada 2 type yaitu global sama local. global itu bisa di bilang variable-variable yg di luar dari apa-apa  yg tlh di sebutkan di atas. dan local itu adalah variable-variable yg ada di dalam dari apa-apa yg tlh di sebutkan di atas. dan meraka ini ketika ada dalam 2 tmpt yg berbeda maka dia adalah sosok yg berbeda

# Aritmatika #
aritmatika sendiri itu ada 6 yaitu
- [+] pertambahan
- [-] pengurangan
- [*] perkalian
- [/] pembagian
- [%] menambilkan sisa dari pembagian
- [**] perkalian pangkat

# Perbandingan #
Perbandigan sendiri itu ada 8 yaitu :
- [==] dia akan menghasilkan true jika perbandingannya sama dan false jika tidak
- [===] dia akan menghasilkan true jika perbandingannya sama dan jenis datanya sama dan false jika tidak
- [!=] dia akan menghasilkan true jika perbandingannya tidak sama dan false jika tidak
- [!==] dia akan menghasilkan true jika perbandingannya tidak sama dan jenis datanya tidak sama dan false jika tidak
- [>] dia akan menghasilkan true jika perbandingannya a lebih besar dari b dan false jika tidak
- [<] dia akan menghasilkan true jika perbandingannya a lebih kesil dari b dan false jika tidak
- [>=] dia akan menghasilkan true jika perbandingannya sama dan juga a lebih besar dari b dan false jika tidak
- [>=] dia akan menghasilkan true jika perbandingannya sama dan juga a lebih kecil dari b dan false jika tidak

 
# Logika #
Logika sendiri itu ada 3  yaitu :
- [&&] dia akan true jika kedua hasil dari dua perbandingan atau lebihnya itu true semua dan akan false jika salah satunya itu false
- [||] dia akan true jika salah saru dari dua perbandingan atau lebih itu true dan false ketika tdk ada yg true
-[!] dia akan membalikkan sebuah data yg awalnya true menjadi false dan juga sebaliknya

# function # 
function adalah sebuah program yg bisa di isi program di dalamnya dan tidak akan jalan jika tdk di panggil functionya ada 3 jenis function : 
- [deskrektif] yaitu function yg langsung di buat di bagian global tanpa penutup apa pun
- [exspektif] yaitu function yg di buat dalam variable
- [arrow] dia ini di buat di dlm variable juga cmn lebih ringkasnya lah
dan cara keluar masuk datanya dalam function itu kita menggunakan yg namanya [params] dan [params]nya bisa di buat lebih dari 1 dan [retrun]
contoh [params] itu
 {function contoh (a[in.adalah.params1nya], b [ini.params2nya]){
   let  result = a + b
   retrun result [in.untuk.narik.hasilnya.keluar./bisa.di.simpan.datanya]
}}
console.log(contoh(1000,2000 [ini.masukin.data.paramsnya]))
maka hasilnya : 3000

dan di dalam function sendiri bisa di combinasi dgn program-program lainnya seperti looping,if,else,switch, dan masih banyak lagi

# Looping # 
looping adalah perulangan dan dia memiliki 3 jenis :
- [for] ini dia butuh 3 syarat agar bisa melakukan perlulangan yaitu 
            1. harus ada variable yg menjadi perbandingannya
            2. dari perbandingannya harus true agar dia mengulanginya dan jika false maka tdk jalan
            3. harus ada sesuatu yg di tambah di variablenya atau bisa di bilang juga ketika perulangannya terjadi maka ada konsekuensi yg terjadi
- [while] ini sama aja kayak di atas cmn beda secara penulisan saja
- [do..while] ini juga sama kayak di atas cmn dia ada [break] di bagian akhirnya

# if,else,else if #
if,else,else if sendiri adalah konditional statmen yaitu jika [if] (iya) maka [else] (gk) , atau jika [if] (gk) maka [else] (iya) , jika [if] (gk) dan [else.if] (iya) maka [else] (gk) , atau  jika [if] (gk) dan [else.if] (gk) maka [else] (iya) . yaa seperti itu lah intinya. yg penting itu intinya adalah if akan jalan ketika dia mendapatkan data true dan jika if mendapatkan data false maka dia tdk akan jalan melainkan dia akan melempar ke else yg akan menjalankannya dan sama juka ketika kita menggunakan if, else if, else, jika if akan mendapatkan data true dan jika if mendapatkan data false maka dia tdk akan jalan melainkan dia akan melempar  else if  dan jika dia mendpatkan data true maka dia akan menjalankannya dan jika dia mendapatkan data false maka dia akan melemparkannya lagi ke else yg akan menjalankannya 
dan perbedaan dari kita menggunakan if, if ,else maka  jika if akan mendapatkan data true maka dia  akan jalan dan lajut ke if dan jika dia mendpatkan data true maka dia akan menjalankannya juga dan jika ke 2nya  mendapatkan data false maka dia akan melemparkannya lagi ke else yg akan menjalankannya 

# switch # 
switch adalah sebuah program yg logikanya itu sama kayak if,else if, else. cmn dia ini lebih enk ketika di gunakan untuk membuat banyak pilihan sekaligus. templatenya itu 
switch(nama variable yg memiliki isi pemilihan){
    case("1" [jika.isi.variable.adalah.ini.maka.dia.akan.jalan]):
    break;
    case("2" [jika.isi.variable.adalah.ini.maka.dia.akan.jalan]):
    break;
    [bisa.di.lanjut.ke.case.selanjutnya]
    default: [jika.isi.variable.tdk.ada.di.dlm.case-case.yg.ada.di.dlm.switch]
        break
}

# Closher # 
ini intinya adalah function dalam function.  ini adalah templatenya
function katakata(kata1 = ``) {
    return function (kata2 = ``) {
        console.log(` selamat datang ${kata1} umur kamu ternyata  ${kata2} toh `)
        return
    }
}
console.log(katakata("Rayhan")("17))
maka dia akan muncul selamat datang Rayhan umur kamu ternyata  17 toh
dan agar hasilnya gini kita perlu yg namanya return

# hosting #
ini intinya kita manggil sebuah variable atau function di atas sebelum variablenya  atau functionnya di buat contoh
console.log(ab) [hasilnya.undefined]
var ab = "halo"
console.log(ab) [hasilnya.error.undefined]
let ab = "halo"
console.log(ab) [hasilnya.error.undefined]
const ab = "halo"
console.log(katakata("Rayhan")("17")) [kalo.function.dia.aman.aja.tdk.error]
function katakata(kata1 = ``) {
    return function (kata2 = ``) {
        console.log(` selamat datang ${kata1} umur kamu ternyata  ${kata2} toh `)
        return
    }
}