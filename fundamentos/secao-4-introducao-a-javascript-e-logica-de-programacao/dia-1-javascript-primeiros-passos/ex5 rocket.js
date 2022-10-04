const angulo1 = 100;
const angulo2 = 50;
const angulo3 = 30;

let isTriangulo = false

let isPositivos = angulo1 > 0 && angulo2 > 0 && angulo3 > 0;

let soma = angulo1 + angulo2 + angulo3;

if (isPositivos === true && soma === 180){
    isTriangulo = true;
}
else if (soma =! 180){
    isTriangulo = false;
}
else{
    isTriangulo = false;
    console.log("Erro: ângulo inválido");
}

console.log("Representam os ângulos de um triângulo? ->", isTriangulo);