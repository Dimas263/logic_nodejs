# logic_nodejs
logic programming

## Belanja + Poin
input :
```javascript
console.log(belanja(100000))
```
output :
```yaml
{ belanja: { Bantal: '4' }, point: 200, kembalian: 0 }
```

## Negara
input :
```javascript
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
```
output :
```yaml
[
  [ 'Asia', 'Bhutan', 'Azerbaijan', 'Indonesia', 'Andorra', 'Armenia' ],
  [ 'Afrika', 'Comoros', 'Botswana', 'Lesotho', 'Malawi', 'Algeria' ],
  [ 'Eropa', 'Iceland', 'Liechenstein' ]
]

##  Slice
input :
```javascript
console.log(slice(['ant','bison','camel','duck','elephant'], [2]));
```
output :
```yaml
[ 'camel', 'duck', 'elephant' ]
```

## Reverse
input :
```javascript
a = 10;
b = 23;
```
output :
```yaml
a, awal = 10
b, awal = 23
a, final = 23
b, final = 10
```

##  Rekursif
input :
```javascript
console.log(countCharRecursive(['Anchor', 'classic', 'daring', 'eager', 'fearless'], 'ar'));
```
output :
```yaml
2
```

## Prima
input :
```javascript
console.log(prime(41))
```
output :
```yaml
[
   2,  3,  5,  7, 11, 13,
  17, 19, 23, 29, 31, 37,
  41
]
```

## Metric Generator
input :
```javascript
console.log(matricGenerator('q289c370bcq2f98fdg89'))
```
output :
```yaml
[
  [ '*', '*', '*', '*', '*' ],
  [ 'q', '2', '8', '9', 'c' ],
  [ '3', '7', '0', 'b', 'c' ],
  [ 'q', '2', 'f', '9', '8' ]
]
```

## Clean Code
input :
```javascript
console.log(out.basicSalary())
console.log(out.overviewSalary())
```
output :
```yaml
400
420
```
