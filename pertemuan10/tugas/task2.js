let datasiswa = {
    nama: "Nopal",
    usia: 17,
    jurusam: "IT",
    kelas: "XV",
}
let {nama, kelas} = datasiswa
console.log(nama,kelas);
let updatedata = {...datasiswa, nilai: 90}
console.log(updatedata);
function  hitungratarata(...angka) {
    totalnilai = angka.reduce((a,b) => a + b)
    rataratanilai = totalnilai / angka.length
    return `dari nilai ${angka} rata rata nilai adalah ${rataratanilai}`
}
console.log(hitungratarata(80, 90, 70, 100, 85));


