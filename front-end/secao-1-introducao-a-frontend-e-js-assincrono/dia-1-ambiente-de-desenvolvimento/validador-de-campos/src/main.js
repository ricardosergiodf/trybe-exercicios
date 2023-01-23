import validator from 'validator';
import './style.css';

const campoTexto = document.querySelector('#value');
const opcao = document.querySelector('#option');
const botao = document.querySelector('#button');
const resposta = document.querySelector('#answer');

botao.addEventListener('click', (event) => {
    event.preventDefault();

    const campos = {
        cpf: validator.isTaxID(campoTexto.value, 'pt-BR'),
        email: validator.isEmail(campoTexto.value),
    };
    resposta.innerHTML = `A validação retornou ${campos[opcao.value]}`;
});