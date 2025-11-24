const form = document.getElementById('myForm');
form.addEventListener('submit', function(event) {
    const input = document.getElementById('nama').value;
     const valid = /^[A-Za-z0-9]+$/.test(input);
    if (!valid) {
        alert('Input tidak boleh mengandung karakter khusus!');
        event.preventDefault();
    } else {
        alert("data telah di ambil")
    }
});