// Values are stored on stack

const name = 'John'
const age = 28;

// Refernce Values are stored on heap

const person = {
    name: 'John',
    age: 28,
}

let newName = name;
newName = 'Johnathan';

let newPerson = person;
newPerson.name = 'Bradley';

console.log(person, newPerson)