
/* output
{ belanja: { Bantal: '4' }, point: 200, kembalian: 0 }
{ belanja: { Kompor: '1' }, point: 100, kembalian: 0 }
{ belanja: { Kompor: '1', Bantal: '6' }, point: 400, kembalian: 500 }
{ belanja: {}, point: 0, kembalian: 0 }
*/

function belanja(modal){
    let result = {
        belanja: {},
        point: 0,
        kembalian: modal
    };
    let products = [
        {nama_barang: "Kompor", harga: 1000000, poin: 100},
        {nama_barang: "Daging Sapi", harga: 300000, poin: 95},
        {nama_barang: "Bantal", harga: 25000, poin: 50},
        {nama_barang: "Shampoo", harga: 20000, poin: 40},
        {nama_barang: "Sabun", harga: 10000, poin: 20},
    ];
    for (let i = 0; i<products.length; i++){
        if (result.kembalian >= products[i].harga){
            if (!result.belanja[products[i].nama_barang]){
                result.belanja[products[i].nama_barang] = 0;
            }
            let qtyBeli = (result.kembalian / products[i].harga).toFixed(0);
            result.belanja[products[i].nama_barang] = qtyBeli;

            result.kembalian -= qtyBeli * products[i].harga;
            result.point += qtyBeli * products[i].poin;
        }
    }
    return result;
}

console.log(belanja(100000))
console.log(belanja(1000000))
console.log(belanja(1150500))
console.log(belanja(0))