const custo = 2;
const venda = 5;

if (custo >= 0 && venda >= 0) {

    const valorCustoTotal = custo + (0.2 * custo);
    const lucro = (venda - valorCustoTotal) * 1000;
    console.log(lucro);
}
else {
    console.log("ERRO! Os valores não podem ser negativos.");
}
