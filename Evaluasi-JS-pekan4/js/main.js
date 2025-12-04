   const btnCash = document.getElementById("btnCash");
    const btnTf = document.getElementById("btnTransfer");


   let barangproduktotal = []

    
    // fungsi untuk reset active
    function clearActive() {
        btnCash.classList.remove("active");
        btnTf.classList.remove("active");
    }
    
    btnCash.addEventListener("click", () => {
        clearActive();
        btnCash.classList.add("active");
    });
    
    btnTf.addEventListener("click", () => {
        clearActive();
        btnTf.classList.add("active");
    });
    
    // validasi level user
    const msgheader = document.getElementById("inputnamakasir")
    const inputlevelakses = document.getElementById("namabtn")
    const btnlevelakses = document.getElementById("inputnamabtn")
    
    btnlevelakses.addEventListener('click', function(e){
        let dataakses =inputlevelakses.value.trim()
        if (!dataakses) {
            alert("Level Akses Wajib di isi")
        } else if(dataakses === "admin"){
            msgheader.textContent = "Selamat Datang Admin"
            return dataakses
        } else if(dataakses === "kasir"){
            msgheader.textContent = "Selamat Datang Kasir"
            return dataakses
        } else{
            alert("akses tidak di kenali")
        }
    })
    
    //   isi Produk barang
    const displayproduk = document.getElementById("databarang")
    async function getapi() {
        try{
            let response = await fetch("https://dummyjson.com/products")
            let ambildata = await response.json()
            return ambildata
        }
        catch{
            alert("Produk Gagal di muat")
        }
    }
    const dataproduk = []
    getapi().then(databarang =>{
        let isibarang = databarang.products
        let conversiharga = isibarang.map((v) =>{
            return{
                id:v.id,
                nama:v.title,
                price:v.price * 16000,
                rate:v.rating
            }
        })
        for(let i = 0; i < conversiharga.length; i++){
            dataproduk.unshift(conversiharga[i])
        }
        tampilkanProduk(conversiharga)
        
        console.log(conversiharga[2].id)
        return conversiharga
    })

function tampilkanProduk(barang){
    let isi = "";
    for(let c = 0; c < barang.length; c++){
        isi += `<div>`;
        isi += `<h4>nama: ${barang[c].nama}</h4>`;
        isi += `<p>harga: ${formatRupiah(barang[c].price)}</p>`;
        isi += `<p>rate: ${barang[c].rate} ⭐</p>`;
        isi += `<button class="a"> - </button>`;
        isi += `<button onclick="tambahKeranjang('${barang[c].id}')" class="a"> + </button>`;
        isi += `</div>`;

        barangproduktotal.push(barang[c])
    }
    displayproduk.innerHTML = isi;
}

// mengubah harga ke dolar ke rupiah
function usdToIdr(usd, rate = 16000) {
    return new Intl.NumberFormat("id-ID", {
        style: "currency",
        currency: "IDR",
        minimumFractionDigits: 0
    }).format(usd * rate);
}

// add produk
function togglePopup(no) {
    document.getElementById(`popupModal${no}`).classList.toggle("hidden");
}

function formatRupiah(angka) {
    return angka.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
}

const idinput = document.getElementById("productId")
const namainput = document.getElementById("productName")
const hargainput = document.getElementById("productPrice")
const stockinput = document.getElementById("stockinput")
const ratinginput = document.getElementById("ratinginput")
const btninputbarang = document.getElementById("btnSubmitProduct")


btninputbarang.addEventListener('click',function(e){
    const id = idinput.value.trim();
    const nama = namainput.value.trim();
    const harga = parseInt(hargainput.value, 10);
    const stock = parseInt(stockinput.value, 10);
    const rating = parseInt(ratinginput.value, 10);
    
    if (!id || !nama || isNaN(harga) || harga <= 0 || !stock || !rating) {
        alert("ID, nama, harga, stock dan rating produk harus diisi dengan benar.");
        return;
    }
    
    dataproduk.unshift({ id:id, nama:nama, price:harga,stock:stock,rate:rating });
    tampilkanProduk(dataproduk);
    togglePopup('1');
    
    // Kosongkan input setelah menambahkan produk
    idinput.value = "";
    namainput.value = "";
    hargainput.value = "";
    stockinput.value = "";
    ratinginput.value = "";
    console.log(dataproduk);
})

// total harga produk
