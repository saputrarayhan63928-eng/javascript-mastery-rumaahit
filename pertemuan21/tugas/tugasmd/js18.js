const form = document.getElementById('myForm');
form.addEventListener('submit', function(event) {
    const dateInput = document.getElementById("dateInput").value;
    const datePattern = /^\d{2}\/\d{2}\/\d{4}$/;
    if (datePattern.test(dateInput)) {
        alert('Masukkan tanggal dalam format dd/mm/yyyy!');
        event.preventDefault();
    }else {
        alert("data berhasil di simpan")
    }
});