//  study case 1 menggabungkan 2 data sekaligus
const nambuah1 = ["apel","pisang","semangka"] 
const nambuah2 = ["anggur","kiwi","jeruk"]
const semuabuah =[...nambuah1,...nambuah2]
console.log(semuabuah);
//  study case 2 menyalin array tanpa tambahan apapun
const namsantri1 = ["yudis","akbar","nopal"]
const namsantri2 = [...namsantri1]
console.log(namsantri2);
//  study case 3 destruction dgn array
const dataarray = [1,2,3,4,5,6]
const [a,b,c,d,e,f] = dataarray
console.log(a,b,c,d,e,f);
//  study case 4 destruction dgn object
const user = { nama: "Hanz", umur: 20,tinggal: "Kalimantan" };
const { nama, umur,tinggal } = user;
console.log(nama, umur,tinggal);
//  study case 5 menggunakan rest dlm fungsi reduce
function penjumlahan(...angka){
    return angka.reduce((a,b) => a * b)
}
console.log(penjumlahan(10,3,5,3));
//  study case 6 memisahkan salah satu data dari dlm array menggunakan Destructuring array
const namahewan = ["anjing","kucing","unta","burung","harimau"]
const [haram1,...halal] = namahewan
console.log(haram1);
console.log(halal);
//  study case 7 menggabungkan data data type object menggunakan spread
const user2 = { nama: "Aqila", umur: 19 };
const alamat = { kota: "Bandung", negara: "Indonesia" };
const backstory = {sekolah: "Cipta Wiyata", tingkat: "SMA"}
const profil = { ...user2, ...alamat,...backstory };
console.log(profil);
// study case 8 menggunakan destruction dgn object dlm function
function perkenalan({nama, tinggal}) { // di dlm paramnya  keynya harus sama dgn apa yg ada di dlm key object tmpt
//  memasukan data paramsnya 
    return `halo nama ku ${nama} dan saya tinggal ${tinggal}`
}
console.log(perkenalan({nama: "Rayhan", tinggal: "kalimantan"}));
// study case 9 menggunakan rest property untuk sisa object
const namaorang = {nama1:"hanif",nama2:"nopal",nama3:"abil"}
const {nama1, ...namalainya} = namaorang
console.log(nama1);
console.log(namalainya);
// study case 10 menggabungkan data array dlm fungsi menggunakan spread
function penggabunganarray (array1,array2){
    return [...array1,...array2]
}
console.log(penggabunganarray([10,20,30],[100,200,300]));
//  study case 11 mengupdate salah satu data dlm object menggunakan spread
const datauser1 = {nama1: "Nopal", Kelas:11, umur:17}
const updateuser1 = {...datauser1, Kelas:12, umur:18}
console.log(updateuser1);
//  stdy case 12 menambahkan data ke array di dlm object tanpa ubah aslinya
const todo = [{ task: "Belajar JS" }];
const newTodo = [...todo, { task: "Belajar Phyton" }];
console.log(newTodo);
//  study case 13 Filter dan destructuring langsung
const z= [
    {nama:"Nopal",nilai: 90},
    {nama:"Raihan",nilai: 70},
    {nama:"Akbar",nilai: 40},
    {nama:"Hanip",nilai: 80},
    {nama:"Yudis",nilai: 50}
]
const lulus = z.filter(({nilai}) => nilai >= 70 )
console.log(lulus);
//  study case 14 menggunakan rest di parameter untuk memisahkan data data
function grup1(ketua,wakil,...anggota){
    console.log(`Ketua = ${ketua}`);
    console.log(`Wakil = ${wakil}`);
    console.log(`Anggota = ${anggota}`);
}
grup1("Rayhan","Muads","ijul","aisyah","akhdan","aqila")
//  study case 15 mengubah nama key menggunakan destructuring di object dlm object
const abc = {
    alamat: {kota:"Sangatta", profinsi:"Kalimantan Timur"}
}
const { alamat: { kota}} = abc
console.log(kota);
//  study case 16 memfilter array dlm object agar tidak duplikat
const a12 = [{ nama: "Rayhan" }, { nama: "Aqila" }];
const b12 = [{ nama: "Rayhan" }, { nama: "Aisyah" }];
const merge = [...a12, ...b12].filter(
  (v, i, arr) => arr.findIndex(x => x.nama === v.nama) === i
);
console.log(merge);
//  study case 17 menggunakan spread untuk menambah data dalam nested array
const kelas = {
  nama: "XI RPL",
  siswa: ["Rayhan", "Salsabila"]
};
const updateKelas = {
  ...kelas,
  siswa: [...kelas.siswa, "Muads"]
};
console.log(updateKelas);
//  study case 18 Destructuring parameter menggunakan map
const produk = [
  { nama: "Laptop", harga: 7000 },
  { nama: "HP", harga: 3000 }
];
const daftarNama = produk.map(({ nama }) => nama);
console.log(daftarNama);
//  study case 19 menggunakan rest untuk memisahkan data penting dan sisanya
const siswa = { nama12: "Naufal", umur: 18, nilai: 90, hobi: "Game" };
const { nama12, nilai, ...infoTambahan } = siswa;
console.log(nama12, nilai);
console.log(infoTambahan);
//  study case 20 menggunakan spread untuk memperbarui item di array of object
const ujianakhir = [
    {id: 1 , nama: "Rayhan",nilai: 100},
    {id: 2 , nama: "Salsabila",nilai: 50}
]
const updatenilai = ujianakhir.map((v) =>
    v.id === 2 ? {...v, nilai:100} : v
)
console.log(updatenilai);
//  study case 21 memisahkan memvalidasi data
let santrisebelah = [
  { nama: "Rayhan", nilai: [100] },
  { nama: "Aqila",  nilai: [90] },
  { nama: "Naufal", nilai: [10] },
  { nama: "Hafidz", nilai: [30] },
  { nama: "Raisa",  nilai: [60] },
  { nama: "Dimas",  nilai: [70] },
  { nama: "Alif",   nilai: [50] },
  { nama: "Nadia",  nilai: [80] },
  { nama: "Arman",  nilai: [20] },
  { nama: "iqba",  nilai: [30] },
  { nama: "Fikri",  nilai: [80] },
  { nama: "memet",  nilai: [90] },
  { nama: "ujang",  nilai: [90] },
  { nama: "ucup",  nilai: [78] },
  { nama: "udin",  nilai: [60] },
  { nama: "udil",  nilai: [78] },
  { nama: "sultan",nilai: [67] },
  { nama: "faldi", nilai: [79] },
  { nama: "budi",  nilai: [49] },
  { nama: "hanip", nilai: [47] },
  { nama: "atila", nilai: [97] },
  { nama: "ijul",  nilai: [99]},
]
let validasi = santrisebelah.map((v,i,arr) => {
if(v.nilai >= 70){
    return {nama:v.nama,nilai:v.nilai,ket:"Di atas KKM"}
    // return `${i + 1} nama: ${v.nama} nilai: ${v.nilai} Ket: Di atas KKM`
} else{
    return {nama:v.nama,nilai:v.nilai,ket:"Di bawah KKM"}
    // return `${i + 1} nama: ${v.nama} nilai: ${v.nilai} Ket: Di bawah KKM`
}
})
console.log(validasi);
