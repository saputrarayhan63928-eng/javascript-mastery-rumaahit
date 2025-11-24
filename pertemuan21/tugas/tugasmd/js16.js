const form = document.getElementById('myForm');
form.addEventListener('submit', function(event) {
    const checkboxes = document.querySelectorAll('input[type="checkbox"]');
    const checked =  Array.from(checkboxes).some(cb => cb.checked);
    if (!checked) {
        alert('Silakan pilih setidaknya satu opsi!');
        event.preventDefault();
    }else {
        alert("data berhasil di simpan")
    }
});