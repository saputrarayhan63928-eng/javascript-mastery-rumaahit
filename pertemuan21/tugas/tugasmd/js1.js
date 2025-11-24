const form = document.getElementById('myForm');
form.addEventListener('submit', function(event) {
    const input = document.getElementById('textInput').value;
    if (!input) {
        alert('Input tidak boleh kosong!');
        event.preventDefault();
    } else{
        alert('Data berhasil di ambil')
    }
});