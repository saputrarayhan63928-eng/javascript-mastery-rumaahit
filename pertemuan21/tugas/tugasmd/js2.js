const form = document.getElementById('myForm');
form.addEventListener('submit', function(event) {
    const email = document.getElementById('emailInput').value;
    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    event.preventDefault();
    if (!email) {
        alert('Masukkan email yang valid!');
    }
     else if(!email.includes("gmail")){
        alert("email harus ada gmail")
  
    } else{
        alert("berhasil di ambil datanya")
    }

});