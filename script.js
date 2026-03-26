`use strict`;


/* Mail
Crea una lista di email di invitati ad una festa.
Chiedi all utente la sua email,
controlla che sia nella lista di chi può accedere,
stampa un messaggio appropriato sull’esito del controllo, utilizzando un ciclo for.
Non è consentito usare nessun metodo proprio degli array (come includes, per esempio).
Si può fare? Certo che si basta ragionare un po’.
Nota: 
Non è necessario provvedere alla validazione delle email, però se volete è una feature ben accetta.*/

const listaMailAccettate = ['tiziocaio@pipomail.com', 'rossimario@zmail.it', 'carlobianchi@pipomail.com', 'audyezio@zmail.it', 'topopippo@pipomail.com'];

let mailUser = prompt('Inserisci la tua mail per giocare.');
let mailCheck = false;

for (i = 0; i < listaMailAccettate.length; i++) {
    if (mailUser !== listaMailAccettate[i]) {
        console.log('Non questa, prossima.');
    } else {
        mailCheck = true;
        console.log('mail corretta');
    }
}

if (mailCheck === true) {
    alert('Mail corretta, benvenuto.');
    const dicePlayer = Math.floor(Math.random() * 6) + 1;
    const diceCPU = Math.floor(Math.random() * 6) + 1;

    if (dicePlayer > diceCPU) {
        alert(`Dado player ${dicePlayer} > Dado CPU ${diceCPU}. Hai vinto!`)
    } else if (diceCPU > dicePlayer) {
        alert(`Dado CPU ${diceCPU} > Dado player ${dicePlayer}. Hai perso.`)
    } else {
        alert(`Dado player ${dicePlayer} = Dado CPU ${diceCPU}. Pareggio.`)
    }
} else {
    alert('Mail sbagliata. Ricarica e riprova.')
}

/*Gioco dei dadi
Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
Stabilire il vincitore, in base a chi fa il punteggio più alto. */



