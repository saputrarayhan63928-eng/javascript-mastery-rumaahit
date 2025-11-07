let nilai = [60,75,80,55,90,45]
//  soal 1
let lulus = nilai.filter((v,i,a) =>  {
    return v >= 70  
})
console.log(lulus)
// soal 2
let lulusgagal = nilai.map((v,i,a) =>{
    if(v >= 70){
        return v + " lulus"
    } else{
        return v + " gagal"
    }
})
console.log(lulusgagal)
//  soal 3
let totalnilai = nilai.reduce((a,b) => a + b, 0)
// soal 4
console.log(totalnilai);
