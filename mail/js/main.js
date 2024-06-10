// Tutte le e-mail autorizzate
let emailsAutorizzate = ["userone@gmail.com", "usertwo@gmail.com", "userthree@gmail.com"];

// funzione per controllare l'email inserita
function controllaEmail() {

    // assegno il valore dell'input email all'email
    let email = document.getElementById("email").value;

    // eseguiamo il controllo sull'email
    if (emailsAutorizzate.includes(email)) {
        console.log("Accesso consentito");
        document.getElementById("risultato").innerHTML = "Accesso consentito";
    } else {
        console.log("Accesso negato");
        document.getElementById("risultato").innerHTML = "Accesso negato";
    }


}