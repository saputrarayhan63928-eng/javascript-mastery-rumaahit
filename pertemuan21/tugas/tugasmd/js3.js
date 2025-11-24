const form = document.getElementById('myForm');
form.addEventListener('submit', function(event) {
    const phone = document.getElementById('phoneInput').value;
    event.preventDefault();
    if (isNaN(phone)) {
        alert('Nomor telepon hanya boleh terdiri dari angka!');
    } else if(number.length < 10){  
        alert("Nomor harus minimal 10 angka")
    } 
     else{
        alert("data berhasil di ambil")
    }
});