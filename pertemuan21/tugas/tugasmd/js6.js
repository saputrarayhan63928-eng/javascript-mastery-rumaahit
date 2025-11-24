const form = document.getElementById('myForm');
form.addEventListener('submit', function(event) {
    const syaratketentuan = document.getElementById("syarat").checked;
    if (!syaratketentuan) {
        alert('Anda harus menyetujui syarat dan ketentuan!');
        event.preventDefault();
    } else {
        alert("Data berhasil di ambil")
    }
});