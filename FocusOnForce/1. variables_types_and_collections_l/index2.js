//* Formas para crear un string:
const str1 = 'This is a string';
console.log(str1);

const str2 = new String('A new String');
console.log(str2);

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

const longStr = 'Certification Questions/FocusOnForce/variab \
les_types_and_collections_l/index2.js:6:1';
console.log(longStr);

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//* Formas para crear un número:
let num1 = 2344;
let num2 = new Number(3.14);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function stringToNum(str) {
    if(isNaN(str)) {
        throw 'String that cannot be converted';
    }
    console.log('hola');
    if(Number.isInteger(str)) return Number.parseInt(str);
}

console.log(stringToNum(23424));


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
console.log(Number.isNaN('salesforce')); 
console.log(isNaN('salesforce')); // Global isNaN

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//* Mostrando diferentes formato de fecha:
let d = new Date();
console.log(d.toString());
console.log(d.toDateString());
console.log(d.toUTCString());
console.log(d.toISOString());

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
const startDate = new Date();
