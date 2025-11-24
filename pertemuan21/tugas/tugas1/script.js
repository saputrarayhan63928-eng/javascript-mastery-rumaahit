const inputnama = document.getElementById("nama")
const inputemail = document.getElementById('email')
const inputpasword = document.getElementById("password")
const btn  = document.getElementById("inputtrigert")
const from = document.getElementById("input")
const msgnama = document.getElementById("msg-nama")
const msgbox = document.getElementById("msg")


from.addEventListener('submit',function(e){
    e.preventDefault()
    let nama =inputnama.value.trim()
    let email = inputemail.value.trim()
    let pw = inputpasword.value.trim()
    let ms = msgbox.value.trim()
    if(!email || !nama || !pw || !ms){
        msgnama.style.color = "red"
        msgnama.textContent = 'Data wajib di isi'
    } else if(pw.length < 8){
        msgnama.style.color = "red"
        msgnama.textContent = 'Pasword minimal 8 huruf'
    } 
    else{
        msgnama.style.color = "green"
        msgnama.textContent = "Data Berhasil di ambil"
        console.log(nama,email,pw,ms)
    }
    
})