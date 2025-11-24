    const form = document.getElementById('myForm');
form.addEventListener('submit', function(event) {
    const number = Number(document.getElementById('phoneInput').value);
    event.preventDefault();
    if (String(number).length > 100) {
        alert('Angka harus berada dalam rentang 1-100!');
    } else if(!number){
        alert("Angka harus berada dalam rentang 1-100!")
        event.preventDefault();
    } else [
        alert("Data telah di ambil")
    ]
    console.log(String(number).length);
    
});