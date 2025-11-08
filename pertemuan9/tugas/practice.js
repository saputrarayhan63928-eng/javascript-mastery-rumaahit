let absensantri = [
    {nama:"Rayhan",hadir:[true,true,true,true,true,true,true,]},
    {nama:"Nopal",hadir:[true,true,true,true,true,true,true,]},
    {nama:"firman",hadir:[true,true,true,true,true,true,true,]},
    {nama:"fadli",hadir:[true,true,true,true,true,true,true,]},
    {nama:"yudis",hadir:[true,true,false,true,false,true,true,]},
    {nama:"akbar",hadir:[true,true,false,true,true,false,true,]},
    {nama:"arman",hadir:[true,true,true,true,true,true,true,]},
    {nama:"ihya",hadir:[true,true,true,true,true,true,true,]},
    {nama:"alfi",hadir:[true,true,true,true,true,true,true,]},
    {nama:"luqman",hadir:[true,true,true,false,false,false,true,]}
]
let santrisebelah = [
  { nama: "Rayhan", hadir: [true, true, true, true, true, true, true] },
  { nama: "Aqila",  hadir: [true, false, true, true, true, false, true] },
  { nama: "Naufal", hadir: [true, true, false, false, true, true, false] },
  { nama: "Hafidz", hadir: [true, true, true, true, false, true, false] },
  { nama: "Raisa",  hadir: [false, true, true, true, true, false, true] },
  { nama: "Dimas",  hadir: [true, true, false, true, false, false, true] },
  { nama: "Alif",   hadir: [true, true, true, true, true, true, false] },
  { nama: "Nadia",  hadir: [true, false, false, true, true, true, true] },
  { nama: "Arman",  hadir: [true, true, true, false, false, true, true] },
  { nama: "iqba",  hadir: [false, true, true, false, true, false, true] },
  { nama: "Fikri",  hadir: [false, true, true, false, false, false, true] },
  { nama: "memet",  hadir: [false, false, true, false, false, false, true] },
  { nama: "ujang",  hadir: [false, false, true, false, true, false, true] },
  { nama: "ucup",  hadir: [true, true, true, false, true, false, true] },
  { nama: "udin",  hadir: [true, true, true, true, true, false, true] },
  { nama: "udil",  hadir: [false, true, true, false, true, false, true] },
  { nama: "sultan",  hadir: [false, true, true, false, true, false, false] },
  { nama: "faldi",  hadir: [false, true, true, false, true, false, true] },
  { nama: "budi",  hadir: [false, true, true, false, true, false, true] },
  { nama: "hanip",  hadir: [false, false, false, false, true, false, true] },
  { nama: "atila",  hadir: [false, true, true, false, true, false, true] },
  { nama: "ijul",  hadir: [false, true, true, false, true, false, true] },
];

function datasantri(absensantri) {
let datahadir = absensantri.map((v,i,a) =>{
checkhadirtrue = v.hadir.filter((value) =>{
    return value === true
})
checkhadirfalse = v.hadir.filter((value) =>{
    return value === false
})
return {nama :v.nama, hadir : checkhadirtrue ,alfa: checkhadirfalse}  
})
// console.table(datahadir)
let datahadir2 = datahadir.map((v,i,a) => {
    if(v.hadir.length >= 7){
        return {nama : v.nama, hadir : v.hadir.length, alfa :v.alfa.length, ket: "Rajin" }
      
    } 
    else{
        return {nama : v.nama, hadir : v.hadir.length,alfa:v.alfa.length, ket: "Malas" }
    }
})
return datahadir2
// return datahadir2.length
}
console.table(datasantri(santrisebelah))

