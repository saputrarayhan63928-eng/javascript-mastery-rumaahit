const form = document.getElementById('myForm');
form.addEventListener('submit', function(event) {
    const birthDate = new Date(document.getElementById("dateInput").value);
    const today = new Date();
    if (birthDate > today) {
        alert('Tanggal lahir tidak boleh di masa depan!');
        event.preventDefault();
    }else {
        alert("data berhasil di simpan")
    }
});