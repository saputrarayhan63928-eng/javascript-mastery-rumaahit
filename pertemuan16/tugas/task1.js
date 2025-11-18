//  user name
function user() {
  return new Promise(function (resolve, reject) {
    setTimeout(() => {
      let user = true;
      if (user) {
        resolve("User dikenali");
      } else {
        reject("User tidak di kenal");
      }
    }, 1000);
  });
}
function pasword() {
  return new Promise(function (resolve, reject) {
    setTimeout(() => {
      let pasword = true;
      if (pasword) {
        resolve("Pasword Benar");
      } else {
        reject("Pasword Salah");
      }
    }, 2500);
  });
}
//  pemanggilan
user()
  .then((result) => {
    console.log(`Pengecekan data : ${result}`);
    return pasword();
  })
  .then((result) => {
    console.log(`Pengecekan data Selanjutnya : ${result} `);
  })
  .then(() => {
    console.log("Login Berhasil");
  })
  .then(() => {
    console.log("Selamat Datang");
  })
  .catch((result) => {
    console.log("Logiun Gagal Kesalahan :  " + result);
  });
