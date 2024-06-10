function lanciaDadi() {
    // Generare un numero casuale tra 1 e 6 per il giocatore
    let punteggioGiocatore = Math.floor(Math.random() * 6) + 1;

    // Generare un numero casuale tra 1 e 6 per il computer
    let punteggioComputer = Math.floor(Math.random() * 6) + 1;

    // messaggio di risultato con i punteggi del giocatore e del computer
    let risultato = "Punteggio del giocatore: " + punteggioGiocatore + "<br>" +
                    "Punteggio del computer: " + punteggioComputer + "<br>";

    // Confrontare i punteggi e aggiungerli al messaggio di risultato
    if (punteggioGiocatore > punteggioComputer) {
        risultato += "Il giocatore vince!";

    } else if (punteggioGiocatore < punteggioComputer) {
        risultato += "Il computer vince!";

    } else { // Se i punteggi sono uguali, dichiara un pareggio
        risultato += "Pareggio!";
    }

    // messaggio di risultato
    document.getElementById("risultato").innerHTML = risultato;
}
