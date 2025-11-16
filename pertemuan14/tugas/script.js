    let defaultProducts = [
      { id: 1, nama: "Laptop", harga: 7000000 },
      { id: 2, nama: "Mouse", harga: 120000 },
      { id: 3, nama: "Keyboard", harga: 250000 }
    ];

      localStorage.setItem("produk", JSON.stringify(defaultProducts));
    
    let dataProduk = JSON.parse(localStorage.getItem("produk"));

    const list = document.getElementById("productList");

    dataProduk.forEach(item => {
      const div = document.createElement("div");
      div.className = "product";
      div.innerHTML = `
        <strong>${item.nama}</strong><br>
        Harga: Rp ${item.harga.toLocaleString()}
      `;
      list.appendChild(div);
    });