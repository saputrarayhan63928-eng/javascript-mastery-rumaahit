function jumlahGenap(arr) {
  let total = 0; // penampung jumlah

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      total += arr[i]; // tambahkan kalau genap
    }
  }

  return total;
}

// Contoh uji
console.log(jumlahGenap([1, 2, 3, 4, 6])); // expected: 12
