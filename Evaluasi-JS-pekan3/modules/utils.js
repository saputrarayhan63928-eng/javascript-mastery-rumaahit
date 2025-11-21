console.log(getTodayForApi());
export function getTodayForApi() {
  let sekarang = new Date();
  let tahun = sekarang.getFullYear();
  let bln = padZero(sekarang.getMonth() + 1);
  let tanggal = padZero(sekarang.getDate());
  return `${tahun}/${bln}/${tanggal}`;
}
export function getTodayForDisplay() {
  let sekarang = new Date();
  let tahun = sekarang.getFullYear();
  let bln = padZero(sekarang.getMonth());
  let tanggal = padZero(sekarang.getDate());
  let namaBulan = [
    "Januari",
    "Februari",
    "Maret",
    "April",
    "Mei",
    "Juni",
    "Juli",
    "Agustus",
    "September",
    "Oktober",
    "November",
    "Desember",
  ];
  return `${tahun}-${namaBulan[bln]}-${tanggal}`;
}
export function padZero(n) {
  return n.toString().padStart(2, "0");
}
export function getNextPrayer(jadwalHarian, nowDateObj) {
  let jamsekarang = nowDateObj.getHours();
  let menitsekarang = nowDateObj.getMinutes();
  const list = [
    { name: "Subuh", time: jadwalHarian.subuh },
    { name: "Dzuhur", time: jadwalHarian.dzuhur },
    { name: "Ashar", time: jadwalHarian.ashar },
    { name: "Maghrib", time: jadwalHarian.maghrib },
    { name: "Isya", time: jadwalHarian.isya },
  ];
  for (let item of list) {
    const [jam, menit] = item.time.split(":").map(Number);
    if (jam > jamsekarang || (jam === jamsekarang && menit > menitsekarang)) {
      return {
        name: item.name,
        time: item.time,
      };
    }
  }
}

export function hitungSelisihWaktu(jamMenitStr, now = new Date()) {
    const [jamSholat, menitSholat] = jamMenitStr.split(":").map(Number);
    
    const totalMenitSholat = jamSholat * 60 + menitSholat;
    const totalMenitSekarang = now.getHours() * 60 + now.getMinutes();

    let selisih = totalMenitSholat - totalMenitSekarang;

    if (selisih < 0) return "Sudah lewat";

    const jam = Math.floor(selisih / 60);
    const menit = selisih % 60;
    return jam,menit
}