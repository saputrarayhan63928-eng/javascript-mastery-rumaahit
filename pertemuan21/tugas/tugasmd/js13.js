const form = document.getElementById('myForm');
form.addEventListener('submit', function(event) {
    const course = document.getElementById('nama').value;
    if (/\d/.test(course)) {
        alert('Nama kursus tidak boleh mengandung angka!');
        event.preventDefault();
    } else{
        alert("data berhasil di ambil")
    }
});