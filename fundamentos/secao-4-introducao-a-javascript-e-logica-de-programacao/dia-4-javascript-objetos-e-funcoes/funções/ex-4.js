function maiorNome (array) {
    let maior = array[0];
    for (let index = 0; index < array.length; index += 1) {
        if (array[index].length > maior.length) {
            maior = array[index];
        }
    }
    return maior;
}

console.log(maiorNome(['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana']));