let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let soma = 0;
const totalElementos = numbers.length;

for (index = 0; index < numbers.length; index += 1) {
    soma += numbers[index];
}

const mediaAritmetica = soma / totalElementos;
console.log("Média aritmetica =", mediaAritmetica); 