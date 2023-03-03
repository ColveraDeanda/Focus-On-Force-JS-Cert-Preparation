function myFunction() {
    a = 5;
    var b = 1;
}
myFunction();

console.log(a);
/* console.log(b); */

/////////////////////////////////////////////////////////////////////////////////////
let arrayPrueba = [10,20,30,40,40,50,60,40,40,70];
for (let i = 0; i < arrayPrueba.length; i++) {
    if(arrayPrueba[i] == 40) {
        arrayPrueba.splice(i,1);
    }
}
console.log(arrayPrueba);