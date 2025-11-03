

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
    const name = document.getElementById("nameInput").value;
    const lahir = document.getElementById("lahirinput").value;
    const output = document.getElementById("outputBox");
    output.innerText += `Halo, ${name}! Kamu lahir  di ${lahir}. udah tua aja kamu ya. \n`;

    togglePopup("2")

});

//  form 3
// function 3
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
// function 4
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

