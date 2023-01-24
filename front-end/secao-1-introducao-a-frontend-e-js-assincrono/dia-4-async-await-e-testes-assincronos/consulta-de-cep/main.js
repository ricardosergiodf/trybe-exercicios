const getCep = document.querySelector('#cep');
const button = document.querySelector('#btn');
const resposta = document.querySelector('#dados');

button.addEventListener('click', clicou);

async function clicou() {
    const cep = getCep.value;

    try {
        const result = await fetch('https://viacep.com.br/ws/${cep}/json/');
        const data = await result.json();

        resposta.innerHTML = JSON.stringify(data)
        console.log(data);
        return data;
    } catch (error) {
        resposta.innerHTML = error.message;
        return error.message;
    }
}

await clicou();