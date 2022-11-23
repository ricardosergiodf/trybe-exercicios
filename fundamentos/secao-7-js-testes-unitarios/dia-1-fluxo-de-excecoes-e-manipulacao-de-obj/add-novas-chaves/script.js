const pessoaEstudante = {

};

const adicionaPropriedade = (objeto, novaChave, valor) => {
    const newKey = novaChave;
    objeto[newKey] = valor;
}

console.log(pessoaEstudante);

adicionaPropriedade(pessoaEstudante, 'name', 'Ricardo');

adicionaPropriedade(pessoaEstudante, 'lastname', 'Duarte');

adicionaPropriedade(pessoaEstudante, 'email', 'ricardosergiodf@gmail.com');

adicionaPropriedade(pessoaEstudante, 'github', 'https://github.com/ricardosergiodf');

adicionaPropriedade(pessoaEstudante, 'linkedin', 'https://www.linkedin.com/in/ricardo-duarte-dev/');

console.log(pessoaEstudante);