//1 - crie um algoritmo que imprime no console de 10 a 60, iterando a cada 5, 
//exceto para os numeros 35 e 45 que irão ser substituidos pela palavra "PULOU".

let x = 5;
while(x <= 55){

    x+=5;
    if (x === 35 || x === 45) {
        console.log(`PULOU`);
        continue
    }

    console.log(x);
}