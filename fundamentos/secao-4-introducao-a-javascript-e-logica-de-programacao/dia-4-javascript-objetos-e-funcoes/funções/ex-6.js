function somatorioNumeros (num) {
    let soma = 0;

    if (num < 0) {
        console.log("ERRO, numero negativo!");
        return false;
    } else {
        for (let index = 1; index <= num; index += 1) {
            soma += index;
        }
        return soma;
    }
    
}

console.log(somatorioNumeros(5));