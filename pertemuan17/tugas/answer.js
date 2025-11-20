// soal 1 ======================================================================
// async function getUser() {
//   try {
//     const res = await fetch("https://dummyjson.com/users/1");
//     const data = await res.json();
//     // ambil data dan memanipulasinya
//     const { firstName, age} = data
//     console.log(firstName,age);
//     const datalokal = {firstName,age}
//     localStorage.setItem("user_1",JSON.stringify(datalokal))
//     const getdata = JSON.parse(localStorage.getItem("user_1"))
//     console.log(getdata);

//   } catch(error) {
//     console.error("Gagal mengambil data:", error);
//   }
// }
// getUser();
//  soal 2 ======================================================================
// async function loadErrorExample() {
//   try {
//     const res = await fetch("https://dummyjson.com/halaman-yang-tidak-ada");

//     if (!res.ok) {
//       throw new Error("Halaman tidak ditemukan (404)");
//     }

//     const data = await res.json();
//   } catch (error) {
//     localStorage.setItem("last_error", error)
//     let err = localStorage.getItem("last_error")
//     console.log(err);
//     alert("Terjadi kesalahan dalam mengambil data")
//     // console.error(error.message);
//   }
// }
// loadErrorExample()
// soal 3 ======================================================================
// async function getProducts() {
//   const res = await fetch("https://dummyjson.com/products");
//   const { products } = await res.json();
//     const memecah = products.filter((v)=>{
//         return v.price > 100
//     })
//     const edit = memecah.map((v) =>{
//         return {title:v.title,price:v.price}
//     })
//     localStorage.setItem("Data_Barang", JSON.stringify(edit))
//     const hasil = JSON.parse(localStorage.getItem("Data_Barang"))
//   console.log(hasil)
// }
// getProducts()
// soal 4 ======================================================================
// function loadDataPromise() {
//   return new Promise((resolve,reject) => {
//     let data = "User"
//     setTimeout(() => {
//         if(data === "User"){
//             resolve("Data Siap")
//         } else{
//             reject("Data Salah")
//         }
//     }, 1000)});
// }
// async function run() {
//   try {
//     const hasil = await loadDataPromise();
//     console.log(`${hasil} Untuk di gunakan`);
//   } catch (error) {
//     console.log(`${error} : Silahkan coba lagi`);
//   }
// }
// run()
// soal 5 ======================================================================
// function delay(ms) {
//   return new Promise(res => setTimeout(res , ms));
// }

// async function runStep() {
//     let progres = []
//   console.log("Mulai");
//   await delay(500);
//   progres.unshift("Selesai 0,5 detik");
//   await delay(1500)
//   progres.unshift("Selesai 1,5 detik");
//   await delay(2000)
//   progres.unshift("Selesai 2 detik");
//   localStorage.setItem("perjalanan", JSON.stringify(progres))
//   let hasil = JSON.parse(localStorage.getItem("perjalanan"))
//   console.log(`ini adalah hasil ambil dari local storage ${hasil}`);
  
// }
// runStep()
// soal 6 ======================================================================
// async function loadCart() {
//   const res = await fetch("https://dummyjson.com/carts/1");
//   const cart = await res.json();
// //   menghitung total 
// let {products} = cart
// let total = products.reduce((a,b) =>{
//    return  a + b.price
// },0)
// console.log(`ini harga total dari price produk ${total}`);

// //  ambil data dari local storage
//   localStorage.setItem("cart", JSON.stringify(cart));
//   let ambildata = JSON.parse(localStorage.getItem("cart"))
//   console.log("ini adalah hasil ambil dari local storage");
//   console.log(ambildata);
// }
// loadCart()
// soal 7 ======================================================================
// async function saveName(name) {
//   try {
//     if (name.length < 3) throw new Error("Nama terlalu pendek");
//     let userdata = {
//         usernam: name,
//         Date: Date.now()
//     }
//     localStorage.setItem("username", JSON.stringify(userdata))
//     console.log("Nama disimpan");
//     console.log(JSON.parse(localStorage.getItem("username")));
    
//   } catch(error) {
//     console.log(error.message);
//     localStorage.setItem("error_name", error.message)
//   }
// }
// saveName("Rayhan")
//  soal 8 ======================================================================
// async function getExpensive() {
//   const res = await fetch("https://dummyjson.com/products");
//   const { products } = await res.json();
//   const expensive = products.filter(p => p.price > 300);
// expensive.sort((a, b) => b.price - a.price);
// localStorage.setItem("Produk",JSON.stringify(expensive))
// console.log("Produk mahal sudah disimpan ke localStorage");
//   console.table(expensive);
// }
// getExpensive()  
// soal 9 ======================================================================
// async function createUser() {
//   try {
//     const res = await fetch("https://dummyjson.com/users/add", {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify({ name: "Santri", age: 20,skils: "Programer" })
//     });
//     const data = await res.json()
//     localStorage.setItem("Data_Api", JSON.stringify (data))
//     let hasil = JSON.parse(localStorage.getItem("Data_Api"))
//     console.log(hasil);
//   } catch(error) {
//     console.log("Gagal:", error);
//   }
// }
// createUser()
// soal 10 ======================================================================
// async function updateUser(nama) {
//     try{
//         if(!nama || nama.trim() === ""){
//             console.log("Nama Tidak Boleh Kosong");
//         }
//   const res = await fetch("https://dummyjson.com/users/1", {
//     method: "PUT",
//     body: JSON.stringify({ name: nama })
// });
// const databaru = await res.json()
// localStorage.setItem("Updated_User", JSON.stringify(databaru))
// let hasil = JSON.parse(localStorage.getItem("Updated_User"))
// console.log("Data Tersimpan");
// console.table(hasil)
// }
// catch{
//     console.log("Error:", error.message);
// }
// }
// updateUser("Rayhan")
// soal 11 ======================================================================
// async function deleteUser() {
//     try{
//   const res = await fetch("https://dummyjson.com/users/1", { method: "DELETE" });
//   const data =await res.json()
//   localStorage.setItem("Data_baru", data)
//   alert("Penghapusan data berhasil")
  
//     }
//     catch{
//         alert("data gagal di hapus")
//     }
// }
// deleteUser()
// soal 12 ======================================================================
// async function transformProducts() {
//   const res = await fetch("https://dummyjson.com/products");
//   const { products } = await res.json();
//   const validasi = products.filter((v)=>{
//     return v.rating > 4.5
//   })
// //   console.log(validasi)
//   localStorage.setItem("Rating", JSON.stringify(validasi))
//   const hasil =JSON.parse(localStorage.getItem("Rating"))
//   console.log(hasil);
//   const names = products.map(p => p.title.toUpperCase());
//   localStorage.setItem("product_names", JSON.stringify(names));
// }
// transformProducts()
// soal 13 ======================================================================
async function analyzeProducts() {
  const res = await fetch("https://dummyjson.com/products");
  let { products } = await res.json();

  const expensive = products
    .filter(p => p.price > 100)
    .map(p => p.price)
    .reduce((a, b) => a + b);
  
  console.log(expensive);
}
