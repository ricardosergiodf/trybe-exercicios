function numeroMaisRepetido (array) {
    maisRepetido = 0;
    indexRepetido = 0;
    contadorNumAtual = 0;
    
    for (let index = 0; index < array.length; index += 1) {

        for (let index2 = 0; index2 < array.length; index2 += 1) {
            if (array[index] === array[index2]) {
                contadorNumAtual += 1;
            }
        }

        if (contadorNumAtual > maisRepetido) {
            maisRepetido = array[index];
            indexRepetido = index;
        }
        contadorNumAtual = 0;
    }
    return array[indexRepetido]
}

console.log(numeroMaisRepetido([2, 3, 2, 5, 8, 2, 3]));