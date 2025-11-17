function simpandata(a,b){
    console.log(`Sedang Mengimpand data User`); 
    setTimeout(() =>{
        console.log(a);
        let notif = b("Data User Berhasil di Simpan")
        console.log(notif);
        
    },5000)
}
function panggilan(a){
    return a
}
simpandata({nama:"Rayhan",Tinggal:"Kalimantan"},panggilan)