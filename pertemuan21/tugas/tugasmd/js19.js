const form = document.getElementById('myForm');
form.addEventListener('submit', function(event) {
    const input1 = document.getElementById("nama").value;
    const input2 = document.getElementById("passwordInput").value;
    if (input1 === input2) {
        alert('Kedua input tidak boleh sama!');
        event.preventDefault();
    }else{
        alert("data berhasil di ambil")
    }
});