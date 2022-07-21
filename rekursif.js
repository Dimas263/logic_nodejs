/* output
2
3
2
5
0
*/

function countCharRecursive(words, query){
    if (words.length === 0){
        return 0;
    } else {
        let isQueryInWords = words[0].match(query);
        let hitung = 0;
        if (isQueryInWords){
            hitung = 1;
        }
        return hitung + countCharRecursive(words.slice(1), query);
    }
}

console.log(countCharRecursive(['Anchor', 'classic', 'daring', 'eager', 'fearless'], 'ar'));
console.log(countCharRecursive(['90125785123545', 'balonku ada 35', '1 tahun ada 52 minggu', '35-infinite-fox'], '35'));
console.log(countCharRecursive(['Old', 'MacDonald', 'had', 'four', 'farms'], 'o'));
console.log(countCharRecursive(['haha', 'haha', 'haha', 'haha', 'haha'], 'ha'));
console.log(countCharRecursive([], 'z'));