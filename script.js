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


/*Buckshot Roulette
Generare un "caricatore" con 2 colpi "live" e 3 colpi "blank" (o casuali da 1 a 3) in posizioni random.
Dichiara al giocatore quanti colpi e di che tipo sono nel caricatore.
Giocatore scrive "me" se vuole sparare se stesso, "you" se vuole sparare il prossimo.
Se spari un blank a te stesso, hai un turno in più - Se spari un blank al CPU, turno prossimo.
Se spari un live a te stesso, perdi una vita, turno prossimo. - Se spari un live al CPU, perde una vita, turno prossimo.
Una vita ognuno. (Metti comunque win condition vita del CPU a 0 come win condition)
*/

let playerLife = 1;
let cpuLife = 1;
const liveNum = 2;
const blankNum = 3;
const totalNum = blankNum + liveNum;

const loader = [];

let (i=0; i < 6; i++) {
    if (totalNum !== 0) {
        const liveOrBlank = Math.floor(Math.random())
    }
}