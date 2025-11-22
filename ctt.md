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

================================================================================================================

=== day 1 ===

- [export] di gunakan untuk mengeluarkan sebuah function/ variable / sintask lainya agar bisa di gunakan di file yg lainnya
- [import] di gunakan untuk mengambil apa yg tlh di [export] tadi
- [name.export] di uitu seperti memanggil dgn sekali panggil seperti import variable dan function atau sintask lainya
- [default.export] itu adalah ketika ada yg di import dlm 1 file dan importnya tidak ada yg sama maka yg ke ambil pertama adalah import default tersebeut
- [mix.import] itu menggabungkan [import.default] dan [import] biasa  dlm 1 pemanggilan
- di dlm html ketika kita ingin menggabungkan js dgn js lainnya di dlm sebuah folder maka perlu menambahkan [type] di bagian script di dlm htmlnya
- [*] ini dalam import tandanya manggil semua yg udh di lebleli dgn export di bagian js yg mau di import
- untuk mengubah nama pemanggilan nya dgn [as] ketika saat mau mengimport
- [class] itu adalah template (cetakan) untuk membuat objek dengan struktur dan perilaku tertentu.
Bayangkan seperti blueprint rumah. atau intinya itu bisa membuat data yg sama dgn fungsi yg sama dlm satu blueprit

=== Day 2 ===

- [json] itu untuk mengambil data dari luar 
- [stringfy] ini unyuk mengubah data object js menjadi data json
- [parsel] ini kebalikannya dgn [stringfy] ini untuk mengubah data json menjadi data object js
- [ftecth()] ini untuk mengambil data dari internet
- [localStorage] hanya berfungsi di browser bkn di node.js

=== day 3 ===

- [callback] itu bisa di bilang dia di panggil di dlm params 
- [setTimeout] ini untuk melakukan penjedaan ketika kode telah berjalan dan dia di hitung dari mili detik yaitu 1000ms = 1 detik
- [function.anonim] itu kita buat functionnya di dlm paramsnya

=== day 4 ===

- Ketika proses  setTimeout dimasukkan ke dalam Promise dan kamu memanggil resolve() setelah selesai → maka .then() akan menunggu proses itu dan ikut setelahnya.
= [.then] itu bisa di gabung di dalam [.then] maksudnya itu ada [.then] di dalam [.then]

=== day 5 ===

=========================================================================================================

=== day 2 ===

- [document.getElementById()] = mengambil suatu element sesuai dengan idnya

- [addEventListener()] = Menambahkan aksi handler pada elemen (bisa click, input, submit, dsb) 
        terbagi jadi 3 type = 
        - [click] = membuat dia menjalankan sesuaatu ketika di klick
        - [keyup] = membuat dia menjalankan function ketika user mengetik
        - ["keydown"] = Terjadi saat user mulai menekan tombol keyboard (sebelum dilepas).
        - ["input"] = Terjadi setiap kali nilai input berubah, baik ketik, hapus, paste, atau auto-fill.
        - ["change"] = Terjadi ketika input selesai berubah, lalu user berpindah fokus atau memilih option.
        - ["mouseover"] = Terjadi ketika mouse masuk ke area elemen.
        - ["submit"] = Terjadi ketika user mengirim form (tekan tombol submit atau Enter)

- [createElement()] = membuat element baru di dlm html secara dinamis

- [appendChild()] = memasukkan element baru di dlm dom dan hanya bisa menambahkan 1 node saja adapun yg bisa menambahkan banyak sekaligus

- [.append()] = memasukkan element baru di dlm dom dan bisa menambahkan multiple node / string, bisa node atau text

- [textContent] = men-set atau mengambil textnya saja (dia tidak perlu memproses HTML) dan dia tidak memerhatikan css visibility

- [innerText] = Mirip textContent tapi memperhatikan style CSS dan visibility. (dia tidak perlu memproses HTML) dan dia menjadi memproses lebih lama karena hal tsb(css visibility  )

- [classList.toggle()] = Menambah atau menghapus class CSS secara otomatis. dengan kondisi [(yangmauditambah),(kondisi)] dan sirkulasinya begini kalau ada class → hapus, kalau tidak ada → tambah.

- [style.] = ini di gunakan untuk mengubah atau membuat css melalui js tempaltenya [(namaclassnya).style.(typestylenya)], Properti style JS memakai camelCase contoh [ V = backgroundColor, fontSize, X = background-color]

- [remove()] = menghapus element dari dom

- [stopPropagation()] = mencegah agar  [addEventListener()]  Mencegah aksi bubbling → mencegah aksi naik ke parent element.

- [querySelectorAll("")] = dia mengambil semua element [class/id] yg cocok  dgn cssnya Menghasilkan NodeList (mirip array), tapi Harus pakai .forEach() untuk loop (karena bukan array asli)

- [includes()] = dia di gunakan  Untuk mengecek apakah sebuah string mengandung kata. contoh Case sensitive → “A” ≠ “a”

- [e.target] = untuk mengambil Elemen yang diklik user

- [e.target.dataset.tab] = mengambil nilai atribut dari [data-tab]

- [icon.textContent] = Mengubah icon ke suatu yg di inginkan khusus digunakan untuk mengganti tanda “+” / “–”

- [innerHTML] =bisa membaca / menulis HTML   dia bisa menambahkan element2 html di dalamnya

- [value] = di di gunakan untuk mengambil hasil input dari bagian html, value tidak bekerja pada elemen non-input.

========= reminder ===========

- [setAttribute()] = Mengubah/menambah attribute pada elemen.

- [classList.add()/.remove()] = Untuk mengatur class tanpa toggle.

- [parentNode/children] = Untuk mengakses elemen parent/child.
            ada 3 jenis = 
            - [parentElement] → khusus elemen (bukan node text)
            - [children] → hanya element
            - [childNodes] → termasuk text node