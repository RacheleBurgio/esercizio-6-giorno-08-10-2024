/* ESERCIZIO 1
 Scrivi un algoritmo per trovare il più grande tra due numeri interi.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let numerino = 20
let numerone = 12787
let numeroGrosso

if (numerino < numerone) {
  numeroGrosso = numerone
}
console.log(numeroGrosso)

/* ESERCIZIO 2
  Scrivi un algoritmo che mostri "not equal" in console se un numero intero fornito è diverso da 5.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let numero = 50
if (numero !== 5) {
  console.log('not equal')
}

/* ESERCIZIO 3
  Scrivi un algoritmo che mostri "divisibile per 5" in console se un numero fornito è perfettamente divisibile per 5 (suggerimento: usa l'operatore modulo)
*/

/* SCRIVI QUI LA TUA RISPOSTA */

// let numero2 = 25 % 5
if (25 % 5 === 0) {
  console.log('divisibile per 5')
}

/* ESERCIZIO 4
  Scrivi un algoritmo per verificare che, dati due numeri interi, il valore di uno di essi sia 8 oppure se la loro addizione/sottrazione sia uguale a 8.
*/
let otto = 8
let ottoAddizione = 4 + 4

if (otto === 8 || ottoAddizione === 8) {
  console.log('vondizione verificata')
}
/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 5
  Stai lavorando su un sito di e-commerce. Stai salvando il saldo totale del carrello dell'utente in una variabile "totalShoppingCart".
  C'è una promozione in corso: se il totale del carrello supera 50, l'utente ha diritto alla spedizione gratuita (altrimenti la spedizione ha un costo fisso pari a 10).
  Crea un algoritmo che determini l'ammontare totale che deve essere addebitato all'utente per il checkout.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let ordine = 30
let promozione = ordine >= 50 ? 'gratuita' : ' 10'
let total = 'costo spedizione:' + promozione + ' costo prodotto: ' + ordine
console.log(total)

/* ESERCIZIO 6
  Stai lavorando su un sito di e-commerce. Oggi è il Black Friday e viene applicato il 20% su ogni prodotto.
  Modifica la risposta precedente includendo questa nuova promozione nell'algoritmo, determinando come prima se le spedizioni sono gratuite oppure no e e calcolando il totale.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

ordine = 30 - (30 / 100) * 20
promozione = ordine >= 50 ? ' gratuita' : ' 10'
total = 'costo spedizione:' + promozione + ' costo prodotto: ' + ordine
console.log(total)

/* ESERCIZIO 7
  Crea tre variabili, e assegna un valore numerico a ciascuna di esse.
  Utilizzando un blocco condizionale, crea un algoritmo per ordinarle secondo il loro valore, dal più alto al più basso.
  Alla fine mostra il risultato in console.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let n1 = 10
let n2 = 9
let n3 = 2

if (n1 > n2 && n2 > n3) {
  console.log(n1, n2, n3)
} else if (n1 > n2 && n3 > n2) {
  console.log(n1, n3, n2)
} else if (n2 > n1 && n1 > n3) {
  console.log(n2, n1, n3)
} else if (n2 > n1 && n3 > n1) {
  console.log(n2, n3, n1)
} else if (n3 > n1 && n1 > n2) {
  console.log(n3, n1, n2)
} else {
  console.log(n3, n2, n1)
}

/* ESERCIZIO 8
  Crea un algoritmo per verificare che un valore fornito sia un numero oppure no (suggerimento: cerca su un motore di ricerca "typeof").
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let numerozzo = 31
let tipo = typeof numerozzo
console.log(tipo)

/* ESERCIZIO 9
  Crea un algoritmo per controllare se un numero fornito sia pari o dispari (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/

/* SCRIVI QUI LA TUA RISPOSTA */
if (20 % 2 === 0) {
  console.log('il numero è pari')
}

/* ESERCIZIO 10
  Modifica la logica del seguente algoritmo in modo che mostri in console il messaggio corretto in ogni circostanza.
  let val = 7
  if (val < 10) {
      console.log("Meno di 10");
    } else if (val < 5) {
      console.log("Meno di 5");
    } else {
      console.log("Uguale a 10 o maggiore");
    }
*/
let val = 7
if (5 > val) {
  console.log('Meno di 10')
} else if (val < 10) {
  console.log('Meno di 5')
} else {
  console.log('Uguale a 10 o maggiore')
}

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 11
  Fornito il seguente oggetto, scrivi del codice per aggiungere una proprietà "city", il cui valore sarà "Toronto".
*/

const me = {
  name: 'John',
  lastName: 'Doe',
  skills: ['javascript', 'html', 'css'],
}

/* SCRIVI QUI LA TUA RISPOSTA */

me.city = 'Toronto'

/* ESERCIZIO 12
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere la proprietà "lastName".

*/

/* SCRIVI QUI LA TUA RISPOSTA */
delete me.lastName

/* ESERCIZIO 13
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere l'ultimo elemento della proprietà "skills".
*/

/* SCRIVI QUI LA TUA RISPOSTA */
delete me.skills[2]
console.log(me)

/* ESERCIZIO 14
  Scrivi del codice per creare un array inizialmente vuoto. Riempilo successivamente con i numeri da 1 a 10.
*/

const array = []

array.push(1)
array.push(2)
array.push(3)
array.push(4)
array.push(5)
array.push(6)
array.push(7)
array.push(8)
array.push(9)
array.push(10)
console.log(array)
/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 15
  Scrivi del codice per sostituire l'ultimo elemento dell'array, ovvero il valore 10, con il valore 100.
*/
array[9] = 100
/* SCRIVI QUI LA TUA RISPOSTA */
