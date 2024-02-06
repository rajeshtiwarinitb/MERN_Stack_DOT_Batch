console.log('Namaste Duniya 2');
if(true){
    let a = 5 ;//local scoped variable.
    console.log(a);
    var b = 10;//global variable 
    var b = 16;//redeclartion possible for var . 
    var indexValue = 0;
    var undefValue;
    var nullValue = '';
}

console.log(b);
console.log(undefValue);
console.log(nullValue);
indexValue = true;
console.log(indexValue);

let i = 1;
let s = '1';
console.log(i==s);//true
console.log(i===s);//false

let age = 17;
let status = (age>=18)?'I can Vote':'Can not Vote';
console.log(status);

