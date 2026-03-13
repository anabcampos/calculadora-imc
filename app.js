const peso = document.getElementById("peso")
const altura = document.getElementById("altura")
const button = document.getElementById("button")
const resultado = document.getElementById("resultado")

function calculaMedia(){
  const peso = Number(peso.value)
  const altura = Number(altura.value)

 const imc= (peso+altura)/2

 if(imc< 18  ) {
resultado.innerHTML = `o seu imc foi${imc.toFixed(2)}.voce esta reprovado.`
 }else {
  resultado.innerHTML.HTML = `o seu imc foi${imc.toFixed(2)}. parabens,voce esta aprovado`
 }
 

  
}

button.addEventListener("click", calculadoraimc)