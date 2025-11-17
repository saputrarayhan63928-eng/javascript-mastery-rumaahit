// 1
console.log("program berjalan");

function score (nama, totalangka){
    let a = totalangka(14,60)
   setTimeout(() => {
    console.log(`Halo ${nama}, total score kamu adalah ${a}`)
},3000)
    
}

function jumlahscore (a,b){
    return a * b
}

score("Rayhan",jumlahscore);
//  2
setTimeout(() => {
    console.log("Program Selesai");
    
},4000)
//  3
function munculkanangka (x){
    for(let i = 0 ; i < 5; i++){
        console.log(`ini adalah angka ${i + 1}`);
        
    }
    let penutup = x("Program perulangan telah selesai")
    console.log(penutup);
    
}
function selesai (a){
    return a
    
}
munculkanangka(selesai)
