// 5 - Vamos criar uma calculadora com as 4 operações matemáticas básicas? rs

// a) Deverá ser possível escolher uma operação aritimética em forma de string: 'soma', 'multiplicacao', 'divisao' e 'subtracao'
// b) Deverá ser possível passar 2 números para a operação escolhida
// c) Deverá retornar o resultado e imprimir no console

function conta(operador, result){
    let n1 = 100, n2 = 10;

    switch (operador) {
        case 'soma':
            result = n1 + n2
            break
        case 'multiplicacao':
            result = n1 * n2
            break
        case 'divisao':
            result = n1 / n2
            break
        case 'subtracao':
            result = n1 - n2
            break
        default:
            console.log(`Entrada invalida`)
    }
    console.log(`O resulrado da operaçao é ${result}`)
}
console.log(conta('subtracao'))