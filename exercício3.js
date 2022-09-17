//Dado o tamanho do raio de uma circunferência, calcular a área e o perímetro da mesma.

const raioCirc = Number(prompt("Qual é o tamanho do raio da circunferência ?"))

const areaCirculo = (3,14 * raioCirc * raioCirc)
const perimetroCirculo = (2 * 3,14 * raioCirc)

alert("A área da circunferência " + areaCirculo)
alert("O perímetro da circunferência " + perimetroCirculo)