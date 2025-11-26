
const displayuser= document.getElementById("User")
const inputtugas = document.getElementById("taskinput")
const inputbtn = document.getElementById("inputbtn")
const displaytugas = document.querySelector("#display ul");
const displayhd = document.getElementById("displayheader")


inputbtn.addEventListener('click', function(e){
    let ambil = inputtugas.value.trim()
    if(!ambil){
        alert("Isi Inputan Tersebut")
        return
    }
    let isi = ""
    isi +=  `<li>`
    isi +=  `${ambil}<br>`
    isi += `<button class="delete-btn">🗑️</button>`
    isi += `<button class="edit-btn">📝</button>`
    isi += `<button iclass="done-btn">✅</button>`
    isi += `</li>`
    displaytugas.innerHTML += isi
    e.preventDefault()
})
const del = document.getElementsByClassName("delete-btn")
displaytugas.addEventListener('click', function(e) {
    if (e.target.classList.contains('delete-btn')) {
        e.target.closest('li').remove()
    }
})
const sel = document.getElementsByClassName("done-btn")
displaytugas.addEventListener('click' ,function(e){
    if(e.target.id === "selesai"){
      const li = e.target.parentElement
      li.classList.toggle("done")   
    }
})
 
