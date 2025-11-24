const inputnama = document.getElementById("nama")
const inputemail = document.getElementById('email')
const inputpasword = document.getElementById("password")
const btn  = document.getElementById("inputtrigert")
const from = document.getElementById("input")
const msgnama = document.getElementById("msg-nama")


from.addEventListener('submit',function(e){
    e.preventDefault()
    let nama =inputnama.value.trim()
    let email = inputemail.value.trim()
    let pw = inputpasword.value.trim()
    if(!nama || !email || !pw){
        msgnama.style.color = "red"
        msgnama.textContent = 'Data Wajib di isi'
    } else if(!email.includes('@')){
        msgnama.style.color = "red"
        msgnama.textContent = 'email harus berisi "@" '
    } 
    else{
        msgnama.style.color = "green"
        msgnama.textContent = "Data Berhasil di ambil"
        console.log(nama)
    }
    
})