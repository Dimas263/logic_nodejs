/* output
[ [ '*', 'a', 'b' ], [ 'c', 'd', 'e' ] ]

[
  [ '*', '*', '*', 'p' ],
  [ 'q', '9', '8', 'd' ],
  [ '3', '2', '7', 'b' ]
]

[
  [ '*', '*', '*', '*', '*' ],
  [ 'q', '2', '8', '9', 'c' ],
  [ '3', '7', '0', 'b', 'c' ],
  [ 'q', '2', 'f', '9', '8' ]
]

*/
function matricGenerator(str){
    let result = [];
    let jumlahArr = 1;
    for (let h = 1; h < str.length; h++){
        if (h * h >= str.length){
            jumlahArr = h;
            break;
        }
    }
    let selisih = jumlahArr * jumlahArr - str.length;
    let indexStr = 0;
    for (let i = 1; i < jumlahArr; i++){
        let tempArr = [];
        for (let j = 1; j <= jumlahArr; j++){
            if (tempArr.length + 1 < jumlahArr){
                if (selisih > 0){
                    tempArr.push("*")
                    selisih--;
                } else {
                    tempArr.push(str[indexStr]);
                    indexStr++;
                }
            }
            else {
                result.push(tempArr);
                if (selisih > 0){
                    tempArr.push("*");
                    selisih--;
                } else {
                    tempArr.push(str[indexStr]);
                    indexStr++;
                }
            }
        }
    }
    return result;
}
console.log(matricGenerator('abcdefgh'))
console.log(matricGenerator('pq98d327b5c3v'))
console.log(matricGenerator('q289c370bcq2f98fdg89'))