const form = document.getElementById('myForm');
form.addEventListener('submit', function(event) {
    const input = document.getElementById("nama").value;
    if (input !== input.trim()) {
        alert('Input tidak boleh mengandung spasi di awal atau akhir!');
        event.preventDefault();
    }else{
        alert("data berhasil di ambil")
    }
});