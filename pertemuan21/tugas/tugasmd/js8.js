const form = document.getElementById('myForm');
form.addEventListener('submit', function(event) {
    const dropdown = document.getElementById('dropdownInput').value;
    if (dropdown === "") {
        alert('Silakan pilih opsi yang valid!');
        event.preventDefault();
    } else {
        alert("Data telah di ambil")
    }
});