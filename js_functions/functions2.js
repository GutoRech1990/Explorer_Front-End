// Functions expression or function anonymous

// parameters
const sum = function(number1, number2){
    total = number1 + number2
    console.log(total)
    return total
}
sum(2,3) /* arguments */
sum(10,10)
sum(5,1)

// Another explanation
// Function is a mixer
function preparJuice(fruit1, fruit2) {
    return fruit1 + fruit2
}

const cup = preparJuice('banana', 'apple')

console.log(cup)