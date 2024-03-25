// Palavras chaves que guardam variáveis
// VAR - é global e tbm local, por isso muito flexisível, não é tão recomendado
// LET - local, só funciona no {escopo/bloco} onde foi criado
// CONST - não altera valor

var clima = "Quente"
console.log(clima)
clima = "Frio"
console.log(clima)

// Lembrando que o JS é case-sensitive, ou seja, letras maiúsculas, minúsculas, pontuacão, fazem a variável ser diferente

/*
É possível concatenar strings com o operador +, por exemplo: console.log('o ' + name + ' tem ' + age + ' anos.') 
desta maneira as variáveis serão convertidas em texto e o que será mostrado será um texto com o nome e a idade que foram estabelecidas no código. 
Uma outra maneira de escrever um texto com variáveis é por meio da interpolação com template literals, 
usando crase para o texto e ${} para denotar uma variável, por exemplo console.log(O ${name} tem ${age} anos.) 
o resultado deste comando será o mesmo texto do anterior.
*/