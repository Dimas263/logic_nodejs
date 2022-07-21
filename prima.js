/* Bilangan Prima
* input : 10
* output : [2,3,5,7]
* proses :
*   angka 1 bukan prima
*   angka 2 adalah prima -> masuk kedalam deret
*   angka 3 adalah prima -> masuk kedalam deret
*   angka 4 bukan prima
*   angka 5 adalah prima -> masuk kedalam deret
*   angka 6 bukan prima
*   angka 7 adalah prima -> masuk kedalam deret
*   angka 8 bukan prima
*   angka 9 bukan prima
*   angka 10 bukan prima
 */

function prime(num){
    let result = []
    for (let i = 2; i <= num; i++){
        let isPrima = true
        for (let j = 2; j <= i; j++){
            if (j !== i && i % j === 0){
                isPrima = false;
                break;
            }
        }
        if (isPrima){
            result.push(i);
        }
    }
    return result;
}
console.log("Bilangan Prima")

console.log("\nInput 10")
console.log(prime(10))

console.log("\nInput 27")
console.log(prime(27))

console.log("\nInput 30")
console.log(prime(30))

console.log("\nInput 41")
console.log(prime(41))