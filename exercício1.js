//Dado o tamanho da base e da altura de um retângulo, calcular a sua área e o seu perímetro.

const baseRetangulo = Number(prompt ("Qual é base do retângulo ?"))
const alturaRetangulo = Number(prompt ("Qual é altura do retângulo ?"))

const areaRetangulo = baseRetangulo * alturaRetangulo
const perimetroRetangulo = baseRetangulo*2 + alturaRetangulo*2

alert("A base do retângulo é " + areaRetangulo)
alert("O perímetro do retângulo é " + perimetroRetangulo)