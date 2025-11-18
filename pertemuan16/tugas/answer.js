// // soal 1 ===============================================================
// function loadUserProfile(username) {
//   console.log("⏳ Status: PENDING... mengambil data user...");

//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       if (!username) {
//         reject("Username tidak boleh kosong!");
//       } else {
//         console.log("Mengamati Data");
//         resolve({
//           username,
//           name: "Santri Programmer",
//           level: "Beginner",
//         });
//       }
//     }, 2000);
//   });
// }

// loadUserProfile("ghifari")
//   .then((user) => {
//     console.log("✅ Status: SUCCESS");
//     console.log("Data user:", user);
//     localStorage.setItem("lastUser", JSON.stringify(user)); //alasannnya gk bisa di node.js tapi bisa di browser
//   })
//   .catch((err) => {
//     console.log("❌ Status: REJECT");
//     console.error("Error:", err);
//   });
// //   soal 2 ===============================================================
// function checkConnection() {
//   console.log("🔍 Mengecek koneksi... (PENDING)");

//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       const isOnline = Math.random() > 0.3; // 70% online
//       if (isOnline) {
//         resolve("Koneksi stabil. ✅");
//       } else {
//         reject("Tidak ada koneksi internet. ❌");
//       }
//     }, 1000);
//   });
// }

// checkConnection()
//   .then((message) => {
//     console.log("SUCCESS:", message);
//     localStorage.setItem("connection_status", "Online"); //alasannnya gk bisa di node.js tapi bisa di browser
//   })
//   .catch((error) => {
//     console.log("REJECT:", error);
//     localStorage.setItem("connection_status", "Offline"); //alasannnya gk bisa di node.js tapi bisa di browser
//   });

// function getLastConnectionStatus() {
//   return new Promise(function (resolve) {
//     setTimeout(() => {
//       let Statusakhir = localStorage.getItem("connection_status"); //alasannnya gk bisa di node.js tapi bisa di browser
//       resolve(Statusakhir);
//     }, 3000);
//   });
// }
// getLastConnectionStatus().then((result) => {
//   console.log(`Status Akhir : "${result}""`);
// });
// //   soal 3 ===============================================================
// function getSettings() {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve({
//         theme: "dark",
//         language: "id",
//         notifications: true,
//       });
//     }, 500);
//   });
// }

// getSettings()
//   .then((settings) => {
//     console.log("Object settings:", settings);
//     return JSON.stringify(settings);
//   })
//   .then((settingsJSON) => {
//     console.log("Settings dalam JSON:", settingsJSON);
//     localStorage.setItem("app_settings", settingsJSON);
//   });

// function loadSettingsFromLocal(storage) {
//   return new Promise(function (resolve, reject) {
//     setTimeout(() => {
//       if (!storage) {
//         reject("Data Setting Tidak Ditemukan");
//       } else {
//         console.log("Data di temukan");

//         resolve(storage);
//       }
//     }, 1500);
//   });
// }
// loadSettingsFromLocal(localStorage.getItem("app_settings")).then((result) => {
//   let setting = JSON.parse(result);
//   console.log(setting);
// });
//  Soal 4 ===============================================================
// let status123 = true
// function simulateLogin(isSuccess){
//     if(isSuccess === true){
//         const successPromise = Promise.resolve({ status: "ok", token: "ABC123" })
//         successPromise.then((msg) => {
//             console.log("SUCCESS:", msg)
//             localStorage.setItem("TokenKey", JSON.stringify(msg.token))
//     });
//     } else{
//         const failPromise = Promise.reject("Login gagal!")
//         failPromise.catch((err) => console.log("REJECT:", err));
//     }
// }
// simulateLogin(status123)
//  soal 5  ===============================================================
// function delay(ms) {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve(`Delay ${ms} ms selesai`);
//     }, ms);
//   });
// }

// let steps = [];

// delay(1000)
//   .then(() => {
//     console.log("Step 1 selesai");
//     steps.push("Step 1 selesai");
//     return delay(2000);
//   })
//   .then(() => {
//     console.log("Step 2 selesai");
//     steps.push("Step 2 selesai");
//     return delay(500);
//   })
//   .then(() => {
//     console.log("Step 3 selesai");
//     steps.push("Step 3 selesai");

//     localStorage.setItem("steps", JSON.stringify(steps));

//     console.log("Semua step sudah disimpan:", steps);
//   })
//   .catch((err) => {
//     console.error("Error:", err);
//   });
//  Soal 6 ===============================================================
// function loadCart() {
//   return new Promise((resolve) => {
//     const cart = [
//       { name: "Keyboard", price: 150000 },
//       { name: "Mouse", price: 50000 },
//     ];
//     setTimeout(() => resolve(cart), 800);
//   });
// }

// loadCart()
//   .then((cart) => {
//     console.log("Cart:", cart);
//     localStorage.setItem("cart_data",JSON.stringify(cart))
//     return loadCartFromLocal()
//   })
//   .then((hasil) => {
//     console.log("Total harga:", hasil);
//   });

//   function loadCartFromLocal(){
//     let cart = JSON.parse(localStorage.getItem("cart_data"))
//        let total = 0;
//          cart.forEach((item) => (total += item.price));
//          return total;
//   }
//    Soal 7 ===============================================================
// function saveUsername(username) {
//   return new Promise((resolve, reject) => {
//     if (!username || username.length < 3) {
//       reject("Username minimal 3 karakter!");
//     } else {
//       localStorage.setItem("username", username);
//       console.log(`Username "${username}" berhasil disimpan.`);
//       resolve(username);
//     }
//   });
// }
// function loadUserProfile(username) {
//   console.log("⏳ Status: PENDING... mengambil data user...");

//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       if (!username) {
//         reject("Username tidak boleh kosong!");
//       } else {
//         console.log("Mengamati Data");
//         resolve({
//           username,
//           name: "Santri Programmer",
//           level: "Beginner",
//         });
//       }
//     }, 2000);
//   });
// }

// saveUsername("Rayhan")
//   .then((msg) => {
//     console.log("SUCCESS:", msg)
//     return loadUserProfile(msg)
// })
// .then((data)=>{
//     console.log(data);
// })
//   .catch((err) =>{
//     localStorage.setItem("last_error", err) 
//     console.error("REJECT:", err)});
// soal 8  ===============================================================
// function logActivity(activity) {
//   return new Promise((resolve, reject) => {
//     if (!activity || activity.trim() === "") {
//       reject("Gagal menyimpan aktivitas: activity kosong!");
//       return;
//     }
//     setTimeout(() => {
//       const now = new Date().toISOString();
//       const logItem = { activity, time: now };
//       const existing = JSON.parse(localStorage.getItem("activity_logs") || "[]");
//       existing.push(logItem);
//       localStorage.setItem("activity_logs", JSON.stringify(existing));
//       resolve(logItem);
//     }, 500);
//   });
// }
// function getAllLogs() {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       const logs = JSON.parse(localStorage.getItem("activity_logs") || "[]");
//       resolve(logs);
//     }, 400);
//   });
// }
// logActivity("User membuka dashboard")
//   .then((logItem) => {
//     console.log("Aktivitas tercatat:", logItem);
//     return getAllLogs();     
//   })
//   .then((allLogs) => {
//     console.log("Semua log aktivitas:");
//     console.table(allLogs);
//   })
//   .catch((error) => {
//     console.error("ERROR:", error);
//   });
// Soal 9  ===============================================================
// import { fetchUser, fetchUserCourses } from "./api.js";
// fetchUser(1)
//   .then((user) => {
//     console.log("User berhasil di-load:", user);
//     return fetchUserCourses(user.id);   
//   })
//   .then((courses) => {
//     console.log("Courses:", courses);
//     localStorage.setItem("user_courses", JSON.stringify(courses));
//   })
//   .catch((err) => console.error("Terjadi error:", err));
//   soal 10 ===============================================================
