function login(){
    return new Promise(function(resolve){
        setTimeout(() =>{
        resolve({user:"matsa",pw:"1234"})
    },2000)
})
}
function data (){
    return new Promise((resolve) =>{
        setTimeout(()=>{
        resolve({nama:"Rayhan",tinggal:"Kalimantan"})
    },2000)
})
}
async function mengambil() {
    const datalogin = await login()
    const datauser = await data()
    const hasil = [datalogin,datauser]
    return hasil
}
// mengambil()
// .then((result) =>{
//     console.log(result);
    
// })

login()
.then((a)=>{
    return data().then((b)=>{
        return {a,b}
    })
})
.then((result)=>{
    console.log(result);
  
})

function getUser(...datas){
    return new Promise((suc,er)=>{
       setTimeout(()=>{
          if(datas.length < 3){
            er("Data kurang dari 3 tuh")
        }else {
            suc(`Ok data di terima: ${datas}`)
        }
       },2000)
    })
}

async function showuser() {
    const user = await getUser("1","2","3","4","5")
    console.log(`User: ${user}`);
}

// showuser()
async function getSemuaSurat() {
    try {
        const response = await fetch("https://api.myquran.com/v2/quran/surat/semua")
        const SemuaSurat = await response.json()
        document.getElementById('id1').innerHTML = `<h1>Audio URL: ${SemuaSurat.data[0].audio_url}</h1>`
        return SemuaSurat.data[0].audio_url
    } catch (e) {
        document.getElementById('id1').innerHTML = `<p>Ini Custom Info dari Hasil Error: ${e.message}</p>`
    }
}

// call the function so the result appears in the HTML page
getSemuaSurat()