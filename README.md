# O que aprendi na semana 3 do projeto {rePrograma}

## 1 - crie um algoritmo que imprime no console de 10 a 60, iterando a cada 5, exceto para os numeros 35 e 45 que irão ser substituidos pela palavra "PULOU".

```javascript
let x = 5;
while(x <= 55){

    x+=5;
    if (x === 35 || x === 45) {
        console.log(`PULOU`);
        continue
    }

    console.log(x);
}
```
##### Aprendi aqui a fazer o loop de soma e parameto de termino de loop com While e tambem usei metodo de exclusão co if.
---

## 2 - crie um algoritmo que converte dias em horas, quando recebe um número de dias.

```javascript
let dias = 2;
let horas = dias*24;
console.log(`${dias} dias tem ${horas} horas.`)
```
##### Treinei aqui as let's e interpolação
---

## 3 - Crie uma função que recebe 2 parâmetros e retorna o resultado da divisão entre eles. Além disso, se o resto dessa divisão for zero deverá imprimir no console o valor e dizer que ele é par.
```javascript
let n1 = 10, n2 = 5;
const resultado = n1/n2;
const resto = resultado%2
console.log(`${n1} / ${n2} = ${resultado}`);


if (resto === 0) {
    console.log(`${resultado} é Par`)
}

```
##### Revisei a ideia de const e let, treinei a interpolaçao e usei conseito de if sem else
---
## 4 - Utilize a estrutura de repetição for para imprimir no console conforme instruções abaixo: 
### a) números de 1 a 100 
#####  Aqui usei o for para imprimir na tela os numeros fe 1 a 100 em loop.

```javascript
for (let index = 1; index < 101; index++) {
    console.log(index);
}
```

### b) quando chegar no número 50 interrompa a instrução e pare o loop 

##### Aqui usei o if com a instrução break para parar o loop.
```javascript
for (let index = 1; index < 101; index++) {

        console.log(index);

        if (index === 50) {
            break
        }
}
```

### c) quando chegar no número 50 pule a instrução 

##### Fiz o loop com while para treinar um novo tipo de loop e usei if com continue para quebrar o loop pulando o numero 50.
```javascript
let index = 0;
while (index < 100) {
    index++;
    if (index === 50) {
        continue;
    }
    console.log(index);
}
```
---

## 5 - Vamos criar uma calculadora com as 4 operações matemáticas básicas? rs

### a) Deverá ser possível escolher uma operação aritimética em forma de string: 'soma', 'multiplicacao', 'divisao' e 'subtracao'
### b) Deverá ser possível passar 2 números para a operação escolhida
### c) Deverá retornar o resultado e imprimir no console

```javascript
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
```
##### Aqui criei a função de conta e reprodusi as opçoes de operaçao com switch/case.
