// 3 - Crie uma função que recebe 2 parâmetros e retorna o resultado da divisão entre eles.
// Além disso, se o resto dessa divisão for zero deverá imprimir no console o valor e dizer que ele é par.

let n1 = 10, n2 = 5;
const resultado = n1/n2;
const resto = resultado%2
console.log(`${n1} / ${n2} = ${resultado}`);


if (resto === 0) {
    console.log(`${resultado} é Par`)
}
