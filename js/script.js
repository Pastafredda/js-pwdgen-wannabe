// Dichiaro le variabili
let userName, userSurname, userColor, userPsw, messaggioPsw;
const numero = 21;

// Chiedo il nome all'utente
userName = prompt("Inserisci il tuo Nome");
console.log(userName);

// Chiedo il cognome all' utente
userSurname = prompt("Inserisci il tuo Cognome");
console.log(userSurname);

// Chiedo il colore preferito dell'utente

userColor = prompt("Inserisci il tuo colore preferito");
console.log(userColor);

// Creo la password
userPsw= userName + userSurname + userColor;
console.log(userPsw);

// messaggio password
messaggioPsw = `La tua Password è ${userPsw + numero}`;
console.log(messaggioPsw);

// messaggio che apparirà in pagina
document.getElementById("mio_id").innerHTML = messaggioPsw;
