// expression new
// to create a new object
// this keyboard

function Person (name) {
    this.name = name
}

const person1 = new Person('José')
const person2 = new Person('Paulo')
const person3 = new Person('Guto')

console.log(person1, person2, person3)