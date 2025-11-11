Catatan untuk js

==== Day 3 ===

- cmd [Number] itu gunanya untuk mengubah type data suatu variabel menjadi integer
- aritmarika yg pekrkalian juka * nya 2 kali maka itu akan menjadi pangkan contih [3**2]

==== Day 4 ====

- increment [++] dlm looping ketika dia berjalan sekali maka di perulangan selanjutnya dia akan menambah 1 dan juga bisa loncan menjadi kelipatan dgn [+(nomorkelipatan)] contoh [+3] maka dia menjadi kelipatan 3
- decrement [--] sama aja kayak increment cmn ini versi pengurangannya
- parameter dlm function itu seperti sebuah wadah yg bisa di taro dari luar functionnya untuk jadi wadahnya
- return itu gunanya untuk menyimpan hasil data akhir sebuah function agar bisa di tambah atau hasil akan terus ada ketika di pindah ke backend/web/database dansetelah return itu bisa menghentikan kode function yg di bawahnya
- [isNaN] kegunaannya untuk mengecek angka dlm suatu variable

==== Day 5 ====

- block{} dia memiliki cakupan fungsi atau global tergantung di mana dia berada (function berarti cmn di function doang yg bisa menggunakannya sama aja seperti yg lainya)
- [let] itu variable yg bisa di deklarasi dgn blok kode ({}) dan tidak bisa di deklarasi ulang dlm blok kode yg sama
- [var] itu variable yg bisa Var hanya mengenal scope fungsi dan scope global yg bisa di deklarasi di mana saja
- [const] itu variable yg tetap valuenya dan tidak bisa di deklarasi di mana pun
- global tidak bisa mengambil data dari  loca [blok kode]

================================================================================================================

==== Week 2 ====

=== Day 1 ===

- Array adalah variable yg menyimpan banyak data dengan tanda ([])
contoh : let a = ["a","b","c","d","e","f"]
- dan ketika array di baca typenya adalah [object]
- dan array bisa di masukkan semua type data apapun
- dan untuk menambah data itu dgn  :
    - push("Nama data") // ini untuk menambah data di bagian akhirnya
    - unshift("Nama data") // ini untuk menambah data di bagian awal
- dan bisa di kurangin datanya itu dgn :
    - pop() // ini untuk menghapus data yg ada di dlmnya di bagian belakang
    - shift()  // ini untuk menghapus data yg ada di dlmnya di bagian depan
- dan bisa di lihat banyak data di dlm array itu dgn [lenght]
- dan cara manggil spesifik data dlm array itu dgn [console.log(namadata(urutandatanya))]
- dan cara membaca urutan data array itu di muali dari 0 - dst

=== Day 2 ===

- [forEach] di gunakan untuk memisahkan interaksi ke suatu Array men jadi 3 bagian :
                        - yg pertama itu untuk valuenya maksudnya dia akan memanggil arraynya 1 per 1
                        - yg kedua itu untuk indexnya maksudnya lokasi data arraynya
                        - yg ketiga itu untuk arraynya dia mengulang arraynya sesuai jumlahnya
- [map] dia sama kayak return cmn dia itu fersi untuk arraynya dan mekanismenya sama kayak [forEach]
- [filter] dia akan mengembalikan data / memperbarui data ( kayak mirip if gitu lah) dgn syarat yg tlh di beri, jika iya maka dia akan menjalankan
- [find] dia di gunakan mencari 1 data array menjadi data baru ketika syaratnya terpenuhi

=== day 3 ===
- object key : dia adalah sebuah variable yg menyimpan banyak data sekaligus dan di pisahkan dgn key yg berbeda
- dan cara pendekatannya itu dgn manggil variablenya dan di sambung dgn key yg ad di dlmnya

=== day 4 ===
- [Destructuring..Array] ini intinya dia mengubah datanya yg awalnya array menjadi object
- [Destructuring..object] ini juga sama dia mengubah data object menjadi data array
- [spread] dia bisa menggabungkan data array/object ke data array/object yg lainnya dan bisa di guankan untuk menyalin, menggabungkan, atau memecah data.
- [rest] dia di gunakan Untuk mengumpulkan sisa data jadi satu variabel (kebalikan dari spread)

=== day 5 ===
- [trim()] dia function bawaan js yg di mana kegunaannya untuk menghapus sepasi yg typo
- [innertext] itu gunanya ketika kita mau nambah kata doang kata dari js ke html
- [innerHTML] itu gunanya ketika kita mau nambah kata + ada element htmlnya dari js kehtmlnya
- [toLocaleString] itu adalah sintask yg dibawakan dari js yg berguna untuk gunakan untuk mengubah data (seperti angka, tanggal, atau waktu) menjadi string yang sesuai dengan format lokal (bahasa dan negara) pengguna
dan [toLocaleString] sendiri memiliki beberapa parameter penting di dalamnya yaitu :
    - bagian [style] di gunakan untuk format tampilan angka contoh : ["decimal"],["currency"],["percent"]
    - bagian [currency] di gunakan untuk kode mata uangnya contoh : ["IDR]",["USD"],["JPY"]
    - bagian [minimumFractionDigits] di gunakan untuk Jumlah minimum angka di belakang koma
    - bagian [maximumFractionDigits] di gunakan untuk Jumlah maksimum angka di belakang koma
    - bagian [useGrouping]di gunakan untuk Hilangkan tanda pemisah ribuan
- [parseInt] di gunakan untuk mengubah type ddata inputan yg awalnya seting menjadi integer