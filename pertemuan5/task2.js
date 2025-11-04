function harga1(saldo1 = ``) {
    return function (saldo2 = ``) {
        result = Number(saldo1) + Number(saldo2)
        console.log(`Catatan pengeluaran ${saldo1} + ${saldo2} . Total ${result} `)
        return
    }
}

harga1("10000")("5000")