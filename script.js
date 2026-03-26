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

const listaMailAccettate = ['tiziocaio@pipomail.com', 'rossimario@zmail.it', 'carlobianchi@pipomail.com', 'audyezio@zmail.it', 'topopippo@pipomail.com', 'ok'];

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
    alert('Mail sbagliata. Benvenuto al gioco 2');
    let playerLife = 1;
    let cpuLife = 1;
    const liveNum = Math.floor(Math.random() * 3) + 1;
    const blankNum = Math.floor(Math.random() * 3) + 1;


    let live = liveNum;
    let blank = blankNum;
    const totalNum = blank + live;

    const loader = [];


    // Carica fucile
    while (loader.length < totalNum) {
        let liveOrBlank = Math.round(Math.random());
        if (liveOrBlank === 1 && liveNum > 0) {
            loader.push(1);
            live--;
        } else if (liveOrBlank === 0 && blankNum > 0) {
            loader.push(0);
            blank--;
        }
    }

    console.log(loader);
    console.log(`${blankNum} blank, ${blankNum} live.`);

    while (loader.length > 0) {
        const action = prompt(`${blankNum} blank, ${liveNum} live. Scrivi "me" per sparare a te stesso o "you" per sparare al CPU. Buona fortuna.`);
        if (action === 'me') {
            let shot = loader.shift();
            if (shot === 0) {
                alert('Hai preso un blank. Sei salvo.');
                console.log('Blank sparato al player ' + loader);
            } else {
                alert('Hai preso un live. -1 Vita.');
                playerLife--;
                console.log('Live sparato al player ' + loader);
            }
        }
        if (action === 'you') {
            let shot = loader.shift();
            if (shot === 0) {
                alert('Hai sparato un blank.');
                console.log('Blank sparato al CPU' + loader);
            } else {
                alert('Hai sparato un live. -1 Vita al CPU.');
                cpuLife--;
                console.log('Live sparato al CPU' + loader);
            }
        } else {
            alert('Scrivi "me" per sparare a te stesso o "you" per sparare al CPU.')
        }
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




