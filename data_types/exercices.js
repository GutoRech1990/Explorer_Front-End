// 1. Declare a variable named weight
let weight

// 2. Wich data type is the variable above?
console.log(typeof weight) /*undefined*/

/* 3. Declare a variable with values for each data:  
 *name: String
 *age: Number (integer)
 *stars: Number (float)
 *isSubscribed: boolean
*/

let name = 'José'
let age = 33
let stars = 3.5
let isSubscribed = true

// 4. What kind of data is that?
// let student = {}
// console.log(typeof student) /* object */

// 4.1 Assign to the object student the values in exercice 3
let student = {
    name: 'José',
    age: 33,
    stars: 3.5,
    isSubscribed: true
}

// 4.2 Show in console the following message > <name> is <age> years old
console.log(`${student.name} is ${student.age} years old`)

// 5. Declare an empty array named students
let students = []

// 6. Assign values to this array using data in exercice  4.1
students = [
    student
]
console.log(students)

// 7. Show in console the value in position 0
console.log(students[0]) /* everything is in postion 0, the whole  list student */

// 8. Create a new student and put in postion 1
const student_2 = {
    name: 'Augusto',
    age: 34,
    stars: 3.6,
    isSubscribed: false
}

students[1] = student_2

console.log(students)

// 9. What is the output for the console.log bellow
console.log(a) /* Undefined yet */
var a = 1 
console.log(a) /* already defined */