const numeros = [2, 3, 4, 6]; //tamanho 4

let soma = 0;

for (let i = 0; i < numeros.length; i++) {
    //sera executado para i de 0 até 7 | 8 nao sera mais executado
    soma = soma + numeros[i];
    //soma += numeros[i]
}

console.log(soma);