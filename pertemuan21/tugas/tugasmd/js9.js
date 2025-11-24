const form = document.getElementById('myForm');
form.addEventListener('submit', function(event) {
    const dateInput = new Date(document.getElementById('dateInput').value);
    const today = new Date();
    if (dateInput < today) {
        alert('Tanggal tidak boleh di masa lalu!');
        event.preventDefault();
    } else if (dateInput > today){
        alert("Tanggal tidak boleh di masa depan")
    } else{
        alert("Data di terima")
    }
    console.log(`tanggal sekarang${today}`)
});