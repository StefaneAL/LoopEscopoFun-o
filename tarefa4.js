// 4 - Utilize a estrutura de repetição for para imprimir no console conforme instruções abaixo: 

    // a) números de 1 a 100 

for (let index = 1; index < 101; index++) {
    console.log(index);
}


//     b) quando chegar no número 50 interrompa a instrução e pare o loop 

for (let index = 1; index < 101; index++) {

        console.log(index);

        if (index === 50) {
            break
        }
}


//     c) quando chegar no número 50 pule a instrução 
let index = 0;
while (index < 100) {
    index++;
    if (index === 50) {
        continue;
    }
    console.log(index);
}