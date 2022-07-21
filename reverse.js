/*
output:
a, awal = 10
b, awal = 23
a, final = 23
b, final = 10
*/

function reverse(){
    let a = 10;
    let b = 23;

    console.log("a, awal = " + a);
    console.log("b, awal = " + b);

    [a, b] = [b, a];

    console.log("a, final = " + a);
    console.log("b, final = " + b);
}

reverse()