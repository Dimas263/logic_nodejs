/* output
[
  [ 'Asia', 'Bhutan', 'Azerbaijan', 'Indonesia', 'Andorra', 'Armenia' ],
  [ 'Afrika', 'Comoros', 'Botswana', 'Lesotho', 'Malawi', 'Algeria' ],
  [ 'Eropa', 'Iceland', 'Liechenstein' ]
]
*/

function countryCollection(countries){
    let copyCountries = countries.slice();
    let result = []
    for (let i = 0; i<copyCountries.length; i++){
        if (copyCountries[i]){
            let tempArr = [copyCountries[i][1]];
            for (let j = 0; j<copyCountries.length; j++){
                if (copyCountries[j] && countries[i][1] === copyCountries[j][1]){
                    tempArr.push(copyCountries[j][0]);
                    copyCountries[j] = undefined;
                    console.log(copyCountries[j]);
                }
            }
            result.push(tempArr);
        }
    }
    return result;
}

console.log(countryCollection([
    ["Bhutan", "Asia"],
    ["Comoros", "Afrika"],
    ["Botswana", "Afrika"],
    ["Iceland", "Eropa"],
    ["Lesotho", "Afrika"],
    ["Liechenstein", "Eropa"],
    ["Malawi", "Afrika"],
    ["Algeria", "Afrika"],
    ["Azerbaijan", "Asia"],
    ["Indonesia", "Asia"],
    ["Andorra", "Asia"],
    ["Armenia", "Asia"]
]))