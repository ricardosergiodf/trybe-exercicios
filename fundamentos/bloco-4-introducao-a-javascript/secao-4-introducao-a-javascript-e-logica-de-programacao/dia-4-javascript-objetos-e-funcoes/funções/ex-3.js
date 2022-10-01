function menorValor (array) {
    let menor = array[0];
    for (index = 0; index < array.length; index += 1) {
        if (array[index] < menor) {
            menor = index;
        }
    }
    return menor;
}
console.log(menorValor([2, 4, 6, 7, 10, 0, -3]));