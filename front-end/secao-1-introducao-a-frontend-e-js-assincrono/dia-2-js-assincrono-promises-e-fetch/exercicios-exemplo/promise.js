// função que gera um número aleatório
const generateRandomNumber = () => Math.round(Math.random() * 10);

// promises Resolvida e Rejeitada com seus respectivos retornos
const randomPromise = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      const randomNumber = generateRandomNumber();
      if(randomNumber % 2 === 0) {
        resolve(randomNumber);
        // Promise retornando número aleatório caso for PAR
      } else {
        reject(new Error (`Número gerado rejeitado: ${randomNumber}. Somente números pares.`));
        // Promise retornando ERRO caso for IMPAR
      }
    }, 1000);
  });


randomPromise()
  .then((response) => {
    console.log(`Promise resolvida: o número gerado foi ${response}`);
    // .THEN Retorna a promise Resolvida com o número gerado
  })
  .catch((error) => {
    console.log(`Promise rejeitada: ${error.message}`);
    // .CATCH Captura a promise Rejeitada e retorna o erro no console.log
  })
  .finally(() => console.log('Fim da execução da promise'));
  // .FINALLY Retorna um código após a finalização da promise.

  console.log(`Esse número NÃO foi gerado por um código assíncrono: ${generateRandomNumber()}`);
