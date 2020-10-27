// Acquisisco la mia variabile stringa sui cui devo lavorare per fare il confronto per la parola palindroma della stessa
var word = prompt("Inserire una parola:");
console.log(word);

//funzione per invertire l'ordine delle lettere di una stringa, alternativo a split reverese join
function invertString(string) {
  var reverseString ="";
  for (var i = (string.length-1); i >= 0; i--) {
    reverseString += string[i];
  }
  return reverseString;
}

var reverseWord=invertString(word);
console.log(reverseWord);



// riunisco in un unica funzione la costruzione di una stringa al contrario e il quesito booleano di palindromia della parola immessa come parametro
//ottego come risultato un booleano true in caso di palindromia e false in caso di non palindromia
function isPalindrome(string) {
  reverseString=string.split([""]);
  reverseString.reverse();
  reverseString=reverseString.join("");

  return (string == reverseString);
}

var palindromo=isPalindrome(word);

if(palindromo == 1){
  document.getElementById("text").innerHTML = "La parola inserita è palindroma."
} else {
  document.getElementById("text").innerHTML = "La parola inserita NON è palindroma."
}
