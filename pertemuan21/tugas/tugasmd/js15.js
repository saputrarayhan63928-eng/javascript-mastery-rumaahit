const form = document.getElementById('myForm');
form.addEventListener('submit', function(event) {
    const fullName = document.getElementById('nama').value;
    if (/\d/.test(fullName)) {
        alert('Nama lengkap tidak boleh mengandung angka!');
        event.preventDefault();
    }else {
        alert("data berhasil di simpan")
    }
});