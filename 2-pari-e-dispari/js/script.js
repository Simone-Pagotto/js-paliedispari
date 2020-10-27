var submitElement=document.getElementById("submit");
submitElement.addEventListener("click",function(){
  //acquisisco gli input dell'utente
  var oddEven ;
  var checked = document.getElementById("radio").checked;
  var yourNumber = parseInt(document.getElementById("number").value);
  console.log(checked,yourNumber);

  if (checked == true){
    oddEven = 'pari';
  } else {
    oddEven = 'dispari';
  }
  console.log(oddEven);

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

  if(oddEven=='pari'){
    if(even==true){
      document.getElementById("result").innerHTML='VITTORIA';
    }else{
      document.getElementById("result").innerHTML='SCONFITTA';
    }
  } else {
    if(even==false){document.getElementById("result").innerHTML='VITTORIA';
    }else{
      document.getElementById("result").innerHTML='SCONFITTA';
    }
  }
});
