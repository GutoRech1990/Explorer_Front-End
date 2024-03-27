// To count characters in strings or numbers

let word = 'Test'
console.log(word.length)

let number = 12345
console.log(String(number).length)

// To change '.'for ','and allow only 2 numbers after

let num = 123.4567890
console.log(num.toFixed(2).replace('.', ','))

// To change everything to Uppercase or Lowercase

let msg = 'Programming is very cool'
console.log(msg.toUpperCase())
console.log(msg.toLocaleLowerCase())

// Split and Join

let phrase = 'I am a Student'
let myArray = phrase.split(' ')
console.log(myArray)
let newPhrase = myArray.join('_')
console.log(newPhrase)

// To find a word

let txt = 'I want to be a developer'
console.log(txt.includes('developer'))
console.log(txt.includes('would'))

// String to Array

let word2 = 'Computer'
console.log(Array.from(word2))