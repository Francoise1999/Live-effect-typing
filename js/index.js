const input = document.getElementById("message");
const result = document.querySelector(".resultat");

input.addEventListener("keyup", Fonction1);

function Fonction1(){
  var nb = 20;
  var Linput = input.value.length;
  result.innerHTML = 20 - Linput;

  if (result.innerHTML < 0){
    result.style.color = "red";
  } else {
    result.style.color = "black";
  }
}