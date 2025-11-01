function login(){
    let email = prompt ("masukkan email")
    let pw = prompt("masukan pw")

    if(!email || !pw) {
        alert("email atau pasword belom di isi")
        console.log("login gagal")
    }
       if(email == "saya@gmail.com"  && pw == "12345678") {
        console.log("login berhasil");
    }
    else {
        alert("email atau pasword salah")
        console.log("login gagal")
    }
    /* 
    - intinya if ,else, else if itu agar berjalan ke if / else if itu datanya harus bernilai true dan ketika ke else 
    datanya harus bernilai false
     - bedanya if dan else if ketika dlm satu rentetan cabang itu fungsinya untuk agar ketika dalam satu rentetan cabang
     ketika mendapatkan salah satu data true atau false di suatu cabang maka dia akan ngeskip pada cabang-cabang yg 
     satu rentetan dan lanjut ke kode selanjutnya 
     - ketika if ada 2 dlm 1 rentetan cabang maka ketika if tersebut mendapat data true maka dia tdk akan ngeskip dan lanjut
     membaca cabang lainnya sampai selesai
    */
}

function cekAksesPengguna() {
    let statusPengguna = prompt("Apa Status Pengguna Anda")
    let levelAkses = prompt("Apa Level akses Anda")

    if (statusPengguna === 'aktif') {
        console.log("Pengguna aktif terdeteksi");
        
        if (levelAkses === 'admin') {
            console.log("Akses diberikan: Admin memiliki semua hak akses");
        } else if (levelAkses === 'moderator') {
            console.log("Akses diberikan: Moderator memiliki akses terbatas");
        } else {
            console.log("Akses diberikan: Pengguna biasa dengan akses standar");
        }
    } else if (statusPengguna === 'nonaktif') {
        console.log("Pengguna tidak aktif, akses dibatasi");
        if (levelAkses === 'admin') {
            console.log("Namun Admin masih bisa mengakses data");
        } else if (levelAkses === 'moderator') {
            console.log("Moderator tidak bisa mengakses data");
        } else {
            console.log("Pengguna biasa tidak bisa mengakses data");
        }
    } else if (statusPengguna === 'banned') {
        console.log("Pengguna diblokir");
        if (levelAkses === 'admin') {
            console.log("Admin juga tidak bisa mengakses");
        } else if (levelAkses === 'moderator') {
            console.log("Moderator tidak bisa mengakses");
        } else {
            console.log("Pengguna biasa sangat dibatasi");
        }
    } else {
        console.log("Status pengguna tidak dikenali, akses ditolak");
    }
}


// Example of switch

function listMenu() {
    
    if( confirm("Anda mau makan ?")) {
        let menu = prompt('Menu Nomer Berapa anda Pilih ? \n Pilih Menu di Bawah ini: \n 1. Mie Ayam : Rp15.000 \n 2. Bakso : Rp.10.000 \n 3. Soto : Rp5.000')

        switch (menu) {
            case "1":
                console.log("Anda Pilih Mie Ayam : Rp15.000");
                break;
            case "2":
                console.log("Anda Pilih Bakso : Rp.10.000");
                break;
            case "3":
                console.log("Anda Pilih Soto : Rp5.000");
                break;
            default:
                console.log("Menu Tidak Tersedia");
                break;
        }
    }
/*
switch itu sama aja kayak if dkk cmn untuk mentrigertnya dgn value agar dia mengeksekusi di dlmnya dan untuk 
menutupnya mengunakan (break) dan di dlm switch itu ada default sebagai elsenya switch
*/
}

// Looping

