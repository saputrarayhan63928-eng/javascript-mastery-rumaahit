const registeredEmails = ['test@example.com', 'user@example.com'];
const form = document.getElementById('myForm');
form.addEventListener('submit', function(event) {
    const email = document.getElementById("emailInput").value;
    if (email === "ujang@gmail.com") {
        alert('Email sudah terdaftar!');
        event.preventDefault();
    }else{
        alert("Email belum terdaftar")
    }
});