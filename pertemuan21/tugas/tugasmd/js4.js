const form = document.getElementById('myForm');
form.addEventListener('submit', function(event) {
    const password = document.getElementById('passwordInput').value;
    if (password.length < 8) {
        alert('Password harus terdiri dari minimal 8 karakter!');
        event.preventDefault();
    }
});