
//si definisce la funzione di nome torta, come "parametri" vengono passati mele e arance che vengono invece inseriti nuovamente all'interno della funzione stesa. All'interno della funzione viene dichiarata una variabile costante - in quanto quello che deve scrivere è sempre la stessa cosa e non varia, quindi si usa una costante - che con la tecnica del backtick dice che la costante "parti" ha come valore una stringa che richiama i parametri "mele" e "arance". E poi si fa un return della costante. 
function torta(mele, arance) {
    const parti = `hai una torta con ${mele} mele e ${arance} arance`;
    return parti;
}
//Fuori dalla funzione invece si scrive all'interno dell'id corretta tamite l'innerhtml, la funzione alla quale TUTTAVIA vengono passati come valori di mele e arance due numeri che, in questo momento, vengono sostituiti all'interno delle parentesi graffe della costante parti. 
document.getElementById('corretta').innerHTML = torta(5, 10);
//sempre fuori dalla funzione invece si richiama anche la funzione in "sbagliata". Scorretta perché verrà dichiarato un solo numero come parametro della funzione torta, rendendo "arance" (il secondo valore) undefinde, ovvero non definito, per mancanza stessa della dichiarazione tra le parentesi tonde. 
document.getElementById('sbagliata').innerHTML = torta(6);

// -------------------------------------------------------------------------------------
function tortaGrande() {
    let mela = 2;
    let arancia = 3;

    const fette = `hai una torta con ${mela} spicchi di mela e ${arancia} spicchi di arancia`;
    return fette;
}
document.getElementById('tortaNuova').innerHTML = tortaGrande();

// ----------------------------------------------------------------------------------
//si definisce una variabile nella quale si fa fare un calcolo dell'età, banalmente usando due numeri e facendo fare una sottrazione. E la funzione "eta" va a stampare nel campo id=eta (concatenando con quello che c'è già scritto) il risultato della variabile. 
function eta() {
    var tuaEta = 2022 - 1993;
    document.getElementById('eta').innerHTML += `${tuaEta} anni`;
}
eta();
//serve per richiamare la funzione e far si che si "veda" il suo risultato. Senza, la funzione "funziona", ma non viene visualizzata

// ---------------------------------------------------------------------------------


function annoDiNascita() {
    let annoNascita = 1993;

    const anniMiei = `Sono nata nel ${annoNascita}`;
    return anniMiei;
}
document.getElementById('eta2').innerHTML = annoDiNascita();

// ---------------------------------------------------------------------------------

/*
Viene istanziata una funzione calcolaEta nella quale vengono calcolate tramite sottrazione di data di nascita con quella attuale, l'età di due persone. 

con la funzione freccia, dopo aver istanziato la variabile "nonnaEta" e "mammaEta", viene passato fatto il return che scrive l'età della madre e della nonna, prima di stamparlo nel getElementById corrispettivo, e viene successivamente richiamata la funzione per falra stampare. 
*/

function calcoloEta() {
    let nonna = 2022 - 1943;
    let mamma = 2022 - 1967;

    let nonnaEta = () => {
        return `l'età di mia nonna è di ${nonna} anni`;
    };
    document.getElementById('persona1').innerHTML = nonnaEta();
    let mammaEta = () => {
        return `l'età di mia mamma è di ${mamma} anni;`;
    }
    document.getElementById('persona2').innerHTML = mammaEta();
}

calcoloEta();


// --------------------------------------------------------------------------------

/*
Viene istanziata una funzione fetteTorta dentro la quale c'è una Function che è l'argomento di questa funzione. Dentro la "return Function", vengon istanziate le variabili "fette Mela" e "fetteArancia" con il loro valore, stampate poi tramite un document.getElementByID e richiamate all'esterno. Per richiamarle all'esterno viene istanziata una variabile "spicchi" che ha come valore la funzione, e viene poi richiamata "spicchi"
*/


function fetteTorta() {
    return function() {
        let fetteMela = 9;
        let fetteArancia = 15;

        document.getElementById('torta').innerHTML = `Torta con ${fetteMela} fette di mela e ${fetteArancia} fette di arancia`;
    }
}

let spicchi = fetteTorta();

spicchi(); 

// --------------------------------------------------------------------------------

/*
viene inserita una var per dichiarare l'azione di un bottone. var btn dichiara che l'azione del bottone tramite clik del bottone con id "calcola" richiama la funzione tramite addEventListener. 
Vengono dichiarate tre variabili (cibo-detersivi-abiti) dao quali vengono "registati" i valori in input tramite .value. 
viene successivamente fatta la somma dei valori e stampata successivamente. 
*/

var btn = document.getElementById('calcola'); 

btn.addEventListener('click', function() {

    let cibo = Number(document.getElementById('cibo').value); 
    let detersivi = Number(document.getElementById('detersivi').value);
    let abiti = Number(document.getElementById('abiti').value);
    
    let spesa = cibo + detersivi + abiti;

    document.getElementById('totale').innerHTML = `il totale della spesa è di ${spesa}`; 
}); 
