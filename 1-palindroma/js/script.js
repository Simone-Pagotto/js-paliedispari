// Acquisisco la mia variabile stringa sui cui devo lavorare per fare il confronto per la parola palindroma della stessa
var word = prompt("Inserire una parola:");
console.log(word);

// //trasformo la stringa in un array per procedere nella creazione della parola palindroma
// word=word.split([""]);
// console.log(word);
//
// //inverto l'ordine delle caselle dell array
// word.reverse();//inverte senza il bisogno di un nuovo aray vuoto, per questo non ci sono =
// console.log(word);
//
// //trasformare array in stringa
// word=word.join("");
// console.log(word);


// function wordReverse(stringa) {
//   stringa=stringa.split([""]);
//   stringa.reverse();
//   stringa=stringa.join("");
//   return stringa
// }
//
// word= wordReverse(word);
// console.log(word);

// riunisco in un unica funzione la costruzione di una stringa al contrario e il quesito booleano di palindromia della parola immessa come parametro
//ottego come risultato un booleano true in caso di palindromia e false in caso di non palindromia
function isPalindrome(string) {
  reverseString=string.split([""]);
  reverseString.reverse();
  reverseString=reverseString.join("");

  return (string == reverseString);
}

var palindromo=isPalindrome(word);
console.log(word);

if(palindromo == 1){
  document.getElementById("text").innerHTML = "La parola inserita è palindroma."
} else {
  document.getElementById("text").innerHTML = "La parola inserita NON è palindroma."
}
