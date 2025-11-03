

/*
- [document.getElementById("")] ini kegunaannya untuk mengambil sebuha elemnet dari html yg memiliki id yg sama
- [addEventListener("sumbit", function)] ini kegunaanya adala untuk ketika di sumbit akan memberi reaksi kpd form untuk 
     menjalankan suatu function 
- [e.preventDefault()] itu gunanya adalah  untuk menghetikan devault dari  event sumbit agar kita bisa mengelolah data
    yg di hasilkan dari form untuk mengubahnya di javascript
- [.value] untuk menyimpan data dari form ke suatu variable
- [innerText] di gunakan untuk mengisi teks di dalam html
- [+=] di gunakan untuk menambahkan teks baru tanpa menghapus teks lama 
*/


// Default Notification
function togglePopup(no) {
    document.getElementById(`popupModal${no}`).classList.toggle("hidden");
}

function clearOutput() {
    document.getElementById("outputBox").innerText = "";
}

function addNewPharaghraph() {
    const random = `\n======================\n`;
    const output = document.getElementById("outputBox");
    output.innerText += `${random}`;
}

function f2() {
    console.log('Test');
    togglePopup("2")
}

let dataSantri = [
    "bambang",
    "Muads",
    "Ijul",
    "dodi",
    "euis",
    "febri",
    "gusti",
    "hani",
    "indri",
    "joko",
    "karti",
    "lala",
    "mama",
    "nana",
    "ocha",
    "pipi",
    "qori",
    "rani",
    "siti",
    "tata",
    "uusi",
    "vivi",
    "wati",
    "xeni",
    "yuni",
    "zaki",
]
let dataSantri2 = [
    'Data1', "Data2", 'Data3', 'Data4', 'Data5']

// LOOPING 
// function f3(data) {
//     for (start = 0; start < data.length; start++) {
//         if (start % 2 != 0) {
//             console.log(`${start + 1} Genap >>> ${data[start]}`);
//             // console.log((start + 1) + " Genap >>>" + data[start]);
//         } else {
//             console.log(`${start + 1} Ganjil >>> ${data[start]}`);
//         }
//     }
// }

// f3(dataSantri2)
// console.log(`\n ========== \n`);
// f3(dataSantri)

// FORM F2
document.getElementById("F2").addEventListener("submit", function (e) {
    e.preventDefault();
    f4(document.getElementById("nama").value, document.getElementById("alamat").value)
    togglePopup("2")
});

// function f4(nama = "Empty Name", alamat = "Empty Alamat") {
//     togglePopup("2")
//     const output = document.getElementById("outputBox");
//     output.innerText += `Halo, ${nama}! Asala kamu di ${alamat} ya?.`;
// }

function logggingNama(nama, alamat,rek) {
    let result = `Nama Kamu ${nama} \n Alamat kamu di ${alamat} \n Rek kamu ${rek}`;
    // return "Ini Hasil Return"
    return result
}

console.log(logggingNama("Bambang", "jakarta","09876654321"));


// =========================================================================================

// FORM F1
// function 1
document.getElementById("F1").addEventListener("submit", function (e) {
    e.preventDefault();
    const name = document.getElementById("nameInput").value;
    const age = document.getElementById("ageInput").value;
    const output = document.getElementById("outputBox");
    output.innerText += `Halo, ${name}! Umur kamu ${age} tahun. \n`;

    togglePopup("1")

});

// form 2
// function  2
document.getElementById("F2").addEventListener("submit", function (e) {
    e.preventDefault();
    const nomor1 = document.getElementById("mulai").value;
    const nomor2 = document.getElementById("selesai").value;
    perulangan(nomor1,nomor2)

});
// funcrion 3
function perulangan(nomor1,nomor2){
    let mulai =Number(nomor1)
    let selesai =Number(nomor2)
    for(;mulai <= selesai; mulai++){
           const output = document.getElementById("outputBox");
    output.innerText += `Ini adalah perulangan ke ${mulai}. \n`;
    } 
    togglePopup("2")
} 

//  form 3
// function 4
document.getElementById("F3").addEventListener("submit", function (e) {
    e.preventDefault();
    togglePopup("3")
    const firstNumber = document.getElementById("firstNumber").value;
    const secondNumber = document.getElementById("secondNumber").value;
    const operator = document.getElementById("operator").value;

    if (!firstNumber || !secondNumber || !operator) {
        alert("Masukan Angka / Opeator");
    } else {
        F3(firstNumber, secondNumber, operator)
    }

});

// Kalkulatornya
// function 5
function F3(angkaPertama, angkaKedua, operator) {
    togglePopup("3");
    let result;
    const a = Number(angkaPertama);
    const b = Number(angkaKedua);

    if (isNaN(a) || isNaN(b) && !a || !b) {
        console.log("Input harus berupa angka");
        return;
    }

    switch (operator) {
        case "*":
            result = a * b;
            break;
        case "+":
            result = a + b;
            break;
        case "-":
          result = a - b
          break;
        case "/":
            result = a / b;
            break;
        default:
            console.log("Operator tidak valid");
            return;
    }

    const output = document.getElementById("outputBox");
    output.innerText += `F3: Hasil dari ${angkaPertama} ${operator} ${angkaKedua} = ${result}`;
    togglePopup("3");
    return result;
}

// FORM 4
// function 6
document.getElementById("F4").addEventListener("submit", function (e) {
  e.preventDefault();
  const nick = document.getElementById("Nick").value;
  const role = document.getElementById("Role").value;
  F4(nick, role); // kirim 2 data
});
// function 7
function F4(nick, role) {
  let result;

  switch (role) {
    case "4":
      result = "Mid Lane → Kamu harus menggunakan hero Mage";
      break;
    case "1":
      result = "Exp Lane → Kamu harus menggunakan hero Fighter";
      break;
    case "2":
      result = "Roam → Kamu harus menggunakan hero Tank atau Support";
      break;
    case "3":
      result = "Gold Lane → Kamu harus menggunakan hero Marksman";
      break;
    case "5":
      result = "Hyper → Kamu harus menggunakan hero Assassin atau Fighter";
      break;
    default:
      alert("Role tidak sesuai! Pastikan penulisan sesuai pilihan yang tersedia.");
      return;
  }

  const output = document.getElementById("outputBox");
  output.innerText += `\nF4: Halo Player ${nick}, jika kamu memilih ${result}.`;
  togglePopup("4");
  return result;
}


// function 8
function pengembalian (a1,b1){
    return a1 * b1
}
let f8 = pengembalian(10,20)
let tambah = f8 + 20
console.log(`Pertambahan singkat :  ${f8} + 20 hasil = ${tambah} `)

// function 9
const pengurangan1 = (n1 , n2) => n1 - n2 ;
console.log(pengurangan1(10,20));

// function 10
const exspresi = function perkenalan(Nama,asal){
    return (`Halo Saya ${Nama} , Asal ${asal} , Nice To Meet You `)
}
console.log(exspresi("M Rayhan", "Kalimantan"));
