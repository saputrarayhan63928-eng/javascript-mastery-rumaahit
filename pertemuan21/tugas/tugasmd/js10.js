const form = document.getElementById('myForm');
form.addEventListener('submit', function(event) {
    const input = document.getElementById('nama').value;
    if (input.length > 100) {
        alert('Input tidak boleh lebih dari 100 karakter!');
        event.preventDefault();
    }
    console.log(input.length)
}); 