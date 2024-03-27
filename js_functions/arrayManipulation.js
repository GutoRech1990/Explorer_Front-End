let techs = ['html', 'css', 'js']

// To add a new item in the end
techs.push('nodeJs')
console.log(techs)

// To add a new item in the begining
techs.unshift('sql')
console.log(techs)

// To remove the last item
techs.pop()
console.log(techs)

// To remove the first item
techs.shift()
console.log(techs)

// To get elements in an array
console.log(techs.slice(1,3)) /* always start counting in position 0 but ends counting normal */
console.log(techs)

// To remove one or more itens in any position
techs.splice(1,1) /* from what position and how many itens */
console.log(techs)

// To find a position of an element
let index = techs.indexOf('js')
console.log(index)
