/* ESERCIZIO 1
 Scrivi un algoritmo per trovare il più grande tra due numeri interi.
*/
let n1 = 5
let n2 = 8

if (n1 > n2) {
  console.log("n1 è piu grande")
} else {
  console.log("n2 è più grande")
}

/* ESERCIZIO 2
  Scrivi un algoritmo che mostri "not equal" in console se un numero intero fornito è diverso da 5.
*/

if (n2 === 5) {
  console.log("equal to 5")
} else {
  console.log("not equal")
}
/* ESERCIZIO 3
  Scrivi un algoritmo che mostri "divisibile per 5" in console se un numero fornito è
   perfettamente divisibile per 5 (suggerimento: usa l'operatore modulo)
*/
n1 = 25
n2 = 13
if (n1 % 5 === 0) {
  console.log("divisibile per 5")
} else {
  console.log("non divisibile per 5")
}
/* ESERCIZIO 4
  Scrivi un algoritmo per verificare che, dati due numeri interi, 
  il valore di uno di essi sia 8 oppure se la loro addizione/sottrazione sia uguale a 8.
*/
n1 = 3
n2 = 5

if (n1 === 8 || n2 === 8 || n1 + n2 === 8 || n1 - n2 === 8 || n2 - n1 === 8) {
  console.log(true)
} else {
  console.log(false)
}

/* ESERCIZIO 5
  Stai lavorando su un sito di e-commerce. Stai salvando il saldo totale del carrello
   dell'utente in una variabile "totalShoppingCart".
   C'è una promozione in corso: se il totale del carrello supera 50,
 l'utente ha diritto alla spedizione gratuita (altrimenti la spedizione ha un costo fisso pari a 10).
  Crea un algoritmo che determini l'ammontare totale che deve essere addebitato all'utente per il checkout.
*/
let totalShoppingCart = 30
const spedizione = 10

if (totalShoppingCart > 50) {
  console.log("Prezzo totale di " + totalShoppingCart)
} else {
  console.log("Prezzo totale di " + [totalShoppingCart + spedizione])
}

/* ESERCIZIO 6
  Stai lavorando su un sito di e-commerce. Oggi è il Black Friday e viene applicato il 20% 
  su ogni prodotto.
  Modifica la risposta precedente includendo questa nuova promozione nell'algoritmo,
   determinando come prima se le spedizioni sono gratuite oppure no e e calcolando il totale.
*/

totalShoppingCart = 20
let blackFriday = 0.8
let prezzoScontato = totalShoppingCart * blackFriday

if (prezzoScontato > 50) {
  console.log("Prezzo totale di " + prezzoScontato)
} else {
  console.log("Prezzo totale di " + [prezzoScontato + spedizione])
}

/* ESERCIZIO 7
  Crea tre variabili, e assegna un valore numerico a ciascuna di esse.
  Utilizzando un blocco condizionale, crea un algoritmo per ordinarle secondo il loro valore,
   dal più alto al più basso.
  Alla fine mostra il risultato in console.
*/
let a = 10
let b = 3
let c = 7

let primo, secondo, terzo

if (a > b && a > c) {
  primo = a
  if (b > c) {
    secondo = b
    terzo = c
  } else {
    secondo = c
    terzo = b
  }
} else if (b > a && b > c) {
  primo = b
  if (a > c) {
    secondo = a
    terzo = c
  } else {
    secondo = c
    terzo = a
  }
} else {
  primo = c
  if (a > b) {
    secondo = a
    terzo = b
  } else {
    secondo = b
    terzo = a
  }
}

console.log(
  "Ordine dal più alto al più basso: " + primo + ", " + secondo + ", " + terzo
)
/* ESERCIZIO 8
  Crea un algoritmo per verificare che un valore fornito sia un numero oppure no 
  (suggerimento: cerca su un motore di ricerca "typeof").
*/
let object = "5"
if (typeof object === "number") {
  console.log(object + " è un numero")
} else {
  console.log(object + " non è un numero")
}

/* ESERCIZIO 9
  Crea un algoritmo per controllare se un numero fornito sia pari o dispari
   (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/

let number = 48
if (number % 2 === 0) {
  console.log(number + " è pari")
} else {
  console.log(number + " è dispari")
}

/* ESERCIZIO 10
  Modifica la logica del seguente algoritmo in modo che mostri in console
   il messaggio corretto in ogni circostanza.
  */

let val = 7
if (val < 5) {
  console.log("Meno di 5")
} else if (val < 10) {
  console.log("Meno di 10")
} else {
  console.log("Uguale a 10 o maggiore")
}

/* ESERCIZIO 11
  Fornito il seguente oggetto, scrivi del codice per aggiungere una proprietà "city",
   il cui valore sarà "Toronto".
*/

const me = {
  name: "John",
  lastName: "Doe",
  skills: ["javascript", "html", "css"],
}
me.city = "Toronto"

console.log(me)

/* ESERCIZIO 12
  Lavorando sempre sull'oggetto precedentemente fornito, 
  scrivi del codice per rimuovere la proprietà "lastName".
*/
delete me.lastName
console.log(me)

/* ESERCIZIO 13
  Lavorando sempre sull'oggetto precedentemente fornito,
   scrivi del codice per rimuovere l'ultimo elemento della proprietà "skills".
*/
me.skills.pop()
console.log(me)

/* ESERCIZIO 14
  Scrivi del codice per creare un array inizialmente vuoto. 
  Riempilo successivamente con i numeri da 1 a 10.
*/

let numeri = []
console.log(numeri)
numeri.push(1, 2, 3, 4, 5, 6, 7, 8, 9, 10)
console.log(numeri)

/* ESERCIZIO 15
  Scrivi del codice per sostituire l'ultimo elemento dell'array,
  ovvero il valore 10, con il valore 100.
*/

numeri.splice(9, 1, 100)
console.log(numeri)
