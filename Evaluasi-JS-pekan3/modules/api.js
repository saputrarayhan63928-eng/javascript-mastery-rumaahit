const BASE_UrL = 'https://api.myquran.com/v2/'



// let kota = await searchCity("kediri")
// let id = kota[0].id
// // console.log(await getCityById(id));
// let jadwalbln =await getMonthlySchedule(id,"2025","1");
// // console.log(jadwalbln.data.jadwal);
// console.log(await getRandomAsmaulHusna());







export async function searchCity(keyword) {
    let input = await fetch(`${BASE_UrL}sholat/kota/cari/${keyword}`)
    if(!input.ok){
        throw new Error ('Gagal Mencari  Kota')
    }
    let hasil = await input.json()
    return hasil.data
}
export async function getCityById(id) {
    let input = await fetch(`${BASE_UrL}sholat/kota/${id}`)
    if (!input.ok) {
        throw new Error ('ID Kota Salah')
    }
    let hasil = await input.json()
    return hasil
}

export async function getDailySchedule(cityId, dateString) {
    let [tahun , bln , hari] = dateString.split("/")
    let input =await fetch(`${BASE_UrL}sholat/jadwal/${cityId}/${tahun}/${bln}/${hari}`)
    if(!input.ok){
        throw new Error (`Jadwal Tidak di ketahui`)
    }
    let hasil = await input.json()
    return hasil
}
export async function getMonthlySchedule(cityId, year, month) {
    let input =await fetch(`${BASE_UrL}sholat/jadwal/${cityId}/${year}/${month}`)
    if(!input.ok){
        throw new Error (`Jadwal Tidak di ketahui`)
    }
    let hasil = await input.json()
     return hasil

}
export async function getRandomAyat() {
    let input = await fetch(`${BASE_UrL}quran/ayat/acak`)
     if(!input.ok){
        throw new Error (`Salah data`)
    }
    let hasil = await input.json()
     return hasil

}
export async function getRandomHaditsArbain() {
    let input = await fetch(`${BASE_UrL}/hadits/arbain/acak`)
     if(!input.ok){
        throw new Error (`Salah data`)
    }
    let hasil = await input.json()
     return hasil

}
export async function getRandomDoa() {
    let input = await fetch(`${BASE_UrL}doa/acak`)
         if(!input.ok){
        throw new Error (`Salah data`)
    }
    let hasil = await input.json()
     return hasil
}
export async function getRandomAsmaulHusna() {
    let input = await fetch(`${BASE_UrL}husna/acak`)
         if(!input.ok){
        throw new Error (`Salah data`)
    }
    let hasil = await input.json()
     return hasil
}


