import { searchCity } from "./api.js"
import { getDailySchedule } from "./api.js"
import { getTodayForApi } from "./utils.js"
import { getTodayForDisplay } from "./utils.js"
import { getNextPrayer } from "./utils.js"
import { hitungSelisihWaktu } from "./utils.js"
import { padZero } from "./utils.js"

const updatetanggal = document.getElementById("tanggalheader")
let tanggalsekarang = getTodayForDisplay()
updatetanggal.innerText = `${tanggalsekarang}`

function updatedisplaykota(kota){
const kotainputdisplay = kota
const updatelokasi = document.getElementById("lokasiheader")
updatelokasi.innerHTML = `Lokasi: <strong>${kotainputdisplay}</strong>`
}

export async function ambilinputkota(){
    const kotainput = document.getElementById("inputkota").value
    let kota = await searchCity(kotainput)
    if(!kota || kota.length === 0) {
        alert("Kota Titak di temukan")
        return
    }
    let lokasi = kota[1].lokasi
    let id = kota[0].id
    let waktu = getTodayForApi()
    const updatedata = await getDailySchedule(id,waktu)
    console.log(updatedata);
    updatedisplaykota(kotainput)
    // update data sholat
    let sholat = updatedata.data.jadwal
    let tempat = updatedata.data
   displayImsak(sholat)
   displaysubuh(sholat)
   displayterbit(sholat)
   displaydhuha(sholat)
   displaydzuhur(sholat)
   displayashar(sholat)
   displaymaghrib(sholat)
   displayisya(sholat)
   displaytanggalsekarang(sholat)
   kotaterbaru(tempat)
   sholatuntuksekarang(sholat)
    
    // displayImsak(sholat)
}
function displayImsak (Imsak){
    let waktuimsak = Imsak.imsak
    const updateimsak = document.getElementById("Imsak")
    updateimsak.innerText = `${waktuimsak}`

}
function displaysubuh (subuh){
    let waktusubuh = subuh.subuh
    const updatesubuh = document.getElementById("subuh")
    updatesubuh.innerText = `${waktusubuh}`
}
function displayterbit(terbit){
    let waktuterbit = terbit.terbit
    const updateterbit = document.getElementById("Terbit")
    updateterbit.innerText = `${waktuterbit}`
}
function displaydhuha(dhuha) {
    let waktudhuha = dhuha.dhuha
    const updatedhuha = document.getElementById("dhuha")
    updatedhuha.innerText = `${waktudhuha}`
}
function displaydzuhur(dzuhur){
    let waktudzuhur = dzuhur.dzuhur
    const updatedzuhur = document.getElementById("dzuhur")
    updatedzuhur.innerText = `${waktudzuhur}`
}
function displayashar(ashar) {
    let waktuashar = ashar.ashar
    const updateashar = document.getElementById("Ashar")
    updateashar.innerText = `${waktuashar}`
}
function displaymaghrib(maghrib) {
    let waktumaghrib = maghrib.maghrib
    const updatemagrib = document.getElementById("Maghrib")
    updatemagrib.innerText = `${waktumaghrib}`
}
function displayisya(isya) {
    let waktuisya = isya.isya
    const updateisya = document.getElementById("Isya")
    updateisya.innerText = `${waktuisya}`
}
function displaytanggalsekarang(tanggal){
    let tanggalsekarang = tanggal.tanggal
    const displaytanggalmain = document.getElementById("updatedisplaytanggal")
    displaytanggalmain.innerText = `${tanggalsekarang}`
}
function kotaterbaru(kota){
    let tinggal = kota.daerah
    let profinsi = kota.lokasi
    const kotaterbarubanget = document.getElementById("updatekotaterbaru")
    kotaterbarubanget.innerText = `Kota: ${tinggal} === Profinsi: ${profinsi}`
}   
function sholatuntuksekarang(jadwal){
    let next = getNextPrayer(jadwal, new Date());

    let sekarang = new Date();
    let jamSek = padZero(sekarang.getHours());
    let menitSek = padZero(sekarang.getMinutes());

    let countdown = hitungSelisihWaktu(next.time, sekarang);

    const sholatsekarang = document.getElementById("waktusekarangsholat");
    sholatsekarang.innerHTML = `
        <h2>
        Waktu sekarang : ${jamSek}:${menitSek},
        Sholat : ${next.name} - ${next.time} 
        <strong>Kurang : ${countdown} menit</strong>
        </h2>`;
}