var submitElement=document.getElementById("submit");
var yourNumber = parseInt(document.getElementById("number").value);
var play = document.getElementsByName("play");
var selectedPlay;

for (var i = 0; i < play.length; i++) {
  if(play[i].checked){
    selectedPlay = play[i].value;
  }
}

console.log(yourNumber,play,selectedPlay);

submitElement.addEventListener("click",function(){

  //creo numero Random dell'Utente con funzione

  function randomNumber(min, max){
    var number = Math.floor(Math.random()*(max-min)+min);
    return number;
  }

  var computerNumber = randomNumber(1,6);
  console.log(computerNumber)

  var finalNumber= yourNumber + computerNumber;
  console.log(yourNumber,computerNumber,finalNumber);

  function isEven(number){
    return ((number % 2)==0);
  }

  var even=isEven(finalNumber);
  console.log(even);

  document.getElementById("stats").innerHTML = 'TUO NUMERO: '+ yourNumber + '   NUMERO DEL PC: ' + computerNumber + '    SOMMA: '
+ finalNumber;

  if(selectedPlay=='pari'){
    if(even==true){
      document.getElementById("result").innerHTML='VITTORIA';
    }else{
      document.getElementById("result").innerHTML='SCONFITTA';
    }
  } else {
    if(even==false){
      document.getElementById("result").innerHTML='VITTORIA';
    }else{
      document.getElementById("result").innerHTML='SCONFITTA';
    }
  }
});
