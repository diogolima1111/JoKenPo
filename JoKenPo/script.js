let jogadaPlayer = 0
let jogadaComputador = 0

let rodada = 0;
let contadorPartidas = 1;
let vitoriasPlayer = 0;
let vitoriasComputador = 0;

let totalVitoriasPlayer = 0
let totalVitoriasComputador = 0

let jogarDenovo = 0


jogo()
function jogo() {

    jogarDenovo = 0;


    while (vitoriasComputador < 3 || vitoriasPlayer < 3) {


        if (vitoriasComputador == 3 || vitoriasPlayer == 3) {
            break
        }

        jogadaPlayer = Number(prompt("Escolha: Tesoura = 1; Papel = 2; Pedra = 3"));
        jogadaComputador = Math.floor(Math.random() * 3) + 1;


        while (jogadaPlayer != 1 && jogadaPlayer != 2 && jogadaPlayer != 3) {
            jogadaPlayer = Number(prompt("Escolha: Tesoura = 1; Papel = 2; Pedra = 3 (Escolha entre 1 a 3)."));
        }

        if (jogadaPlayer == 1 && jogadaComputador == 2 || jogadaPlayer == 2 && jogadaComputador == 3 ||
            jogadaPlayer == 3 && jogadaComputador == 1) {
            // player vence
            rodada++;
            vitoriasPlayer++;
            alert("Você jogou: " + jogadaPlayer + "      Jogada do computador: " + jogadaComputador + "\n Você venceu a rodada." + "\nRodada: " + rodada + "\nVitórias do Jogador: " + vitoriasPlayer + "\nVitórias do Computador: "
                + vitoriasComputador + "\nPartida: " + contadorPartidas);

        } else if (jogadaComputador == jogadaPlayer) {
            //rodada empata.
            rodada++;
            alert("Você jogou: " + jogadaPlayer + "      Jogada do computador: " + jogadaComputador + "\n Rodada Empatada" + "\nRodada: " + rodada + "\nVitórias do Jogador: " + vitoriasPlayer + "\nVitórias do Computador: "
                + vitoriasComputador + "\nPartida: " + contadorPartidas);

        } else {
            //player perde. 
            rodada++;
            vitoriasComputador++;
            alert("Você jogou: " + jogadaPlayer + "      Jogada do computador: " + jogadaComputador + "\n Você perdeu a rodada." + "\nRodada: " + rodada + "\nVitórias do Jogador: " + vitoriasPlayer + "\nVitórias do Computador: "
                + vitoriasComputador + "\nPartida: " + contadorPartidas);
        }
    }

    if (vitoriasPlayer == 3) {

        vitoriasComputador = 0;
        vitoriasPlayer = 0;
        rodada = 0;
        totalVitoriasPlayer++;
        alert("Você venceu!!!");
        alert("Suas vitórias: " + totalVitoriasPlayer + "      Vitórias do computador: " + totalVitoriasComputador + "\nPartida: " + contadorPartidas);
        contadorPartidas++;

    } else if (vitoriasComputador == 3) {

        vitoriasComputador = 0;
        vitoriasPlayer = 0;
        rodada = 0;
        totalVitoriasComputador++;
        alert("Você Perdeu.");
        alert("Suas vitórias: " + totalVitoriasPlayer + "      Vitórias do computador: " + totalVitoriasComputador + "\nPartida: " + contadorPartidas);
        contadorPartidas++;
    }

    jogarMaisUmaVez()
}


function jogarMaisUmaVez() {

    while (jogarDenovo != 1 && jogarDenovo != 2) {
        jogarDenovo = parseInt(prompt("Jogar novamente?" + "\n1 - Sim e 2 - Não"));
    }

    if (jogarDenovo == 1) {
        jogo()
    } else {
        alert("Fim de jogo." + "\nSe quiser jogar novamente pressione F5");
    }
}