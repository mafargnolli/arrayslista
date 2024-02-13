const numeros = [54, 22, 14, 87, 284];

//exercicio 3 de arrays

let encontrado = false;
let x = 10;

for (let numero of numeros) {
    if (numero === 10) {
        console.log(encontrado);
        encontrado = x;
        break;
    }
}

if (!encontrado) {
    console.log('-1');
}
