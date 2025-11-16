let datauser = {
    nama: "Rayhan",
    umur: 17,
    alamat: "Kalimantan"
}

// let jsondata = JSON.stringify(datauser)

// localStorage.setItem("datajson", JSON.stringify(datauser))

fetch("https://jsonplaceholder.typicode.com/users")
  .then(ambildata => ambildata.json())
  .then(data => {
    console.log(data); // tampilkan quote
  });


