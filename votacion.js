let contador = 3;

function masuno() {
    contador = contador + 1;
    document.getElementById("votos").innerHTML = contador + "votos";
}

function menosuno() {
    contador = contador - 1;
    document.getElementById("votos").innerHTML = contador + "votos";
}