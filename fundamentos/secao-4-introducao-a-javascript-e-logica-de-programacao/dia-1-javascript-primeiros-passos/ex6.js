const pecaXadrez = "rainha";

switch (pecaXadrez.toLowerCase()){
    case "peao":
        console.log("Peça escolhida:", pecaXadrez,  "-> Frente ou comer na diagonal (uma casa), no primeiro movimento pode andar duas casas.");
        break;
    
    case "torre":
        console.log("Peça escolhida:", pecaXadrez, "-> Linha reta frente/atrás ou lados (quantas casas forem necessárias até chegar em uma peça inimiga)");
        break;
    
    case "cavalo":
        console.log("Peça escolhida:", pecaXadrez, "-> Em L para qualquer lado");
        break;
    
    case "bispo":
        console.log("Peça escolhida:", pecaXadrez, "-> Diagonais (quantas casas forem necessárias até chegar em uma peça inimiga)");
        break;

    case "rainha":
        console.log("Peça escolhida:", pecaXadrez, "-> Frente/atrás/lados/diagonais (quantas casas forem necessárias até chegar em uma peça inimiga)");
        break;

    case "rei":
        console.log("-> Peça escolhida:", pecaXadrez, "Frente/atrás/lados/diagonais (uma casa)");

    default:
        console.log("Peça escolhida:", pecaXadrez, "-> ERRO: Peça inválida.");
}