// 1 
function hitungTotal(harga, qty, pajakPct, diskonPct) {
    let perkalian = harga * qty
    let diskon = perkalian / diskonPct
    let tambah = diskon * pajakPct 
    return tambah
}
console.log(hitungTotal(10000,3,11,10));
//  2
let datanilai = [55,65,75,85,95]
let validasi =  datanilai.map((v,i,a) =>{
    if(v >= 90){
        return `"A" untuk nilai 90-100, nilai asli ${v}`
    } else if(v >= 80){
        return `"B" untuk nilai 80 - 89, nilai asli ${v}` 
    } else if(v >= 70){
        return `"C" untuk nilai 70 - 79, nilai asli ${v}`
    } else if(v >= 60 ){
        return `"D" untuk nilai 60 - 69, nilai asli ${v}`
    } else {
        return `"E" untuk nilai 1 - 50, nilai asli ${v}`
    }
})
let pembalikan = validasi.reverse()
console.log(pembalikan);
//  3
let datauser = ["M","A","S","Ujang","Udin"]
let validasiuser = datauser.map((v,i,a) => {
    switch (v) {
        case "M":
            return `Selamat datang Mentor, Code Name ${v}`
        case "A":
            return `Selamat datang Admin, Code Name ${v}`
        case "S":
            return `Selamat Datang Santri, Code Name ${v}`
        default:
            return `Mohon Maaf, Anda Tidak Punya Akses Untuk ke Sini, Code Name ${v}`
    }
})
console.log(validasiuser);
//  4
function jumlahGenap(arr) {
    let total = 0
    for (let index = 0; index < arr.length; index++) {
        if(arr[index] % 2 === 0){
            total += arr[index]
        }
    }
    return total
}
console.log(jumlahGenap([1,2,3,4,5,6,7,8,9,10]));

//  5
function akumulasiSampai(batas) {
    for (let index = 0; index < batas; index++) {
        console.log(`ini adalah perulangan ke ${index + 1}`)
    }
}
akumulasiSampai(5)

//  6
function hitungluas(p,l,s) {
    return  p * l * s
}
let hasilluas = function (p,l,s) {
    return p * l * s
}
console.log(hitungluas(5,7,3));
console.log(hasilluas(8,5,2));
//  7
let nama = ["Nopal","hanip","ujang",]
nama.push("Rayhan")
console.log(nama);
nama.pop()
console.log(nama);
nama.unshift("Rayhan")
console.log(nama);
nama.shift()
console.log(nama);
nama.slice()
console.log(nama);
//  9
function kurvaNilai(santri, tambah) {
    data = [{santri:santri, nilai:tambah}]
    newnilai = data.map ((v,i,a) =>{
        tambahnilai = v.nilai + 20
        return {santri: santri, Nilaibaru:tambahnilai}
    })
    return newnilai
}
console.log(kurvaNilai("Rayhan",60));
// 10
let datanilaisiswa = [
     { nama: "Ali", nilai: 80 }, 
     { nama: "Yudis", nilai: 60 },
     { nama: "Akbar", nilai: 20 },
     { nama: "Zaid", nilai: 70 },
     { nama: "Rayhan", nilai: 90 }
     ]
     function seleksiDanCari(Array){
        validasi = Array.filter((v) =>{
            return v.nilai >= 70 
        })
        return validasi
     }
     menemukannilai =  seleksiDanCari(datanilaisiswa).find((v) =>{
                return v.nilai > 80
            })
    console.log(seleksiDanCari(datanilaisiswa));
    console.log(menemukannilai);
    
// 11
function analitikNilai(...nilai) {
    angka = nilai
    total = angka.reduce((a,b) => a + b,0)
    ratarata = total / angka.length
    return {total:total,ratarata:ratarata}
}
console.log(analitikNilai(1,2,3,4,5,6,7,8,9,10));
// 12
let namasiswa = {
    value:"SS+",
    nama:"Rayhan",
    kelas:15,
}
let {value,...a} = namasiswa
console.log(a);
console.log(value);
//  13
let alamat = {
        nama: "Udin",
      profil: { usia: 20, kontak: "0822"  }
};

console.log(alamat.nama);
console.log(alamat.profil);
//  14
  let datakamar = [{
        admin: { nama: "Ali" },
        asrama: { kamar: "B12" },
        nilaiTambahan: [10, 20, 30]
  }]
let kamar = datakamar.map((v) =>{
    return {admin: v.admin,asrama: v.asrama}
})
let kamarnilai = datakamar.map((v,i,a) =>{
    let totalkamar = v.nilaiTambahan.reduce((a,b) => a + b,0)
    return totalkamar
})
console.log(kamar);
console.log(kamarnilai);
// 15
let isipondok = {
    pondok:{
        nama:"Rumah IT",
        program:{
            nama:"JavaScript Mastery",
            mentor:"Mas EL",
            modul:{
                judul:"Array & Method",
                submodul:{
                  judul: "map" ,
                  judul: "filter" 
                },
            },
                santri:[
                    { nama: "Ali", nilai: [80, 75, 90], kehadiran: [true, false, true, true] },
                    { nama: "Fatimah", nilai: [95, 85, 100], kehadiran: [true, true, true, true] },
                    { nama: "Akbar", nilai: [35, 55, 10], kehadiran: [true, false, false, false] },
                    { nama: "Rayhan", nilai: [100, 100, 100], kehadiran: [true, true, true, true] },
                ]
            
        }
    }
}
hasilakhir = isipondok.pondok.program.santri.map((v,i,a) =>{
    totalnilaisiswa = v.nilai.reduce((a,b) => a + b,0)
    rataratasiswa = totalnilaisiswa / v.nilai.length
    hadirsiswa = v.kehadiran.filter((v) => {
        return v === true
    })
    persenhadir = (hadirsiswa.length / 4) * 100
    if(persenhadir >= 75){
        return {nama:v.nama,nilai:rataratasiswa,hadir:`${persenhadir}%`,status:"Rajin & Lulus"}
    } else {
         return {nama:v.nama,nilai:rataratasiswa,hadir:`${persenhadir}%`,status:"Malas & Gagal"}
    }
})
console.log(isipondok);
console.log(hasilakhir);
