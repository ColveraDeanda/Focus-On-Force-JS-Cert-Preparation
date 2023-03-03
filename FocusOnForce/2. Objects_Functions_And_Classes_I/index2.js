//* Formas para crear un objeto:
// Object() constuctor
let user1 = new Object();
user1.name = 'Jam';

// Object literal
let user2 = {
    name: 'Mary Jane',
    age: 30,
    admin: true
}

// Object.create() method
let user3 = Object.create({});
user3.name = 'Isabel'

///////////////////////////////////////////////////////////////////////////////////////////////////
// Se puede acceder a con notación de punto o corchete.
console.log(user1.name);
console.log(user1['name']);
delete user2.age // delete keyborad para eliminar propidades de un objeto
console.log(user2);

//* Recorrer un objeto:
for(let prop in user2) {
    console.log(prop);
    console.log(user2[prop]);
}

//* Métodos para extraer las keys:
console.log(Object.keys(user2));
console.log(Object.getOwnPropertyNames(user2));

///////////////////////////////////////////////////////////////////////////////////////////////////
//* Para declarar un método dentro de un objeto, hay 2 formas:
let user4 = {
    greeting(greet) {
        console.log(`${greet}!`);
    },
    greeting2: function(greet) {
        console.log(`${greet}!`);
    }
}
user4.greeting('Hola');
user4.greeting2('Hola');

///////////////////////////////////////////////////////////////////////////////////////////////////
let user5 = {
    firstName: 'Mary',
    lastName: 'Smith',
    greeting() {
        // 'this' en este caso, es el objeto actual.
        console.log(`${this.firstName}, ${this.lastName}`);
    }
}
user5.greeting();

//* Me quedé en: 
//Given a business requirement, apply fundamentals of object implementation to solve the business requirement. min 8:23 (getters and setters)