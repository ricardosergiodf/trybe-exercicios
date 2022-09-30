let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
totalImpares = 0;


for (index = 0; index < numbers.length; index += 1) {
    if (numbers[index] % 2 !== 0) {
        totalImpares += 1;
    }
}

if (totalImpares === 0) {
    console.log("nenhum valor ímpar encontrado");
}

console.log("Total de valores ímpares no array:", totalImpares);