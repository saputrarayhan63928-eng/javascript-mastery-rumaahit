const inputnama = document.getElementById("nama")
const inputemail = document.getElementById('email')
const inputno = document.getElementById("number")
const btn  = document.getElementById("inputtrigert")
const from = document.getElementById("input")
const msgnama = document.getElementById("msg-nama")
const msgbox = document.getElementById("msg")


from.addEventListener('submit',function(e){
    e.preventDefault()
    let nama =inputnama.value.trim()
    let email = inputemail.value.trim()
    let number = inputno.value.trim()
    if(!email || !nama || !number){
        msgnama.style.color = "red"
        msgnama.textContent = 'Data wajib di isi'
    } else if(number.length < 10){
        msgnama.style.color = "red"
        msgnama.textContent = 'Pasword minimal 8 huruf'
    } 
    else{
        msgnama.style.color = "green"
        msgnama.textContent = "Data Berhasil di ambil"
        console.log(nama,email,pw,ms)
    }
    
})