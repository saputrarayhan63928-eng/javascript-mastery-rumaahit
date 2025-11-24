const form = document.getElementById('myForm');
form.addEventListener('submit', function(event) {
    const url = document.getElementById('urlInput').value;
    if (!/^https?:\/\/[^\s]+$/.test(url)) {
        alert('Masukkan URL yang valid!');
        event.preventDefault();
    } else {
        alert("data berhasil di ambil")
    }
});