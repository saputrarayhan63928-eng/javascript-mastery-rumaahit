const form = document.getElementById('myForm');
form.addEventListener('submit', function(event) {
    const password = document.getElementById('passwordInput').value;
    const confirmPassword = document.getElementById('confirmPasswordInput').value;
    if (password !== confirmPassword) {
        event.preventDefault(); 
        alert('Password dan konfirmasi password tidak cocok!');
    } else {
        alert('Data berhasil diambil');
    }
});