const form = document.getElementById('myForm');
form.addEventListener('submit', function(event) {
    const experience = document.getElementById("nama").value;
    if (isNaN(experience)) {
        alert('Input lama kerja harus berupa angka!');
        event.preventDefault();
    } else {
        alert("data berhasil di simpan")
    }
});